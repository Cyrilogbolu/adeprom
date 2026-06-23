import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Shield, Users, Clock, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AdeProm Cleaning | Motherwell Cleaning Company" },
      { name: "description", content: "AdeProm Cleaning is a professional cleaning company in Motherwell, Scotland, with over 2 years of experience in residential and commercial cleaning." },
      { property: "og:title", content: "About AdeProm Cleaning" },
      { property: "og:description", content: "Trusted Motherwell cleaning company. Learn about our mission, vision and team." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">About Us</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold max-w-3xl">About AdeProm Cleaning</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            A professional cleaning company based in Motherwell, Scotland, specialising in reliable, high-quality cleaning for residential and commercial clients.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="card-elevated p-8">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-brand-deep">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To provide dependable and high-quality cleaning services that create safe, fresh, and comfortable environments.
            </p>
          </div>
          <div className="card-elevated p-8">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-brand-deep">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become a trusted cleaning brand across Scotland known for excellence and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Trust Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Built on Consistency & Detail</h2>
            <p className="mt-3 text-muted-foreground">With over 2 years of experience, we've built a reputation for professionalism and attention to detail.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, title: "Experienced Team", desc: "Trained professionals you can rely on." },
              { icon: Shield, title: "Customer-Focused", desc: "We adapt to your needs and schedule." },
              { icon: Award, title: "Quality Commitment", desc: "Consistent, spotless results every time." },
              { icon: Clock, title: "Flexible & Responsive", desc: "Fast bookings and clear communication." },
            ].map((f) => (
              <div key={f.title} className="card-elevated p-6">
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold text-brand-deep">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/booking" className="btn-hero">Book a Cleaning</Link>
          </div>
        </div>
      </section>
    </>
  );
}
