import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarCheck,
  GraduationCap,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CourseCard } from "@/components/cards/course-card";
import { EventCard } from "@/components/cards/event-card";
import { NewsCard } from "@/components/cards/news-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import {
  courses,
  events,
  gallery,
  news,
  recruiters,
  testimonials,
} from "@/lib/sample-data";
import { formatNumber } from "@/lib/utils";
import { STATS } from "@/lib/constants";

const highlights = [
  { icon: BookOpen, title: "84+ Programs", text: "UG, PG, and doctoral programs across disciplines." },
  { icon: Users, title: "650+ Faculty", text: "Distinguished professors and researchers." },
  { icon: Building2, title: "Smart Campus", text: "Wi-Fi, labs, libraries, and green spaces." },
  { icon: Wallet, title: "Scholarships", text: "Merit and need-based financial aid." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-radial-fade" />
        <div className="container grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Ranked among top 50 · NIRF 2026
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shaping <span className="gradient-text">future-ready</span> leaders through
              excellence
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              A modern university experience powered by a next-generation ERP — academics,
              admissions, fees, placements, and campus life, all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gradient">
                <Link href="/admission">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Explore Campus</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: GraduationCap, label: "Students" },
                { icon: Award, label: "Rankings" },
                { icon: CalendarCheck, label: "Events" },
                { icon: Users, label: "Alumni" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card relative overflow-hidden p-2">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/30 via-indigo/20 to-accent/20" />
              <div className="absolute -bottom-4 -left-4 w-2/3 animate-float rounded-2xl glass p-4 shadow-soft">
                <p className="text-xs text-muted-foreground">Admission 2026</p>
                <p className="text-lg font-bold">Open Now</p>
              </div>
            </div>
            <div className="absolute -right-4 top-8 w-1/2 animate-float rounded-2xl glass p-4 shadow-soft [animation-delay:1.5s]">
              <p className="text-xs text-muted-foreground">Placement</p>
              <p className="text-lg font-bold">94% placed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card/40">
        <div className="container grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight gradient-text">
                  {formatNumber(s.value)}
                  {s.suffix}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="container section-pad">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.05}>
              <Card className="h-full p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container section-pad">
        <SectionHeading
          eyebrow="Academics"
          title="Featured Courses"
          description="Programs designed with industry and research relevance."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/courses">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest News */}
      <section className="border-y bg-card/40">
        <div className="container section-pad">
          <SectionHeading eyebrow="Campus" title="Latest News" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.05}>
                <NewsCard title={n.title} date={n.date} tag={n.tag} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container section-pad">
        <SectionHeading eyebrow="Engage" title="Upcoming Events" />
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Placements */}
      <section className="border-y bg-gradient-to-br from-primary/5 via-indigo/5 to-accent/5">
        <div className="container section-pad">
          <SectionHeading
            eyebrow="Careers"
            title="Placements & Recruiters"
            description="Our students join leading organizations worldwide."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recruiters.map((r, i) => (
              <Reveal key={r} delay={i * 0.03}>
                <Card className="flex h-full items-center justify-center p-6 text-center font-semibold text-muted-foreground transition hover:text-foreground">
                  {r}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container section-pad">
        <SectionHeading eyebrow="Voices" title="Student Testimonials" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="border-y bg-card/40">
        <div className="container section-pad">
          <SectionHeading eyebrow="Life" title="Campus Gallery" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.05}>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${g.gradient}`}
                >
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4">
                    <span className="text-sm font-semibold text-white">{g.title}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section-pad">
        <Card className="overflow-hidden gradient-bg">
          <div className="flex flex-col items-center gap-6 p-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Begin your journey with us
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Apply for admissions, explore programs, and experience a campus built for the
              future.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="gradient">
                <Link href="/admission">Start Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Talk to Admissions</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
