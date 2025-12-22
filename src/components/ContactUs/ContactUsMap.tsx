// ContactUsMap.tsx
import Image from "next/image";

export default function ContactUsMap() {
  return (
    <div className="relative w-full h-120 -top-10">
      <Image
        src="/ContactUs/LocationImage.png"
        alt="Map"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
