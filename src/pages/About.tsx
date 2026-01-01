import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Monitor, 
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Heart,
  Search,
  UserCheck,
  BookOpen,
  BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-classroom.jpg";

const teamMembers = [
  { name: "प्रशांत वंजुळे", role: "Director", color: "bg-pink-100" },
  { name: "नेहा अरेकर", role: "Computer Trainer", color: "bg-blue-100" },
  { name: "पूजा", role: "Senior Trainer", color: "bg-green-100" },
  { name: "अस्मिता", role: "Senior Trainer", color: "bg-yellow-100" },
];

const whyChooseFeatures = [
  { icon: Users, title: "1000+", description: "यशस्वी विद्यार्थी", position: "left-top" },
  { icon: MessageCircle, title: "Networking", description: "Connection & Growth", position: "right-top" },
  { icon: Heart, title: "Support", description: "Lifetime support", position: "left-bottom" },
  { icon: GraduationCap, title: "Build Career", description: "Proven expertise", position: "right-bottom" },
];

const steps = [
  { icon: UserCheck, title: "Sign up & Get Started", description: "नोंदणी करा आणि शिकायला सुरुवात करा." },
  { icon: BookOpen, title: "Explore Courses", description: "आपल्या आवडीनुसार course निवडा." },
  { icon: BarChart, title: "Keep Learning & Growing", description: "सतत शिका आणि प्रगती करा!" },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Students Trained" },
  { number: "15+", label: "Courses Offered" },
  { number: "98%", label: "Success Rate" },
];

