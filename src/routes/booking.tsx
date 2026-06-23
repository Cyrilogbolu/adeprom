import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Cleaning Service | AdeProm Motherwell" },
      { name: "description", content: "Book professional cleaning in Motherwell. Submit your details and we'll confirm your booking." },
      { property: "og:title", content: "Book a Cleaning Service | AdeProm" },
      { property: "og:description", content: "Schedule reliable, professional cleaning in Motherwell, Scotland." },
    ],
  }),
  component: Booking,
});

const serviceTypes = [
  "Domestic Cleaning",
  "Commercial Cleaning",
  "End of Tenancy Cleaning",
  "Carpet & Upholstery Cleaning",
  "Airbnb Cleaning",
  "After Builders Cleaning",
  "Building / Site Cleaning",
];

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = `Hi AdeProm, I'd like to book a cleaning.%0A%0A` +
      `Name: ${fd.get("name")}%0A` +
      `Phone: ${fd.get("phone")}%0A` +
      `Email: ${fd.get("email")}%0A` +
      `Service: ${fd.get("service")}%0A` +
      `Location: ${fd.get("location")}%0A` +
      `Preferred Date: ${fd.get("date")}`;
    window.location.href = `https://wa.me/447570833626?text=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">Booking</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">Book Your Cleaning Service</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Fill out the form below and our team will confirm your booking.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <form onSubmit={onSubmit} className="card-elevated p-8 lg:col-span-2 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Location" name="location" required placeholder="Town / area" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-deep mb-1.5">Service Type</label>
              <select name="service" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select a service</option>
                {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <Field label="Preferred Date" name="date" type="date" required />
            <button type="submit" className="btn-hero w-full sm:w-auto">Submit Booking Request</button>
            {submitted && (
              <p className="text-sm text-primary flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Opening WhatsApp to confirm your booking…</p>
            )}
          </form>
          <aside className="space-y-5">
            <div className="card-elevated p-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-bold text-brand-deep">Trusted Professionals</h3>
              <p className="mt-2 text-sm text-muted-foreground">Your booking is handled by trained professionals. We ensure quality, reliability and satisfaction every time.</p>
            </div>
            <div className="card-elevated p-6">
              <h3 className="font-bold text-brand-deep">Prefer to talk?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Call or message us directly.</p>
              <a href="tel:+447570833626" className="mt-4 block text-primary font-semibold">+44 757 083 3626</a>
              <a href="mailto:Leyedayo@gmail.com" className="block text-primary font-semibold">Leyedayo@gmail.com</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-deep mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
