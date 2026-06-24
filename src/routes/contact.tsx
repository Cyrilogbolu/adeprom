import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AdeProm Cleaning | Motherwell, Scotland" },
      { name: "description", content: "Get in touch with AdeProm Cleaning. Call, email or WhatsApp our Motherwell team for a free quote." },
      { property: "og:title", content: "Contact AdeProm Cleaning" },
      { property: "og:description", content: "Reach out for a free cleaning quote in Motherwell and surrounding areas." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = `Hi AdeProm,%0A%0AName: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0AMessage: ${fd.get("message")}`;
    window.location.href = `mailto:support@adeprom.com?subject=Website%20Enquiry&body=${body}`;
    setSent(true);
  }
  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">Contact</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">Get in Touch</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">We'd love to hear from you. Reach out for a free quote or to discuss your cleaning needs.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <InfoCard icon={Phone} title="Phone" value="+44 757 083 3626" href="tel:+447570833626" />
            <InfoCard icon={Mail} title="Email" value="support@adeprom.com" href="mailto:support@adeprom.com" />
            <InfoCard icon={MapPin} title="Location" value="Motherwell, Scotland — available beyond too" />
            <a href="https://wa.me/447570833626" target="_blank" rel="noopener" className="btn-hero w-full sm:w-auto">
              <MessageCircle className="h-5 w-5" /> Chat with us on WhatsApp
            </a>
            <div className="card-elevated p-2 overflow-hidden">
              <iframe
                title="AdeProm location"
                className="w-full h-72 rounded-xl"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.10,55.75,-3.90,55.83&layer=mapnik&marker=55.7878,-3.9981"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="card-elevated p-8 space-y-5 h-fit">
            <h2 className="text-2xl font-bold text-brand-deep">Send a Message</h2>
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="block text-sm font-semibold text-brand-deep mb-1.5">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button className="btn-hero">Send Message</button>
            {sent && <p className="text-sm text-primary">Opening your email app…</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: typeof Phone; title: string; value: string; href?: string }) {
  const inner = (
    <div className="card-elevated p-6 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "var(--gradient-brand)" }}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-lg font-semibold text-brand-deep">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-deep mb-1.5">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
