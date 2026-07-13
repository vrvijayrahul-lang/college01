import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { BookOpen, FlaskConical, Microscope } from "lucide-react";

export const metadata = { title: "Research" };

const areas = [
  { icon: Microscope, title: "AI & Machine Learning", text: "Computer vision, NLP, and responsible AI." },
  { icon: FlaskConical, title: "Materials & Energy", text: "Batteries, semiconductors, and sustainability." },
  { icon: BookOpen, title: "Social Sciences", text: "Public policy, economics, and education." },
];

const pubs = [
  { title: "Explainable AI for Healthcare Diagnostics", authors: "Sharma A., et al.", year: "2025", venue: "IEEE Transactions" },
  { title: "Low-power VLSI for IoT Edge Nodes", authors: "Kumar R., et al.", year: "2025", venue: "Elsevier" },
  { title: "Resilient Supply Chains in Emerging Markets", authors: "Pillai S., et al.", year: "2024", venue: "Springer" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research & Innovation"
        description="Advancing knowledge and solving real-world problems."
        crumbs={[{ label: "Research" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Focus Areas" title="Research Themes" />
        <div className="grid gap-5 sm:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <Card className="h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Publications" title="Recent Publications" align="left" />
          <div className="space-y-3">
            {pubs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <Card className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.authors} · {p.venue}</p>
                  </div>
                  <Badge variant="secondary">{p.year}</Badge>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
