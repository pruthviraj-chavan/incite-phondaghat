import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import TeamSection from "@/components/sections/TeamSection";
import GalleryCarouselSection from "@/components/sections/GalleryCarouselSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CourseHighlightSection from "@/components/sections/CourseHighlightSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import CommunitySection from "@/components/sections/CommunitySection";

const Index = () => {
  return (
    <Layout>
      {/* Advanced Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Team Section */}
      <TeamSection />

      {/* Gallery Carousel Section */}
      <GalleryCarouselSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Course Highlight Section */}
      <CourseHighlightSection />

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* Community Section */}
      <CommunitySection />

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              आजच प्रवेश घ्या!
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Bright Future साठी योग्य मार्ग निवडा. संपर्क साधा आणि आपल्या करिअरची सुरुवात करा.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5" />
                  Contact Now
                </Button>
              </Link>
              <a href="tel:+919999999999">
                <Button variant="heroOutline" size="lg">
                  Call: +91 99999 99999
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
