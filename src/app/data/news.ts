export type NewsCategory = "Campus Events" | "Academic Update" | "Announcement";

export type NewsType = {
  image: string;
  category: NewsCategory;
  title: string;
  description: string;
  published: string;
}

export type Categories = string[];

export const categories: Categories = [
  "All",
  "Campus Events",
  "Academic Update",
  "Announcement",
];

export const news: NewsType[] = [
  {
    image: "/news/1.png",
    category: "Campus Events",
    title: "MITL Campus Explores International Nursing Program in Japan",
    description:
      "Management of MITL Campus visited Japan on April 2025 for an official invitation received by the Kobe International University for their nursing care orientation program. Discussions focused on long-term educational and scholarship partnerships.",
    published: "April 2025",
  },
  {
    image: "/news/2.png",
    category: "Academic Update",
    title: "Opportunities for Sri Lankan Health Professionals Abroad",
    description:
      "MITL Campus visited one of Japan’s largest nursing training schools and hospitals to open opportunities for Sri Lankan students, offering practical experience and international exposure in the health sector.",
    published: "May 2025",
  },
  {
    image: "/news/3.png",
    category: "Announcement",
    title: "MITL Signs MOU with BTH University, Indonesia",
    description:
      "MITL Campus had an official meeting with Mr. Wawan Rismawan, Rector of BTH University Indonesia. They signed an MOU in December 2025 to expand international educational partnerships in Sri Lanka.",
    published: "December 2025",
  },
  {
    image: "/news/4.png",
    category: "Campus Events",
    title: "MITL Opens Central Operations Center in Boralasgamuwa",
    description:
      "MITL Campus launched a new Central Operations Center in Boralasgamuwa, Sri Lanka. The facility will manage campus operations, student data, online learning platforms, and educational affiliations nationwide.",
    published: "November 23, 2025",
  },
  {
    image: "/news/5.png",
    category: "Academic Update",
    title: "MITL Campus Official Graduation Ceremony",
    description:
      "The official graduation of MITL Campus, affiliated with Azteca University North America, was held at BMICH main hall in November 2025. Over 1000 diploma holders and graduates received their awards during the convocation.",
    published: "November 23, 2025",
  },
  {
    image: "/news/6.png",
    category: "Announcement",
    title: "Career Opportunities for MITL Nursing Graduates in Japan",
    description:
      "MITL Campus supports student career progression through trusted job placements. An MOU was signed with a leading Japanese health organization to provide opportunities for qualified nursing students to work and settle in Japan.",
    published: "November 23, 2025",
  },
];
