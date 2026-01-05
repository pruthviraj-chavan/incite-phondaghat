import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Plus, Loader2 } from "lucide-react";

interface GalleryImage {
  id: string;
  category: string;
  image_url: string;
  alt_text: string;
  storage_path: string | null;
}

const categories = [
  { id: "all", name: "All Photos" },
  { id: "classroom", name: "Classroom" },
  { id: "exams", name: "Exams" },
  { id: "certificates", name: "Certificates" },
  { id: "workshops", name: "Workshops" },
];

const AdminGallery = () => {
  const { isAdmin, loading: authLoading } = useAuth();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [newImage, setNewImage] = useState({
    category: "classroom",
    alt_text: "",
    file: null as File | null,
  });

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch images");
    } else {
      setImages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage({ ...newImage, file: e.target.files[0] });
    }
  };

  const handleUpload = async () => {
    if (!newImage.file || !newImage.alt_text) {
      toast.error("Please select a file and add alt text");
      return;
    }

    setUploading(true);

    try {
      // Upload to storage
      const fileExt = newImage.file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const storagePath = `gallery/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(storagePath, newImage.file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("gallery")
        .getPublicUrl(storagePath);

      // Insert to database
      const { error: insertError } = await supabase
        .from("gallery_images")
        .insert({
          category: newImage.category,
          image_url: urlData.publicUrl,
          alt_text: newImage.alt_text,
          storage_path: storagePath,
        });

      if (insertError) throw insertError;

      toast.success("Image uploaded successfully!");
      setNewImage({ category: "classroom", alt_text: "", file: null });
      fetchImages();
    } catch (error: any) {
      toast.error("Upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (image: GalleryImage) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      // Delete from storage if path exists
      if (image.storage_path) {
        await supabase.storage.from("gallery").remove([image.storage_path]);
      }

      // Delete from database
      const { error } = await supabase
        .from("gallery_images")
        .delete()
        .eq("id", image.id);

      if (error) throw error;

      toast.success("Image deleted!");
      fetchImages();
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
        <div>
          <h1 className="text-3xl font-bold">Gallery Images</h1>
          <p className="text-muted-foreground">Manage institute gallery photos</p>
        </div>

        {/* Upload Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={newImage.category}
                  onValueChange={(value) => setNewImage({ ...newImage, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.filter(c => c.id !== "all").map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Alt Text / Description</Label>
                <Input
                  value={newImage.alt_text}
                  onChange={(e) => setNewImage({ ...newImage, alt_text: e.target.value })}
                  placeholder="e.g., Students in computer lab"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Image File</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <Button onClick={handleUpload} disabled={uploading}>
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Image
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Images Grid */}
        <Card>
          <CardHeader>
            <CardTitle>All Images ({images.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : images.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No images yet. Upload your first image above.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.image_url}
                      alt={image.alt_text}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(image)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 truncate">{image.alt_text}</p>
                    <span className="text-xs text-primary">{image.category}</span>
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

export default AdminGallery;
