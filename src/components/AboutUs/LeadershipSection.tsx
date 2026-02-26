"use client";

import Image from "next/image";
import { useState, useRef } from "react";

type Leader = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const leaders: Leader[] = [
  {
    name: "Prof. Asanga Tilakaratne",
    role: "Senior Academic & Strategic Advisor MITL Campus, Sri Lanka",
    image: "/Leaders/Asanga.jpeg",
    description: `Prof. Asanga Tilakaratne is a distinguished Sri Lankan scholar and higher education leader with extensive experience in university administration, research, and academic policy development. He currently serves as the Senior Academic & Strategic Advisor at MITL Campus, providing strategic direction in academic planning, quality assurance, international collaboration, and institutional development. Prof. Tilakaratne is widely known for his long-standing academic career at the University of Colombo, where he served as a Professor in the Department of Pali and Buddhist Studies and held senior leadership roles, including Dean of the Faculty of Arts. He has also contributed to national higher education development through advisory and governance roles connected with the University Grants Commission. Throughout his academic career, he has been actively engaged in curriculum development, postgraduate supervision, international academic partnerships, and research in Buddhist philosophy and intellectual history. His scholarly work has earned both national and international recognition, and he has represented Sri Lanka in numerous global academic forums. At MITL Campus, Prof. Tilakaratne offers high-level guidance on academic governance, programme innovation, research integration, and strategic growth initiatives. His leadership strengthens the institution’s commitment to maintaining rigorous academic standards while expanding its global outlook.`
  },
  {
    name: "Mr. Vijitha Welagedara",
    role: "Head of Academic Department MITL Campus, Sri Lanka",
    image: "/Leaders/Vijitha.jpeg",
    description: "Mr. Vijitha Welagedara is a distinguished education administrator with decades of dedicated service in Sri Lanka’s national education system. He currently serves as the Head of the Academic Department at MITL Campus, where he provides strategic leadership, academic governance, and quality assurance oversight across all diploma and higher education programmes. Prior to joining MITL Campus, Mr. Welagedara held the position of Director at the Ministry of Education of Sri Lanka. In this capacity, he played a significant role in national-level academic administration, policy implementation, curriculum coordination, institutional supervision, and teacher development initiatives. His leadership contributed to strengthening academic standards and ensuring regulatory compliance within the public education sector. At MITL Campus, Mr. Welagedara is responsible for academic planning, programme development, faculty supervision, assessment standards, and maintaining alignment with national and international academic benchmarks. His extensive experience in government education administration brings credibility, structure, and strategic direction to the institution’s academic operations. Known for his integrity, disciplined management style, and commitment to educational excellence, Mr. Welagedara continues to guide MITL Campus in its mission to deliver high-quality, industry-relevant education that meets both local and global standards."
  },
  {
    name: "Mr. Milinda N. Lamahewa",
    role: "Chairman & Managing Director MITL Campus, Sri Lanka",
    image: "/Leaders/Milinda.jpg",
    description: "Mr. Milinda N. Lamahewa is the Founder, Chairman, and Managing Director of MITL Campus, providing visionary leadership and strategic direction for the institution’s growth and international expansion. As an education entrepreneur with extensive experience in institutional development and global academic partnerships, he has played a pivotal role in positioning MITL Campus as a progressive higher education provider in Sri Lanka. Under his leadership, MITL Campus has expanded its academic portfolio to include diploma, advanced diploma, and degree pathway programmes, with a strong emphasis on quality assurance, industry relevance, and international recognition. He has been instrumental in establishing cross-border academic collaborations and developing systems that integrate verification, compliance, and academic governance standards. Mr. Lamahewa’s leadership philosophy is centered on accessibility, innovation, and global connectivity in education. He actively oversees strategic planning, institutional partnerships, regulatory alignment, and long-term development initiatives aimed at enhancing student opportunities both locally and internationally. With a strong commitment to academic excellence and sustainable institutional growth, Mr. Lamahewa continues to guide MITL Campus toward becoming a recognized hub for internationally oriented education in Sri Lanka."
  },
  {
    name: "Mr. Sarath Chandrasiri",
    role: "Head Of Examination & Research Division MITL Campus, Sri Lanka",
    image: "/Leaders/Sarath.jpeg",
    description: "Mr. H.M. Sarath Chandrasiri is a highly experienced examinations administrator and academic professional with an extensive background in Sri Lanka’s national examination system. He holds a Bachelor of Arts (BA), Master of Arts (MA), Postgraduate Diploma, and Master of Education (MEd), and has also been conferred the distinguished title of Royal Pandith in recognition of his scholarly achievement. Mr. Chandrasiri previously served in a senior capacity within the Confidential Examinations Division of the Department of Examinations Sri Lanka, where he was entrusted with overseeing highly sensitive examination operations. His responsibilities included maintaining strict security protocols, coordinating confidential examination processes, and ensuring national standards of integrity and compliance in public examinations. He currently serves as the Head of the Examination & Research Division at MITL Campus, where he leads examination governance, assessment policy development, moderation systems, and academic research integration. His role includes strengthening quality assurance mechanisms, enhancing data-driven academic evaluation, and upholding transparent and credible assessment practices across all programmes. With his strong academic credentials and national-level examination experience, Mr. Chandrasiri brings authority, integrity, and scholarly depth to MITL Campus, reinforcing the institution’s commitment to excellence in assessment and research standards."
  },
];

