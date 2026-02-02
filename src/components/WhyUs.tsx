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
      description: "100% dedicated to fire protection systems with specialized expertise across all fire safety domains.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced technical and execution team with deep industry knowledge and certifications.",
    },
    {
      icon: Target,
      title: "Single-Point Responsibility",
      description: "Complete project ownership from design to commissioning, ensuring seamless execution.",
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description: "Strong commitment to project timelines without compromising on quality or safety standards.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Assurance",
      description: "Use of approved and tested equipment with proper documentation and certifications.",
    },
    {
      icon: HeartHandshake,
      title: "Transparent Pricing",
      description: "No hidden costs with reliable support and transparent pricing throughout the project lifecycle.",
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
            Why OM Enterprise Is Your
            <span className="text-gradient"> Best Choice</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            With years of experience and a commitment to excellence, we deliver 
            fire safety solutions that protect what matters most.
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
