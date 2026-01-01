import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight, Users, Award, Clock, Infinity, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const curriculum = [
  {
    title: "MS-CIT - Maharashtra State Certificate in IT",
    week: "Module 01",
    content: "Computer basics, Windows, MS Office, Internet, Email",
  },
  {
    title: "Marathi & English Typing",
    week: "Module 02",
    content: "Speed typing, accuracy, government exam patterns",
  },
  {
    title: "CCC - Course on Computer Concepts",
    week: "Module 03",
    content: "Operating system, word processing, spreadsheets, presentations",
  },
  {
    title: "GCC-TBC - Govt Commercial Certificate",
    week: "Module 04",
    content: "Typing and basic computer concepts for government jobs",
  },
  {
    title: "Office Automation & Tally",
    week: "Module 05",
    content: "Advanced Excel, Tally accounting, professional skills",
  },
  {
    title: "Advanced Computer Course",
    week: "Module 06",
    content: "DTP, Photoshop, web basics, digital literacy",
  },
];

const enrollFeatures = [
  "Instant access to all course materials",
  "Government recognized certification",
  "Practical hands-on training",
  "Placement assistance support",
];

const CurriculumSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-foreground">
            Unlock the secret to
            <br />
            <span className="text-secondary">career-ready skills.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Accordion */}
          <div className="space-y-3">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.week}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-muted-foreground">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Enrollment Card */}
          <div className="bg-foreground rounded-3xl p-8 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-secondary text-secondary-foreground text-xs font-medium px-4 py-2 rounded-full">
                100% Job-Ready Training
              </span>
              <div className="flex items-center gap-1 bg-card/10 px-3 py-1 rounded-full">
                <span className="text-primary-foreground text-xs">✨ Certified</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Join Incite Computer Today
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm">Beginner Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-sm">Govt Certificate</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm">Flexible Timings</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Infinity className="w-5 h-5 text-secondary" />
                <span className="text-sm">Lifetime Support</span>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-6 mb-6">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                A Quick Overview of the Course
              </span>
              <ul className="mt-4 space-y-3">
                {enrollFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="block">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full py-6 gap-2">
                Enquiry Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
