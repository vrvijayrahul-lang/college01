import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { NewsCard } from "@/components/cards/news-card";
import { Reveal } from "@/components/motion/reveal";
import { news } from "@/lib/sample-data";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Announcements"
        description="The latest updates from across the campus."
        crumbs={[{ label: "News" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Latest" title="Campus News" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.05}>
              <NewsCard title={n.title} date={n.date} tag={n.tag} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
