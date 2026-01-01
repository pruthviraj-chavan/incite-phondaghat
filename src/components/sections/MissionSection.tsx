import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[hsl(35,50%,97%)]">
      {/* Decorative Shapes */}
      <div className="absolute top-8 left-8 w-8 h-8 border-2 border-primary/30 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute top-16 right-1/4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-secondary" />
      <div className="absolute top-1/4 left-20 w-6 h-6 border-2 border-green-500/50 transform rotate-45" />
      <div className="absolute top-1/3 right-20 w-8 h-8 border-2 border-destructive/40 rounded-full" />
      <div className="absolute top-1/3 right-28 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-secondary" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-green-500/50 rounded-full" />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 border-2 border-secondary/50 transform rotate-45" />
      <div className="absolute bottom-20 left-1/2 w-8 h-8 border-2 border-destructive/40 rounded-full" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="relative lg:w-1/4">
            <div className="w-56 h-44 md:w-64 md:h-52 rounded-lg overflow-hidden shadow-lg border-4 border-secondary transform -rotate-3">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:w-2/4 text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-secondary">आमचे ध्येय</span>{" "}
              <span className="text-foreground">प्रत्येक विद्यार्थ्यामागे</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              आमचे अनुभवी प्रशिक्षक एक सुरक्षित, सहाय्यक वातावरण तयार करतात जिथे विद्यार्थी 
              वाढतात, शिकतात आणि यशस्वी करिअर घडवतात. आम्ही विश्वास ठेवतो की प्रत्येक विद्यार्थी 
              योग्य मार्गदर्शनाने उत्कृष्ट कामगिरी करू शकतो.
            </p>
            <Link to="/courses">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-full uppercase tracking-wider"
              >
                Explore All Courses
              </Button>
            </Link>
          </div>

          {/* Right Images */}
          <div className="relative lg:w-1/4 flex flex-col gap-4">
            <div className="w-48 h-36 md:w-56 md:h-44 rounded-lg overflow-hidden shadow-lg border-4 border-green-500/70 transform rotate-3 ml-auto">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400"
                alt="Computer training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-28 md:w-44 md:h-36 rounded-lg overflow-hidden shadow-lg border-4 border-destructive/60 transform -rotate-2 ml-auto mr-8">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400"
                alt="Students at computers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
