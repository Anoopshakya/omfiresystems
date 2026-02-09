import { 
  Factory, 
  Warehouse, 
  Building2, 
  Hospital, 
  GraduationCap, 
  Home,
  Landmark
} from "lucide-react";

const Industries = () => {
  const industries = [
    { icon: Factory, name: "Industrial Plants", description: "Manufacturing & Processing Units" },
    { icon: Warehouse, name: "Warehouses", description: "Logistics & Storage Facilities" },
    { icon: Building2, name: "Commercial", description: "IT Parks & Commercial Buildings" },
    { icon: Hospital, name: "Healthcare", description: "Hospitals & Medical Facilities" },
    { icon: GraduationCap, name: "Educational", description: "Schools & Institutions" },
    { icon: Home, name: "Residential", description: "High-Rise Buildings & Complexes" },
    { icon: Landmark, name: "Government", description: "Government & Semi-Govt Projects" },
  ];

  return (
    <section id="industries" className="section-padding dark-gradient">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Customized Fire Safety
            <span className="text-primary block">Across All Sectors</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            We provide customized fire safety solutions across a wide range of sectors. 
            Our sector-specific expertise allows us to address unique fire risks effectively and efficiently.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <industry.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                {industry.name}
              </h3>
              <p className="text-sm text-primary-foreground/60">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
