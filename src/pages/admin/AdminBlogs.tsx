import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Plus, Loader2, Edit, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string | null;
  storage_path: string | null;
  read_time: string;
  meta_description: string | null;
  keywords: string[] | null;
  created_at: string;
}

const AdminBlogs = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    read_time: "5 min read",
    meta_description: "",
    keywords: "",
    file: null as File | null,
  });

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch blogs");
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      read_time: "5 min read",
      meta_description: "",
      keywords: "",
      file: null,
    });
    setEditingBlog(null);
  };

  const openAddDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  const openEditDialog = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      read_time: blog.read_time,
      meta_description: blog.meta_description || "",
      keywords: blog.keywords?.join(", ") || "",
      file: null,
    });
    setDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error("Please fill title, excerpt, and content");
      return;
    }

    setUploading(true);

    try {
      let imageUrl = editingBlog?.image_url || null;
      let storagePath = editingBlog?.storage_path || null;

      // Upload new image if provided
      if (formData.file) {
        const fileExt = formData.file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        storagePath = `blogs/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("blogs")
          .upload(storagePath, formData.file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("blogs")
          .getPublicUrl(storagePath);

        imageUrl = urlData.publicUrl;
      }

      const slug = formData.slug || generateSlug(formData.title);
      const keywordsArray = formData.keywords
        ? formData.keywords.split(",").map((k) => k.trim())
        : [];

      const blogData = {
        title: formData.title,
        slug,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category || "General",
        read_time: formData.read_time,
        meta_description: formData.meta_description || null,
        keywords: keywordsArray.length > 0 ? keywordsArray : null,
        image_url: imageUrl,
        storage_path: storagePath,
      };

      if (editingBlog) {
        const { error } = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", editingBlog.id);

        if (error) throw error;
        toast.success("Blog updated!");
      } else {
        const { error } = await supabase.from("blogs").insert(blogData);

        if (error) throw error;
        toast.success("Blog created!");
      }

      setDialogOpen(false);
      resetForm();
      fetchBlogs();
    } catch (error: any) {
      toast.error("Failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (blog: Blog) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      if (blog.storage_path) {
        await supabase.storage.from("blogs").remove([blog.storage_path]);
      }

      const { error } = await supabase.from("blogs").delete().eq("id", blog.id);

      if (error) throw error;

      toast.success("Blog deleted!");
      fetchBlogs();
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Blogs</h1>
            <p className="text-muted-foreground">Manage blog posts</p>
          </div>
          <Button onClick={openAddDialog}>
            <Plus className="w-4 h-4 mr-2" />
            Add Blog
          </Button>
        </div>

        {/* Blogs Grid */}
        <Card>
          <CardHeader>
            <CardTitle>All Blogs ({blogs.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No blogs yet. Create your first blog above.
              </div>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex items-center gap-4 p-4 border rounded-lg"
                  >
                    {blog.image_url && (
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{blog.title}</h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {blog.category} • {blog.read_time}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(blog)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(blog)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add/Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingBlog ? "Edit Blog" : "Add New Blog"}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title *</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: e.target.value,
                        slug: generateSlug(e.target.value),
                      })
                    }
                    placeholder="Blog title"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    placeholder="url-friendly-slug"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    placeholder="e.g., MSCIT, Tally"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Read Time</Label>
                  <Input
                    value={formData.read_time}
                    onChange={(e) =>
                      setFormData({ ...formData, read_time: e.target.value })
                    }
                    placeholder="e.g., 5 min read"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Excerpt *</Label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  placeholder="Short description for cards"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Content * (Supports Markdown)</Label>
                <Textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Full blog content..."
                  rows={8}
                />
              </div>

              <div className="space-y-2">
                <Label>Meta Description</Label>
                <Input
                  value={formData.meta_description}
                  onChange={(e) =>
                    setFormData({ ...formData, meta_description: e.target.value })
                  }
                  placeholder="SEO description"
                />
              </div>

              <div className="space-y-2">
                <Label>Keywords (comma separated)</Label>
                <Input
                  value={formData.keywords}
                  onChange={(e) =>
                    setFormData({ ...formData, keywords: e.target.value })
                  }
                  placeholder="mscit, phondaghat, computer"
                />
              </div>

              <div className="space-y-2">
                <Label>Image</Label>
                <Input type="file" accept="image/*" onChange={handleFileChange} />
                {editingBlog?.image_url && !formData.file && (
                  <p className="text-xs text-muted-foreground">
                    Current image will be kept if no new image is selected.
                  </p>
                )}
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={uploading}>
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : editingBlog ? (
                    "Update Blog"
                  ) : (
                    "Create Blog"
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminBlogs;
