import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { Compass, Eye, Target } from "lucide-react";

export const metadata = { title: "Vision & Mission" };

const pillars = [
  { icon: Eye, title: "Vision", text: "To be a globally recognized center of learning that empowers individuals to innovate and lead with integrity." },
  { icon: Target, title: "Mission", text: "To deliver inclusive, research-driven education and foster industry and community partnerships that create lasting impact." },
  { icon: Compass, title: "Philosophy", text: "Student-centric, outcome-based, and value-driven education for life-long success." },
];

const goals = [
  "Promote interdisciplinary research and innovation.",
  "Strengthen industry-academia collaboration.",
  "Expand access through scholarships and outreach.",
  "Build a sustainable, digital-first campus.",
  "Cultivate leadership and global citizenship.",
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        description="The principles that guide our institution."
        crumbs={[{ label: "Vision & Mission" }]}
      />
      <section className="container section-pad">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card className="h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Goals" title="Strategic Objectives" align="left" />
          <div className="grid gap-3 sm:grid-cols-2">
            {goals.map((g, i) => (
              <Reveal key={g} delay={i * 0.04}>
                <Card className="flex items-center gap-3 p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm">{g}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="text-sm font-medium text-primary hover:underline"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
