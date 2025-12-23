import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="w-full">
      {/* TOP BLUE HERO */}
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
        <div className="relative mx-auto max-w-7xl px-4 pt-32 md:px-6 md:pt-48 md:pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[oklch(0.7579_0.1614_71.2)] md:text-6xl">
              ABOUT US
            </h1>

            {/* Keep this slightly larger than global <p> */}
            <p className="mx-auto mt-6 max-w-3xl text-white/90 md:text-lg">
              Discover MITL&apos;s Unwavering Commitment To Fostering Innovation,
              Driving World-Class Research, And Leaders Of Tomorrow.
            </p>
          </div>
        </div>

        {/* angled orange + white transition */}
        <div className="relative z-30 h-16 md:h-20">
          <div
            className="absolute inset-x-0 -bottom-10 h-32 bg-white
            [clip-path:polygon(0%_0%,100%_75%,100%_100%,0%_100%)]"
          />
          <div
            className="absolute inset-x-0 -bottom-10 h-32
            bg-[oklch(0.7579_0.1614_71.2)]
            [clip-path:polygon(0%_0%,100%_70%,100%_78%,0%_8%)]"
          />
        </div>
      </div>

      {/* WELCOME PANEL */}
      <div className="relative z-10 bg-white -mt-16 md:-mt-24">
        <div className="mx-auto max-w-screen-2xl px-4 py-14 md:px-8 md:py-16">
          <div className="relative overflow-hidden rounded-xl bg-white">
            <div className="grid gap-10 px-6 py-12 md:grid-cols-2 md:px-1 md:py-16">
              {/* LEFT COLUMN */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden">
                {/* Watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70">
                  <div className="relative h-[260px] w-[300px] md:h-[300px] md:w-[360px]">
                    <Image
                      src="/AboutUs/watermark.png"
                      alt="MITL Watermark"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Foreground Text */}
                <div className="relative z-10 text-center px-3 sm:px-0">
                  <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tight text-black">
                    Welcome To
                  </h2>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    <span className="text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tight text-[oklch(0.7579_0.1614_71.2)]">
                      MITL
                    </span>
                    <span className="text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tight text-[oklch(0.6538_0.1593_243.47)]">
                      CAMPUS
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT PARAGRAPH */}
              <div className="relative z-10 md:pt-4">
                {/* Global <p> sizing applies, only justify + color */}
                <p className="text-justify text-gray-800">
                  A premier platform for professional education designed to help
                  individuals and businesses achieve their highest potential
                  through learning. Our mission is to provide cutting-edge,
                  practical training that meets the evolving needs of today&apos;s
                  industries.
                  <br />
                  <br />
                  At MITL CAMPUS, we offer a wide range of professional education
                  programs, including certifications, workshops, online courses,
                  and in-person training, across various fields such as business,
                  marketing, technology, and leadership. Each of our programs is
                  developed by industry leaders to ensure that learners gain
                  practical, real-world knowledge that can be immediately applied
                  to their careers.
                  <br />
                  <br />
                  Our platform is designed for professionals at all stages—
                  whether you&apos;re just starting your career or looking to
                  enhance your skills for a leadership role. We also offer custom
                  training solutions for organizations looking to upskill their
                  workforce and drive performance.
                  <br />
                  <br />
                  With a commitment to quality education and professional
                  development, MITL CAMPUS is your partner in achieving success.
                  Explore our courses and start your learning journey today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
