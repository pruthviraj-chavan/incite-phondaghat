import { Star, Quote, Briefcase, Building2 } from "lucide-react";

const successStories = [
  {
    name: "अमित शिंदे",
    role: "Senior Clerk",
    company: "तहसील कार्यालय, फोंडाघाट",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    course: "MS-CIT",
    quote: "Incite Computer मध्ये शिकल्यामुळेच मला सरकारी नोकरी मिळाली. टायपिंग आणि संगणक ज्ञान खूप उपयोगी आले.",
  },
  {
    name: "प्रिया पाटील",
    role: "Data Entry Operator",
    company: "MSEB, सावंतवाडी",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    course: "Tally + Typing",
    quote: "प्रशांत सर आणि सर्व शिक्षकांचे आभार. त्यांच्या मार्गदर्शनाने माझे स्वप्न पूर्ण झाले!",
  },
  {
    name: "राहुल देसाई",
    role: "Bank Assistant",
    company: "SBI, कुडाळ",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    course: "CCC + Office Automation",
    quote: "इथली शिकवण्याची पद्धत अतिशय चांगली आहे. प्रात्यक्षिक शिक्षणामुळे कॉन्फिडन्स वाढला.",
  },
  {
    name: "स्नेहा कांबळे",
    role: "Computer Operator",
    company: "ZP Office, सिंधुदुर्ग",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    course: "MS-CIT + Typing",
    quote: "लहान बॅच असल्यामुळे प्रत्येकाला वैयक्तिक लक्ष मिळते. खूप छान अनुभव होता!",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-foreground">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-secondary/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container-main relative z-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-secondary">यशोगाथा</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up animation-delay-100">
            आमचे <span className="text-secondary">यशस्वी विद्यार्थी</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            आमच्या विद्यार्थ्यांच्या यशाच्या कथा ऐका. त्यांनी कसे त्यांचे स्वप्न पूर्ण केले ते जाणून घ्या.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStories.map((story, index) => (
            <div
              key={story.name}
              className="group bg-gradient-to-b from-muted/10 to-transparent rounded-2xl p-6 border border-primary-foreground/10 hover:border-secondary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-secondary/50 mb-4" />
              
              {/* Quote text */}
              <p className="text-primary-foreground/80 text-sm mb-6 line-clamp-4 italic">
                "{story.quote}"
              </p>
              
              {/* Profile */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary-foreground text-sm">{story.name}</h4>
                  <p className="text-xs text-secondary">{story.course}</p>
                </div>
              </div>
              
              {/* Company info */}
              <div className="pt-4 border-t border-primary-foreground/10 space-y-2">
                <div className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{story.role}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{story.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
