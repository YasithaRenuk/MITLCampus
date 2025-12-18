"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CourseHeroSection from "@/components/courses/CourseHeroSection";
import CategoryTabs from "@/components/courses/CategoryTabs";
import CourseCard from "@/components/courses/CourseCard";
import FAQSection from "@/components/FAQSection";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";


const courses = [
  { title: "Japanese Language", type: "Certificate Course", image: "/japanese.png" },
  { title: "Hospitality Management", type: "Certificate Course", image: "/hospitality.png" },
  { title: "Information Technology", type: "Certificate Course", image: "/IT.png" },
  { title: "English Language", type: "Certificate Course", image: "/English.png" },

  { title: "Japanese Language", type: "Certificate Course", image: "/japanese.png" },
  { title: "Hospitality Management", type: "Certificate Course", image: "/hospitality.png" },
  { title: "Information Technology", type: "Certificate Course", image: "/IT.png" },
  { title: "English Language", type: "Certificate Course", image: "/English.png" },

  { title: "Hospitality Management", type: "Certificate Course", image: "/hospitality.png" },
  { title: "Information Technology", type: "Certificate Course", image: "/IT.png" },
  { title: "English Language", type: "Certificate Course", image: "/English.png" },
  { title: "English Language", type: "Certificate Course", image: "/English.png" },
];

function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pagesToRender = useMemo(() => {
    // Match the UI: show 1 2 3 ... 8 9 10 (when many pages)
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const first = [1, 2, 3];
    const last = [totalPages - 2, totalPages - 1, totalPages];

    pages.push(...first);

    // middle ellipsis
    if (currentPage > 4 && currentPage < totalPages - 3) {
      pages.push("...");
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push("...");
    } else {
      pages.push("...");
    }

    pages.push(...last);
    // remove duplicates just in case
    return pages.filter((v, idx, arr) => arr.indexOf(v) === idx);
  }, [currentPage, totalPages]);

  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <div className="mt-10 flex items-center justify-center gap-4 pb-10">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => canPrev && onPageChange(currentPage - 1)}
        disabled={!canPrev}
        className="grid h-10 w-10 place-items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 disabled:opacity-40"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Numbers */}
      <div className="flex items-center gap-3">
        {pagesToRender.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`dots-${idx}`} className="px-2 text-gray-600">
                …
              </span>
            );
          }

          const isActive = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={[
                "grid h-9 min-w-9 place-items-center rounded-md px-3 text-sm font-semibold",
                isActive
                  ? "bg-[oklch(0.7579_0.1614_71.2)] text-white" // orange active
                  : "text-gray-900 hover:bg-gray-100",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => canNext && onPageChange(currentPage + 1)}
        disabled={!canNext}
        className="grid h-10 w-10 place-items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 disabled:opacity-40"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function CoursesPage() {
  const [page, setPage] = useState(1);

<PaginationLink onClick={() => setPage(1)}>1</PaginationLink>


  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
    // optional: setPage(1) if category changes
  };

  const handleMoreDetails = (courseTitle: string) => {
    console.log("More details for:", courseTitle);
  };

  // ✅ same grid as UI: 4 columns on desktop -> 12 per page (3 rows)
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(courses.length / pageSize));

  const pagedCourses = useMemo(() => {
    const start = (page - 1) * pageSize;
    return courses.slice(start, start + pageSize);
  }, [page]);

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

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}
