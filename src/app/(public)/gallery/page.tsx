import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { gallery } from "@/lib/sample-data";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Campus Gallery"
        description="A glimpse of life, learning, and celebrations on campus."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Moments" title="From Our Campus" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.04}>
              <div
                className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${g.gradient}`}
              >
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-90 transition group-hover:from-black/70">
                  <span className="text-sm font-semibold text-white">{g.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
