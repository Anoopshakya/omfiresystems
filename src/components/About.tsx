import { CheckCircle, Target, Eye, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Om Enterprises is a professionally managed organization specializing exclusively in fire protection 
              systems and fire safety solutions. We serve a wide range of sectors with technically sound, reliable, 
              and cost-effective fire safety systems tailored to site-specific risks and regulatory requirements.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our strength lies in combining skilled manpower, quality equipment, and structured execution methods 
              to deliver systems that ensure safety, reliability, and long-term performance.
            </p>

            {/* Checklist - Why Choose Us highlights */}
            <div className="space-y-4">
              {[
                "Dedicated fire safety-focused organization",
                "Experienced technical and execution team",
                "Compliance-driven project execution",
                "Single-point responsibility",
                "Timely delivery and dependable support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Vision & Mission */}
          <div className="space-y-6">
            {/* Vision Card */}
            <div className="bg-card rounded-xl p-6 card-shadow card-shadow-hover border border-border/50">
              <div className="flex items-start gap-4">
                <div className="hero-gradient p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To become a trusted and preferred fire safety solutions provider recognized for 
                    quality, compliance, and execution excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-card rounded-xl p-6 card-shadow card-shadow-hover border border-border/50">
              <div className="flex items-start gap-4">
                <div className="hero-gradient p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      To deliver end-to-end fire protection solutions
                    </li>
                    <li className="flex items-start gap-2">
                      <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      To strictly adhere to applicable fire safety norms
                    </li>
                    <li className="flex items-start gap-2">
                      <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      To execute projects with professionalism and transparency
                    </li>
                    <li className="flex items-start gap-2">
                      <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      To build long-term client relationships through dependable service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
