import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Plus, Video, Users } from "lucide-react";

interface InstituteVideo {
  id: string;
  title: string;
  description: string | null;
  youtube_id: string;
}

interface StudentTestimonial {
  id: string;
  student_name: string;
  role: string | null;
  youtube_id: string;
  thumbnail_url: string | null;
}

const extractYoutubeId = (url: string): string => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : url;
};

const AdminVideos = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [instituteVideos, setInstituteVideos] = useState<InstituteVideo[]>([]);
  const [testimonials, setTestimonials] = useState<StudentTestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const [newVideo, setNewVideo] = useState({ title: "", description: "", youtube_url: "" });
  const [newTestimonial, setNewTestimonial] = useState({ student_name: "", role: "", youtube_url: "", thumbnail_url: "" });

  const fetchData = async () => {
    const [videosRes, testimonialRes] = await Promise.all([
      supabase.from("institute_videos").select("*").order("created_at", { ascending: false }),
      supabase.from("student_testimonials").select("*").order("created_at", { ascending: false }),
    ]);

    if (videosRes.data) setInstituteVideos(videosRes.data);
    if (testimonialRes.data) setTestimonials(testimonialRes.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddVideo = async () => {
    if (!newVideo.title || !newVideo.youtube_url) {
      toast.error("Please fill title and YouTube URL");
      return;
    }

    const youtubeId = extractYoutubeId(newVideo.youtube_url);

    const { error } = await supabase.from("institute_videos").insert({
      title: newVideo.title,
      description: newVideo.description || null,
      youtube_id: youtubeId,
    });

    if (error) {
      toast.error("Failed to add video: " + error.message);
    } else {
      toast.success("Video added!");
      setNewVideo({ title: "", description: "", youtube_url: "" });
      fetchData();
    }
  };

  const handleDeleteVideo = async (id: string) => {
    if (!confirm("Delete this video?")) return;

    const { error } = await supabase.from("institute_videos").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete");
    } else {
      toast.success("Video deleted!");
      fetchData();
    }
  };

  const handleAddTestimonial = async () => {
    if (!newTestimonial.student_name || !newTestimonial.youtube_url) {
      toast.error("Please fill student name and YouTube URL");
      return;
    }

    const youtubeId = extractYoutubeId(newTestimonial.youtube_url);

    const { error } = await supabase.from("student_testimonials").insert({
      student_name: newTestimonial.student_name,
      role: newTestimonial.role || null,
      youtube_id: youtubeId,
      thumbnail_url: newTestimonial.thumbnail_url || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
    });

    if (error) {
      toast.error("Failed to add testimonial: " + error.message);
    } else {
      toast.success("Testimonial added!");
      setNewTestimonial({ student_name: "", role: "", youtube_url: "", thumbnail_url: "" });
      fetchData();
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;

    const { error } = await supabase.from("student_testimonials").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete");
    } else {
      toast.success("Testimonial deleted!");
      fetchData();
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
        <div>
          <h1 className="text-3xl font-bold">Videos</h1>
          <p className="text-muted-foreground">Manage YouTube videos for gallery</p>
        </div>

        <Tabs defaultValue="institute">
          <TabsList>
            <TabsTrigger value="institute" className="gap-2">
              <Video className="w-4 h-4" />
              Institute Videos
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="gap-2">
              <Users className="w-4 h-4" />
              Student Testimonials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="institute" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Institute Video</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={newVideo.title}
                      onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                      placeholder="e.g., Institute Tour"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>YouTube URL</Label>
                    <Input
                      value={newVideo.youtube_url}
                      onChange={(e) => setNewVideo({ ...newVideo, youtube_url: e.target.value })}
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description (Optional)</Label>
                  <Input
                    value={newVideo.description}
                    onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                    placeholder="e.g., आमच्या संस्थेची व्हर्च्युअल टूर"
                  />
                </div>
                <Button onClick={handleAddVideo}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Video
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Institute Videos ({instituteVideos.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : instituteVideos.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No videos yet.</div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {instituteVideos.map((video) => (
                      <div key={video.id} className="relative group">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteVideo(video.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="font-medium mt-1 text-sm">{video.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{video.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Student Testimonial</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Student Name</Label>
                    <Input
                      value={newTestimonial.student_name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, student_name: e.target.value })}
                      placeholder="e.g., राहुल पाटील"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role / Course (Optional)</Label>
                    <Input
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                      placeholder="e.g., MS-CIT Student"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>YouTube URL</Label>
                    <Input
                      value={newTestimonial.youtube_url}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, youtube_url: e.target.value })}
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Thumbnail URL (Optional)</Label>
                    <Input
                      value={newTestimonial.thumbnail_url}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, thumbnail_url: e.target.value })}
                      placeholder="Leave empty to use YouTube thumbnail"
                    />
                  </div>
                </div>
                <Button onClick={handleAddTestimonial}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Testimonial
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Student Testimonials ({testimonials.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : testimonials.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No testimonials yet.</div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {testimonials.map((t) => (
                      <div key={t.id} className="relative group">
                        <img
                          src={t.thumbnail_url || `https://img.youtube.com/vi/${t.youtube_id}/mqdefault.jpg`}
                          alt={t.student_name}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteTestimonial(t.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="font-medium mt-1 text-sm">{t.student_name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminVideos;
