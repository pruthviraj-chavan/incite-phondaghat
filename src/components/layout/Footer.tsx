import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/90 to-primary/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />

      <div className="relative z-10 text-primary-foreground">
        {/* Main Footer Content */}
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Incite Computer</h3>
                  <p className="text-sm opacity-80">फोंडाघाट</p>
                </div>
              </Link>
              <p className="text-sm opacity-80 leading-relaxed mb-6">
                महाराष्ट्र शासन व MKCL मान्यताप्राप्त संगणक प्रशिक्षण केंद्र. 
                दर्जेदार संगणक शिक्षण आणि कौशल्य विकास.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/917499697181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-[#25D366] hover:scale-110 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Courses", path: "/courses" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "AI Tools", path: "/ai-tools" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-80 hover:opacity-100 hover:text-secondary hover:translate-x-2 transition-all inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Popular Courses
              </h4>
              <ul className="space-y-3">
                {[
                  "MS-CIT",
                  "Marathi Typing",
                  "English Typing",
                  "CCTP",
                  "Tally Prime",
                  "Advanced Excel",
                  "KLiC Courses",
                ].map((course) => (
                  <li key={course}>
                    <Link
                      to="/courses"
                      className="text-sm opacity-80 hover:opacity-100 hover:text-secondary hover:translate-x-2 transition-all inline-block"
                    >
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-secondary rounded-full" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm opacity-80">
                    Gandhi Chowk, Phondaghat,<br />
                    Sindhudurg, Maharashtra
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <a href="tel:+917499697181" className="text-sm opacity-80 hover:text-secondary transition-colors">
                    +91 74996 97181
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <a href="mailto:info@incitecomputer.com" className="text-sm opacity-80 hover:text-secondary transition-colors">
                    info@incitecomputer.com
                  </a>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917499697181"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container-main px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-sm opacity-70">
                © {new Date().getFullYear()} Incite Computer Phondaghat. All Rights Reserved.
              </p>
              <p className="text-sm opacity-70 flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Phondaghat
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
