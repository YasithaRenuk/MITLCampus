import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface CourseCardProps {
  title: string;
  type: string;
  image: string;
  onMoreDetails?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  type,
  image,
  onMoreDetails,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card
      className="
        w-full max-w-full sm:max-w-sm md:max-w-[500px]
        overflow-hidden
        hover:shadow-lg transition-shadow duration-300
        rounded-xl pt-0
      "
    >
      {/* Image wrapper - full width, fixed aspect ratio */}
      <div
        className="
          relative 
          w-full
          aspect-[16/9]
          rounded-t-xl 
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardContent className="px-3 sm:px-4 pb-3 pt-0">
        <div className="flex items-start justify-between w-full gap-2">
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">
              {type}
            </p>
          </div>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="
              w-8 h-8 bg-white rounded-full 
              flex items-center justify-center 
              hover:bg-gray-50 transition-colors 
              flex-shrink-0
            "
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>

        <div className="border border-[#00A8E8]" />

        <div className="flex justify-center">
          <Button
            onClick={onMoreDetails}
            variant="outline"
            className="
              mt-3 sm:mt-4 
              w-fit mx-auto 
              rounded-full 
              border-[#00A8E8] text-[#00A8E8] 
              hover:bg-[#00A8E8] hover:text-white 
              transition-colors
              px-5 py-2 text-sm
            "
          >
            More Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
