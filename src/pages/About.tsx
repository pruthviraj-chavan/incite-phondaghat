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
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-classroom.jpg";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import DirectorStorySection from "@/components/sections/DirectorStorySection";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
  is_leadership: boolean;
}

const fallbackTeamMembers = [
  { id: "1", name: "प्रशांत वंजुळे", role: "संचालक", image_url: null, is_leadership: true },
  { id: "2", name: "नेहा अरेकर", role: "संगणक प्रशिक्षक", image_url: null, is_leadership: true },
  { id: "3", name: "पूजा", role: "वरिष्ठ प्रशिक्षक", image_url: null, is_leadership: true },
  { id: "4", name: "अस्मिता", role: "वरिष्ठ प्रशिक्षक", image_url: null, is_leadership: true },
];

const teamColors = ["bg-pink-100", "bg-blue-100", "bg-green-100", "bg-yellow-100"];

const whyChooseFeatures = [
  { icon: Users, title: "1000+", description: "यशस्वी विद्यार्थी", position: "left-top" },
  { icon: MessageCircle, title: "नेटवर्किंग", description: "कनेक्शन व वाढ", position: "right-top" },
  { icon: Heart, title: "सहाय्य", description: "आजीवन मार्गदर्शन", position: "left-bottom" },
  { icon: GraduationCap, title: "करिअर", description: "यशस्वी भविष्य", position: "right-bottom" },
];

const steps = [
  { icon: UserCheck, title: "नोंदणी करा", description: "आमच्या कार्यालयास भेट द्या आणि प्रवेश घ्या." },
  { icon: BookOpen, title: "कोर्स निवडा", description: "आपल्या आवडीनुसार योग्य कोर्स निवडा." },
  { icon: BarChart, title: "शिका आणि वाढा", description: "सतत शिका आणि करिअरमध्ये प्रगती करा!" },
];

const stats = [
  { number: "10+", label: "वर्षांचा अनुभव" },
  { number: "1000+", label: "प्रशिक्षित विद्यार्थी" },
  { number: "15+", label: "कोर्सेस उपलब्ध" },
  { number: "98%", label: "यश दर" },
];

const features = [
  "आधुनिक संगणक प्रयोगशाळा",
  "अनुभवी व पात्र प्रशिक्षक",
  "प्रात्यक्षिक प्रशिक्षण",
  "विद्यार्थी-स्नेही वातावरण",
  "सरकारी परीक्षा तयारी",
  "लवचिक बॅच वेळा",
];

