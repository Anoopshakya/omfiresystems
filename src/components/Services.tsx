import { 
  Droplets, 
  Bell, 
  Flame, 
  FireExtinguisher,
  Settings,
  Building,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Fire Fighting Systems",
      description: "Complete fire hydrant systems, automatic sprinklers, hose reels, wet risers, and pump room installations for maximum protection.",
      features: [
        "Fire Hydrant Systems (External & Internal)",
        "Automatic Sprinkler Systems",
        "Hose Reel & Wet Riser Systems",
        "Fire Pump Room Installation",
      ],
    },
    {
      icon: Bell,
      title: "Fire Detection & Alarm Systems",
      description: "State-of-the-art detection and alarm systems to provide early warning and rapid response capabilities.",
      features: [
        "Addressable Fire Alarm Systems",
        "Conventional Fire Alarm Systems",
        "Smoke, Heat & Multi-Sensor Detectors",
        "Fire Alarm Panel Installation",
      ],
    },
    {
      icon: Flame,
      title: "Fire Suppression Systems",
      description: "Specialized suppression systems designed to protect critical areas and high-value assets.",
      features: [
        "Clean Agent Gas Suppression",
        "CO₂ Flooding Systems",
        "Foam-Based Suppression",
        "Kitchen Hood Fire Suppression",
      ],
    },
    {
      icon: FireExtinguisher,
      title: "Fire Extinguishers & AMC",
      description: "Complete range of fire extinguishers with regular maintenance, refilling, and certification services.",
      features: [
        "All Types of Fire Extinguishers",
        "Refilling & Hydro Testing",
        "Annual Maintenance Contracts",
        "Emergency Breakdown Support",
      ],
    },
    {
      icon: Settings,
      title: "Safety Audit & Compliance",
      description: "Comprehensive fire safety audits and gap analysis to ensure full regulatory compliance.",
      features: [
        "Fire Safety Audit",
        "Gap Analysis Reports",
        "Compliance Documentation",
        "Regulatory Support",
      ],
    },
    {
      icon: Building,
      title: "Civil & Support Services",
      description: "Complete civil works support for fire system installations including construction and restoration.",
      features: [
        "Pump Room & Tank Construction",
        "Core Cutting & Trenching",
        "Minor Electrical Support",
        "Civil Maintenance Works",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Fire
            <span className="text-gradient"> Protection Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From design to installation, testing to maintenance, we provide complete 
            end-to-end fire safety solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 card-shadow card-shadow-hover border border-border/50 relative overflow-hidden"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 hero-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon */}
              <div className="hero-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
              >
                Get Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="hero-gradient text-lg px-8 py-6 hover:opacity-90 transition-opacity">
            <a href="#contact">
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
