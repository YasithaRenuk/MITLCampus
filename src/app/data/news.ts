export type NewsCategory = "Campus Events" | "Academic Update" | "Announcement";

export type NewsType = {
    image:string;
    category: NewsCategory;
    title: string;
    description:string;
    published:string;
}
export type Categories = string[];

export const categories:Categories = [
    "All",
    "Campus Announcements",
    "Academic Updates",
    "Campus Events",
    
  ];

export const news:NewsType[] = [
  {
    image: "/news/1.png",
    category: "Campus Events" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/2.png",
    category: "Academic Update" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/3.png",
    category: "Announcement" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/4.png",
    category: "Campus Events" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/5.png",
    category: "Academic Update" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  {
    image: "/news/6.png",
    category: "Announcement" as NewsCategory,
    title: "New Scholarship Programs For Engineering Students",
    description:
      "I'm A Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text”…",
    published: "November 23, 2025",
  },
  // add more items here if you want more pages...
];