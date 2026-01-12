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
import { Trash2, Plus, Loader2, Pencil } from "lucide-react";

interface Course {
  id: string;
  name: string;
  subtitle: string | null;
  description: string;
  duration: string;
  lectures: number;
  certificate: string | null;
  category: string;
  popular: boolean;
  image_url: string | null;
  storage_path: string | null;
  display_order: number;
}

const categories = [
  { id: "mkcl", name: "MKCL" },
  { id: "typing", name: "Typing" },
  { id: "government", name: "Government" },
  { id: "skills", name: "Skills" },
];

const AdminCourses = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    description: "",
    duration: "",
    lectures: 0,
    certificate: "",
    category: "skills",
    popular: false,
    file: null as File | null,
  });

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      toast.error("Failed to fetch courses");
    } else {
      setCourses(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      subtitle: "",
      description: "",
      duration: "",
      lectures: 0,
      certificate: "",
      category: "skills",
      popular: false,
      file: null,
    });
    setEditingCourse(null);
  };

  const openAddDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  const openEditDialog = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      name: course.name,
      subtitle: course.subtitle || "",
      description: course.description,
      duration: course.duration,
      lectures: course.lectures,
      certificate: course.certificate || "",
      category: course.category,
      popular: course.popular,
      file: null,
    });
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.description || !formData.duration) {
      toast.error("Please fill required fields");
      return;
    }

    setUploading(true);

    try {
      let imageUrl = editingCourse?.image_url || null;
      let storagePath = editingCourse?.storage_path || null;

      if (formData.file) {
        // Delete old image if exists
        if (storagePath) {
          await supabase.storage.from("courses").remove([storagePath]);
        }

        const fileExt = formData.file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        storagePath = `courses/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("courses")
          .upload(storagePath, formData.file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("courses")
          .getPublicUrl(storagePath);
        imageUrl = urlData.publicUrl;
      }

      const courseData = {
        name: formData.name,
        subtitle: formData.subtitle || null,
        description: formData.description,
        duration: formData.duration,
        lectures: formData.lectures,
        certificate: formData.certificate || null,
        category: formData.category,
        popular: formData.popular,
        image_url: imageUrl,
        storage_path: storagePath,
      };

      if (editingCourse) {
        const { error } = await supabase
          .from("courses")
          .update(courseData)
          .eq("id", editingCourse.id);
        if (error) throw error;
        toast.success("Course updated!");
      } else {
        const { error } = await supabase.from("courses").insert(courseData);
        if (error) throw error;
        toast.success("Course added!");
      }

      setDialogOpen(false);
      resetForm();
      fetchCourses();
    } catch (error: any) {
      toast.error("Operation failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (course: Course) => {
    if (!confirm("Delete this course?")) return;

    try {
      if (course.storage_path) {
        await supabase.storage.from("courses").remove([course.storage_path]);
      }

      const { error } = await supabase.from("courses").delete().eq("id", course.id);
      if (error) throw error;

      toast.success("Course deleted!");
      fetchCourses();
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
            <h1 className="text-2xl sm:text-3xl font-bold">Courses</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Manage computer courses</p>
          </div>
          <Button onClick={openAddDialog} className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Course
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Courses ({courses.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : courses.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No courses yet. Add your first course above.
              </div>
            ) : (
              <div className="grid gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
                    {course.image_url && (
                      <img
                        src={course.image_url}
                        alt={course.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start gap-2 mb-2">
                        <h3 className="font-bold text-lg">{course.name}</h3>
                        {course.popular && (
                          <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full">
                            Popular
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                          {course.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{course.subtitle}</p>
                      <p className="text-sm line-clamp-2">{course.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Duration: {course.duration} | Lectures: {course.lectures}
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-2">
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(course)} className="flex-1 sm:flex-none">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(course)} className="flex-1 sm:flex-none">
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
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCourse ? "Edit Course" : "Add New Course"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Course Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., MS-CIT"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Input
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="e.g., Maharashtra State Certificate in IT"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description *</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Course description in Marathi/English"
                  rows={3}
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Duration *</Label>
                  <Input
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 3 महिने"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Lectures</Label>
                  <Input
                    type="number"
                    value={formData.lectures}
                    onChange={(e) => setFormData({ ...formData, lectures: parseInt(e.target.value) || 0 })}
                    placeholder="e.g., 48"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Certificate</Label>
                  <Input
                    value={formData.certificate}
                    onChange={(e) => setFormData({ ...formData, certificate: e.target.value })}
                    placeholder="e.g., MKCL Certified"
                  />
                </div>
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
                <div className="flex items-center gap-2 pt-6">
                  <Switch
                    checked={formData.popular}
                    onCheckedChange={(checked) => setFormData({ ...formData, popular: checked })}
                  />
                  <Label>Mark as Popular</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Course Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button onClick={handleSubmit} disabled={uploading} className="flex-1">
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    editingCourse ? "Update Course" : "Add Course"
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

export default AdminCourses;
