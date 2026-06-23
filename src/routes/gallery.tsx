import { createFileRoute } from "@tanstack/react-router";
import domestic from "@/assets/service-domestic.jpg";
import commercial from "@/assets/service-commercial.jpg";
import carpet from "@/assets/service-carpet.jpg";
import tenancy from "@/assets/service-tenancy.jpg";
import airbnb from "@/assets/service-airbnb.jpg";
import builders from "@/assets/service-builders.jpg";
import site from "@/assets/service-site.jpg";
import hero from "@/assets/hero-clean-home.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | AdeProm Cleaning Results" },
      { name: "description", content: "See our cleaning work — home, office, carpet and post-construction results from AdeProm in Motherwell." },
      { property: "og:title", content: "AdeProm Cleaning Gallery" },
      { property: "og:description", content: "Before & after photos and results from our recent cleaning projects." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: hero, caption: "Spotless home interior" },
  { src: domestic, caption: "Domestic kitchen clean" },
  { src: commercial, caption: "Office cleaning results" },
  { src: carpet, caption: "Carpet cleaning transformation" },
  { src: tenancy, caption: "End of tenancy clean" },
  { src: airbnb, caption: "Airbnb turnover" },
  { src: builders, caption: "After builders cleanup" },
  { src: site, caption: "Site cleaning" },
];

function Gallery() {
  return (
    <>
      <section className="bg-brand-deep text-white">
        <div className="container-page py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">Gallery</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">Our Work</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">A look at the kind of results we deliver across homes and businesses.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <figure key={i} className="card-elevated overflow-hidden">
              <img src={it.src} alt={it.caption} loading="lazy" width={1024} height={768} className="w-full h-64 object-cover" />
              <figcaption className="p-4 text-sm font-semibold text-brand-deep">{it.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
