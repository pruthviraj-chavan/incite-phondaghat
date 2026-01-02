import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users, Trophy, Star } from "lucide-react";

const partners = [
  "MKCL",
  "NIELIT",
  "Maharashtra Govt",
  "MSCIT",
  "MS Office",
  "Tally",
  "MKCL",
  "NIELIT",
  "Maharashtra Govt",
  "MSCIT",
];

const achievements = [
  { icon: Users, count: "1000+", label: "यशस्वी विद्यार्थी", color: "bg-blue-500" },
  { icon: Award, count: "10+", label: "वर्षांचा अनुभव", color: "bg-green-500" },
  { icon: Trophy, count: "98%", label: "यश दर", color: "bg-yellow-500" },
  { icon: BookOpen, count: "15+", label: "कोर्सेस", color: "bg-purple-500" },
];

const CommunitySection = () => {
  return (
    <section className="overflow-hidden">
      {/* Top Section - Community CTA with Achievement Cards */}
      <div className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 relative">
        {/* Decorative elements */}
        <div className="absolute left-8 top-20 w-20 h-20 rounded-full bg-secondary/10 blur-2xl" />
        <div className="absolute right-12 bottom-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-medium text-secondary">आमचे यश</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              यशस्वी विद्यार्थ्यांचे <span className="text-secondary">नेटवर्क</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Incite Computer च्या माध्यमातून हजारो विद्यार्थ्यांनी त्यांच्या करिअरची
              सुरुवात केली आहे. आमच्या यशस्वी विद्यार्थ्यांचा समुदाय जॉईन करा.
            </p>
            <Link to="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-8 gap-2">
                आजच Admission घ्या
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Achievement Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <div 
                key={item.label}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{item.count}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${item.color}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              </div>
            ))}
          </div>

          {/* Success Stories Preview */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-muted/50 rounded-full px-6 py-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">आणखी शेकडो विद्यार्थी...</p>
                <p className="text-xs text-muted-foreground">सरकारी नोकऱ्यांमध्ये यशस्वी</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Partners Marquee */}
      <div className="py-12 bg-foreground">
        <div className="container-main text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
            Our Students Work Here:
          </h3>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            TOP COMPANIES & GOVERNMENT OFFICES
          </span>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 md:gap-16">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-primary-foreground/80 whitespace-nowrap"
              >
                <div className="w-6 h-6 rounded bg-primary/30 flex items-center justify-center text-xs font-bold">
                  {partner.charAt(0)}
                </div>
                <span className="font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;
