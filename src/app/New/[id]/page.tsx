"use client";

import { use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  CalendarDays,
  Tag,
  BookOpen,
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { news } from "@/app/data/news";

export default function NewsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const NewsId = parseInt(resolvedParams.id, 10);

  const News = useMemo(() => {
    return news.find((c) => c.id === NewsId);
  }, [NewsId]);

  if (!News) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <div className="rounded-full bg-red-100 p-6 text-red-500 mb-6">
          <BookOpen className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          News Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The News you are looking for does not exist or has been removed.
        </p>
        <Link href="/news">
          <Button variant="default" className="bg-[#EF005B] hover:bg-[#c9004d]">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/news">
            <Button variant="ghost" className="hover:bg-gray-200">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm font-medium text-gray-900 truncate max-w-[200px] sm:max-w-md">
            {News.title}
          </span>
        </div>

        {/* Main Content Card */}
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          
          {/* Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] w-full bg-gray-100">
            <Image
              src={News.image}
              alt={News.title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient for better text readability if we put text on top (optional, kept clean here) */}
          </div>

          <div className="p-6 sm:p-10">
            {/* Meta Tags */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge 
                variant="secondary" 
                className="bg-[#EF005B]/10 text-[#EF005B] hover:bg-[#EF005B]/20 px-3 py-1 text-sm"
              >
                <Tag className="mr-1.5 h-3.5 w-3.5" />
                {News.category}
              </Badge>
              
              <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                <CalendarDays className="mr-2 h-4 w-4" />
                {News.published}
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              {News.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              {/* If you have line breaks in your description, you might want to map them to paragraphs */}
              <p>{News.description}</p>
            </div>
          </div>
        </article>

        {/* Gallery Section - Only renders if there are images */}
        {News.imgs && News.imgs.length > 0 && (
          <section className="mt-12">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <ImageIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Event Gallery</h2>
            </div>

            {/* Masonry Layout for Variable Image Sizes */}
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
              {News.imgs.map((imgSrc, index) => (
                <div 
                  key={index} 
                  className="relative break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md"
                >
                  <Image
                    src={imgSrc}
                    alt={`${News.title} gallery image ${index + 1}`}
                    width={800} 
                    height={600}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}