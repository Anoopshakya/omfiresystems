import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Fire Fighting Systems",
    "Fire Detection & Alarm",
    "Fire Suppression Systems",
    "Fire Extinguishers & AMC",
    "Safety Audits",
    "Civil Works Support",
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="dark-gradient text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Om Enterprises Logo" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Om Enterprises is a professionally managed organization specializing in Fire Protection Systems & Safety Solutions. Delivering excellence across India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-primary-foreground/70">A 509, Shree Sadguru Tower Mumbra Devi Colony Road Diva East, Thane Maharastra 400612</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Branch Office</p>
                  <p className="text-primary-foreground/70">D-49 Kanwani, Jalalpur Kerakat Road, Jaunpur, Uttar Pradesh 222146</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:+919702303882"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +91 97023 03882
                </a>
              </li>
              <li>
                <a
                  href="mailto:omenterprises0021@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  omenterprises0021@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Om Enterprises. All rights reserved. | Fire Protection Systems & Safety Solutions
            </p>
            <p className="text-primary-foreground/60 text-sm font-medium">
              Safety | Compliance | Reliability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
