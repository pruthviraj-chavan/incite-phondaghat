import { Link } from "react-router-dom";
import { 
  Monitor, 
  Keyboard, 
  GraduationCap, 
  FileCheck, 
  BookOpen,
  Briefcase,
  ArrowRight,
  Clock,
  Award,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const courseCategories = [
  {
    title: "MKCL Courses",
    description: "Maharashtra Knowledge Corporation Limited approved courses",
    icon: Monitor,
    courses: [
      {
        name: "MS-CIT",
        subtitle: "Maharashtra State Certificate in IT",
        description: "सर्वात लोकप्रिय संगणक अभ्यासक्रम. MS Office, Internet, Email, Windows operating system यांचे संपूर्ण प्रशिक्षण.",
        duration: "3 महिने",
        certificate: "MKCL Certified",
      },
      {
        name: "KLiC Courses",
        subtitle: "Knowledge Literacy Certification",
        description: "विविध क्षेत्रांसाठी specialized computer courses. Tally, DTP, Web Designing आणि इतर.",
        duration: "2-6 महिने",
        certificate: "MKCL Certified",
      },
    ],
  },
  {
    title: "Typing Courses",
    description: "Government exam oriented typing courses",
    icon: Keyboard,
    courses: [
      {
        name: "Marathi Typing",
        subtitle: "30/40 WPM",
        description: "सरकारी नोकऱ्यांसाठी आवश्यक मराठी टायपिंग. ISM/Shree Lipi font वर प्रशिक्षण.",
        duration: "2-3 महिने",
        certificate: "Govt. Recognized",
      },
      {
        name: "English Typing",
        subtitle: "30/40 WPM",
        description: "English typing with proper finger placement. Speed building और accuracy improvement.",
        duration: "2-3 महिने",
        certificate: "Govt. Recognized",
      },
    ],
  },
  {
    title: "Government Certified Courses",
    description: "Central and State Government approved certifications",
    icon: GraduationCap,
    courses: [
      {
        name: "CCC",
        subtitle: "Course on Computer Concepts",
        description: "NIELIT द्वारे मान्यताप्राप्त. केंद्र सरकारी नोकऱ्यांसाठी आवश्यक. Basic computer concepts आणि application training.",
        duration: "3 महिने",
        certificate: "NIELIT Certified",
      },
      {
        name: "GCC-TBC",
        subtitle: "Govt Commercial Certificate",
        description: "Typing and Basic Computer course. महाराष्ट्र शासन मान्यताप्राप्त. सरकारी नोकऱ्यांसाठी valid.",
        duration: "3 महिने",
        certificate: "Maharashtra Govt",
      },
    ],
  },
  {
    title: "Skill Development Courses",
    description: "Job-oriented professional skill courses",
    icon: Briefcase,
    courses: [
      {
        name: "Office Automation",
        subtitle: "Complete MS Office",
        description: "MS Word, Excel, PowerPoint, Internet, Email. Professional office work साठी संपूर्ण प्रशिक्षण.",
        duration: "2 महिने",
        certificate: "Completion Certificate",
      },
      {
        name: "Basic Computer Course",
        subtitle: "Beginner Level",
        description: "संगणकाची मूलभूत माहिती. Windows, File management, Internet basics नवशिक्यांसाठी योग्य.",
        duration: "1-2 महिने",
        certificate: "Completion Certificate",
      },
      {
        name: "Tally Prime",
        subtitle: "Accounting Software",
        description: "GST billing, Accounting, Inventory management. व्यावसायिक accounting साठी आवश्यक.",
        duration: "2-3 महिने",
        certificate: "Completion Certificate",
      },
    ],
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="container-main relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our <span className="text-secondary">Courses</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Government certified और skill-based संगणक अभ्यासक्रम
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {courseCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}
        >
          <div className="container-main">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center">
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, courseIndex) => (
                <div
                  key={course.name}
                  className="card-elevated bg-card rounded-2xl overflow-hidden animate-fade-up group"
                  style={{ animationDelay: `${courseIndex * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {course.name}
                        </h3>
                        <span className="text-sm text-secondary font-medium">
                          {course.subtitle}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Certificate:</span>
                        <span className="font-medium text-foreground">{course.certificate}</span>
                      </div>
                    </div>
                    
                    <Link to="/contact">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        Enquiry Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              योग्य Course निवडण्यात मदत हवी आहे?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              आमच्याशी संपर्क साधा. आम्ही तुमच्या करिअर goals नुसार योग्य course suggest करू.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Free Counseling
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919999999999">
                <Button variant="heroOutline" size="lg">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