const features = [
  "Modern Computer Lab with Latest Systems",
  "Experienced & Qualified Instructors",
  "Practical Hands-on Training",
  "Student-Friendly Environment",
  "Government Exam Preparation",
  "Flexible Batch Timings",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Team Photos Row */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        {/* Floating decorative elements */}
        <div className="absolute left-8 top-1/4 hidden lg:block animate-float">
          <div className="w-16 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20 rotate-12">
            <div className="w-8 h-10 bg-secondary/30 rounded" />
          </div>
        </div>
        <div className="absolute right-12 top-1/3 hidden lg:block animate-float-delayed">
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded-full bg-green-400" />
            <div className="w-4 h-4 rounded-full bg-blue-400" />
            <div className="w-4 h-4 rounded-full bg-secondary" />
          </div>
        </div>

        <div className="container-main relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Learn From the Best Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Building Futures Together
              <span className="block text-secondary">By Empowering Minds</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              Join us in shaping a brighter future by nurturing potential, empowering minds, 
              and fostering growth through education and collaboration.
            </p>

            {/* Search Box */}
            <div className="max-w-xl mx-auto mb-12 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-4 shadow-lg">
                <input
                  type="text"
                  placeholder="e.g. MS-CIT, Typing Course"
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Team Photos Row - Auto-scrollable on mobile */}
            <div className="overflow-x-auto pb-4 scrollbar-hide animate-fade-up animation-delay-400">
              <div className="flex justify-start md:justify-center items-end gap-4 md:gap-6 min-w-max px-4 md:px-0 animate-marquee md:animate-none">
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.name}
                    className={`relative shrink-0 ${index === 2 ? 'z-10' : ''}`}
                    style={{ marginTop: index === 1 || index === 2 ? '0' : '20px' }}
                  >
                    <div 
                      className={`${member.color} rounded-t-full overflow-hidden transition-transform hover:scale-105`}
                      style={{ 
                        width: index === 2 ? '140px' : '110px',
                        height: index === 2 ? '180px' : '150px',
                      }}
                    >
                      <img
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1507003211169-0a1dd7228f2d' : index === 1 ? '1500648767791-00dcc994a43e' : index === 2 ? '1472099645785-5658abf4ff4e' : '1519085360753-af0119f7cbe7'}?w=200&h=250&fit=crop&crop=face`}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground mt-2">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content with Stats */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Master Your Skills:
                <span className="block text-gradient">Exclusive Training</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Incite Computer Phondaghat</strong> ही महाराष्ट्र शासन 
                व MKCL मान्यताप्राप्त संगणक प्रशिक्षण संस्था आहे. आम्ही गेल्या अनेक वर्षांपासून 
                विद्यार्थ्यांना दर्जेदार संगणक शिक्षण प्रदान करत आहोत.
              </p>
              <p className="text-muted-foreground mb-6">
                Join for exclusive access to premium tutorials, behind-the-scenes, 
                and more. Elevate your skills and learning experience.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/courses">
                  <Button className="bg-foreground text-background hover:bg-foreground/90">
                    Become a Student
                  </Button>
                </Link>
                <Button variant="outline" className="gap-2">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-destructive border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                  </div>
                  Presentation Video
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-muted/50 rounded-2xl">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up animation-delay-200">
              {/* Main Image with Background Blob */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-secondary/20 rounded-full scale-110 -z-10" />
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Incite Computer Training"
                    className="w-full h-80 lg:h-[450px] object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 right-4 bg-card rounded-xl p-3 shadow-lg flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-card" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">3800+</p>
                    <p className="text-xs text-muted-foreground">already joined</p>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center animate-float">
                  <Monitor className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute top-1/3 -left-6 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center animate-float-delayed">
                  <Award className="w-7 h-7 text-secondary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">Incite Computer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Incite Computer offers expert-led courses, hands-on training, and industry 
              insights to accelerate career growth rapidly.
            </p>
          </div>

          {/* Central Image with Floating Cards */}
          <div className="relative max-w-4xl mx-auto py-12">
            {/* Center Image */}
            <div className="relative w-64 h-80 mx-auto rounded-[3rem] overflow-hidden border-4 border-muted shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
                alt="Student"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                <p className="text-primary-foreground font-medium text-center">Video Resume</p>
              </div>
            </div>

            {/* Decorative circle around image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full border border-dashed border-primary/30" />
            </div>

            {/* Feature Cards */}
            <div className="absolute top-8 left-4 md:left-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">1000+</p>
                  <p className="text-xs text-muted-foreground">Trained Students</p>
                </div>
              </div>
            </div>

            <div className="absolute top-24 right-4 md:right-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Networking</p>
                  <p className="text-xs text-muted-foreground">Connection & Growth</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-4 md:left-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Support</p>
                  <p className="text-xs text-muted-foreground">Lifetime support</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-4 md:right-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Build Career</p>
                  <p className="text-xs text-muted-foreground">Proven expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Your Expertise Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400"
                      alt="Training session"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="bg-card rounded-xl p-3 shadow-lg inline-flex items-center gap-2">
                    <p className="font-semibold text-foreground">100K Students</p>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-card" />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground border-2 border-card">+</div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
                      alt="Team collaboration"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Dotted pattern decoration */}
              <div className="absolute -bottom-4 left-1/4 grid grid-cols-6 gap-2">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                ))}
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Take Your Expertise to the
                <span className="block text-secondary">Next Level</span>
              </h2>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div 
                    key={step.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-transparent hover:from-muted transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      index === 0 ? 'bg-primary/10' : index === 1 ? 'bg-destructive/10' : 'bg-secondary/10'
                    }`}>
                      <step.icon className={`w-6 h-6 ${
                        index === 0 ? 'text-primary' : index === 1 ? 'text-destructive' : 'text-secondary'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative arrow */}
              <div className="mt-6 flex justify-end">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-foreground/20">
                  <path d="M10 50 Q 30 30 50 10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                  <polygon points="48,5 55,12 50,12" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Monitor, title: "Modern Lab", desc: "Latest Computers" },
                  { icon: Users, title: "Expert Faculty", desc: "Qualified Trainers" },
                  { icon: Award, title: "Certified", desc: "Govt. Approved" },
                  { icon: GraduationCap, title: "Practical", desc: "Hands-on Training" },
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className="card-elevated bg-card rounded-2xl p-6 text-center animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
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
                    className="flex items-center gap-3"
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
