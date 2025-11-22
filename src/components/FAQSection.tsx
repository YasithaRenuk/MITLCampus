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
        "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It's Easy. Just Click Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    },
    {
      question: "What Services Does MILT Campus Offer?",
      answer:
        "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It's Easy. Just Click Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    },
    {
      question: "How Do You Measure Success?",
      answer:
        "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It's Easy. Just Click Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    },
    {
      question: "How Do You Measure Success?",
      answer:
        "I'm A Paragraph. Click Here To Add Your Own Text And Edit Your Own Content And Make Changes To The Font.",
    },
    {
      question: "How Do I Get Started With MILTS Campus?",
      answer:
        "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It's Easy. Just Click Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
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


          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
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
