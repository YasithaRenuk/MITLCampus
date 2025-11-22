import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[900px] pb-24 font-sans">
      {/* Background Image + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/HeroBackground/hero.png"
          alt="Students celebrating"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Overlay to keep text readable in both themes */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mt-[120px] text-primary-foreground">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-secondary">MITL</span>{" "}
            <span className="text-primary">CAMPUS</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-primary-foreground/90">
            Experience world-class education in a vibrant academic community
            where innovation meets tradition. Join thousands of students
            shaping the future.
          </p>

          <Button
            className="
              bg-primary text-primary-foreground 
              hover:bg-primary/90 
              px-8 py-6 
              text-base sm:text-lg 
              rounded-xl 
              shadow-[0_18px_40px_rgba(0,0,0,0.18)]
              transition-all duration-300 
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
              hover:scale-105
            "
          >
            Explore Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Wave Divider using theme background */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,120
              C 240,180 480,200 720,170
              C 960,140 1200,60 1440,80
              L1440,200
              L0,200
              Z
            "
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
