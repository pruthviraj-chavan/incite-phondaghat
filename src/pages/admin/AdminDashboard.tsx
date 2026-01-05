import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Image, Video, FileText, Users } from "lucide-react";

const AdminDashboard = () => {
  const { isAdmin, loading } = useAuth();
  const [stats, setStats] = useState({
    galleryImages: 0,
    instituteVideos: 0,
    studentTestimonials: 0,
    blogs: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [galleryRes, videosRes, testimonialRes, blogRes] = await Promise.all([
        supabase.from("gallery_images").select("id", { count: "exact" }),
        supabase.from("institute_videos").select("id", { count: "exact" }),
        supabase.from("student_testimonials").select("id", { count: "exact" }),
        supabase.from("blogs").select("id", { count: "exact" }),
      ]);

      setStats({
        galleryImages: galleryRes.count || 0,
        instituteVideos: videosRes.count || 0,
        studentTestimonials: testimonialRes.count || 0,
        blogs: blogRes.count || 0,
      });
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to Admin Panel</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
              <Image className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.galleryImages}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Institute Videos</CardTitle>
              <Video className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.instituteVideos}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Student Testimonials</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.studentTestimonials}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.blogs}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
