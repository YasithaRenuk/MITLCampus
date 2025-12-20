import ContactLeft from "./ContactLeft";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-transparent">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactLeft />

          {/* Empty space on desktop so the absolute card can float */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Floating form */}
      <ContactForm />
    </section>
  );
}
