import AboutHeroSection from "@/components/AboutUs/AboutHeroSection";
import FeatureCard from "@/components/AboutUs/FeatureCard";
import LeadershipSection from "@/components/AboutUs/LeadershipSection";
import FAQSection from "@/components/FAQSection";

const features = [
  {
    title: "Vision",
    description:
      ["To be the leading global provider of professional education, empowering individuals and organizations to excel in their fields through innovative, practical, and accessible learning experiences."],
    icon: "flask",
  },
  {
    title: "Mission",
    description:
      [
        "To provide high-quality, industry-relevant education and training programs that equip professionals with the skills and knowledge to thrive in a rapidly changing world.",
        "To foster a lifelong learning culture by offering diverse learning opportunities, including certifications, courses, workshops, and webinars across various industries.",
        "To bridge the gap between theory and practice by partnering with industry experts to deliver up-to-date, practical education that meets current market needs.",
        "To empower learners at all stages of their careers—from entry-level professionals to executives—with tailored programs that support career growth and professional development.",
        "To leverage technology and innovation in education, ensuring our programs are accessible, flexible, and relevant to today’s global workforce.",
      ], 
    icon: "faculty",
  },
  {
    title: "Values",
    description:
      ["I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph. Click Here To Add Your Own Text And Edit Me."],
    icon: "star",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.6538_0.1593_243.47)]">
      {/* HERO */}
      <AboutHeroSection />
    
      {/* GUIDING PRINCIPLES */}
      <section className="bg-[#f3f8ff]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[oklch(0.6538_0.1593_243.47)]">
            Vision, Mission &amp; Values
          </p>

          <h3 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Our Guiding{" "}
            <span className="text-[oklch(0.7579_0.1614_71.2)]">Principles</span>
          </h3>

          {/* UPDATED TEXT SIZE */}
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-600 md:text-base lg:text-lg">
            We focus on clear direction, strong purpose, and values that guide
            every step of our learning journey.
          </p>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-8 mb-16 md:grid-cols-3 relative z-20">
            {features.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <LeadershipSection />

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}
