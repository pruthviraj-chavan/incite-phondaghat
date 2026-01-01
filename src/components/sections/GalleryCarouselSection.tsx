import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    studentName: "अमित शर्मा (MS-CIT Batch)",
    course: "MS-CIT Course",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    studentName: "Certificate Distribution",
    course: "Annual Function 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    studentName: "Typing Exam Session",
    course: "Marathi Typing Batch",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    studentName: "Computer Lab Session",
    course: "CCC Course Training",
  },
];

const GalleryCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].studentName}
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
            {galleryImages[currentIndex].studentName}
          </h3>
          <p className="text-white/80 mt-1">
            {galleryImages[currentIndex].course}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarouselSection;
