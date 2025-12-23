import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  image: string;
};

const leaders: Leader[] = [
  {
    name: "Yasitha Renuka",
    role: "Managing Director",
    image: "/Leaders/Yasitha.png",
  },
  {
    name: "Maleesha Ilankoon",
    role: "Managing Director",
    image: "/Leaders/Maleesha.png",
  },
  {
    name: "Sanoj Kumara",
    role: "Senior Consultant",
    image: "/Leaders/Sanoj.png",
  },
  {
    name: "Sonal Jayasinghe",
    role: "Senior Consultant",
    image: "/Leaders/Sonal.png",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#f5f6f8] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Top label */}
        <p className="text-center text-sm font-bold text-[oklch(0.6538_0.1593_243.47)]">
          Leadership
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Meet The Visionary Leaders Guiding
        </h2>

        <div className="mt-3 text-center text-3xl font-bold tracking-tight md:text-5xl">
          <span className="text-[oklch(0.7579_0.1614_71.2)]">MITL</span>{" "}
          <span className="text-[oklch(0.6538_0.1593_243.47)]">Campus</span>
        </div>

        {/* Cards */}
        {/* Cards */}
<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {leaders.map((p) => (
    <div
      key={p.name}
      className="rounded-2xl  "
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 10vw, (max-width: 1024px) 45vw, 320px"
        />
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <p className="text-xl font-bold text-gray-900">
          {p.name}
        </p>
        <p className="mt-1 text-sm font-semibold text-[oklch(0.7579_0.1614_71.2)]">
          {p.role}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
