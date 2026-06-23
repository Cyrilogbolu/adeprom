import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Calendar, Wand2, Smile, MapPin, ArrowRight, Star } from "lucide-react";
import hero from "@/assets/hero-clean-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cleaning Services in Motherwell | AdeProm Cleaning" },
      { name: "description", content: "Professional cleaning services in Motherwell, Scotland. Reliable domestic and commercial cleaning you can trust. Book today." },
      { property: "og:title", content: "Cleaning Services in Motherwell | AdeProm Cleaning" },
      { property: "og:description", content: "Reliable domestic and commercial cleaning across Motherwell and Scotland." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const reasons = [
  "Reliable & Professional Team",
  "Fully Equipped & Trained Staff",
  "Flexible Scheduling",
  "Affordable & Transparent Pricing",
  "Trusted by Homes & Businesses",
];

const services = [
  "Domestic Cleaning",
  "Commercial Cleaning",
  "End of Tenancy Cleaning",
  "Carpet & Upholstery Cleaning",
  "Airbnb Cleaning",
  "After Builders Cleaning",
];

const steps = [
  { icon: Calendar, title: "Book a Service", desc: "Choose your cleaning service and preferred date." },
  { icon: Wand2, title: "We Clean", desc: "Our professional team arrives and gets the job done." },
  { icon: Smile, title: "You Relax", desc: "Enjoy a spotless and fresh space." },
];

const testimonials = [
  { name: "Sarah M.", role: "Landlord", text: "AdeProm did an amazing job with our end of tenancy cleaning. The place looked brand new!" },
  { name: "James T.", role: "Business Owner", text: "Very reliable and professional. I use them regularly for my office." },
  { name: "Emma L.", role: "Airbnb Host", text: "Perfect cleaning for my Airbnb. Guests always compliment the cleanliness." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 40%)" }} />
        <div className="container-page relative py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Motherwell · Scotland
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Professional Cleaning Services in Motherwell You Can Trust
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              Reliable residential and commercial cleaning across Scotland. We deliver spotless results, every time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="btn-hero">Book Now <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-outline-hero">Get a Free Quote</Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/80 text-sm">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <span>Trusted by homes & businesses</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl" />
            <img src={hero} alt="Bright, freshly cleaned modern home interior" width={1600} height={1200} className="relative rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why AdeProm</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Why Choose AdeProm Cleaning?</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {reasons.map((r) => (
              <div key={r} className="card-elevated p-6">
                <CheckCircle2 className="h-7 w-7 text-primary" />
                <p className="mt-3 font-semibold text-brand-deep">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-pad" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Our Cleaning Services</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">A wide range of expert cleaning solutions for homes, businesses and properties.</p>
            </div>
            <Link to="/services" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s} to="/services" className="card-elevated p-7 group">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-brand-deep group-hover:text-primary transition-colors">{s}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Professional, equipped and insured.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container-page text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Simple. Fast. Reliable.</h2>
        </div>
        <div className="container-page mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="card-elevated p-8 text-center">
              <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center text-white" style={{ background: "var(--gradient-brand)" }}>
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-xs font-bold tracking-widest text-primary">STEP {i + 1}</div>
              <h3 className="mt-2 text-xl font-bold text-brand-deep">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-elevated p-7">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <blockquote className="mt-4 text-foreground/90 italic">"{t.text}"</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-brand-deep">{t.name} <span className="text-muted-foreground font-normal">— {t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-pad">
        <div className="container-page grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Service Area</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Serving Motherwell & Surrounding Areas</h2>
            <p className="mt-4 text-muted-foreground">We proudly offer cleaning services across Motherwell and nearby areas in Scotland.</p>
            <ul className="mt-6 space-y-2 text-foreground">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Motherwell</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Nearby areas in Scotland</li>
            </ul>
          </div>
          <div className="card-elevated p-2 overflow-hidden">
            <iframe
              title="AdeProm service area map"
              className="w-full h-80 rounded-xl"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-4.10,55.75,-3.90,55.83&layer=mapnik&marker=55.7878,-3.9981"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-3xl px-8 py-14 sm:p-16 text-center text-white" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold">Ready for a Cleaner Space?</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">Book your cleaning service today and experience the AdeProm difference.</p>
          <Link to="/booking" className="btn-hero mt-8">Book Now <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
