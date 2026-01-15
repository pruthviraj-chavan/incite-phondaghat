import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  User,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import LogosSection from "@/components/sections/LogosSection";

const WHATSAPP_NUMBER = "917499697181";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 74996 97181"],
    action: WHATSAPP_LINK,
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@incitecomputer.com"],
    action: "mailto:info@incitecomputer.com",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Incite Computer", "Gandhi Chowk, Phondaghat", "Sindhudurg, Maharashtra"],
    action: WHATSAPP_LINK,
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
    action: WHATSAPP_LINK,
    color: "bg-destructive/10 text-destructive",
  },
];

const courses = [
  "MS-CIT",
  "Marathi Typing",
  "English Typing",
  "Office Automation",
  "Tally Prime",
  "Basic Computer",
  "KLiC Certificate in Basics of Accounting with Tally",
  "KLiC Certificate in Foundation of Financial Accounting (Tally and Excel)",
  "KLiC Certificate in Office Assistance",
  "KLiC Certificate in Office Assistance with Soft Skills",
  "KLiC Certificate in Basic Data Management with Excel",
  "KLiC Certificate in Basics of Accounting & Service Entrepreneurship",
  "KLiC Certificate in Basics of Accounting and Digital Freelancing",
  "KLiC Certificate in Photo Editing",
  "KLiC Certificate in Content Illustration",
  "KLiC Certificate in Video Editing",
  "KLiC Certificate in 3D Modeling",
  "KLiC Certificate in AutoCAD",
  "KLiC Certificate in Teaching Digital Arts",
  "KLiC Certificate in Digital Freelancing",
  "KLiC Certificate in English Language Skills & Communication Skills",
  "KLiC Certificate in Soft Skills",
  "KLiC Certificate in IT Hardware Support",
  "KLiC Certificate in IT Network Support",
  "KLiC Certificate in IT Desktop Support",
  "KLiC Certificate in IT Desktop and Security Support",
  "KLiC Certificate in Retail Management",
  "KLiC Certificate in Banking Financial Services Insurance (BFSI)",
  "KLiC Certificate in Management Basics",
  "KLiC Certificate in Social Media Marketing",
  "KLiC Certificate in Customer Focus",
  "KLiC Certificate in Service Designing and Operations",
  "KLiC Certificate in Managing Service Operations",
  "KLiC Certificate in Service Entrepreneurship",
  "KLiC Certificate in Service Quality",
  "KLiC Certificate in Management Basics with Soft Skills",
  "KLiC Certificate in Service Entrepreneurship with English and Soft Skills",
  "KLiC Certificate in Digital Freelancing with Social Media Marketing",
  "KLiC Certificate in Service Entrepreneurship and Social Media Marketing",
  "KLiC Certificate in Customer Focus with Understanding Customer Requirement",
  "KLiC Certificate in C Programming",
  "KLiC Certificate in C++ Programming",
  "KLiC Certificate in Mobile App Development Basics",
  "KLiC Certificate in C Programming & Java",
  "KLiC Certificate in Tally Prime with GST",
  "KLiC Certificate in Graphic and Web Designing",
  "KLiC Certificate in 3D Modeling, Animation and VFX",
  "KLiC Certificate in Video Editing, Animation and VFX",
  "KLiC Certificate in 3D Modeling and Game Development",
  "KLiC Certificate in Scratch and Internet of Things (IoT)",
  "KLiC Certificate in Advanced Hardware & Networking",
  "KLiC Certificate in Robotics",
  "KLiC Certificate in IT Security Support & Cyber Security",
  "KLiC Certificate in Robotics and IoT",
  "KLiC Certificate in IT Hardware and Cloud Computing",
  "KLiC Certificate in Advanced Retail Management",
  "KLiC Certificate in Advanced Banking, Financial Services & Insurance (BFSI)",
  "KLiC Certificate in Service Entrepreneurship with Data Management",
  "KLiC Certificate in Service Entrepreneurship and Data Management with Excel",
  "KLiC Certificate in Service Entrepreneurship and Data Analytics & Data Management",
  "KLiC Certificate in Mobile App Development",
  "KLiC Certificate in Python",
  "KLiC Certificate in Data Structures using C- C++",
  "KLiC Certificate in Java",
  "KLiC Certificate in C#",
  "KLiC Certificate in Database Management Systems",
  "KLiC Certificate in Mobile App Development with Web Designing",
  "KLiC Certificate in Web and Database Administrator & DBMS",
  "KLiC Certificate in Mobile App and Server API Development",
  "KLiC Certificate in PHP with HTML and CSS",
  "KLiC Certificate in PHP with DBMS",
  "KLiC Certificate in PHP with Web Designing",
  "KLiC Certificate in PHP with Server API Development",
  "KLiC Certificate in Java Programming and Server API Development",
  "KLiC Certificate in Advanced Tally Pro",
  "KLiC Certificate in Applied Advanced Accounting (Tally and Excel)",
  "KLiC Data Analytics & Data Visualisation",
  "KLiC Certificate in Data Visualisation",
  "KLiC Certificate in Excel with Python Programming for Data Analysis",
  "KLiC Certificate in Advanced Desk Top Publishing",
  "KLiC Certificate in Advanced Web Designing",
  "KLiC Certificate in Animation/VFX",
  "KLiC Certificate in Revit",
  "KLiC Certificate in Game Development (Unity 3D)",
  "KLiC Certificate in AutoCAD and Revit",
  "KLiC Cloud Computing Essentials",
  "KLiC Web and Database Administrator",
  "KLiC Certificate in HTML with CSS",
  "KLiC Certificate in PHP",
  "KLiC Certificate in Software Development and Deployment Tools",
  "KLiC Certificate in Front End Development",
  "KLiC Certificate in Server API Development",
  "KLiC Certificate in Mobile App Development & Java Programming",
  "KLiC Certificate in Mobile App Development & CSS with HTML",
  "KLiC Certificate in Java Programming with CSS & HTML",
  "KLiC Certificate in Java with Server API Development",
  "KLiC Certificate in Data Analytics and Data Visualisation with Python",
  "KLiC Certificate in Data Analytics and Data Visualisation with DBMS",
  "CCTP",
  "Other"
];