function BioCard({ leader, index }: { leader: Leader; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Set a character limit for the initial view
  const charLimit = 350;
  const isTooLong = leader.description.length > charLimit;
  const displayedText = isExpanded ? leader.description : leader.description.slice(0, charLimit);

  const toggleExpand = () => {
    if (isExpanded) {
      // If we are collapsing, scroll back to the top of this card first
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Small delay before collapsing to ensure smooth visual transition
      setTimeout(() => {
        setIsExpanded(false);
      }, 300);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div
      ref={scrollRef}
      className={`flex flex-col gap-8 md:items-start lg:gap-16 scroll-mt-32 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
        }`}
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 lg:w-2/5 md:sticky md:top-24">
        <div className="group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl transition-all duration-500 hover:shadow-2xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 lg:w-3/5">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              {leader.name}
            </h3>
            <div className="mt-3 flex">
              <span className="rounded-lg bg-[oklch(0.7579_0.1614_71.2)/0.1] px-4 py-1.5 text-sm font-semibold tracking-wide text-[oklch(0.7579_0.1614_71.2)]">
                {leader.role}
              </span>
            </div>
          </div>

          <div className="relative transition-all duration-300">
            <p className="text-left text-base leading-relaxed text-gray-700 md:text-lg">
              {displayedText}
              {!isExpanded && isTooLong && "..."}
            </p>

            {isTooLong && (
              <button
                onClick={toggleExpand}
                className="mt-4 flex items-center gap-1 font-bold text-[oklch(0.6538_0.1593_243.47)] hover:underline"
              >
                {isExpanded ? (
                  <>
                    See Less
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Read Full Bio
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="pt-2">
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[oklch(0.7579_0.1614_71.2)] to-[oklch(0.6538_0.1593_243.47)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#f5f6f8] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Top label */}
        <div className="flex justify-center">
          <span className="rounded-full bg-[oklch(0.6538_0.1593_243.47)/0.1] px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[oklch(0.6538_0.1593_243.47)]">
            Our Leadership
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          The <span className="text-[oklch(0.7579_0.1614_71.2)]">Visionaries</span> Behind
        </h2>

        <div className="mt-2 text-center text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl text-gray-900">
          <span className="text-[oklch(0.6538_0.1593_243.47)]">MITL Campus</span>
        </div>

        {/* Leaders Bio List */}
        <div className="mt-28 flex flex-col gap-24 md:gap-32">
          {leaders.map((p, index) => (
            <BioCard key={p.name} leader={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
