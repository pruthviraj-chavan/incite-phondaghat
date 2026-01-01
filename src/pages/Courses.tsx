import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Keyboard, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  Clock,
  Award,
  Phone,
  BookOpen,
  Layers,
  Star,
  ArrowUpRight,
  Grid3X3,
  Code,
  FileText,
  Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const categories = [
  { id: "all", label: "All Categories", icon: Grid3X3 },
  { id: "mkcl", label: "MKCL", icon: Monitor },
  { id: "typing", label: "Typing", icon: Keyboard },
  { id: "government", label: "Government", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Briefcase },
];

const allCourses = [
  {
    id: 1,
    name: "MS-CIT",
    subtitle: "Maharashtra State Certificate in IT",
    description: "सर्वात लोकप्रिय संगणक अभ्यासक्रम. MS Office, Internet, Email, Windows operating system यांचे संपूर्ण प्रशिक्षण.",
    duration: "3 महिने",
    lectures: 48,
    certificate: "MKCL Certified",
    category: "mkcl",
    popular: true,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },
  {
    id: 2,
    name: "KLiC Courses",
    subtitle: "Knowledge Literacy Certification",
    description: "विविध क्षेत्रांसाठी specialized computer courses. Tally, DTP, Web Designing आणि इतर.",
    duration: "2-6 महिने",
    lectures: 36,
    certificate: "MKCL Certified",
    category: "mkcl",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600",
  },
  {
    id: 3,
    name: "Marathi Typing",
    subtitle: "30/40 WPM",
    description: "सरकारी नोकऱ्यांसाठी आवश्यक मराठी टायपिंग. ISM/Shree Lipi font वर प्रशिक्षण.",
    duration: "2-3 महिने",
    lectures: 24,
    certificate: "Govt. Recognized",
    category: "typing",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
  },
  {
    id: 4,
    name: "English Typing",
    subtitle: "30/40 WPM",
    description: "English typing with proper finger placement. Speed building और accuracy improvement.",
    duration: "2-3 महिने",
    lectures: 24,
    certificate: "Govt. Recognized",
    category: "typing",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600",
  },
  {
    id: 5,
    name: "CCC",
    subtitle: "Course on Computer Concepts",
    description: "NIELIT द्वारे मान्यताप्राप्त. केंद्र सरकारी नोकऱ्यांसाठी आवश्यक. Basic computer concepts आणि application training.",
    duration: "3 महिने",
    lectures: 36,
    certificate: "NIELIT Certified",
    category: "government",
    popular: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
  },
  {
    id: 6,
    name: "GCC-TBC",
    subtitle: "Govt Commercial Certificate",
    description: "Typing and Basic Computer course. महाराष्ट्र शासन मान्यताप्राप्त. सरकारी नोकऱ्यांसाठी valid.",
    duration: "3 महिने",
    lectures: 42,
    certificate: "Maharashtra Govt",
    category: "government",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    id: 7,
    name: "Office Automation",
    subtitle: "Complete MS Office",
    description: "MS Word, Excel, PowerPoint, Internet, Email. Professional office work साठी संपूर्ण प्रशिक्षण.",
    duration: "2 महिने",
    lectures: 30,
    certificate: "Completion Certificate",
    category: "skills",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600",
  },
  {
    id: 8,
    name: "Tally Prime",
    subtitle: "Accounting Software",
    description: "GST billing, Accounting, Inventory management. व्यावसायिक accounting साठी आवश्यक.",
    duration: "2-3 महिने",
    lectures: 28,
    certificate: "Completion Certificate",
    category: "skills",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
  },
];

const mentors = [
  { name: "रमेश पाटील", role: "Product Designer", color: "bg-pink-200" },
  { name: "सुनील शिंदे", role: "Software Engineer", color: "bg-secondary/30" },
  { name: "प्रिया देशमुख", role: "Digital Marketer", color: "bg-yellow-200" },
  { name: "अमित जाधव", role: "Digital Marketer", color: "bg-orange-100" },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = selectedCategory === "all" 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  const featuredCourse = allCourses.find(c => c.popular);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container-main relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up">
              Become In Demand On the
              <span className="block text-secondary">Job Market Today!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-100">
              Government certified और skill-based संगणक अभ्यासक्रम जे तुमचे करिअर उजळवतील.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 bg-background sticky top-16 z-20 border-b border-border">
        <div className="container-main px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course */}
      {featuredCourse && selectedCategory === "all" && (
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredCourse.image}
                    alt={featuredCourse.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                      {categories.find(c => c.id === featuredCourse.category)?.label}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-sm font-medium text-secondary">
                      <Star className="w-4 h-4 fill-current" />
                      Popular
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {featuredCourse.name}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredCourse.description}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{featuredCourse.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{featuredCourse.lectures} lectures</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-secondary">Contact for Fee</p>
                    <Link to="/contact">
                      <Button className="gap-2">
                        View Details
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Course Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {course.popular && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {categories.find(c => c.id === course.category)?.label}
                    </span>
                    <span className="text-sm font-bold text-secondary">
                      Contact
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {course.lectures} lectures
                    </div>
                  </div>
                  
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
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

      {/* Learn from Best Mentors Section */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="container-main px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Learn from the Best Talent
              </h2>
              <p className="text-primary-foreground/70">in the Industry</p>
            </div>
            <Link to="/about">
              <Button variant="outline" className="mt-4 md:mt-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View All Mentors
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mentor Portraits - Overlapping Ovals */}
          <div className="flex justify-center items-end gap-[-20px] md:gap-4">
            {mentors.map((mentor, index) => (
              <div 
                key={mentor.name}
                className="relative transition-transform hover:scale-105"
                style={{ 
                  marginLeft: index > 0 ? '-30px' : '0',
                  zIndex: mentors.length - index,
                  marginTop: index === 1 ? '40px' : index === 2 ? '20px' : '0'
                }}
              >
                <div className="text-center mb-2 hidden md:block">
                  <p className="font-semibold text-primary-foreground text-sm">{mentor.name}</p>
                  <p className="text-xs text-primary-foreground/60">{mentor.role}</p>
                </div>
                <div 
                  className={`${mentor.color} rounded-t-full overflow-hidden border-4 border-foreground`}
                  style={{ 
                    width: '120px',
                    height: '160px',
                  }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1507003211169-0a1dd7228f2d' : index === 1 ? '1500648767791-00dcc994a43e' : index === 2 ? '1472099645785-5658abf4ff4e' : '1519085360753-af0119f7cbe7'}?w=200&h=250&fit=crop&crop=face`}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
