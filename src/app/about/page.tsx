import Image from "next/image";



import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/AboutUs/FeatureCard";
import LeadershipSection from "@/components/AboutUs/LeadershipSection";
import AboutHeroSection from "@/components/AboutUs/AboutHeroSection";

const features = [
  {
    title: "Vision",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "flask",
  },
  {
    title: "Mission",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "faculty",
  },
  {
    title: "Values",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "star",
  },
];

const leaders = [
  { name: "Yasitha Renuka", role: "Managing Director", img: "/leaders/1.jpg" },
  { name: "Maleesha Ilankoon", role: "Managing Director", img: "/leaders/2.jpg" },
  { name: "Sanoj Kumara", role: "Senior Consultant", img: "/leaders/3.jpg" },
  { name: "Sonal Jayasinghe", role: "Senior Consultant", img: "/leaders/4.jpg" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.6538_0.1593_243.47)] mt-20" >
     
      <AboutHeroSection />
      {/* GUIDING PRINCIPLES */}
      <section className="bg-[#f3f8ff]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[oklch(0.6538_0.1593_243.47)]">
            Vision, Mission &amp; Values
          </p>

          <h3 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Our Guiding <span className="text-[oklch(0.7579_0.1614_71.2)]">Principles</span>
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-600 md:text-base">
            We focus on clear direction, strong purpose, and values that guide every
            step of our learning journey.
          </p>

           <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mb-16 relative z-20">
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

      {/* FAQ (already created by you) */}
      <FAQSection />

     
    </main>
  );
}

function PrincipleCard({
  title,
  icon,
  text,
}: {
  title: string;
  icon: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaf2ff] text-lg">
          {icon}
        </div>
        <h4 className="text-base font-bold text-gray-900">{title}</h4>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
}
