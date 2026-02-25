import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const leaders: Leader[] = [
  {
    name: "Mr. Vijitha Welagedara",
    role: "Head of Academic Department MITL Campus, Sri Lanka",
    image: "/Leaders/Milinda.jpg",
    description: "Mr. Vijitha Welagedara is a distinguished education administrator with decades of dedicated service in Sri Lanka’s national education system. He currently serves as the Head of the Academic Department at MITL Campus, where he provides strategic leadership, academic governance, and quality assurance oversight across all diploma and higher education programmes. Prior to joining MITL Campus, Mr. Welagedara held the position of Director at the Ministry of Education of Sri Lanka. In this capacity, he played a significant role in national-level academic administration, policy implementation, curriculum coordination, institutional supervision, and teacher development initiatives. His leadership contributed to strengthening academic standards and ensuring regulatory compliance within the public education sector. At MITL Campus, Mr. Welagedara is responsible for academic planning, programme development, faculty supervision, assessment standards, and maintaining alignment with national and international academic benchmarks. His extensive experience in government education administration brings credibility, structure, and strategic direction to the institution’s academic operations. Known for his integrity, disciplined management style, and commitment to educational excellence, Mr. Welagedara continues to guide MITL Campus in its mission to deliver high-quality, industry-relevant education that meets both local and global standards."
  },
  {
    name: "Prof. Asanga Tilakaratne",
    role: "Senior Academic & Strategic Advisor MITL Campus, Sri Lanka",
    image: "/Leaders/SeniorConsultant.jpg",
    description: `Prof. Asanga Tilakaratne is a distinguished Sri Lankan scholar and higher education leader with extensive experience in university administration, research, and academic policy development. He currently serves as the Senior Academic & Strategic Advisor at MITL Campus, providing strategic direction in academic planning, quality assurance, international collaboration, and institutional development. Prof. Tilakaratne is widely known for his long-standing academic career at the University of Colombo, where he served as a Professor in the Department of Pali and Buddhist Studies and held senior leadership roles, including Dean of the Faculty of Arts. He has also contributed to national higher education development through advisory and governance roles connected with the University Grants Commission. Throughout his academic career, he has been actively engaged in curriculum development, postgraduate supervision, international academic partnerships, and research in Buddhist philosophy and intellectual history. His scholarly work has earned both national and international recognition, and he has represented Sri Lanka in numerous global academic forums. At MITL Campus, Prof. Tilakaratne offers high-level guidance on academic governance, programme innovation, research integration, and strategic growth initiatives. His leadership strengthens the institution’s commitment to maintaining rigorous academic standards while expanding its global outlook.`
  },
  {
    name: "Milinda N. Lamahewa",
    role: "Chairman & Managing Director MITL Campus, Sri Lanka",
    image: "/Leaders/SeniorConsultant2.jpg",
    description: "Mr. Milinda N. Lamahewa is the Founder, Chairman, and Managing Director of MITL Campus, providing visionary leadership and strategic direction for the institution’s growth and international expansion. As an education entrepreneur with extensive experience in institutional development and global academic partnerships, he has played a pivotal role in positioning MITL Campus as a progressive higher education provider in Sri Lanka. Under his leadership, MITL Campus has expanded its academic portfolio to include diploma, advanced diploma, and degree pathway programmes, with a strong emphasis on quality assurance, industry relevance, and international recognition. He has been instrumental in establishing cross-border academic collaborations and developing systems that integrate verification, compliance, and academic governance standards. Mr. Lamahewa’s leadership philosophy is centered on accessibility, innovation, and global connectivity in education. He actively oversees strategic planning, institutional partnerships, regulatory alignment, and long-term development initiatives aimed at enhancing student opportunities both locally and internationally. With a strong commitment to academic excellence and sustainable institutional growth, Mr. Lamahewa continues to guide MITL Campus toward becoming a recognized hub for internationally oriented education in Sri Lanka."
  },
  {
    name: "Mr. Sarath Chandrasiri",
    role: "Head Of Examination & Research Division MITL Campus, Sri Lanka",
    image: "/Leaders/SeniorConsultant3.jpg",
    description: "Mr. Sarath Chandrasiri is a senior examinations administrator with extensive experience in Sri Lanka’s national examination system. He previously served in a key role within the Confidential Examinations Division of the Department of Examinations Sri Lanka, where he was entrusted with highly sensitive responsibilities relating to the security, coordination, and administration of national-level public examinations. During his tenure in the national examinations framework, Mr. Chandrasiri was involved in overseeing confidential examination processes, maintaining strict security protocols, coordinating secure documentation procedures, and ensuring compliance with national standards for assessment integrity. He currently serves as the Head of the Examination & Research Division at MITL Campus, where he leads the development, implementation, and monitoring of examination systems and academic research standards. His responsibilities include examination policy formulation, assessment moderation, quality assurance, data analysis, and the strengthening of research-based academic practices within the institution. With a strong background in examination governance and institutional compliance, Mr. Chandrasiri brings credibility, structure, and high-level security awareness to MITL Campus’s academic assessment systems. His leadership supports the institution’s commitment to maintaining rigorous, transparent, and internationally aligned examination standards."
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#f5f6f8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Top label */}
        <div className="flex justify-center">
          <span className="rounded-full bg-[oklch(0.6538_0.1593_243.47)/0.1] px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[oklch(0.6538_0.1593_243.47)]">
            Leadership
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Meet The <span className="text-[oklch(0.7579_0.1614_71.2)]">Visionary</span> Leaders
        </h2>

        <div className="mt-2 text-center text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-gray-900">
          Guiding <span className="text-[oklch(0.6538_0.1593_243.47)]">MITL Campus</span>
        </div>

        {/* Leaders Bio List */}
        <div className="mt-20 flex flex-col gap-16 md:gap-24">
          {leaders.map((p, index) => (
            <div
              key={p.name}
              className={`flex flex-col gap-8 md:items-center lg:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 lg:w-3/5">
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                      {p.name}
                    </h3>
                    <div className="mt-2 flex">
                      <span className="rounded-lg bg-[oklch(0.7579_0.1614_71.2)/0.1] text-sm font-semibold text-[oklch(0.7579_0.1614_71.2)]">
                        {p.role}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="relative z-10 text-justify text-base leading-relaxed text-gray-600 md:text-lg">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[oklch(0.7579_0.1614_71.2)] to-[oklch(0.6538_0.1593_243.47)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
