import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Incite Computer मध्ये MS-CIT शिकणे ही माझ्या आयुष्यातील सर्वोत्तम निर्णय होती. शिक्षक खूप मदत करतात आणि practical training उत्कृष्ट आहे. आता मला बँकेत नोकरी मिळाली!",
    name: "Samarth Revdekar",
    role: "MS-CIT विद्यार्थी",
  },
  {
    text: "टायपिंग शिकायला सुरुवात केली तेव्हा मला काहीच येत नव्हते. पण सरांच्या मार्गदर्शनाने आता माझी स्पीड ५० WPM आहे. गव्हर्नमेंट exam साठी हे खूप उपयोगी ठरले.",
    name: "Aditya Tavde",
    role: "टायपिंग विद्यार्थिी",
  },
  {
    text: "Tally कोर्स करून मला कॉम्प्युटर ऑपरेटर म्हणून नोकरी मिळाली. कोर्सची फी परवडणारी आहे आणि शिक्षण दर्जेदार आहे. सर्वांना शिफारस करतो.",
    name: "Dhanshree Bagave",
    role: "Tally विद्यार्थिनी",
  },
  {
    text: "Advance Excel घेतल्यानंतर माझ्या करिअरला नवीन दिशा मिळाली. Incite Computer चे वातावरण खूप चांगले आहे आणि सर खूप अनुभवी आहेत.",
    name:"Asmita Pednekar",
    role: "Excel विद्यार्थिनीथीी",
  },
  {
    text: "Tally आणि Excel शिकल्यानंतर मला accounting मध्ये नोकरी मिळाली. Practical training मुळे job मध्ये लगेच काम करता आले. धन्यवाद Incite Computer!",
    name: "Neha Arekar",
    role: "Tally विद्यार्थिनी ",
  },
  {
    text: "माझ्या मुलाला इथे MS-CIT साठी पाठवले. शिक्षकांचे लक्ष प्रत्येक विद्यार्थ्यावर असते. वेळेत सर्टिफिकेट मिळाले आणि आता त्याला चांगली नोकरी आहे.",
    name: "Tanisha Rasam",
    role: "Mscit विद्यार्थिनी ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[hsl(340,70%,95%)] overflow-hidden">
      {/* Decorative Top Element */}
      <div className="flex justify-center mb-8">
        <div className="text-primary text-5xl">✦</div>
      </div>

      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
            विद्यार्थ्यांचे अनुभव
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            विद्यार्थी काय म्हणतात?
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[350px] bg-card rounded-2xl p-6 shadow-lg snap-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
