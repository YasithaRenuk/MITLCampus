"use client";

import { use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Check,
  BookOpen,
  Target,
  Star,
  FileText,
} from "lucide-react";
import { courses } from "../../data/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const courseId = parseInt(resolvedParams.id, 10);

  const course = useMemo(() => {
    return courses.find((c) => c.id === courseId);
  }, [courseId]);

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <div className="rounded-full bg-red-100 p-6 text-red-500 mb-6">
          <BookOpen className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Course Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The course you are looking for does not exist or has been removed.
        </p>
        <Link href="/courses">
          <Button variant="default" className="bg-[#EF005B] hover:bg-[#c9004d]">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Content */}
      <div className="bg-white pb-12 pt-32 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left: Title & Intro */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1"
                >
                  {course.type}
                </Badge>
                {/* ID Badge just for dev/ref distinction if needed, maybe not needed for users */}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Right: Actions (Hidden on mobile, moves to sticky sidebar) */}
            <div className="hidden lg:block lg:col-span-1">
              {/* This space intentionally left blank for the layout, content is below */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Features */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-[#EF005B]" />
                Main Features
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {course.mainFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 rounded-full bg-pink-50 p-1">
                      <Check className="h-4 w-4 text-[#EF005B]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum / Lesson Topics */}
            {course.lessonTopics ? (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-[#EF005B]" />
                  Curriculum
                </h2>
                <div className="space-y-4">
                  {course.lessonTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="border rounded-xl overflow-hidden bg-gray-50/50"
                    >
                      <div className="bg-gray-50 p-4 font-semibold text-gray-900 border-b flex justify-between items-center">
                        <span>{topic.title}</span>
                      </div>
                      <div className="p-4 bg-white">
                        <ul className="space-y-2">
                          {topic.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#EF005B]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : (
              ""
            )}

            {/* Target Audience */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-[#EF005B]" />
                Who Should Enroll?
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.targetAudience.map((audience, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <span className="text-gray-700 text-sm">{audience}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#EF005B]" />
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.Benefits.map((benefit, idx) => {
                  // Split title and description if possible (assuming format "Title Description" or just text)
                  // The data seems to have "Title Description" format roughly.
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                          <Star className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Course Card Preview / Sticky Header */}
              {/* <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-6 bg-gray-100">
                   <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                   />
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-[#EF005B] hover:bg-[#c9004d] h-12 text-lg font-semibold shadow-md shadow-pink-200">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Get lifetime access to this course material
                  </p>
                </div>
              </div> */}

              {/* Need Help? */}
              <div className="rounded-2xl bg-[#00A8E8] p-6 text-white shadow-lg">
                <h3 className="font-bold text-xl mb-2">Need Help?</h3>
                <p className="text-blue-50 text-sm mb-4">
                  Contact our academic counselors for more details about this
                  application.
                </p>
                <Button variant="secondary" className="w-full font-bold">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
