import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="w-full">
      {/* TOP HERO */}
      <div className="relative z-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/AboutUs/Hero.png"
            alt="About MITL Campus"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="
            relative mx-auto max-w-7xl
            px-4 pt-24 pb-20
            sm:pt-28
            md:px-6 md:pt-48 md:pb-16
          "
        >
          <div className="text-center">
            <h1
              className="
                text-3xl font-bold tracking-tight
                text-[oklch(0.7579_0.1614_71.2)]
                sm:text-4xl
                md:text-6xl
              "
            >
              NEWS & ANNOUNCEMENTS
            </h1>

            <p
              className="
                mx-auto mt-4 max-w-xl
                text-sm leading-relaxed text-white/90
                sm:mt-5 sm:text-base
                md:mt-6 md:max-w-3xl md:text-lg
              "
            >
              Stay updated with the latest announcements, events, and academic  achievements.
            </p>
          </div>
        </div>

        {/* angled orange + white transition */}
        <div className="relative z-30 h-12 sm:h-14 md:h-20">
          <div
            className="
              absolute inset-x-0 -bottom-8 sm:-bottom-9 md:-bottom-10
              h-24 sm:h-28 md:h-32
              bg-white
              [clip-path:polygon(0%_0%,100%_75%,100%_100%,0%_100%)]
            "
          />
          <div
            className="
              absolute inset-x-0 -bottom-8 sm:-bottom-9 md:-bottom-10
              h-24 sm:h-28 md:h-32
              bg-[oklch(0.7579_0.1614_71.2)]
              [clip-path:polygon(0%_0%,100%_70%,100%_78%,0%_8%)]
            "
          />
        </div>
      </div>
    </section>
  );
}
