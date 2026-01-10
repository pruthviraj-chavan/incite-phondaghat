import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface GalleryImage {
  id: string;
  image_url: string;
  alt_text: string;
  title: string | null;
  description: string | null;
}

const fallbackImages = [
  {
    id: "1",
    image_url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    alt_text: "अमित शर्मा (MS-CIT Batch)",
    title: "अमित शर्मा (MS-CIT Batch)",
    description: "MS-CIT Course",
  },
  {
    id: "2",
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    alt_text: "Certificate Distribution",
    title: "Certificate Distribution",
    description: "Annual Function 2024",
  },
  {
    id: "3",
    image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    alt_text: "Typing Exam Session",
    title: "Typing Exam Session",
    description: "Marathi Typing Batch",
  },
  {
    id: "4",
    image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    alt_text: "Computer Lab Session",
    title: "Computer Lab Session",
    description: "CCC Course Training",
  },
];

const GalleryCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: galleryImages } = useQuery({
    queryKey: ["carousel-gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      if (error) throw error;
      return data as GalleryImage[];
    },
  });

  const images = galleryImages && galleryImages.length > 0 ? galleryImages : fallbackImages;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const currentImage = images[currentIndex];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Dark Forest Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-12 left-20 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-secondary opacity-80" />
      <div className="absolute top-20 right-24 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-primary opacity-60" />
      <div className="absolute top-1/3 left-12 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-secondary opacity-60" />
      <div className="absolute top-1/4 left-16 w-5 h-5 border-2 border-destructive/60" />
      <div className="absolute bottom-1/4 right-16 w-5 h-5 border-2 border-destructive/50" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            <span className="text-secondary">Gallery of</span>{" "}
            <span className="text-white">Smiles,</span>{" "}
            <span className="text-white">Success &</span>
            <br />
            <span className="text-white">Learning</span>{" "}
            <span className="text-destructive">Adventures</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 md:left-12 z-20 w-12 h-12 rounded-full bg-white hover:bg-white/90 text-foreground shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Stacked Polaroid Effect */}
          <div className="relative w-[320px] h-[280px] md:w-[500px] md:h-[400px]">
            {/* Background Cards (Stack Effect) */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform rotate-6 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform -rotate-3 -translate-x-2 translate-y-2" />
            
            {/* Main Image Card */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-2xl p-3 transform rotate-1">
              <img
                src={currentImage.image_url}
                alt={currentImage.alt_text}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 md:right-12 z-20 w-12 h-12 rounded-full bg-white hover:bg-white/90 text-foreground shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-secondary uppercase tracking-wide">
            {currentImage.title || currentImage.alt_text}
          </h3>
          <p className="text-white/80 mt-1">
            {currentImage.description || ""}
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-secondary w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCarouselSection;
