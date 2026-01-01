const teamMembers = [
  {
    name: "प्रशांत वंजुळे,",
    role: "संस्थापक व संचालक",
    color: "bg-destructive/80",
  },
  {
    name: "नेहा अरेकर",
    role: "Computer Trainer",
    color: "bg-secondary",
  },
  {
    name: "पूजा",
    role: "Senior Trainer",
    color: "bg-primary",
  },
  {
    name: "अस्मिता",
    role: "Typing Instructor",
    color: "bg-green-500",
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[hsl(35,50%,97%)]">
      {/* Decorative Shapes */}
      <div className="absolute top-16 right-20 w-8 h-8 border-2 border-green-500/50 transform rotate-45" />
      <div className="absolute top-24 right-12 w-10 h-10 border-2 border-secondary/40 rounded-full" />
      <div className="absolute top-1/4 left-12 w-6 h-6 border-2 border-green-500/50 transform rotate-45" />
      <div className="absolute bottom-1/3 left-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-secondary/40" />

      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Meet</span>{" "}
            <span className="text-secondary">Our Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            आमच्या संगणक प्रशिक्षण संस्थेत, आम्ही विश्वास ठेवतो की प्रत्येक विद्यार्थ्याला 
            शिकण्याची, वाढण्याची आणि यशस्वी होण्याची संधी मिळाली पाहिजे. आम्ही लवचिक वेळापत्रक देतो.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="flex flex-col items-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Circle */}
              <div className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full ${member.color} flex items-center justify-center mb-4 shadow-lg`}>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground">
                  {member.name.charAt(0)}
                </div>
              </div>
              {/* Name & Role */}
              <h3 className="text-lg md:text-xl font-bold text-foreground text-center uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
