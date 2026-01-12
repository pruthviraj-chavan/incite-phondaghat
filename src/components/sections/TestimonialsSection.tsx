import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Incite Computer मध्ये MS-CIT शिकणे ही माझ्या आयुष्यातील सर्वोत्तम निर्णय होती. शिक्षक खूप मदत करतात आणि practical training उत्कृष्ट आहे. आता मला बँकेत नोकरी मिळाली!",
    name: "Samarth Revdekar",
    role: "MS-CIT विद्यार्थी",
    color: "from-blue-500 to-cyan-500",
  },
  {
    text: "टायपिंग शिकायला सुरुवात केली तेव्हा मला काहीच येत नव्हते. पण सरांच्या मार्गदर्शनाने आता माझी स्पीड ५० WPM आहे. गव्हर्नमेंट exam साठी हे खूप उपयोगी ठरले.",
    name: "Aditya Tavde",
    role: "टायपिंग विद्यार्थी",
    color: "from-purple-500 to-pink-500",
  },
  {
    text: "Tally कोर्स करून मला कॉम्प्युटर ऑपरेटर म्हणून नोकरी मिळाली. कोर्सची फी परवडणारी आहे आणि शिक्षण दर्जेदार आहे. सर्वांना शिफारस करतो.",
    name: "Dhanshree Bagave",
    role: "Tally विद्यार्थिनी",
    color: "from-orange-500 to-red-500",
  },
  {
    text: "Advance Excel घेतल्यानंतर माझ्या करिअरला नवीन दिशा मिळाली. Incite Computer चे वातावरण खूप चांगले आहे आणि सर खूप अनुभवी आहेत.",
    name: "Asmita Pednekar",
    role: "Excel विद्यार्थिनी",
    color: "from-green-500 to-teal-500",
  },
  {
    text: "Tally आणि Excel शिकल्यानंतर मला accounting मध्ये नोकरी मिळाली. Practical training मुळे job मध्ये लगेच काम करता आले. धन्यवाद Incite Computer!",
    name: "Neha Arekar",
    role: "Tally विद्यार्थिनी",
    color: "from-indigo-500 to-purple-500",
  },
  {
    text: "माझ्या मुलाला इथे MS-CIT साठी पाठवले. शिक्षकांचे लक्ष प्रत्येक विद्यार्थ्यावर असते. वेळेत सर्टिफिकेट मिळाले आणि आता त्याला चांगली नोकरी आहे.",
    name: "Tanisha Rasam",
    role: "MS-CIT विद्यार्थिनी",
    color: "from-yellow-500 to-orange-500",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.3))`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-main relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-secondary">विद्यार्थ्यांचे अनुभव</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            विद्यार्थी काय म्हणतात?
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Card */}
            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border overflow-hidden">
              {/* Decorative Gradient */}
              <div className={`absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br ${testimonials[activeIndex].color} opacity-10 blur-3xl`} />
              
              {/* Quote Icon */}
              <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center opacity-20`}>
                <Quote className="w-8 h-8 text-white" />
              </div>

              <div className="relative z-10 pt-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl lg:text-2xl text-center text-foreground leading-relaxed mb-8 transition-all duration-500">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground">{testimonials[activeIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-secondary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid - Desktop Only */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className={`cursor-pointer bg-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
                index === activeIndex
                  ? "border-secondary shadow-lg scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
