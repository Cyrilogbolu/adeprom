import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, CheckCircle2, Heart, Users, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Join the AdeProm Cleaning Team" },
      { name: "description", content: "Join AdeProm Cleaning Services. We're hiring reliable, professional cleaners across Scotland. Apply today." },
      { property: "og:title", content: "Careers at AdeProm Cleaning" },
      { property: "og:description", content: "Join a growing cleaning team that values reliability, professionalism and great people." },
    ],
  }),
  component: Careers,
});


const perks = [
  { icon: Heart, title: "Supportive Team", desc: "Work with a friendly, professional team that values you." },
  { icon: Briefcase, title: "Flexible Hours", desc: "Schedules that fit around your life and commitments." },
  { icon: Users, title: "Training Provided", desc: "Full training so you can deliver our high standards with confidence." },
  { icon: CheckCircle2, title: "Fair Pay", desc: "Competitive, transparent pay for honest, reliable work." },
];

function Careers() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-20 text-white text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium uppercase tracking-wider">
            <Briefcase className="h-3.5 w-3.5" /> We're Hiring
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold">Build Your Career with AdeProm</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Join a growing cleaning company that values reliability, professionalism and great people. We're always on the lookout for new talent across Scotland.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Join Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-deep">A Team That Cares</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p) => (
              <div key={p.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: "var(--gradient-brand)" }}>
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="section-pad">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl px-8 py-14 sm:p-16 text-center text-white" style={{ background: "var(--gradient-hero)" }}>
            <h2 className="text-3xl sm:text-4xl font-bold">Don't see your role?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              We're always interested in meeting reliable, hard-working cleaners. Send your CV and we'll keep you in mind.
            </p>
            <a href="mailto:support@adeprom.co.uk?subject=General%20Application" className="btn-hero mt-8 inline-flex">
              <Mail className="h-4 w-4" /> Email Your CV
            </a>
            <div className="mt-4">
              <Link to="/contact" className="text-white/80 hover:text-white text-sm underline">Or contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
