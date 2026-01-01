import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 99999 99999", "+91 88888 88888"],
    action: "tel:+919999999999",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@incitecomputer.com"],
    action: "mailto:info@incitecomputer.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Incite Computer", "Phondaghat, Sindhudurg", "Maharashtra, India - 416502"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"],
  },
];

const courses = [
  "MS-CIT",
  "Marathi Typing",
  "English Typing",
  "CCC",
  "GCC-TBC",
  "Office Automation",
  "Tally Prime",
  "Basic Computer",
  "Other",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted Successfully!",
      description: "आम्ही तुमच्याशी लवकरच संपर्क साधू. धन्यवाद!",
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
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="container-main relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              आमच्याशी संपर्क साधा. आम्ही तुम्हाला मदत करण्यास तयार आहोत.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send us an <span className="text-gradient">Enquiry</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                खालील फॉर्म भरा. आम्ही तुमच्याशी लवकरच संपर्क साधू.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name / नाव *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="तुमचे नाव"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mobile Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email (Optional)
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Course Interested *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="तुमचा संदेश किंवा प्रश्न..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up animation-delay-200">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                आमच्या कार्यालयास भेट द्या किंवा खालील माध्यमांद्वारे संपर्क साधा.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {item.action ? (
                            <a
                              href={item.action}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 rounded-2xl hero-gradient">
                <h3 className="font-bold text-primary-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Quick Contact
                </h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  तात्काळ माहितीसाठी आत्ताच कॉल करा:
                </p>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 99999 99999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-8 bg-muted/50">
        <div className="container-main px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.1!2d73.8!3d16.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Incite Computer Phondaghat Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
