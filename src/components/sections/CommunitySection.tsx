import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users, Trophy, Star } from "lucide-react";

// Real company logos
const partners = [
  { name: "MKCL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/MKCL_logo.svg/200px-MKCL_logo.svg.png" },
  { name: "MS-CIT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/MKCL_logo.svg/200px-MKCL_logo.svg.png" },
  { name: "KLiC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/MKCL_logo.svg/200px-MKCL_logo.svg.png" },
  { name: "NIELIT", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/NIELIT_logo.svg/200px-NIELIT_logo.svg.png" },
  { name: "Maharashtra Govt", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seal_of_Maharashtra.svg/200px-Seal_of_Maharashtra.svg.png" },
  { name: "Tally", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Tally_-_Logo.svg/200px-Tally_-_Logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
];

const achievements = [
  { icon: Users, count: "1000+", label: "यशस्वी विद्यार्थी", color: "bg-primary" },
  { icon: Award, count: "10+", label: "वर्षांचा अनुभव", color: "bg-green-500" },
  { icon: Trophy, count: "98%", label: "यश दर", color: "bg-secondary" },
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
        
        <div className="container-main relative z-10 px-4">
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
                <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border border-border hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${item.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-4xl font-bold text-foreground mb-1">{item.count}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
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
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground"
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

      {/* Bottom Section - Partners Marquee with Real Logos */}
      <div className="py-12 bg-foreground overflow-hidden">
        <div className="container-main text-center mb-8 px-4">
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
            Our Students Work Here:
          </h3>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            TOP COMPANIES & GOVERNMENT OFFICES
          </span>
        </div>

        {/* Scrolling Marquee with Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 md:gap-16 items-center">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-primary-foreground/80 whitespace-nowrap shrink-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 flex items-center justify-center p-2 backdrop-blur-sm">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-bold">${partner.name.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <span className="font-medium text-sm md:text-base">{partner.name}</span>
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
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;
