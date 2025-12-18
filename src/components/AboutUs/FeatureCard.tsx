"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, UsersRound, Star } from "lucide-react";

const icons = {
  flask: FlaskConical,
  faculty: UsersRound,
  star: Star,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}



export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  const Icon = icons[icon as keyof typeof icons] || Star;

  return (
    
    
    <Card
      className="
        w-full max-w-sm           /*
        rounded-t-3xl rounded-b-xl 
        border border-gray-200 shadow-md 
        hover:shadow-lg transition 
        p-4 sm:p-5               /*
        bg-white 
        border-b-4 border-b-blue-300
      "
    >
      <CardContent className="flex flex-col gap-3 sm:gap-4 p-0">
        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
