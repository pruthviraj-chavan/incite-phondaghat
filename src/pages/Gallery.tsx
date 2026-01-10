import { useState, useRef, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowLeft,
  ArrowRight,
  Youtube,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

/* ---------------------------------------
   ✅ YOUTUBE URL → VIDEO ID HANDLER
---------------------------------------- */
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;

  // Shorts
  if (url.includes("/shorts/")) {
    return url.split("/shorts/")[1].split("?")[0];
  }

  // Normal watch?v=
  const match = url.match(/[?&]v=([^&]+)/);
  if (match && match[1]) return match[1];

  // youtu.be
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1].split("?")[0];
  }

  return null;
};

/* ---------------------------------------
   CATEGORY DATA
---------------------------------------- */
const galleryCategories = [
  { id: "all", name: "All Photos" },
  { id: "classroom", name: "Classroom" },
  { id: "exams", name: "Exams" },
  { id: "certificates", name: "Certificates" },
  { id: "workshops", name: "Workshops" },
];

/* ---------------------------------------
   STATIC FALLBACK DATA
---------------------------------------- */
const staticGalleryImages = [
  {
    id: "1",
    category: "classroom",
    image_url:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
    alt_text: "Students in computer classroom",
  },
];

const staticVideoTestimonials = [
  {
    id: "1",
    student_name: "राहुल पाटील",
    role: "MS-CIT Student",
    youtube_url: "https://www.youtube.com/shorts/-060-d6DW8k",
    thumbnail_url: null,
  },
  {
    id: "2",
    student_name: "प्रिया शिंदे",
    role: "Typing Student",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail_url: null,
  },
];

const staticInstituteVideos = [
  {
    id: "1",
    title: "Institute Tour",
    description: "Virtual tour of institute",
    youtube_url: "https://youtu.be/dQw4w9WgXcQ",
  },
];

/* ---------------------------------------
   TYPES
---------------------------------------- */
interface GalleryImage {
  id: string;
  category: string;
  image_url: string;
  alt_text: string;
}

interface VideoTestimonial {
  id: string;
  student_name: string;
  role: string | null;
  youtube_url: string;
  thumbnail_url: string | null;
}

interface InstituteVideo {
  id: string;
  title: string;
  description: string | null;
  youtube_url: string;
}

/* ---------------------------------------
   MAIN COMPONENT
---------------------------------------- */
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const testimonialRef = useRef<HTMLDivElement>(null);

  const [galleryImages, setGalleryImages] =
    useState<GalleryImage[]>(staticGalleryImages);
  const [videoTestimonials, setVideoTestimonials] =
    useState<VideoTestimonial[]>(staticVideoTestimonials);
  const [instituteVideos, setInstituteVideos] =
    useState<InstituteVideo[]>(staticInstituteVideos);

  /* ---------------------------------------
     FETCH FROM SUPABASE (OPTIONAL)
  ---------------------------------------- */
  useEffect(() => {
    const fetchData = async () => {
      const [imagesRes, testimonialsRes, videosRes] = await Promise.all([
        supabase.from("gallery_images").select("*"),
        supabase.from("student_testimonials").select("*"),
        supabase.from("institute_videos").select("*"),
      ]);

      if (imagesRes.data?.length) setGalleryImages(imagesRes.data);
      if (testimonialsRes.data?.length)
        setVideoTestimonials(testimonialsRes.data);
      if (videosRes.data?.length) setInstituteVideos(videosRes.data);
    };

    fetchData();
  }, []);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  /* ---------------------------------------
     RENDER
  ---------------------------------------- */
  return (
    <Layout>
      <SEO title="Gallery" description="Photo and video gallery" />

      {/* VIDEO TESTIMONIALS */}
      <section className="py-16 bg-muted/40">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-center mb-8">
            Student Video Testimonials
          </h2>

          <div
            ref={testimonialRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
          >
            {videoTestimonials.map((t) => {
              const videoId = getYouTubeVideoId(t.youtube_url);
              if (!videoId) return null;

              return (
                <div
                  key={t.id}
                  className="relative w-72 shrink-0 cursor-pointer"
                  onClick={() => setActiveVideoId(videoId)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    className="rounded-xl w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-14 h-14 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTITUTE VIDEOS */}
      <section className="py-16">
        <div className="container-main grid md:grid-cols-3 gap-6">
          {instituteVideos.map((v) => {
            const videoId = getYouTubeVideoId(v.youtube_url);
            if (!videoId) return null;

            return (
              <div
                key={v.id}
                className="cursor-pointer"
                onClick={() => setActiveVideoId(videoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  className="rounded-xl aspect-video object-cover"
                />
                <h3 className="mt-2 font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* YOUTUBE MODAL */}
      {activeVideoId && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActiveVideoId(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setActiveVideoId(null)}
          >
            <X />
          </button>

          <iframe
            className="w-full max-w-4xl aspect-video rounded-xl"
            src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
            allowFullScreen
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
