"use client";
import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribe email:", email);
  };

  return (
    <footer className="relative w-full bg-primary overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 h-[260px] sm:h-[320px] md:h-[400px] z-0">
        <img
          src="/footerBackground.png"
          alt="Campus students"
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Top CTA */}
      <div className="relative z-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-primary-foreground">
            <span>If You Have Any </span>
            <span className="px-2 bg-card text-primary rounded-full sm:bg-transparent sm:text-primary text-xl md:text-5xl">
              Questions
            </span>
          </h2>
          <Link href={"/contact"}>
            <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative z-10 -mb-1">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0Z"
            fill="var(--primary)"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="relative z-20 bg-primary pt-8 sm:pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* Social Media */}
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <h3 className="text-primary-foreground text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Follow Us On
            </h3>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>

            <div className="border-t border-primary-foreground/40 w-full max-w-5xl" />
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-card rounded-lg p-4 shadow-lg relative overflow-hidden w-full max-w-[260px]">
                <img
                  src="/footerLogo.png"
                  alt="MITL Campus Logo"
                  className="w-full h-auto z-10 relative"
                />
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="text-center sm:text-left">
              <h4 className="text-primary-foreground font-bold text-xs sm:text-sm uppercase mb-6 tracking-wide">
                QUICK NAVIGATION
              </h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Contact Us", "Courses", "News", "Register"].map(
                  (item) => (
                    <li key={item}>
                      <a className="text-primary-foreground hover:text-accent-foreground transition-colors text-xs sm:text-sm">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="text-primary-foreground font-bold text-xs sm:text-sm uppercase mb-6 tracking-wide">
                CONTACT DETAILS
              </h4>
              <ul className="space-y-3 text-primary-foreground text-xs sm:text-sm">
                <li>Tel: (+94) 035-2246013</li>
                <li>boaring@gmail.com</li>
                <li>Boralesgamuwa, Sri Lanka.</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="text-center sm:text-left">
              <h4 className="text-primary-foreground font-bold text-xs sm:text-sm uppercase mb-3 sm:mb-4 tracking-wide">
                Stay Updated
              </h4>
              <p className="text-primary-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for updates.
              </p>

              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card text-foreground placeholder:text-muted-foreground border border-border text-xs sm:text-sm"
                />

                <Button
                  onClick={handleSubscribe}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 sm:px-6 w-full text-xs sm:text-sm"
                >
                  Subscribe
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
