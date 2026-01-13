import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Clock, 
  Users, 
  Monitor, 
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "शासन मान्यताप्राप्त",
    description: "MKCL व महाराष्ट्र शासन मान्यताप्राप्त प्रमाणपत्रे",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Award,
    title: "98% यश दर",
    description: "आमच्या विद्यार्थ्यांचा परीक्षेत उच्च यश दर",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Clock,
    title: "लवचिक वेळापत्रक",
    description: "सकाळ, दुपार आणि संध्याकाळ बॅच उपलब्ध",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Users,
    title: "वैयक्तिक लक्ष",
    description: "लहान बॅच साइझमुळे प्रत्येक विद्यार्थ्याला वैयक्तिक मार्गदर्शन",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Monitor,
    title: "आधुनिक प्रयोगशाळा",
    description: "नवीनतम संगणक आणि सॉफ्टवेअर सुविधा",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Target,
    title: "प्लेसमेंट सहाय्य",
    description: "नोकरी मिळवण्यासाठी मार्गदर्शन आणि सहाय्य",
    color: "bg-orange-500/10 text-orange-500",
  },
];

const WhyJoinUsSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-dashed border-secondary/30 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
      
      <div className="container-main relative z-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">आमची वैशिष्ट्ये</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
            <span className="text-secondary">Incite Computer</span> का निवडावे?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200">
            आम्ही फक्त शिकवत नाही, आम्ही करिअर घडवतो. आमच्या विद्यार्थ्यांचे यश हेच आमचे मोठे बक्षीस!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            आजच आपल्या करिअरची सुरुवात करा!
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            आमच्याशी संपर्क साधा आणि मोफत मार्गदर्शन मिळवा. तुमच्या यशाच्या प्रवासाची सुरुवात इथून होते.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                आता संपर्क करा
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="heroOutline" size="lg">
                कोर्सेस पहा
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
