"use client";

import React, { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { categories } from "@/app/data/news";

interface CategoryTabsProps {
  onCategoryChange?: (category: string) => void;
  defaultCategory?: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  onCategoryChange,
  defaultCategory = "All",
}) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  // keep in sync if parent changes defaultCategory
  useEffect(() => {
    setActiveCategory(defaultCategory);
  }, [defaultCategory]);

  const handleChange = (value: string) => {
    if (!value) return;
    setActiveCategory(value);
    onCategoryChange?.(value);
  };

  return (
    <div className="w-full py-4 font-sans">
      {/* Mobile: horizontal scroll | Desktop: centered */}
      <div className="w-full overflow-x-auto px-4 sm:px-0">
        <div className="min-w-max sm:flex sm:justify-center">
          <ToggleGroup
            type="single"
            value={activeCategory}
            onValueChange={handleChange}
            className="
              inline-flex items-stretch
              rounded-full border border-primary
              overflow-hidden bg-card
              whitespace-nowrap
            "
          >
            {categories.map((category, index) => {
              const isFirst = index === 0;
              const isLast = index === categories.length - 1;

              return (
                <ToggleGroupItem
                  key={category}
                  value={category}
                  className={`
                    h-auto rounded-none border-0 shadow-none
                    text-[11px] xs:text-xs sm:text-sm
                    px-3 sm:px-5 py-2 whitespace-nowrap
                    transition-colors

                    ${!isFirst ? "border-l border-primary" : ""}

                    data-[state=on]:bg-primary
                    data-[state=on]:text-primary-foreground
                    data-[state=on]:hover:bg-primary/90

                    text-primary hover:bg-primary hover:text-primary-foreground

                    ${isFirst ? "rounded-l-full" : ""}
                    ${isLast ? "rounded-r-full" : ""}
                  `}
                >
                  {category}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
      </div>

      {/* optional hint on mobile */}
      <div className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
        Swipe to see more
      </div>
    </div>
  );
};

export default CategoryTabs;