// ContactUsMap.tsx
export default function ContactUsMap() {
  return (
    <div className="relative w-full h-120 -top-10 overflow-hidden rounded-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=RVWW+MMM,+Sri+Pagngnasara+Mawatha,+Galle+80000&output=embed"
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
