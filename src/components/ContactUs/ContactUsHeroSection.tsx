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
              CONTACT US
            </h1>

            {/* Keep this slightly larger than global <p> */}
            <p className="mx-auto mt-6 max-w-3xl text-white/90 md:text-lg">
              We'd Love To Hear From You. Please Fill Out The Form Below Or Use The <br/>
              <span className="center">Contact Details Do Reach Us.</span>
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

    
      
    </section>
  );
}
