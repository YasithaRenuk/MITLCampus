import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="w-full">
      {/* TOP BLUE HERO */}
      {/* TOP BLUE HERO WITH BACKGROUND IMAGE */}
<div className="relative overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/AboutUs/Hero.png"   // 
      alt="About MITL Campus"
      fill
      className="object-cover"
      priority
    />
  </div>



  {/* wave lines */}
  <div className="pointer-events-none absolute inset-0 opacity-25">
    <div className="absolute -left-48 -top-24 h-[520px] w-[520px] rounded-full border border-white/30" />
    <div className="absolute -left-24 -top-44 h-[720px] w-[720px] rounded-full border border-white/25" />
    <div className="absolute -left-10 -top-10 h-[860px] w-[860px] rounded-full border border-white/20" />
  </div>

  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-32 md:px-6 md:pt-28 md:pb-40">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-[oklch(0.7579_0.1614_71.2)] md:text-6xl">
        ABOUT US
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
        Discover MITL&apos;s Unwavering Commitment To Fostering Innovation, Driving
        World-Class Research, And Leaders Of Tomorrow.
      </p>
    </div>
  </div>

  {/* angled orange + white transition */}
  <div className="relative h-16 md:h-20">
    <div className="absolute inset-x-0 -bottom-10 h-28 bg-white 
      [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_100%)]" />

    <div className="absolute inset-x-0 -bottom-10 h-28 
      bg-[oklch(0.7579_0.1614_71.2)] 
      [clip-path:polygon(0%_46%,100%_-2%,100%_6%,0%_54%)]" />
  </div>
</div>


      {/* WELCOME PANEL */}
      <div className="relative bg-white">
        {/* bottom blue strip (like screenshot) */}
        <div className="pointer-events-none absolute inset-x-0 -top-3 h-10 bg-[oklch(0.6538_0.1593_243.47)] [clip-path:polygon(0%_75%,100%_25%,100%_45%,0%_95%)]" />

        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="relative overflow-hidden rounded-xl bg-white">
           

            {/* subtle watermark logo */}
            <div className="pointer-events-none absolute left-6 top-8 opacity-15 md:left-10 md:top-10">
              <div className="relative h-[220px] w-[260px] md:h-[260px] md:w-[320px]">
                {/* Replace with your actual watermark logo path */}
                <Image
                  src="/AboutUs/watermark.png"
                  alt="Watermark"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>

            <div className="grid gap-10 px-6 py-12 md:grid-cols-2 md:px-1 md:py-16">
              {/* LEFT BIG TEXT */}
              <div className="relative z-10">
                <h2 className="text-5xl font-bold leading-[0.9] tracking-tight text-black md:text-7xl">
                  Welcome To
                </h2>

                <div className="mt-4 flex flex-wrap items-baseline gap-x-4">
                  <span className="text-5xl font-extrabold tracking-tight text-[oklch(0.7579_0.1614_71.2)] md:text-7xl">
                    MITL
                  </span>
                  <span className="text-5xl font-extrabold tracking-tight text-[oklch(0.6538_0.1593_243.47)] md:text-7xl">
                    CAMPUS
                  </span>
                </div>
              </div>

              {/* RIGHT PARAGRAPH */}
              <div className="relative z-10 md:pt-4">
                <p className="text-xs leading-relaxed text-gray-800 md:text-sm">
                  A premier platform for professional education designed to help individuals and
                  businesses achieve their highest potential through learning. Our mission is to
                  provide cutting-edge, practical training that meets the evolving needs of
                  today&apos;s industries.
                  <br />
                  <br />
                  At MITL CAMPUS, we offer a wide range of professional education programs,
                  including certifications, workshops, online courses, and in-person training,
                  across various fields such as business, marketing, technology, and leadership.
                  Each of our programs is developed by industry leaders to ensure that learners
                  gain practical, real-world knowledge that can be immediately applied to their
                  careers.
                  <br />
                  <br />
                  Our platform is designed for professionals at all stages—whether you&apos;re just
                  starting your career or looking to enhance your skills for a leadership role.
                  We also offer custom training solutions for organizations looking to upskill
                  their workforce and drive performance.
                  <br />
                  <br />
                  With a commitment to quality education and professional development, MITL CAMPUS
                  is your partner in achieving success. Explore our courses and start your
                  learning journey today!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* light blue background behind next section like screenshot */}
        <div className="h-10 bg-[#eaf4ff]" />
      </div>
    </section>
  );
}
