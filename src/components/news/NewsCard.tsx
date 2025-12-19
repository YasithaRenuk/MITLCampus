"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type NewsCategory = "Campus Events" | "Academic Update" | "Announcement";

interface NewsCardProps {
  image: string;
  category: NewsCategory;
  title: string;
  description: string;
  published: string; // e.g. "November 23, 2025"
  onReadMore?: () => void;
}

const categoryStyles: Record<NewsCategory, string> = {
  "Campus Events":
    "bg-[oklch(0.6538_0.1593_243.47)] text-white hover:bg-[oklch(0.6538_0.1593_243.47)]",
  "Academic Update":
    "bg-[oklch(0.35_0.18_300)] text-white hover:bg-[oklch(0.35_0.18_300)]", // purple-ish
  Announcement:
    "bg-gray-500 text-white hover:bg-gray-500",
};

export default function NewsCard({
  image,
  category,
  title,
  description,
  published,
  onReadMore,
}: NewsCardProps) {
  return (
    <Card className="p-0 overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative h-[190px] w-full bg-gray-100 sm:h-[210px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <CardContent className="space-y-3 p-5">
        {/* Category pill */}
        <Badge
          className={[
            "rounded-full px-4 py-1 text-xs font-semibold",
            categoryStyles[category],
          ].join(" ")}
        >
          {category}
        </Badge>

        {/* Title */}
        <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-700">
          {description}
        </p>

        {/* Published */}
        <p className="text-xs text-gray-500">
          Published : <span className="font-medium">{published}</span>
        </p>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0">
        <Button
          variant="link"
          className="h-auto p-0 text-[oklch(0.7579_0.1614_71.2)] hover:text-[oklch(0.7579_0.1614_71.2)]"
          onClick={onReadMore}
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
