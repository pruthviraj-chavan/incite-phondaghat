import { Link } from "react-router-dom";
import { 
  Award, 
  ArrowRight,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-classroom.jpg";
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Incite Computer Classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>

        {/* Content */}
        <div className="container-main relative z-10 px-4 py-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">
                महाराष्ट्र शासन मान्यताप्राप्त
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Incite Computer
              <span className="block text-secondary">Phondaghat</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
              महाराष्ट्र शासन व MKCL मान्यताप्राप्त संगणक प्रशिक्षण केंद्र
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              आधुनिक संगणक शिक्षण | सरकारी व खासगी प्रमाणपत्र अभ्यासक्रम | Experienced Trainers
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button variant="hero" size="lg">
                  View Courses
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission Section - Image 1 */}
      <MissionSection />

      {/* Team Section - Image 2 */}
      <TeamSection />

      {/* Gallery Carousel Section - Image 3 */}
      <GalleryCarouselSection />

      {/* Testimonials Section - Image 4 */}
      <TestimonialsSection />

      {/* Course Highlight Section - Image 6 */}
      <CourseHighlightSection />

      {/* Curriculum Section - Image 7 */}
      <CurriculumSection />

      {/* Community Section - Image 8 */}
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
