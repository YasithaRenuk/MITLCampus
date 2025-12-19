"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import NewsHeroSection from "@/components/news/NewsHeroSection";
import CategoryTabs from "@/components/news/CategoryTabs";
import NewsCard from "@/components/news/NewsCard";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type NewsCategory = "Campus Events" | "Academic Update" | "Announcement";

const news = [
  {
    image: "/news/1.png",
    category: "Campus Events" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/2.png",
    category: "Academic Update" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/3.png",
    category: "Announcement" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/4.png",
    category: "Campus Events" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/5.png",
    category: "Academic Update" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/6.png",
    category: "Announcement" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  // add more items here if you want more pages...
];

export default function NewsPage() {
  const [page, setPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
    setPage(1);
  };

  //  3 columns x 2 rows = 6 per page (desktop)
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(news.length / pageSize));

  const pagedNews = useMemo(() => {
    const start = (page - 1) * pageSize;
    return news.slice(start, start + pageSize);
  }, [page]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => setPage(Math.min(totalPages, Math.max(1, p)));

  return (
    <main className="min-h-screen bg-white">
      <NewsHeroSection />

      <div className="mx-auto max-w-7xl px-8 mb-8">
        <CategoryTabs onCategoryChange={handleCategoryChange} />
      </div>

      {/* 3 per row on desktop */}
      <div className="mx-auto max-w-7xl px-8 pb-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pagedNews.map((item, idx) => (
            <NewsCard
              key={`${item.title}-${idx}`}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
              published={item.published}
              onReadMore={() => console.log("Read more:", item.title)}
            />
          ))}
        </div>

        {/* Pagination (shadcn) */}
  <Pagination className="mt-12">
  <PaginationContent>
    <PaginationItem>
      <button className="h-9 w-9 rounded-md hover:bg-muted flex items-center justify-center">
        <ChevronLeft className="h-4 w-4" />
      </button>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <button className="h-9 w-9 rounded-md hover:bg-muted flex items-center justify-center">
        <ChevronRight className="h-4 w-4" />
      </button>
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </div>
    </main>
  );
}
