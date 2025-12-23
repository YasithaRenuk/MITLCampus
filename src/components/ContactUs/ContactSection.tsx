import ContactLeft from "./ContactLeft";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative bg-transparent py-16 md:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left content */}
          <ContactLeft />

          {/* Mobile: show form normally */}
          <div className="block lg:hidden">
            <ContactForm />
          </div>

          {/* Desktop spacer for floating form */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Desktop floating form */}
      <div className="hidden lg:block">
        <ContactForm />
      </div>
    </section>
  );
}
