import ContactUsHeroSection from "@/components/ContactUs/ContactUsHeroSection";
import ContactSection from "@/components/ContactUs/ContactSection";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";
import FAQSection from "@/components/FAQSection";

const features = [
  {
    title: "Vision",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "flask",
  },
  {
    title: "Mission",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "faculty",
  },
  {
    title: "Values",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph.I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. I'm A Paragraph. Click Here To Add Your Own Text And Edit Me.",
    icon: "star",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen ]">
      {/* HERO */}
      <ContactUsHeroSection />
      
      {/*Contact Section*/}
      <ContactSection/>

      {/*Location*/}
      <ContactUsMap/>
      {/* FAQ */}
      <FAQSection />
    </main>
  );
}
