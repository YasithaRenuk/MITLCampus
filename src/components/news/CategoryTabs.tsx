"use client";

import React, { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

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
    "Campus Announcements",
    "Academic Updates",
    "Campus Events",
    
  ];

  const handleChange = (value: string) => {
    if (!value) return; // ToggleGroup can emit empty
    setActiveCategory(value);
    onCategoryChange?.(value);
  };

  return (
    <div className="w-full flex justify-center py-4 font-sans">
      <ToggleGroup
        type="single"
        value={activeCategory}
        onValueChange={handleChange}
        className="
          inline-flex items-stretch
          rounded-full border border-primary
          overflow-hidden bg-card
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
  );
};

export default CategoryTabs;