const About = () => {
  const { data: teamMembers } = useQuery({
    queryKey: ["about-team-members"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .eq("is_leadership", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data as TeamMember[];
    },
  });

  const displayTeamMembers = teamMembers && teamMembers.length > 0 ? teamMembers : fallbackTeamMembers;

  return (
    <Layout>
      <SEO 
        title="आमच्याबद्दल - About Us"
        description="Incite Computer Phondaghat - महाराष्ट्र शासन व MKCL मान्यताप्राप्त संगणक प्रशिक्षण केंद्र. 10+ वर्षांचा अनुभव, 1000+ यशस्वी विद्यार्थी. Phondaghat, Sindhudurg मधील सर्वोत्तम computer training institute."
        keywords="About Incite Computer, Computer Institute Phondaghat, MKCL Training Center, Phonda Computer Classes, Sindhudurg IT Training"
        canonical="/about"
      />
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
                तज्ञांकडून शिका
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              एकत्र भविष्य घडवूया
              <span className="block text-secondary">ज्ञानाने सक्षम करूया</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              शिक्षण आणि सहकार्याच्या माध्यमातून क्षमता विकसित करून, 
              मनांना सक्षम करून उज्ज्वल भविष्य घडवण्यात आमच्यासोबत सहभागी व्हा.
            </p>

            {/* Search Box */}
            <div className="max-w-xl mx-auto mb-12 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-4 shadow-lg">
                <input
                  type="text"
                  placeholder="उदा. MS-CIT, टायपिंग कोर्स"
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
                {displayTeamMembers.map((member, index) => (
                  <div 
                    key={member.id}
                    className={`relative shrink-0 ${index === 2 ? 'z-10' : ''}`}
                    style={{ marginTop: index === 1 || index === 2 ? '0' : '20px' }}
                  >
                    <div 
                      className={`${teamColors[index % teamColors.length]} rounded-t-full overflow-hidden transition-transform hover:scale-105`}
                      style={{ 
                        width: index === 2 ? '140px' : '110px',
                        height: index === 2 ? '180px' : '150px',
                      }}
                    >
                      {member.image_url ? (
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground bg-muted">
                          {member.name.charAt(0)}
                        </div>
                      )}
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
                आपल्या कौशल्यांवर प्रभुत्व मिळवा:
                <span className="block text-gradient">विशेष प्रशिक्षण</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Incite Computer फोंडाघाट</strong> ही महाराष्ट्र शासन 
                व MKCL मान्यताप्राप्त संगणक प्रशिक्षण संस्था आहे. आम्ही गेल्या अनेक वर्षांपासून 
                विद्यार्थ्यांना दर्जेदार संगणक शिक्षण प्रदान करत आहोत.
              </p>
              <p className="text-muted-foreground mb-6">
                प्रीमियम ट्यूटोरियल्स, मागील दृश्ये आणि बरेच काही यांसाठी विशेष प्रवेश मिळवा. 
                आपले कौशल्य आणि शिक्षण अनुभव उंचावा.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/courses">
                  <Button className="bg-foreground text-background hover:bg-foreground/90">
                    विद्यार्थी व्हा
                  </Button>
                </Link>
                <a href="https://wa.me/917499697181">
                  <Button variant="outline" className="gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                    </div>
                    WhatsApp वर संपर्क करा
                  </Button>
                </a>
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
                    loading="lazy"
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
                    <p className="text-sm font-semibold">1000+</p>
                    <p className="text-xs text-muted-foreground">यशस्वी विद्यार्थी</p>
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
              <span className="text-gradient">Incite Computer</span> का निवडावे?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Incite Computer तज्ञांच्या नेतृत्वाखाली कोर्सेस, प्रात्यक्षिक प्रशिक्षण आणि 
              करिअर वाढीसाठी उद्योग अंतर्दृष्टी देते.
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
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                <p className="text-primary-foreground font-medium text-center">यशस्वी विद्यार्थी</p>
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
                  <p className="text-xs text-muted-foreground">प्रशिक्षित विद्यार्थी</p>
                </div>
              </div>
            </div>

            <div className="absolute top-24 right-4 md:right-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">नेटवर्किंग</p>
                  <p className="text-xs text-muted-foreground">कनेक्शन व वाढ</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-4 md:left-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-foreground">सहाय्य</p>
                  <p className="text-xs text-muted-foreground">आजीवन मार्गदर्शन</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-4 md:right-8 glass-card bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">करिअर</p>
                  <p className="text-xs text-muted-foreground">यशस्वी भविष्य</p>
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
                      loading="lazy"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="bg-card rounded-xl p-3 shadow-lg inline-flex items-center gap-2">
                    <p className="font-semibold text-foreground">1000+ विद्यार्थी</p>
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
                      loading="lazy"
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
                आपले कौशल्य
                <span className="block text-secondary">पुढच्या पातळीवर न्या</span>
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
                  { icon: Monitor, title: "आधुनिक लॅब", desc: "नवीनतम संगणक" },
                  { icon: Users, title: "तज्ञ शिक्षक", desc: "पात्र प्रशिक्षक" },
                  { icon: Award, title: "प्रमाणित", desc: "शासन मान्यता" },
                  { icon: GraduationCap, title: "प्रात्यक्षिक", desc: "हातोहात प्रशिक्षण" },
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
                पायाभूत सुविधा आणि <span className="text-gradient">शिक्षक वर्ग</span>
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

      {/* Director Story Section */}
      <DirectorStorySection />

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
                संपर्क करा
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
