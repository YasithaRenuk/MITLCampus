"use client";

import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CourseHeroSection from "@/components/courses/CourseHeroSection";
import FAQSection from "@/components/FAQSection";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import { courses } from "../data/courses";
import CourseCard from "@/components/CourseCard";
import CategoryTabs from "@/components/CategoryTabs";

export default function CoursesPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage(1); // reset page when category changes
  };

  const handleMoreDetails = (courseTitle: string) => {
    console.log("More details for:", courseTitle);
  };

  // 4 columns on desktop -> 12 per page (3 rows)
  const pageSize = 12;

  // 1) Filter courses by selected category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") return courses;

    return courses.filter((c) => c.type === selectedCategory);

  }, [selectedCategory]);

  // 2) Total pages based on filtered list
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / pageSize));

  // Ensure page stays valid when filtering reduces pages
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  // 3) Slice the filtered list for current page
  const pagedCourses = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredCourses.slice(start, start + pageSize);
  }, [page, filteredCourses]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <CourseHeroSection />

      {/* Category Tabs */}
      <div className="mx-auto max-w-7xl px-8 mb-8">
        <CategoryTabs onCategoryChange={handleCategoryChange} />
      </div>

      <div className="mb-12">
        {/* Course Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
          {pagedCourses.map((course, index) => (
            <CourseCard
              key={`${course.title}-${index}`}
              title={course.title}
              type={course.type}
              image={course.image}
              onMoreDetails={() => handleMoreDetails(course.title)}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination className="mt-12">
          <PaginationContent>
            {/* Prev */}
            <PaginationItem>
              <button
                type="button"
                onClick={() => canPrev && setPage((p) => p - 1)}
                disabled={!canPrev}
                className="h-9 w-9 rounded-md hover:bg-muted flex items-center justify-center disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </PaginationItem>

            {/* Numbers */}
            {pageNumbers.length <= 7 ? (
              pageNumbers.map((p) => (
                <PaginationItem key={p}>
                  <button
                    type="button"
                    onClick={() => setPage(p)}
                    className={[
                      "h-9 min-w-9 rounded-md px-3 text-sm font-semibold",
                      p === page
                        ? "bg-[oklch(0.7579_0.1614_71.2)] text-white"
                        : "text-gray-900 hover:bg-muted",
                    ].join(" ")}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </button>
                </PaginationItem>
              ))
            ) : (
              <>
                {/* 1 2 3 ... last-2 last-1 last */}
                {[1, 2, 3].map((p) => (
                  <PaginationItem key={p}>
                    <button
                      type="button"
                      onClick={() => setPage(p)}
                      className={[
                        "h-9 min-w-9 rounded-md px-3 text-sm font-semibold",
                        p === page
                          ? "bg-[oklch(0.7579_0.1614_71.2)] text-white"
                          : "text-gray-900 hover:bg-muted",
                      ].join(" ")}
                    >
                      {p}
                    </button>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                {[totalPages - 2, totalPages - 1, totalPages].map((p) => (
                  <PaginationItem key={p}>
                    <button
                      type="button"
                      onClick={() => setPage(p)}
                      className={[
                        "h-9 min-w-9 rounded-md px-3 text-sm font-semibold",
                        p === page
                          ? "bg-[oklch(0.7579_0.1614_71.2)] text-white"
                          : "text-gray-900 hover:bg-muted",
                      ].join(" ")}
                    >
                      {p}
                    </button>
                  </PaginationItem>
                ))}
              </>
            )}

            {/* Next */}
            <PaginationItem>
              <button
                type="button"
                onClick={() => canNext && setPage((p) => p + 1)}
                disabled={!canNext}
                className="h-9 w-9 rounded-md hover:bg-muted flex items-center justify-center disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}