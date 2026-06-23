import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | AdeProm Cleaning Reviews" },
      { name: "description", content: "Read what our clients say about AdeProm Cleaning Services in Motherwell, Scotland." },
      { property: "og:title", content: "Client Testimonials | AdeProm Cleaning" },
      { property: "og:description", content: "Trusted by homeowners, landlords and businesses across Scotland." },
    ],
  }),
  component: Testimonials,
});

const list = [
  { text: "Excellent cleaning service. Very professional and punctual.", name: "David K.", role: "Homeowner" },
  { text: "Highly recommend AdeProm for commercial cleaning.", name: "Lisa R.", role: "Office Manager" },
  { text: "My property looks spotless after every clean.", name: "Mark D.", role: "Landlord" },
  { text: "Reliable and affordable service.", name: "Andrew S.", role: "Business Owner" },
  { text: "AdeProm did an amazing job with our end of tenancy cleaning. The place looked brand new!", name: "Sarah M.", role: "Landlord" },
  { text: "Perfect cleaning for my Airbnb. Guests always compliment the cleanliness.", name: "Emma L.", role: "Airbnb Host" },
];

function Testimonials() {
  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">Reviews</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">What Our Clients Say</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <figure key={i} className="card-elevated p-7">
              <div className="flex">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <blockquote className="mt-4 text-foreground/90 italic">"{t.text}"</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-brand-deep">{t.name} <span className="text-muted-foreground font-normal">— {t.role}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/booking" className="btn-hero">Book Your Clean</Link>
        </div>
      </section>
    </>
  );
}
