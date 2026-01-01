import { Star } from "lucide-react";

const testimonials = [
  {
    text: "MS-CIT कोर्स खूप छान शिकवला. Teachers खूप helpful आहेत. आता मला सरकारी नोकरीत selection मिळाले!",
    name: "रोहित पाटील",
    role: "MS-CIT Student",
  },
  {
    text: "Typing classes excellent आहेत. 40 WPM speed मिळवली. Daily practice आणि guidance मुळे possible झाले.",
    name: "प्रियंका जोशी",
    role: "Typing Course Student",
  },
  {
    text: "CCC course साठी best institute. Practical training आणि exam preparation खूप चांगली होती.",
    name: "अमित देशमुख",
    role: "CCC Course Student",
  },
  {
    text: "GCC-TBC certificate मिळाले. Job ready झालो. Thank you Incite Computer!",
    name: "सुनील कुलकर्णी",
    role: "GCC-TBC Student",
  },
  {
    text: "Office Automation course केला. MS Office, Excel, PowerPoint सगळं शिकवलं. Very practical training.",
    name: "स्वाती शिंदे",
    role: "Office Automation Student",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            What the Students Say
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
                      className="w-5 h-5 fill-foreground text-foreground" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed font-medium">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
