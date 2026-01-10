import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Incite Computer</h3>
                <p className="text-sm opacity-80">फोंडाघाट</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              महाराष्ट्र शासन व MKCL मान्यताप्राप्त संगणक प्रशिक्षण केंद्र. 
              दर्जेदार संगणक शिक्षण आणि कौशल्य विकास.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Popular Courses</h4>
            <ul className="space-y-2">
              {[
                "MS-CIT",
                "Marathi Typing",
                "English Typing",
                "CCTP",
                "Tally Prime",
                "English Speaking",
                "Advanced Excel"
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                <span className="text-sm opacity-80">
                  Phondaghat, Sindhudurg District, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+917499697181" className="text-sm opacity-80 hover:text-secondary transition-colors">
                  +917499697181
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@incitecomputer.com" className="text-sm opacity-80 hover:text-secondary transition-colors">
                  info@incitecomputer.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Incite Computer Phondaghat. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
