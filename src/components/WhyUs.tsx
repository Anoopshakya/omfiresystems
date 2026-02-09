import { 
  Shield, 
  Users, 
  Target, 
  Clock, 
  BadgeCheck, 
  HeartHandshake 
} from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Fire Safety Focused",
      description: "Dedicated fire safety-focused organization with specialized expertise across all fire protection domains.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced technical and execution team with deep industry knowledge and hands-on project experience.",
    },
    {
      icon: BadgeCheck,
      title: "Compliance-Driven Execution",
      description: "All fire protection systems executed in strict accordance with applicable fire safety norms and approved standards.",
    },
    {
      icon: Target,
      title: "Single-Point Responsibility",
      description: "Complete project ownership from design to commissioning, ensuring seamless and coordinated execution.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Strong commitment to project timelines with dependable support throughout the project lifecycle.",
    },
    {
      icon: HeartHandshake,
      title: "Transparent & Reliable",
      description: "No hidden costs with transparent pricing, proper documentation, and long-term client relationship focus.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="text-gradient"> Om Enterprises</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We operate with a strong commitment to life safety, property protection, and statutory compliance, 
            ensuring that all fire systems are executed as per approved standards and best industry practices.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="hero-gradient w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
