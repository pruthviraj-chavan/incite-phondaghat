import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpen, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    label: "FLEXIBLE BATCHES",
    description: "सोयीनुसार Morning, Afternoon किंवा Evening batches निवडा. Working professionals साठी Weekend batches उपलब्ध.",
  },
  {
    icon: BookOpen,
    label: "PRACTICAL TRAINING",
    description: "प्रत्येक विद्यार्थ्याला hands-on practice. Individual computer access आणि step-by-step guidance.",
  },
  {
    icon: Settings,
    label: "CAREER SUPPORT",
    description: "Course completion नंतर job assistance. Resume building आणि interview preparation support.",
  },
];

const courseFeatures = [
  "Government recognized certificates",
  "Experienced & certified trainers",
  "Modern computer lab facility",
  "Affordable fee structure",
];

const CourseHighlightSection = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground overflow-hidden relative">
      {/* Decorative diamonds */}
      <div className="absolute top-16 left-1/4 w-3 h-3 bg-muted/20 transform rotate-45" />
      <div className="absolute top-20 right-1/3 w-3 h-3 bg-muted/20 transform rotate-45" />

      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-muted-foreground text-sm uppercase tracking-wider">
            Introducing Our Courses
          </span>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            The Complete Guide for
            <br />
            <span className="text-secondary">Career-Ready</span> Computer Skills
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card - Course Intro */}
          <div className="bg-gradient-to-br from-[hsl(30,50%,25%)] to-[hsl(25,60%,15%)] rounded-3xl p-8 relative overflow-hidden">
            <span className="inline-block bg-card/10 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-6">
              Get Ahead
            </span>
            
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6 leading-snug">
              Introducing our comprehensive computer training for all students & professionals.
            </h3>

            <Link to="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-6 gap-2 mb-8">
                Enquiry Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <p className="text-primary-foreground/80 mb-6">
              Computer skills शिकून नवीन career opportunities unlock करा.
            </p>

            {/* Floating Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-card/10 text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/30" />
                MS-CIT Expert
              </span>
              <span className="bg-card/10 text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary/30" />
                Typing Master
              </span>
              <span className="bg-card/10 text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/30" />
                Office Pro
              </span>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card/5 rounded-2xl p-6 flex items-start gap-4 hover:bg-card/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-card/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {feature.label}
                  </span>
                  <p className="text-primary-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlightSection;
