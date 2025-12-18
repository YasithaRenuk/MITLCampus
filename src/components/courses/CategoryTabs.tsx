import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface CategoryTabsProps {
  onCategoryChange?: (category: string) => void;
  defaultCategory?: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  onCategoryChange,
  defaultCategory = "All",
}) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const categories = [
    "All",
    "Health & Nursing",
    "Languages",
    "Psychology & Education",
    "Technology & Engineering",
    "Bussiness Management",
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="w-full flex justify-center py-4 font-sans">
      <div className="w-full max-w-6xl flex justify-center">
        <div className="overflow-x-auto scrollbar-hide">
          {/* ✅ removed px-1 to remove the gap */}
          <div className="inline-flex items-stretch rounded-full border border-primary overflow-hidden min-w-max mx-auto bg-card">
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              const isFirst = index === 0;
              const isLast = index === categories.length - 1;

              return (
                <Button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  variant="ghost"
                  className={`
                    h-auto rounded-none shadow-none border-0
                    text-[11px] xs:text-xs sm:text-sm
                    px-3 sm:px-5 py-2 whitespace-nowrap transition-colors

                    ${!isFirst ? "border-l border-primary" : ""}

                    ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground relative z-10"
                        : "bg-card text-primary hover:bg-primary hover:text-primary-foreground"
                    }

                    ${isFirst ? "rounded-l-full" : ""}
                    ${isLast ? "rounded-r-full" : ""}
                  `}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
