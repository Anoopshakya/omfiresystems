const Clients = () => {
  const clients = [
    "Tata Project Ltd.",
    "Tata Unistore Ltd. (TATA Cliq)",
    "Reliance Nippon Life Insurance",
    "Bajaj Allianz General Insurance",
    "Samco Securities Ltd.",
    "Hiranandani Group",
    "Transworld Group",
    "Link Intime India Pvt Ltd.",
    "Four Pillars InfoTech",
    "Incred Financial Services",
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

        {/* Clients Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 bg-card rounded-xl px-8 py-4 shadow-sm border border-border/50 min-w-[200px]"
              >
                <p className="font-semibold text-foreground text-center whitespace-nowrap">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Clients;
