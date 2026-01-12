import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Plus, Loader2, Pencil, ExternalLink } from "lucide-react";

interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  icon_url: string | null;
  is_featured: boolean;
  display_order: number;
}

const categories = [
  { id: "general", name: "General" },
  { id: "writing", name: "Writing" },
  { id: "image", name: "Image Generation" },
  { id: "video", name: "Video" },
  { id: "coding", name: "Coding" },
  { id: "productivity", name: "Productivity" },
  { id: "education", name: "Education" },
];

const AdminAITools = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [tools, setTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTool, setEditingTool] = useState<AITool | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    category: "general",
    icon_url: "",
    is_featured: false,
  });

  const fetchTools = async () => {
    const { data, error } = await supabase
      .from("ai_tools")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      toast.error("Failed to fetch AI tools");
    } else {
      setTools(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTools();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      url: "",
      category: "general",
      icon_url: "",
      is_featured: false,
    });
    setEditingTool(null);
  };

  const openAddDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  const openEditDialog = (tool: AITool) => {
    setEditingTool(tool);
    setFormData({
      name: tool.name,
      description: tool.description,
      url: tool.url,
      category: tool.category,
      icon_url: tool.icon_url || "",
      is_featured: tool.is_featured,
    });
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.description || !formData.url) {
      toast.error("Please fill required fields");
      return;
    }

    setSaving(true);

    try {
      const toolData = {
        name: formData.name,
        description: formData.description,
        url: formData.url,
        category: formData.category,
        icon_url: formData.icon_url || null,
        is_featured: formData.is_featured,
      };

      if (editingTool) {
        const { error } = await supabase
          .from("ai_tools")
          .update(toolData)
          .eq("id", editingTool.id);
        if (error) throw error;
        toast.success("AI Tool updated!");
      } else {
        const { error } = await supabase.from("ai_tools").insert(toolData);
        if (error) throw error;
        toast.success("AI Tool added!");
      }

      setDialogOpen(false);
      resetForm();
      fetchTools();
    } catch (error: any) {
      toast.error("Operation failed: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (tool: AITool) => {
    if (!confirm("Delete this AI tool?")) return;

    try {
      const { error } = await supabase.from("ai_tools").delete().eq("id", tool.id);
      if (error) throw error;

      toast.success("AI Tool deleted!");
      fetchTools();
    } catch (error: any) {
      toast.error("Delete failed: " + error.message);
    }
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">AI Tools</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Manage AI tools directory</p>
          </div>
          <Button onClick={openAddDialog} className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add AI Tool
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All AI Tools ({tools.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : tools.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No AI tools yet. Add your first tool above.
              </div>
            ) : (
              <div className="grid gap-4">
                {tools.map((tool) => (
                  <div key={tool.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
                    {tool.icon_url && (
                      <img
                        src={tool.icon_url}
                        alt={tool.name}
                        className="w-16 h-16 object-contain rounded-lg bg-muted p-2"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start gap-2 mb-2">
                        <h3 className="font-bold text-lg">{tool.name}</h3>
                        {tool.is_featured && (
                          <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full">
                            Featured
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                      <a 
                        href={tool.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary flex items-center gap-1 mt-2 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {tool.url}
                      </a>
                    </div>
                    <div className="flex sm:flex-col gap-2">
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(tool)} className="flex-1 sm:flex-none">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(tool)} className="flex-1 sm:flex-none">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingTool ? "Edit AI Tool" : "Add New AI Tool"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Tool Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., ChatGPT"
                />
              </div>

              <div className="space-y-2">
                <Label>Description *</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the AI tool"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>URL *</Label>
                <Input
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://chat.openai.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Icon URL</Label>
                  <Input
                    value={formData.icon_url}
                    onChange={(e) => setFormData({ ...formData, icon_url: e.target.value })}
                    placeholder="https://example.com/icon.png"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                />
                <Label>Mark as Featured</Label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button onClick={handleSubmit} disabled={saving} className="flex-1">
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    editingTool ? "Update Tool" : "Add Tool"
                  )}
                </Button>
                <Button variant="outline" onClick={() => setDialogOpen(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminAITools;
