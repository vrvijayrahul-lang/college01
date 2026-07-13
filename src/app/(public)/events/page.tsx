import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { EventCard } from "@/components/cards/event-card";
import { Reveal } from "@/components/motion/reveal";
import { events } from "@/lib/sample-data";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        description="Workshops, festivals, and ceremonies through the academic year."
        crumbs={[{ label: "Events" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Calendar" title="Upcoming Events" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
