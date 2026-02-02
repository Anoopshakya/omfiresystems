import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Fire Protection System Design",
      description: "Expert engineering and design for comprehensive fire safety systems",
    },
    {
      icon: Zap,
      title: "Installation & Testing",
      description: "Professional supply, installation, testing, and commissioning services",
    },
    {
      icon: Users,
      title: "Statutory Compliance",
      description: "Full compliance with fire safety norms and industry standards",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About OM Enterprise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in
              <span className="text-gradient block">Fire Safety Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              OM Enterprise is a professionally managed organization specializing in Fire Fighting Systems, 
              Fire Detection & Alarm Systems, and comprehensive Fire Safety Solutions. We deliver end-to-end 
              fire protection projects for industrial, commercial, residential, and institutional facilities.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our operations are aligned with applicable fire safety norms and best industry practices. 
              We focus on safety, compliance, and timely execution to ensure complete peace of mind for our clients.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "Compliance with all applicable Fire Safety Norms",
                "Use of approved & tested equipment",
                "Proper testing, commissioning & documentation",
                "Safety-first execution methodology",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 card-shadow card-shadow-hover border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
