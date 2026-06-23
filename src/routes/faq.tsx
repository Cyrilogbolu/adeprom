import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | AdeProm Cleaning Services" },
      { name: "description", content: "Frequently asked questions about AdeProm Cleaning Services in Motherwell, Scotland." },
      { property: "og:title", content: "Frequently Asked Questions | AdeProm Cleaning" },
      { property: "og:description", content: "Answers to common questions about our cleaning services." },
    ],
  }),
  component: Faq,
});

const faqs = [
  { q: "How do I book a service?", a: "You can book online through our booking page, or contact us directly via phone or WhatsApp." },
  { q: "Do you cover areas outside Motherwell?", a: "Yes, we cover nearby areas across Scotland. Get in touch to confirm coverage for your location." },
  { q: "Do you provide cleaning materials?", a: "Yes, our team comes fully equipped with professional cleaning materials and equipment." },
  { q: "How much does a cleaning service cost?", a: "Pricing depends on the type of service and the size of the property. Contact us for a free, no-obligation quote." },
  { q: "Can I schedule recurring cleaning?", a: "Yes, we offer flexible recurring services — weekly, fortnightly or monthly." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">FAQ</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="card-elevated overflow-hidden">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
                    <span className="font-semibold text-brand-deep">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-hero">Still have questions? Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
