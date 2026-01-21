import React from "react";
import p1 from "@/../public/Partners/p1.jpeg"
import p2 from "@/../public/Partners/p2.jpeg"
import p3 from "@/../public/Partners/p3.jpeg"
import p4 from "@/../public/Partners/p4.jpeg"
import p5 from "@/../public/Partners/p5.jpeg"
import p6 from "@/../public/Partners/p6.jpeg"
import Image from "next/image";


const PartnersSection: React.FC = () => {
  
  const Partnerslogos = [
    p1,p2,p3,p4,p5,p6
  ]

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
          <div className="flex items-center justify-center">
            {Partnerslogos.map((logo, index) => (
              <div className="p-5">
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
