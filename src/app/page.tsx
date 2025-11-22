"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CategoryTabs from "@/components/CategoryTabs";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import PartnersSection from "@/components/PartnersSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StatSection from "@/components/StatSection";
import FAQSection from "@/components/FAQSection";

const features = [
  {
    title: "Innovative Research",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "flask",
  },
  {
    title: "World-Class Faculty",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "faculty",
  },
  {
    title: "Vibrant Campus Life",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "star",
  },
];

const courses = [
  {
    title: "Japanese Language",
    type: "Certificate Course",
    image: "/japanese.png",
  },
  {
    title: "Hospitality Management",
    type: "Certificate Course",
    image: "/hospitality.png",
  },
  {
    title: "Information Technology",
    type: "Certificate Course",
    image: "/IT.png",
  },
  {
    title: "English Language",
    type: "Certificate Course",
    image: "/English.png",
  },
  {
    title: "Japanese Language",
    type: "Certificate Course",
    image: "/japanese.png",
  },
  {
    title: "Hospitality Management",
    type: "Certificate Course",
    image: "/hospitality.png",
  },
  {
    title: "Information Technology",
    type: "Certificate Course",
    image: "/IT.png",
  },
  {
    title: "English Language",
    type: "Certificate Course",
    image: "/English.png",
  },
];

const testimonials = [
  {
    name: "Yasitha Renuka",
    course: "Information Technology",
    batch: "2023",
    testimonial:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Your Own Content And Make Changes To The Font.",
    image: "/TestimonialCards/image 22.png",
  },
  {
    name: "Yasitha Renuka",
    course: "Information Technology",
    batch: "2023",
    testimonial:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Your Own Content And Make Changes To The Font.",
    image: "/TestimonialCards/image 23.png",
  },
  {
    name: "Danilka Nishan",
    course: "Business Management",
    batch: "2023",
    testimonial:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Your Own Content And Make Changes To The Font.",
    image: "/TestimonialCards/image 22.png",
  },
];

export default function Page() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
  };

  const handleMoreDetails = (courseTitle: string) => {
    console.log("More details for:", courseTitle);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full">
      {/* HERO – full width */}
      <HeroSection />

      <div className="mt-20"></div>
      {/* FEATURE CARDS – pulled up to overlap hero */}
      <div className="max-w-6xl mx-auto -mt-60 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mb-16 relative z-20">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Courses section heading */}
      <div className="text-center mb-12">
        <p className="text-[#00A8E8] font-bold text-sm mb-2 tracking-wide">
          COURSES
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Academic Programs</h2>
        <p className="text-gray-600 text-lg">
          Choose from our diverse range of undergraduate and graduate programs
          designed to prepare <br /> you for success.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-8">
        <CategoryTabs onCategoryChange={handleCategoryChange} />
      </div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mb-16">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            type={course.type}
            image={course.image}
            onMoreDetails={() => handleMoreDetails(course.title)}
          />
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16 w-full">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-[#00A8E8] font-bold text-sm mb-2 tracking-wide">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              How Our Students
            </h2>
            <h2 className="text-4xl font-bold text-[#F59E0B]">
              Feel About Us
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {testimonials
                .slice(currentTestimonial, currentTestimonial + 2)
                .map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    course={testimonial.course}
                    batch={testimonial.batch}
                    testimonial={testimonial.testimonial}
                    image={testimonial.image}
                  />
                ))}
            </div>

            <div className="flex justify-end gap-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-gray-300 hover:border-[#00A8E8] hover:text-[#00A8E8]"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-gray-300 hover:border-[#00A8E8] hover:text-[#00A8E8]"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <StatSection />
      <PartnersSection />
      <FAQSection />
    </div>
  );
}
