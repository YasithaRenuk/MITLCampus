import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  course: string;
  batch: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  course,
  batch,
  testimonial,
  image,
}) => {
  return (
    <Card
      className="
        relative overflow-hidden 
        bg-card 
        rounded-[32px] 
        shadow-[0_18px_40px_rgba(0,0,0,0.08)]
        border border-border 
        font-sans
      "
    >
      <CardContent className="p-4 sm:p-6">
        {/* Stack on mobile, 2 columns on md */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] min-h-[300px]">
          
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Top arc with batch text */}
            <div className="relative h-[120px] overflow-hidden">
              {/* Circle background (primary) */}
              <div className="absolute -left-24 -top-24 w-56 h-56 bg-primary rounded-full" />

              <div className="relative z-10 flex flex-col justify-center pl-6 pt-6 text-primary-foreground">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Batch Of
                </p>
                <p className="text-3xl sm:text-4xl font-extrabold leading-none">
                  {batch}
                </p>
              </div>
            </div>

            {/* Bottom arc with student image */}
            <div className="relative h-[180px] bg-muted overflow-hidden rounded-b-[32px] md:rounded-bl-[32px] md:rounded-br-none">
              {/* Decorative circle */}
              <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-primary rounded-full" />

              <img
                src={image}
                alt={name}
                className="
                  relative z-10 
                  h-full w-auto 
                  object-contain 
                  mx-auto
                "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center px-2 pt-6 md:px-10 md:py-8">
            <h3 className="text-lg sm:text-2xl font-bold text-card-foreground mb-2 sm:mb-3 text-center md:text-left">
              {name}
            </h3>

            {/* Course Pill */}
            <div className="mb-4 sm:mb-5 flex justify-center md:justify-start">
              <span
  className="
    inline-flex items-center justify-center
    bg-primary text-primary-foreground 
    px-6 sm:px-8 py-2 
    rounded-full 
    text-xs sm:text-sm font-semibold
    md:whitespace-nowrap
  "
>
  {course}
</span>

            </div>

            {/* Testimonial Text */}
            <p className="text-muted-foreground text-sm leading-relaxed text-center md:text-left">
              {testimonial}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
