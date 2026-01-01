import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const CommunitySection = () => {
  return (
    <section className="overflow-hidden">
      {/* Top Section - Community CTA */}
      <div className="py-20 md:py-28 bg-background text-center">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join an <span className="text-secondary">Exclusive</span>
            <br />
            Network of Successful Students
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join our community of successful students who have built their careers 
            through quality computer education. Get guidance, mentorship, and 
            opportunities you won't find elsewhere.
          </p>
          <Link to="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-8 gap-2">
              Join Our Institute - Enquiry Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>

          {/* Globe Visual Placeholder */}
          <div className="relative mt-16 h-[300px] md:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-primary/20 to-foreground/80 shadow-2xl">
                {/* Grid lines effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(0deg, transparent 49%, hsl(var(--primary-foreground)/0.3) 50%, transparent 51%),
                      linear-gradient(90deg, transparent 49%, hsl(var(--primary-foreground)/0.3) 50%, transparent 51%)
                    `,
                    backgroundSize: '20px 20px',
                  }} />
                </div>
                
                {/* Floating Avatars */}
                <div className="absolute top-4 left-1/3 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold shadow-lg">
                  R
                </div>
                <div className="absolute top-1/4 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                  A
                </div>
                <div className="absolute bottom-1/3 left-8 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shadow-lg">
                  S
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-11 h-11 rounded-full bg-destructive flex items-center justify-center text-white font-bold shadow-lg">
                  P
                </div>
                <div className="absolute top-1/2 left-1/4 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground font-bold shadow-lg">
                  M
                </div>
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
