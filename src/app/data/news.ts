export type NewsCategory = "Campus Events" | "Academic Update" | "Announcement";

export type NewsType = {
  id:number;
  image: string;
  category: NewsCategory;
  title: string;
  description: string;
  published: string;
  imgs?:string[];
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
    id:1,
    image: "/news/1/N15.jpeg",
    category: "Campus Events",
    title: "MITL Campus Explores International Nursing Program in Japan",
    description:
      "Management of MITL Campus visited Japan on April 2025 for an official invitation received by the Kobe International University for their nursing care orientation program. Discussions focused on long-term educational and scholarship partnerships.",
    published: "April 2025",
    imgs : [
      "/news/1/N11.jpeg",
      "/news/1/N12.jpeg",
      "/news/1/N13.jpeg",
      "/news/1/N14.jpeg",
      "/news/1/N15.jpeg"
    ]
  },
  {
    id:2,
    image: "/news/2/N26.jpeg",
    category: "Academic Update",
    title: "Opportunities for Sri Lankan Health Professionals Abroad",
    description:
      "MITL Campus visited one of Japan’s largest nursing training schools and hospitals to open opportunities for Sri Lankan students, offering practical experience and international exposure in the health sector.",
    published: "May 2025",
    imgs : [
      "/news/2/N21.jpeg",
      "/news/2/N22.jpeg",
      "/news/2/N23.jpeg",
      "/news/2/N24.jpeg",
      "/news/2/N25.jpeg",
      "/news/2/N26.jpeg",
    ]
  },
  {
    id:3,
    image: "/news/3/N31.jpeg",
    category: "Announcement",
    title: "MITL Signs MOU with BTH University, Indonesia",
    description:
      "MITL Campus had an official meeting with Mr. Wawan Rismawan, Rector of BTH University Indonesia. They signed an MOU in December 2025 to expand international educational partnerships in Sri Lanka.",
    published: "December 2025",
    imgs : [
      "/news/3/N31.jpeg",
      "/news/3/N32.jpeg",
      "/news/3/N33.jpeg",
    ]
  },
  {
    id:4,
    image: "/news/4/N41.jpeg",
    category: "Campus Events",
    title: "MITL Opens Central Operations Center in Boralasgamuwa",
    description:
      "MITL Campus launched a new Central Operations Center in Boralasgamuwa, Sri Lanka. The facility will manage campus operations, student data, online learning platforms, and educational affiliations nationwide.",
    published: "November 23, 2025",
    imgs : [
      "/news/4/N41.jpeg",
      "/news/4/N42.jpeg",
      "/news/4/N43.jpeg",
      "/news/4/N44.jpeg",
      "/news/4/N45.jpeg",
      "/news/4/N46.jpeg",
      "/news/4/N47.jpeg",
      "/news/4/N48.jpeg",
      "/news/4/N49.jpeg",
      "/news/4/N410.jpeg",
      "/news/4/N411.jpeg",
      "/news/4/N412.jpeg",
      "/news/4/N413.jpeg",
      "/news/4/N414.jpeg",
    ]
  },
  {
    id:5,
    image: "/news/5/N51.jpeg",
    category: "Academic Update",
    title: "MITL Campus Official Graduation Ceremony",
    description:
      "The official graduation of MITL Campus, affiliated with Azteca University North America, was held at BMICH main hall in November 2025. Over 1000 diploma holders and graduates received their awards during the convocation.",
    published: "November 23, 2025",
    imgs : [
      "/news/5/N51.jpeg",
      "/news/5/N52.jpeg",
      "/news/5/N53.jpeg",
      "/news/5/N54.jpeg",
      "/news/5/N55.jpeg",
      "/news/5/N56.jpeg",
      "/news/5/N57.jpeg",
      "/news/5/N58.jpeg",
      "/news/5/N59.jpeg",
      "/news/5/N510.jpeg",
      "/news/5/N511.jpeg",
      "/news/5/N512.jpeg",
      "/news/5/N513.jpeg",
      "/news/5/N514.jpeg",
      "/news/5/N515.jpeg",
      "/news/5/N516.jpeg",
    ]
  },
  {
    id:6,
    image: "/news/6/N64.jpeg",
    category: "Announcement",
    title: "Career Opportunities for MITL Nursing Graduates in Japan",
    description:
      "MITL Campus supports student career progression through trusted job placements. An MOU was signed with a leading Japanese health organization to provide opportunities for qualified nursing students to work and settle in Japan.",
    published: "November 23, 2025",
    imgs : [
      "/news/6/N61.jpeg",
      "/news/6/N62.jpeg",
      "/news/6/N63.jpeg",
      "/news/6/N64.jpeg",
      "/news/6/N65.jpeg",
      "/news/6/N66.jpeg",
      "/news/6/N67.jpeg",
      "/news/6/N68.jpeg",
    ]
  },
];
