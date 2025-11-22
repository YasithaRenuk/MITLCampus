import React from "react";

const PartnersSection: React.FC = () => {
  return (
    <section className="w-full bg-background py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            Our <span className="text-secondary">Partners</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            We partner with some of the best Educational Partners worldwide
          </p>
        </div>

        {/* Partners Image Container */}
        <div className="bg-card rounded-2xl shadow-sm p-8 md:p-4 border border-border">
          <div className="flex items-center justify-center">
            <img
              src="/Partners/image 37.png"
              alt="Our Educational Partners"
              className="w-full max-w-5xl h-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
