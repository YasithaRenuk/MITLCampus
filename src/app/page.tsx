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
import { courses } from "./data/courses";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Innovative Research",
    description:
      "Modern learning at MITL Campus emphasizes adaptation to change in education through advanced techniques, focusing on technology integration, innovative pedagogical approaches like Project-Based Learning, teacher development, and systemic solutions for curriculum design. The goal is to enhance student outcomes by exploring AI, mobile learning, and evidence-based strategies.",
    icon: "flask",
  },
  {
    title: "World-Class Faculty",
    description:
      "MITL Campus aims to provide world-class educational facilities, including smart boards, projectors, high-speed Wi-Fi, and access to digital resources alongside a well-stocked library. The campus features modern skill development labs with advanced medical equipment, counseling rooms, and ergonomic classrooms for student comfort. Collaborative spaces with flexible seating promote teamwork and innovation. A secure environment is ensured through 24-hour CCTV, secure entry, and emergency safety systems.",
    icon: "faculty",
  },
  {
    title: "Vibrant Campus Life",
    description:
      "MITL Campus promotes a dynamic educational ecosystem that integrates academic pursuits with social, cultural, and personal development. It emphasizes high levels of student engagement, diverse extracurricular activities, and a supportive environment, fostering a strong sense of belonging. Students can join various clubs, sports, and cultural events, allowing them to explore interests, forge peer connections, and experience a sense of community within the MITL Family.",
    icon: "star",
  },
];

const testimonials = [
  {
    name: "Thishakya Gayani Fernando",
    course: "Business Management",
    batch: "2023",
    testimonial:
      "Throughout my years of being here. I’ve learnt so much more than I thought. Not only academic wise, but life wise. I’ve learnt how to be a role model in the field I am working, how to navigate the amount of personalities I’ll encounter, and so much more than I can’t express. As a student of MITL Campus I feel so much more confident in the skills I have, and how to be evermore confident in myself.",
    image: " ",
  },
  {
    name: "Sinnaiya Jeewani",
    course: "Diploma in Health and Social Care",
    batch: "2023",
    testimonial:
      "As a Tamil speaking student I have never thought I will be able to study in my mother tongue to enter to field of health with proper professional education. But the Tamil language Health and Social care program offered by MITL campus changed my entire life. Now I am a proud health care worker in Canada thankful to MITL Campus.",
    image: " ",
  },
  {
    name: "Gayeshika Dinethi Karunarathne",
    course: "Nursing Graduate",
    batch: "2023",
    testimonial:
      "As a professional nurse in government sector my education is only limited to the nursing diploma I have completed with NTS. For my luck I got to know about MITL Campus through many recommendations and enrolled with BSc program of Nursing offered by MITL Campus. I would say this is the turning point of my life. The BSc helped me for career development as well as open plethora of opportunities locally and internationally. Thank you MITL campus for the guidance, encouragement and endless support offer for myself as well as our batch…. ",
    image: " ",
  },
  {
    name: "Mr. and Mrs Widanapathirana",
    course: " ",
    batch: "2023",
    testimonial:
      "I and my wife’s life dream is to migrate to a European country. The biggest challenge for us to get through language examinations and learn a new demanding skill before migrate. The IELTS preparation course offered by MITL helped me immense to get my desired score and my wife’s. Not only that, because we follow their Diploma in Caregiving course and get trained in their skill lab we have gained so much of hand on experience before we move to UK. If you are looking for all solutions under one roof… MITL Campus is the place to visit…",
    image: " ",
  },
  {
    name: "Kaushalya Jayanethth",
    course: "Japanese Language Course",
    batch: "2023",
    testimonial:
      "I was stucked with my JLPT and JFT examinations for a long time. This stopped me lodging my visa to Japan Immigration which was so frustrating… I would say the Japanese Language course conducted by MITL campus is the golden key for me to get though my JLPT and JFT Exams. The unique teaching techniques they uses, individual attention helped me to clear lot of my doubts. Because they provide all class recordings it help me to self-study when needed. Arigato MITL staff and sensei for all…. ",
    image: " ",
  },
];

export default function Page() {
  const router = useRouter();

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.type === selectedCategory);

  const handleMoreDetails = (courseId: number) => {
    router.push(`/course/${courseId}`);
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
      {/* HERO */}
      <HeroSection />

      <div className="mt-20" />

      {/* FEATURES */}
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

      {/* COURSES HEADER */}
      <div className="text-center mb-12">
        <p className="text-[#00A8E8] font-bold text-sm mb-2 tracking-wide">
          COURSES
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          Academic Programs
        </h2>
        <p className="text-gray-600 text-lg">
          Choose from our diverse range of undergraduate and graduate programs
          designed to prepare <br /> you for success.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="max-w-7xl mx-auto px-8">
        <CategoryTabs onCategoryChange={handleCategoryChange} />
      </div>

      {/* COURSE CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mb-16">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            type={course.type}
            image={course.image}
            onMoreDetails={() => handleMoreDetails(course.id)}
          />
        ))}
      </div>

      {/* TESTIMONIALS */}
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
            {/* 1 card mobile | 2 cards desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {testimonials
                .slice(currentTestimonial, currentTestimonial + 2)
                .map((testimonial, index) => (
                  <div
                    key={index}
                    className={index === 1 ? "hidden md:block" : ""}
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      course={testimonial.course}
                      batch={testimonial.batch}
                      testimonial={testimonial.testimonial}
                      image={testimonial.image}
                    />
                  </div>
                ))}
            </div>

            {/* CONTROLS */}
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
