import { useState, useRef, lazy, Suspense } from "react";
import { X, ChevronLeft, ChevronRight, Play, ArrowLeft, ArrowRight, Youtube } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-classroom.jpg";

const galleryCategories = [
  { id: "all", name: "All Photos", nameMarathi: "सर्व फोटो" },
  { id: "classroom", name: "Classroom", nameMarathi: "वर्ग प्रशिक्षण" },
  { id: "exams", name: "Exams", nameMarathi: "परीक्षा सत्र" },
  { id: "certificates", name: "Certificates", nameMarathi: "प्रमाणपत्र वितरण" },
  { id: "workshops", name: "Workshops", nameMarathi: "कार्यशाळा" },
];

const galleryImages = [
  { id: 1, category: "classroom", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600", alt: "Students in computer classroom" },
  { id: 2, category: "classroom", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600", alt: "Practical training session" },
  { id: 3, category: "classroom", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", alt: "Theory class in progress" },
  { id: 4, category: "exams", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600", alt: "Online examination" },
  { id: 5, category: "exams", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", alt: "Typing test session" },
  { id: 6, category: "certificates", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600", alt: "Certificate ceremony" },
  { id: 7, category: "certificates", image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600", alt: "Award distribution" },
  { id: 8, category: "workshops", image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=600", alt: "Special workshop" },
  { id: 9, category: "workshops", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", alt: "Guest lecture" },
];

// TODO: Replace these with your actual YouTube video IDs
const videoTestimonials = [
  { 
    id: 1, 
    name: "राहुल पाटील", 
    role: "MS-CIT Student",
    // Replace with actual YouTube video ID
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
  },
  { 
    id: 2, 
    name: "प्रिया शिंदे", 
    role: "Typing Student",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face"
  },
  { 
    id: 3, 
    name: "सुनील जाधव", 
    role: "CCC Student",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
  },
  { 
    id: 4, 
    name: "नेहा देशमुख", 
    role: "Tally Student",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face"
  },
  { 
    id: 5, 
    name: "अमित कुलकर्णी", 
    role: "GCC-TBC Student",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
  },
];

// TODO: Add your YouTube video IDs here for Institute Videos section
const instituteVideos = [
  {
    id: 1,
    title: "Institute Tour",
    description: "आमच्या संस्थेची व्हर्च्युअल टूर",
    // Replace with actual YouTube video ID
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Lab Facility",
    description: "आधुनिक कॉम्प्युटर लॅब",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Training Session",
    description: "प्रशिक्षण सत्राचे व्हिडिओ",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const scrollAmount = 320;
      testimonialRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <SEO 
        title="Photo & Video Gallery"
        description="View photos and videos from Incite Computer Phondaghat. See our modern computer lab, training sessions, certificate ceremonies and student success stories from Phondaghat, Sindhudurg."
        keywords="Computer Institute Gallery Phondaghat, MKCL Center Photos, Student Photos Sindhudurg, Computer Lab Phonda"
        canonical="/gallery"
      />
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container-main relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up">
              Photo <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
              आमच्या संस्थेतील विविध उपक्रमांचे फोटो. Experience our vibrant learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials Carousel - Key Takeaways */}
      <section className="py-16 bg-muted/50">
        <div className="container-main px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
              विद्यार्थ्यांचे यशोगाथा
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              यशस्वी विद्यार्थ्यांचे
              <span className="block text-secondary">अनुभव व्हिडिओ</span>
            </h2>
            {/* TODO: Replace YouTube video IDs in videoTestimonials array above */}
          </div>

          <div className="relative">
            {/* Scroll Buttons */}
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors -ml-4 hidden md:flex"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors -mr-4 hidden md:flex"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Testimonials Row */}
            <div 
              ref={testimonialRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {videoTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="relative flex-shrink-0 w-64 md:w-80 rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={() => setActiveVideoId(testimonial.youtubeId)}
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-primary-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                  </div>
                  
                  {/* YouTube Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {videoTestimonials.map((_, dot) => (
                <button
                  key={dot}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    dot === 0 ? 'bg-secondary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institute Videos Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
              आमचे व्हिडिओ
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              संस्थेचे <span className="text-gradient">व्हिडिओ गॅलरी</span>
            </h2>
            {/* TODO: Replace YouTube video IDs in instituteVideos array above */}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {instituteVideos.map((video) => (
              <div 
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setActiveVideoId(video.youtubeId)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-muted aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Youtube className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-foreground">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Institute <span className="text-gradient">Gallery</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Masonry-style Image Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image.image}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index % 3 === 0 ? 'h-72' : index % 3 === 1 ? 'h-56' : 'h-64'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <span className="text-foreground text-3xl font-light">+</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={filteredImages[currentImageIndex]?.image}
            alt={filteredImages[currentImageIndex]?.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground text-sm bg-foreground/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* YouTube Video Modal */}
      {activeVideoId && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <button
            onClick={() => setActiveVideoId(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-2xl"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
