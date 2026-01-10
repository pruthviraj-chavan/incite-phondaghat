import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Upload, Users, Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
  storage_path: string | null;
  display_order: number;
  is_leadership: boolean;
}

const AdminTeam = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    display_order: 0,
    is_leadership: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ["team-members"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data as TeamMember[];
    },
  });

  const addMemberMutation = useMutation({
    mutationFn: async () => {
      if (!selectedFile) {
        throw new Error("Please select an image");
      }

      setUploading(true);
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("team")
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("team")
        .getPublicUrl(filePath);

      const { error } = await supabase.from("team_members").insert({
        name: newMember.name,
        role: newMember.role,
        image_url: publicUrl,
        storage_path: filePath,
        display_order: newMember.display_order,
        is_leadership: newMember.is_leadership,
      });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members"] });
      setNewMember({ name: "", role: "", display_order: 0, is_leadership: false });
      setSelectedFile(null);
      setUploading(false);
      toast({ title: "Team member added successfully!" });
    },
    onError: (error: Error) => {
      setUploading(false);
      toast({ title: "Error adding team member", description: error.message, variant: "destructive" });
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: async (member: TeamMember) => {
      if (member.storage_path) {
        await supabase.storage.from("team").remove([member.storage_path]);
      }
      const { error } = await supabase.from("team_members").delete().eq("id", member.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members"] });
      toast({ title: "Team member deleted successfully!" });
    },
    onError: (error: Error) => {
      toast({ title: "Error deleting team member", description: error.message, variant: "destructive" });
    },
  });

  const leadershipMembers = teamMembers?.filter((m) => m.is_leadership) || [];
  const regularMembers = teamMembers?.filter((m) => !m.is_leadership) || [];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Team</h1>
          <p className="text-muted-foreground">Add and manage team members and leadership</p>
        </div>

        {/* Add New Member Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Team Member
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="Enter name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  placeholder="e.g., Computer Trainer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input
                  id="order"
                  type="number"
                  value={newMember.display_order}
                  onChange={(e) => setNewMember({ ...newMember, display_order: parseInt(e.target.value) || 0 })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Photo</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                />
              </div>
              <div className="flex items-center space-x-2 md:col-span-2">
                <Switch
                  id="leadership"
                  checked={newMember.is_leadership}
                  onCheckedChange={(checked) => setNewMember({ ...newMember, is_leadership: checked })}
                />
                <Label htmlFor="leadership">Show in Leadership Section</Label>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Button
                  onClick={() => addMemberMutation.mutate()}
                  disabled={!newMember.name || !newMember.role || !selectedFile || uploading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploading ? "Uploading..." : "Add Member"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-secondary" />
              Leadership ({leadershipMembers.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : leadershipMembers.length === 0 ? (
              <p className="text-muted-foreground">No leadership members added yet.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {leadershipMembers.map((member) => (
                  <div key={member.id} className="relative group">
                    <div className="aspect-square rounded-full overflow-hidden bg-muted">
                      {member.image_url ? (
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteMemberMutation.mutate(member)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Regular Team Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Team Members ({regularMembers.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : regularMembers.length === 0 ? (
              <p className="text-muted-foreground">No team members added yet.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {regularMembers.map((member) => (
                  <div key={member.id} className="relative group">
                    <div className="aspect-square rounded-full overflow-hidden bg-muted">
                      {member.image_url ? (
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteMemberMutation.mutate(member)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminTeam;
