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
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold max-w-3xl">About AdeProm</h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            A professional cleaning company based in Motherwell, Scotland, delivering reliable and high-quality cleaning services for both residential and commercial clients — and we're happy to take on jobs outside Scotland too.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-4xl space-y-6 text-lg text-foreground/90 leading-relaxed">
          <p>
            <span className="font-semibold text-brand-deep">AdeProm</span> is a professional cleaning company based in Motherwell, Scotland, delivering reliable and high-quality cleaning services for both residential and commercial clients.
          </p>
          <p>
            Operating under the registered business name <span className="font-semibold text-brand-deep">ADEPROM-GB GLOBAL SERVICES LTD</span>, we are committed to maintaining the highest standards of cleanliness, professionalism, and customer satisfaction.
          </p>
          <p>
            With over <span className="font-semibold text-brand-deep">2 years of experience</span>, AdeProm has built a growing reputation for consistency, attention to detail, and dependable service delivery.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="card-elevated p-8">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-brand-deep">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To provide dependable, high-quality cleaning services that create safe, fresh, and comfortable environments for our clients.
            </p>
          </div>
          <div className="card-elevated p-8">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-brand-deep">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become a trusted cleaning brand across Scotland and beyond, known for excellence, reliability, and customer satisfaction — available for jobs outside Scotland on request.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Trust AdeProm</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Built on Consistency & Care</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, title: "Experienced & Professional", desc: "A trained team you can rely on for every clean." },
              { icon: Shield, title: "Customer Satisfaction", desc: "Strong focus on making sure every client is happy." },
              { icon: Award, title: "Reliable & Consistent", desc: "Dependable service delivery, every single visit." },
              { icon: Clock, title: "Flexible & Responsive", desc: "We adapt quickly to your schedule and needs." },
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