const faqs = [
  {
    question: "कोणते courses उपलब्ध आहेत?",
    answer: "आम्ही MS-CIT, Typing (Marathi/English), CCC, GCC-TBC, Tally आणि इतर अनेक courses देतो."
  },
  {
    question: "Batch timing काय आहेत?",
    answer: "Morning, Afternoon आणि Evening batches उपलब्ध आहेत. तुमच्या सोयीनुसार निवडा."
  },
  {
    question: "Fee structure काय आहे?",
    answer: "प्रत्येक course साठी वेगवेगळी fee आहे. कृपया संपर्क साधा किंवा office visit करा."
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const whatsappMessage = `🎓 *नवीन Enquiry - Incite Computer*

👤 *नाव:* ${formData.name}
📞 *फोन:* ${formData.phone}
📧 *Email:* ${formData.email || 'N/A'}
📚 *Course:* ${formData.course}
💬 *संदेश:* ${formData.message || 'N/A'}

---
_Incite Computer Phondaghat Website वरून_`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Enquiry Ready!",
      description: "WhatsApp उघडत आहे... कृपया संदेश पाठवा.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us - संपर्क करा"
        description="Contact Incite Computer Phondaghat for course enquiry. Address: Gandhi Chowk, Phondaghat, Sindhudurg. Call: +91 74996 97181. WhatsApp available. Visit us for MS-CIT, Typing, CCC course admission."
        keywords="Contact Incite Computer, Computer Classes Phondaghat Contact, MKCL Center Address, Phonda Computer Institute Phone"
        canonical="/contact"
      />
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/10 animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary/10 animate-float-delayed" />
        
        <div className="container-main relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full mb-6 animate-fade-up">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                We'd love to hear from you
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200">
              आमच्याशी संपर्क साधा. आम्ही तुम्हाला मदत करण्यास तयार आहोत. 
              Reach out for any queries about courses or admissions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 bg-background">
        <div className="container-main px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-4 md:p-6 border border-border hover:shadow-lg transition-all animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-xs md:text-sm text-muted-foreground">
                    {item.action && idx === 0 ? (
                      <a href={item.action} className="hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-main px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Send an Enquiry</h2>
                  <p className="text-sm text-muted-foreground">खालील फॉर्म भरा (WhatsApp वर पाठवले जाईल)</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="तुमचे नाव / Your Name"
                      required
                      className="h-12 pl-12"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="h-12 pl-12"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com (Optional)"
                    className="h-12 pl-12"
                  />
                </div>

                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full h-12 pl-12 pr-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none text-sm"
                  >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="तुमचा संदेश किंवा प्रश्न... (Optional)"
                  rows={4}
                  className="resize-none"
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting} 
                  className="w-full h-14 text-base bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp वर पाठवा
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right Side - FAQs & Quick Contact */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 text-primary-foreground animate-fade-up animation-delay-200">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Quick Contact
                </h3>
                <p className="text-primary-foreground/90 text-sm mb-5">
                  तात्काळ माहितीसाठी आत्ताच कॉल करा किंवा WhatsApp करा:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+917499697181"
                    className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl px-4 py-3 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+91 74996 97181</span>
                  </a>
                  <a
                    href={`https://wa.me/917499697181`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 rounded-xl px-4 py-3 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-card rounded-3xl p-6 border border-border animate-fade-up animation-delay-300">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  सामान्य प्रश्न (FAQs)
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <h4 className="font-medium text-foreground mb-1 text-sm">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-background">
        <div className="container-main px-4">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.3899999999994!2d73.7899999!3d15.8599999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUxJzM2LjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Incite Computer Location"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <LogosSection variant="light" />
    </Layout>
  );
};

export default Contact;
