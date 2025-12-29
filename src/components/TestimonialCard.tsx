import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react"; // Assuming you use Lucide icons, otherwise I've included an SVG fallback in the code below

interface TestimonialCardProps {
  name: string;
  course?: string;
  batch?: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  course,
  batch,
  testimonial,
}) => {
  return (
    <Card
      className="
        relative 
        overflow-hidden 
        bg-card 
        rounded-[24px] 
        shadow-sm hover:shadow-md transition-shadow duration-300
        border border-border 
        font-sans
        h-full
        flex flex-col
      "
    >
      <CardContent className="p-6 sm:p-8 flex flex-col h-full justify-between gap-6">
        
        {/* HEADER: Quote Icon & Optional Batch */}
        <div className="flex justify-between items-start">
          {/* Decorative Quote Icon */}
          <div className="text-primary/20">
            <QuoteIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Conditional Batch Badge */}
          {batch && (
            <div className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-border">
              Batch {batch}
            </div>
          )}
        </div>

        {/* BODY: Testimonial Text */}
        <div className="relative z-10">
          <p className="text-card-foreground/80 text-base sm:text-lg leading-relaxed italic">
            "{testimonial}"
          </p>
        </div>

        {/* FOOTER: Author & Course */}
        <div className="pt-4 mt-auto border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Name */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-card-foreground">
              {name}
            </h3>
          </div>

          {/* Course Badge */}
          {!course ? "":
          (

          <span
            className="
              inline-flex items-center justify-center
              bg-primary text-primary-foreground 
              px-4 py-1.5
              rounded-full 
              text-xs font-semibold
              w-fit
            "
          >
            {course}
          </span>
          )}
        </div>
      </CardContent>

      {/* Optional: Subtle decorative gradient blob in background for visual interest */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
    </Card>
  );
};

// Fallback SVG Icon component if you don't have lucide-react installed
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46462 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z" />
  </svg>
);

export default TestimonialCard;