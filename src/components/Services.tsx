import { 
  Droplets, 
  Bell, 
  Flame, 
  FireExtinguisher,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Fire Fighting Systems",
      description: "Om Enterprises designs and installs comprehensive fire fighting systems that form the backbone of active fire protection. These systems are engineered to provide adequate water flow, pressure, and coverage to effectively control and suppress fires during emergencies.",
      features: [
        "External & Internal Fire Hydrant Systems",
        "Automatic Sprinkler Systems",
        "Hose Reel & Wet Riser Systems",
        "Fire Pump Room Installation",
        "Underground & Overhead Fire Water Tanks",
      ],
    },
    {
      icon: Bell,
      title: "Fire Detection, Alarm & Gas Detection",
      description: "Early detection is critical to minimizing fire damage and ensuring safe evacuation. We provide advanced fire detection, alarm, and gas detection systems designed for early warning and reliable emergency response.",
      features: [
        "Addressable & Conventional Fire Alarm Systems",
        "Smoke, Heat & Multi-Sensor Detectors",
        "Gas Detection (LPG, PNG, CNG, CO & Industrial Gases)",
        "Manual Call Points & Audio-Visual Devices",
        "Fire Alarm Panel Installation & Programming",
      ],
    },
    {
      icon: Flame,
      title: "Fire Suppression Systems",
      description: "For high-risk and sensitive areas, we provide specialized fire suppression systems designed to control or extinguish fires without causing secondary damage to critical equipment.",
      features: [
        "Clean Agent Gas Suppression Systems",
        "CO₂ Flooding & Local Application Systems",
        "Foam Fire Suppression Systems",
        "Kitchen Hood Fire Suppression",
        "Server Room & Electrical Panel Protection",
      ],
    },
    {
      icon: FireExtinguisher,
      title: "Fire Extinguishers & AMC Services",
      description: "Complete fire extinguisher solutions to ensure effective first-response fire safety, along with maintenance services for continuous system readiness and compliance.",
      features: [
        "Supply of All Types of Fire Extinguishers",
        "Refilling, Hydro Testing & Certification",
        "Fire Safety Audit & Gap Analysis",
        "Annual Maintenance Contracts (AMC)",
        "Emergency Breakdown Support",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Fire Protection Systems
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
        <div className="grid md:grid-cols-2 gap-8">
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
