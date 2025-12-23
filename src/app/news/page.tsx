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

import { news } from "../data/news";

type PageToken = number | "...";

function buildPagination(current: number, total: number): PageToken[] {
  // Matches common UI: 1 2 3 ... 8 9 10 (and similar)
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: PageToken[] = [];

  const showLeft = current <= 4;
  const showRight = current >= total - 3;

  // Always show first page
  pages.push(1);

  if (showLeft) {
    // 1 2 3 4 5 ... last
    pages.push(2, 3, 4, 5, "...", total);
    return pages;
  }

  if (showRight) {
    // 1 ... last-4 last-3 last-2 last-1 last
    pages.push("...", total - 4, total - 3, total - 2, total - 1, total);
    return pages;
  }

  // Middle: 1 ... (current-1) current (current+1) ... last
  pages.push("...", current - 1, current, current + 1, "...", total);
  return pages;
}

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const pageSize = 6;

  const filteredNews = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") return news;
    return news.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredNews.length / pageSize)),
    [filteredNews.length]
  );

  // keep page valid if filters reduce total pages
  const safePage = Math.min(page, totalPages);

  const pagedNews = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredNews.slice(start, start + pageSize);
  }, [filteredNews, safePage]);

  const pagesToRender = useMemo(
    () => buildPagination(safePage, totalPages),
    [safePage, totalPages]
  );

  const canPrev = safePage > 1;
  const canNext = safePage < totalPages;

  const goTo = (p: number) => setPage(Math.min(totalPages, Math.max(1, p)));

  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      <NewsHeroSection />

      <div className="mx-auto max-w-7xl px-8 mb-8">
        <CategoryTabs onCategoryChange={handleCategoryChange} />
      </div>

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

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              {/* Prev */}
              <PaginationItem>
                <button
                  type="button"
                  onClick={() => canPrev && goTo(safePage - 1)}
                  disabled={!canPrev}
                  className="h-9 w-9 rounded-md hover:bg-muted flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </PaginationItem>

              {/* Page numbers */}
              {pagesToRender.map((p, i) => {
                if (p === "...") {
                  return (
                    <PaginationItem key={`ellipsis-${i}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                return (
                  <PaginationItem key={`page-${p}`}>
                    <PaginationLink
                      href="#"
                      isActive={p === safePage}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(p);
                      }}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* Next */}
              <PaginationItem>
                <button
                  type="button"
                  onClick={() => canNext && goTo(safePage + 1)}
                  disabled={!canNext}
                  className="h-9 w-9 rounded-md hover:bg-muted flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </main>
  );
}