import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-classroom.jpg";

const galleryCategories = [
  {
    id: "classroom",
    name: "Classroom Training",
    nameMarathi: "वर्ग प्रशिक्षण",
  },
  {
    id: "exams",
    name: "Exam Sessions",
    nameMarathi: "परीक्षा सत्र",
  },
  {
    id: "certificates",
    name: "Certificate Distribution",
    nameMarathi: "प्रमाणपत्र वितरण",
  },
  {
    id: "workshops",
    name: "Workshops",
    nameMarathi: "कार्यशाळा",
  },
];

// Using the hero image as placeholder for all gallery items
const galleryImages = [
  { id: 1, category: "classroom", image: heroImage, alt: "Students in computer classroom" },
  { id: 2, category: "classroom", image: heroImage, alt: "Practical training session" },
  { id: 3, category: "classroom", image: heroImage, alt: "Theory class in progress" },
  { id: 4, category: "exams", image: heroImage, alt: "Online examination" },
  { id: 5, category: "exams", image: heroImage, alt: "Typing test session" },
  { id: 6, category: "certificates", image: heroImage, alt: "Certificate ceremony" },
  { id: 7, category: "certificates", image: heroImage, alt: "Award distribution" },
  { id: 8, category: "workshops", image: heroImage, alt: "Special workshop" },
  { id: 9, category: "workshops", image: heroImage, alt: "Guest lecture" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="container-main relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Photo <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              आमच्या संस्थेतील विविध उपक्रमांचे फोटो
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              All Photos
            </button>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl card-elevated">
                  <img
                    src={image.image}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                      <span className="text-foreground text-2xl">+</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No photos in this category yet.</p>
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

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground text-sm">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
