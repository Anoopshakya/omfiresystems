import { Shield, Flame, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fire-safety.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fire Protection Systems"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fire-dark/95 via-fire-maroon/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Flame className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Fire Protection Systems Experts</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Complete Fire Protection
            <span className="block text-primary">Systems & Safety Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Om Enterprises is a specialized fire protection company delivering end-to-end fire safety solutions 
            for industrial, commercial, residential, and institutional projects. Our expertise covers the complete 
            lifecycle — from design and engineering to supply, installation, testing, commissioning, and long-term maintenance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="hero-gradient text-lg px-8 py-6 hover:opacity-90 transition-all animate-pulse-glow">
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Core Services Quick List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Shield, label: "Fire Fighting Systems" },
              { icon: Flame, label: "Detection & Alarm" },
              { icon: Award, label: "Suppression Systems" },
              { icon: Shield, label: "Extinguishers & AMC" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
