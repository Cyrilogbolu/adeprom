import { createFileRoute, Link } from "@tanstack/react-router";
import domestic from "@/assets/service-domestic.jpg";
import commercial from "@/assets/service-commercial.jpg";
import site from "@/assets/service-site.jpg";
import tenancy from "@/assets/service-tenancy.jpg";
import carpet from "@/assets/service-carpet.jpg";
import airbnb from "@/assets/service-airbnb.jpg";
import builders from "@/assets/service-builders.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning Services | AdeProm Motherwell" },
      { name: "description", content: "Domestic, commercial, end of tenancy, carpet, Airbnb, after builders and site cleaning across Motherwell and Scotland." },
      { property: "og:title", content: "Cleaning Services | AdeProm Motherwell" },
      { property: "og:description", content: "A full range of professional cleaning services in Motherwell." },
    ],
  }),
  component: Services,
});

const services = [
  { img: domestic, title: "Domestic Cleaning", desc: "Regular and deep cleaning for homes.", benefits: ["Clean, healthy living space", "Flexible scheduling"], ideal: "Homeowners and families" },
  { img: commercial, title: "Commercial Cleaning", desc: "Professional cleaning for offices and businesses.", benefits: ["Productivity-friendly environment", "Custom cleaning plans"], ideal: "Offices, shops, and companies" },
  { img: site, title: "Building / Site Cleaning", desc: "Cleaning for construction and work sites.", benefits: ["Safe environment", "Professional finishing"], ideal: "Construction sites and contractors" },
  { img: tenancy, title: "End of Tenancy Cleaning", desc: "Deep cleaning for moving in or out.", benefits: ["Deposit protection", "Thorough cleaning"], ideal: "Tenants and landlords" },
  { img: carpet, title: "Carpet & Upholstery Cleaning", desc: "Deep cleaning for carpets and furniture.", benefits: ["Removes dirt and stains", "Improves hygiene"], ideal: "Homes and offices" },
  { img: airbnb, title: "Airbnb Cleaning", desc: "Fast, efficient cleaning between guest stays.", benefits: ["Guest-ready space", "Consistent quality"], ideal: "Short-term rental owners" },
  { img: builders, title: "After Builders Cleaning", desc: "Cleaning after renovations or construction.", benefits: ["Dust-free environment", "Ready-to-use space"], ideal: "Property owners and developers" },
];

function Services() {
  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">Services</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">Our Cleaning Services</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Expert cleaning solutions tailored to your home, business or property.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <article key={s.title} className="card-elevated overflow-hidden flex flex-col">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="w-full h-56 object-cover" />
              <div className="p-7 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-brand-deep">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Benefits</p>
                  <ul className="mt-2 space-y-1 text-sm text-foreground">
                    {s.benefits.map((b) => <li key={b}>• {b}</li>)}
                  </ul>
                </div>
                <p className="mt-5 text-sm"><span className="font-semibold text-brand-deep">Ideal for:</span> <span className="text-muted-foreground">{s.ideal}</span></p>
                <Link to="/booking" className="btn-hero mt-6 self-start text-sm">Book this Service</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
