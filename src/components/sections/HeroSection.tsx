import { Link, useNavigate } from "react-router-dom";
import { 
  Award, 
  ArrowRight,
  Phone,
  Monitor,
  FileCheck,
  Users,
  Play,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-classroom.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["संगणक शिक्षण", "Typing Classes", "Government Courses", "Career Growth"];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "15+", label: "Courses Available" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[hsl(222,47%,8%)] via-[hsl(221,83%,15%)] to-[hsl(222,47%,8%)]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--secondary) / 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Icons - Left Side */}
      <div className="absolute left-8 top-1/4 hidden lg:block animate-float">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 backdrop-blur-sm flex items-center justify-center border border-secondary/30">
          <Monitor className="w-8 h-8 text-secondary" />
        </div>
      </div>
      
      <div className="absolute left-20 top-2/3 hidden lg:block animate-float-delayed">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
          <FileCheck className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>

      {/* Floating Icons - Right Side */}
      <div className="absolute right-12 top-1/3 hidden lg:block animate-float-delayed">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/10 backdrop-blur-sm flex items-center justify-center border border-green-500/30">
          <Award className="w-8 h-8 text-green-400" />
        </div>
      </div>
      
      <div className="absolute right-24 top-2/3 hidden lg:block animate-float">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 backdrop-blur-sm flex items-center justify-center border border-secondary/30">
          <Users className="w-6 h-6 text-secondary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main relative z-10 px-4 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Limited Time Offer Banner */}
          <div className="inline-flex items-center gap-3 bg-secondary/10 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="text-xs font-medium text-secondary uppercase tracking-wider">
              Admission Open
            </span>
            <div className="flex items-center gap-1 text-primary-foreground font-mono text-sm">
              <span className="bg-primary/30 px-2 py-0.5 rounded">{String(timeLeft.days).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-primary/30 px-2 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-primary/30 px-2 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-primary/30 px-2 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-up animation-delay-100">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              महाराष्ट्र शासन व MKCL मान्यताप्राप्त
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-up animation-delay-200">
            Master Your Skills at
            <span className="block mt-2 text-secondary">Incite Computer</span>
          </h1>

          {/* Animated Word */}
          <div className="h-12 md:h-16 mb-6 overflow-hidden animate-fade-up animation-delay-300">
            <p className="text-xl md:text-3xl text-primary-foreground/80 font-medium">
              Best for{" "}
              <span 
                key={currentWord}
                className="inline-block text-secondary animate-fade-in"
              >
                {words[currentWord]}
              </span>
            </p>
          </div>
          
          {/* Search/Input Style Box */}
          <div className="w-full max-w-xl glass-card rounded-2xl p-4 mb-8 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-primary-foreground/50 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for MS-CIT, Typing, CCC, GCC-TBC courses..."
                className="flex-1 bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 text-sm outline-none"
              />
              <button 
                onClick={handleSearch}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground p-2 rounded-lg transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* CTA Buttons with Avatar Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 animate-fade-up animation-delay-500">
            <Link to="/courses">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl group">
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* Avatar Stack */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-primary-foreground font-semibold text-sm">1000+ विद्यार्थी</p>
                <p className="text-primary-foreground/60 text-xs">यशस्वीपणे प्रशिक्षित</p>
              </div>
            </div>
          </div>

          {/* Video Preview Card */}
          <div className="relative w-full max-w-4xl animate-fade-up animation-delay-500 group">
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary-foreground/10 shadow-2xl">
              <img
                src={heroImage}
                alt="Incite Computer Training"
                className="w-full h-64 md:h-96 object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary hover:bg-secondary/90 flex items-center justify-center shadow-lg orange-glow transition-all group-hover:scale-110">
                  <Play className="w-8 h-8 text-secondary-foreground fill-current ml-1" />
                </button>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-slow" />
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow animation-delay-200" />
                <div className="w-3 h-3 rounded-full bg-primary-foreground/50 animate-pulse-slow animation-delay-400" />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="w-full max-w-4xl mt-12 grid grid-cols-3 gap-4 md:gap-8 animate-fade-up animation-delay-500">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card rounded-2xl p-4 md:p-6 text-center"
              >
                <div className="text-2xl md:text-4xl font-bold text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
