import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Sparkles, Calendar, Wand2, Smile, MapPin, ArrowRight, Star, ChevronDown } from "lucide-react";
import hero from "@/assets/hero-clean-home.jpg";
import jobDomestic from "@/assets/service-domestic.jpg";
import jobCommercial from "@/assets/service-commercial.jpg";
import jobTenancy from "@/assets/service-tenancy.jpg";
import jobCarpet from "@/assets/service-carpet.jpg";
import jobAirbnb from "@/assets/service-airbnb.jpg";
import jobBuilders from "@/assets/service-builders.jpg";

const heroSlides = [
  { src: hero, label: "Fresh home clean" },
  { src: jobDomestic, label: "Recent domestic clean" },
  { src: jobCommercial, label: "Commercial office clean" },
  { src: jobTenancy, label: "End of tenancy clean" },
  { src: jobCarpet, label: "Carpet & upholstery clean" },
  { src: jobAirbnb, label: "Airbnb turnaround clean" },
  { src: jobBuilders, label: "After builders clean" },
];

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
  {
    title: "Reliable & Professional Team",
    desc: "Our vetted cleaners turn up on time, in uniform, and ready to deliver consistent results you can count on every visit.",
  },
  {
    title: "Fully Equipped & Trained Staff",
    desc: "We bring our own commercial-grade equipment and eco-friendly products, and every team member is trained to industry standards.",
  },
  {
    title: "Flexible Scheduling",
    desc: "One-off, weekly, fortnightly or monthly — we work around your routine, including evenings and weekends where possible.",
  },
  {
    title: "Affordable & Transparent Pricing",
    desc: "Clear, upfront quotes with no hidden fees. You only pay for the service you book, with options to suit every budget.",
  },
  {
    title: "Trusted by Homes & Businesses",
    desc: "From private households to offices, landlords and Airbnb hosts, clients across Scotland rely on us for spotless results.",
  },
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
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4000);
    return () => clearInterval(id);
  }, []);
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
            <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[4/3]">
              {heroSlides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.label}
                  width={1600}
                  height={1200}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                  {heroSlides[slide].label}
                </span>
                <div className="flex gap-1.5">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${i === slide ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
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
              <details key={r.title} className="card-elevated p-6 group [&_svg.chev]:open:rotate-180">
                <summary className="flex items-start justify-between gap-3 cursor-pointer list-none">
                  <div>
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                    <p className="mt-3 font-semibold text-brand-deep">{r.title}</p>
                  </div>
                  <ChevronDown className="chev h-5 w-5 text-primary mt-1 transition-transform shrink-0" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
              </details>
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
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">Serving Motherwell, Scotland & Beyond</h2>
            <p className="mt-4 text-muted-foreground">Based in Motherwell, we proudly serve clients across Scotland — and we're happy to take on jobs outside our immediate location too. Get in touch wherever you are.</p>
            <ul className="mt-6 space-y-2 text-foreground">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Motherwell (home base)</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Across Scotland</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Available for jobs further afield — just ask</li>
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
