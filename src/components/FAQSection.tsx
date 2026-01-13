"use client";


import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What Services Does MILT Campus Offer?",
      answer:
        "We offer certificate, diploma, HND, Bachelor and Masters qualifications in many fields. We also offer skill training for nursing, care giving and pre school teaching students.Apart from that under MITL language school we offer language course for all demanding languages.",
    },
    {
      question: "Can i complete University Great Commission (UGC) recognized qualifications through MITL Campus?",
      answer:
        "Yes, most definitely. All the universities we are affiliated with are UGC recognized and members of International Association of Universities (IAU). Therefore, if you complicated any professional education course with MITL campus you will be able to get UGC recognized international qualification with attending to an official convocation ceremony.",
    },
    {
      question: "Do you offer online qualification verification ?",
      answer:
        `Yes, all the certificates we offer at MITL Campus offered with online verification via one of the worlds leading verification platform "Everify.lk". If you present our certificate to any local or international institution, they can verify your qualification via Everify.lk with your personal details.`,
    },
    {
      question: "What are the language classes conduct by MITL Campus ?",
      answer:
        "If you loooking any language under one roof MITL Campus is the only option. We conduct Japanese, Chinese, Hebrew, Arabic, German , Korian, Hindi, Italian, French, Danish, Rumanian, English and Tamil classes under our language school.",
    },
    {
      question: "Can i attend for a graduation if i completed a qualification with MITL Campus ?",
      answer:
        "Yes, we are conducting 3 graduation convocation ceremonies at BMICH for MITL students. Apart from that, if you complete a university qualification via one of our affiliated university, you can attend for official university convocation ceremony in Sri Lanka too.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-background py-10 sm:py-14 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-primary font-bold text-xs sm:text-sm mb-2 tracking-wide">
  QUESTIONS?
</p>


          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Im a paragraph. Click here to add your own text and edit me. Its
            easy. Just click or double click me to add your own
            content and make changes to the font.
          </p>
        </div>

        {/* FAQ Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  bg-card rounded-lg 
                  border border-primary
                  overflow-hidden 
                  transition-all duration-300 
                  hover:shadow-md
                "
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full flex items-center justify-between 
                    px-4 py-4 sm:px-6 sm:py-5 
                    text-left 
                    hover:bg-muted 
                    transition-colors
                  "
                >
                  <span className="font-semibold text-sm sm:text-base text-foreground pr-4">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                    overflow-hidden
                  `}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Image */}
          <div className="lg:sticky lg:top-8">
            <div className="
              rounded-2xl p-6 sm:p-8 shadow-lg max-w-md mx-auto
              bg-gradient-to-br from-primary to-secondary
            ">
              <img
                src="/FAQs/Frame 109.png"
                alt="Question Mark"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
