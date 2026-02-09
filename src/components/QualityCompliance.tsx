import { ShieldCheck, ClipboardCheck, Wrench, Building } from "lucide-react";

const QualityCompliance = () => {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "Standards Compliance",
      description: "All systems executed in strict accordance with applicable fire safety norms, approved drawings, and client specifications.",
    },
    {
      icon: ClipboardCheck,
      title: "Structured Procedures",
      description: "Structured installation, testing, and commissioning procedures supported by proper documentation and inspection records.",
    },
    {
      icon: Wrench,
      title: "Safety-First Approach",
      description: "Our safety-first approach ensures system reliability, audit readiness, and long-term performance.",
    },
  ];

  const supportServices = [
    "Civil works for fire system installation",
    "Pump room & fire tank construction",
    "Trenching, core cutting & restoration",
    "Minor electrical & structural support works",
  ];

  return (
    <section id="quality" className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Quality, Safety & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Commitment to
            <span className="text-gradient"> Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Quality and safety are integral to our operations. All fire protection systems are executed 
            in strict accordance with applicable fire safety norms, approved drawings, and client specifications.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow card-shadow-hover border border-border/50 text-center"
            >
              <div className="hero-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting & Allied Works */}
        <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="hero-gradient p-3 rounded-lg">
                  <Building className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Supporting & Allied Works
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To ensure smooth and coordinated execution of fire safety projects, Om Enterprises also 
                undertakes supporting civil and allied works directly related to fire system installation. 
                These works are executed strictly as part of fire protection projects, ensuring quality control 
                and timely completion.
              </p>
            </div>
            <div className="space-y-3">
              {supportServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCompliance;
