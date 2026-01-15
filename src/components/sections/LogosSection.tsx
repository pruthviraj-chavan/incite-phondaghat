import mkclLogo from "@/assets/logos/mkcl-logo.png";
import klicLogo from "@/assets/logos/klic-logo.png";
import mkclCoursesLogo from "@/assets/logos/mkcl-courses-logo.png";
import klicCoursesOfficial from "@/assets/logos/klic-courses-official.png";
import mscitLogo from "@/assets/logos/mscit-logo.png";
import cctpLogo from "@/assets/logos/cctp-logo.png";
import mkclOfficial from "@/assets/logos/mkcl-official.png";

const logos = [
  { name: "MKCL", logo: mkclOfficial },
  { name: "KLiC Courses", logo: klicCoursesOfficial },
  { name: "MS-CIT", logo: mscitLogo },
  { name: "CCTP", logo: cctpLogo },
  { name: "MKCL Partner", logo: mkclLogo },
  { name: "KLiC", logo: klicLogo },
  { name: "Courses", logo: mkclCoursesLogo },
];

interface LogosSectionProps {
  variant?: "light" | "dark";
  showTitle?: boolean;
}

const LogosSection = ({ variant = "light", showTitle = true }: LogosSectionProps) => {
  const bgClass = variant === "dark" ? "bg-foreground" : "bg-muted/30";
  const textClass = variant === "dark" ? "text-primary-foreground" : "text-foreground";
  const subTextClass = variant === "dark" ? "text-primary-foreground/70" : "text-muted-foreground";

  return (
    <section className={`py-12 ${bgClass} overflow-hidden`}>
      <div className="container-main px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <h3 className={`text-lg md:text-xl font-semibold ${textClass} mb-2`}>
              Authorized Partner & Affiliated With
            </h3>
            <p className={`text-sm ${subTextClass}`}>
              Government Recognized Certifications
            </p>
          </div>
        )}

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-logos-marquee gap-12 md:gap-16 items-center">
            {[...logos, ...logos, ...logos].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center shrink-0"
              >
                <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm border border-border/50">
                  <img 
                    src={item.logo} 
                    alt={item.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logos-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-logos-marquee {
          animation: logos-marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default LogosSection;
