import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Monitor, 
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-classroom.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "ग्रामीण व शहरी विद्यार्थ्यांना दर्जेदार संगणक शिक्षण देणे. Digital literacy, employment readiness आणि government exam preparation यावर लक्ष केंद्रित करणे.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "प्रत्येक विद्यार्थ्याला आधुनिक तंत्रज्ञान शिकून स्वावलंबी बनवणे. Skill-based education द्वारे रोजगाराच्या संधी निर्माण करणे.",
  },
];

const features = [
  "Modern Computer Lab with Latest Systems",
  "Experienced & Qualified Instructors",
  "Practical Hands-on Training",
  "Student-Friendly Environment",
  "Government Exam Preparation",
  "Flexible Batch Timings",
  "Individual Attention to Students",
  "Regular Assessment & Progress Tracking",
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Students Trained" },
  { number: "15+", label: "Courses Offered" },
  { number: "95%", label: "Success Rate" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="container-main relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About <span className="text-secondary">Incite Computer</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              फोंडाघाट येथील विश्वासार्ह व मान्यताप्राप्त संगणक प्रशिक्षण संस्था
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                आमच्याबद्दल <span className="text-gradient">माहिती</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Incite Computer Phondaghat</strong> ही महाराष्ट्र शासन 
                  व MKCL मान्यताप्राप्त संगणक प्रशिक्षण संस्था आहे. आम्ही गेल्या अनेक वर्षांपासून 
                  विद्यार्थ्यांना दर्जेदार संगणक शिक्षण प्रदान करत आहोत.
                </p>
                <p>
                  आमचा उद्देश ग्रामीण व शहरी भागातील विद्यार्थ्यांना आधुनिक तंत्रज्ञान शिकवून 
                  त्यांना स्वावलंबी बनवणे आहे. आम्ही MS-CIT, Typing, CCC, GCC-TBC आणि 
                  इतर अनेक सरकारी व खासगी अभ्यासक्रम चालवतो.
                </p>
                <p>
                  We believe in practical, hands-on training combined with theoretical knowledge. 
                  Our experienced trainers ensure that every student gains the skills needed 
                  for today's digital world.
                </p>
              </div>
              
              <Link to="/courses" className="inline-block mt-6">
                <Button>
                  Explore Our Courses
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-up animation-delay-200">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Incite Computer Lab"
                  className="w-full h-80 lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-main px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vision & <span className="text-gradient">Mission</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated bg-card rounded-2xl p-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-elevated bg-card rounded-2xl p-6 text-center animate-fade-up">
                  <Monitor className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Modern Lab</h4>
                  <p className="text-sm text-muted-foreground">Latest Computers</p>
                </div>
                <div className="card-elevated bg-card rounded-2xl p-6 text-center animate-fade-up animation-delay-100">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Expert Faculty</h4>
                  <p className="text-sm text-muted-foreground">Qualified Trainers</p>
                </div>
                <div className="card-elevated bg-card rounded-2xl p-6 text-center animate-fade-up animation-delay-200">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Certified</h4>
                  <p className="text-sm text-muted-foreground">Govt. Approved</p>
                </div>
                <div className="card-elevated bg-card rounded-2xl p-6 text-center animate-fade-up animation-delay-300">
                  <GraduationCap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Practical</h4>
                  <p className="text-sm text-muted-foreground">Hands-on Training</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Infrastructure & <span className="text-gradient">Faculty</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                आमच्या संस्थेत आधुनिक संगणक प्रयोगशाळा, अनुभवी प्रशिक्षक आणि 
                विद्यार्थी-स्नेही वातावरण आहे.
              </p>
              
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              आमच्याशी संपर्क साधा
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              आपल्या संगणक शिक्षणाची सुरुवात आजच करा. आमच्या कार्यालयास भेट द्या किंवा कॉल करा.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
