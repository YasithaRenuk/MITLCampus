"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "News", href: "/news" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-4 px-4 font-sans">
      {/* Container */}
      <div
        className="
          w-full max-w-6xl
          bg-card/80 backdrop-blur-xl 
          rounded-2xl shadow-md 
          px-4 sm:px-6 py-3
          flex items-center justify-between
          border border-border/60
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-card shadow-sm rounded-xl p-1">
            <img
              src="/logo.png"
              width={55}
              height={55}
              alt="Logo"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm lg:text-base text-foreground font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  transition-colors 
                  ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Apply Button */}
        <div className="hidden md:block">
          <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 rounded-xl text-sm font-semibold">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={26} className="text-foreground" /> : <Menu size={26} className="text-foreground" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            md:hidden fixed top-[95px] left-0 w-full 
            bg-card/95 backdrop-blur-xl shadow-lg 
            py-6 px-6 space-y-6 text-center z-40
          "
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  block text-lg font-medium transition-colors
                  ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/90 hover:text-primary"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground w-full rounded-xl py-3 text-sm font-semibold">
            Apply Now
          </Button>
        </div>
      )}
    </nav>
  );
}
