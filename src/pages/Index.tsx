import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  IndianRupee, 
  FileCheck, 
  BookOpen,
  Monitor,
  Keyboard,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-classroom.jpg";

const highlights = [
  {
    icon: Award,
    title: "Government Approved",
    description: "महाराष्ट्र शासन व MKCL मान्यताप्राप्त",
  },
  {
    icon: Users,
    title: "Experienced Trainers",
    description: "अनुभवी व तज्ञ प्रशिक्षक",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    description: "परवडणारी फी रचना",
  },
  {
    icon: FileCheck,
    title: "Valid Certificates",
    description: "महाराष्ट्रभर मान्यताप्राप्त प्रमाणपत्रे",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "प्रात्यक्षिक व सिद्धांत आधारित शिक्षण",
  },
];

const popularCourses = [
  {
    icon: Monitor,
    title: "MS-CIT",
    subtitle: "MKCL Course",
    description: "Maharashtra State Certificate in IT - सर्वात लोकप्रिय संगणक अभ्यासक्रम",
    duration: "3 महिने",
  },
  {
    icon: Keyboard,
    title: "Marathi Typing",
    subtitle: "30/40 WPM",
    description: "सरकारी नोकऱ्यांसाठी आवश्यक मराठी टायपिंग",
    duration: "2 महिने",
  },
  {
    icon: Keyboard,
    title: "English Typing",
    subtitle: "30/40 WPM",
    description: "English typing course for government exams",
    duration: "2 महिने",
  },
  {
    icon: GraduationCap,
    title: "CCC",
    subtitle: "NIELIT Course",
    description: "Course on Computer Concepts - केंद्र सरकार मान्यताप्राप्त",
    duration: "3 महिने",
  },
  {
    icon: FileCheck,
    title: "GCC-TBC",
    subtitle: "Govt Certified",
    description: "Government Commercial Certificate - Typing & Basic Computer",
    duration: "3 महिने",
  },
  {
    icon: BookOpen,
    title: "Office Automation",
    subtitle: "Skill Course",
    description: "MS Office, Internet, Email - व्यावसायिक कौशल्य",
    duration: "2 महिने",
  },
];

const whyChooseUs = [
  "महाराष्ट्र शासन मान्यताप्राप्त प्रमाणपत्रे",
  "Job-oriented Courses",
  "Local Trusted Institute",
  "Years of Teaching Experience",
  "Modern Computer Lab",
  "Flexible Batch Timings",
];

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

      {/* Highlights Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              आमची <span className="text-gradient">वैशिष्ट्ये</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why thousands of students trust Incite Computer for their computer education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated bg-card rounded-2xl p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl hero-gradient flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              लोकप्रिय <span className="text-gradient">अभ्यासक्रम</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Government certified courses designed for your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course, index) => (
              <div
                key={course.title}
                className="card-elevated bg-card rounded-2xl p-6 animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:hero-gradient transition-all duration-300">
                    <course.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{course.title}</h3>
                    <span className="text-sm text-secondary font-medium">{course.subtitle}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    Duration: {course.duration}
                  </span>
                  <Link 
                    to="/contact" 
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    Enquiry <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/courses">
              <Button size="lg">
                View All Courses
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-gradient">Incite Computer?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Phondaghat मधील विश्वासार्ह संगणक प्रशिक्षण संस्था. आम्ही विद्यार्थ्यांना 
                दर्जेदार शिक्षण आणि सरकारी मान्यताप्राप्त प्रमाणपत्रे प्रदान करतो.
              </p>
              
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about" className="inline-block mt-8">
                <Button variant="outline" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-up animation-delay-200">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Computer Lab"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl card-elevated">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <Users className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
