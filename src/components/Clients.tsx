import React from "react";
import tataProjects from "@/assets/clients/tata-projects.png";
import tataCliq from "@/assets/clients/tata-cliq.png";
import relianceNippon from "@/assets/clients/reliance-nippon.png";
import bajajAllianz from "@/assets/clients/bajaj-allianz.png";
import samco from "@/assets/clients/samco.png";
import hiranandani from "@/assets/clients/hiranandani.png";
import transworld from "@/assets/clients/transworld.png";
import linkIntime from "@/assets/clients/link-intime.png";
import fourPillars from "@/assets/clients/four-pillars.png";
import incred from "@/assets/clients/incred.png";

type Client = {
  name: string;
  logo: string;
};

const Clients: React.FC = () => {
  const clients: Client[] = [
   { name: "Tata Project Ltd.", logo: tataProjects },
    { name: "TATA Cliq", logo: tataCliq },
    { name: "Reliance Nippon Life Insurance", logo: relianceNippon },
    { name: "Bajaj Allianz", logo: bajajAllianz },
    { name: "Samco Securities", logo: samco },
    { name: "Hiranandani Group", logo: hiranandani },
    { name: "Transworld Group", logo: transworld },
    { name: "Link Intime India", logo: linkIntime },
    { name: "Four Pillars InfoTech", logo: fourPillars },
    { name: "Incred Financial Services", logo: incred },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto container-padding">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our Valued Clients
          </h2>
        </div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;