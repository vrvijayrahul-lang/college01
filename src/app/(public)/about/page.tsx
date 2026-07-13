import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { Building2, Target, Users, Lightbulb } from "lucide-react";

export const metadata = { title: "About College" };

const values = [
  { icon: Target, title: "Excellence", text: "Pursuing the highest standards in teaching, research, and service." },
  { icon: Lightbulb, title: "Innovation", text: "Fostering curiosity, creativity, and entrepreneurial thinking." },
  { icon: Users, title: "Inclusion", text: "A diverse, equitable community where every student belongs." },
  { icon: Building2, title: "Integrity", text: "Ethical conduct and accountability in all we do." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About College"
        description="A premier institution dedicated to transformative education and research."
        crumbs={[{ label: "About" }]}
      />
      <section className="container section-pad">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded with a vision to democratize quality higher education, our university
              has grown into a vibrant academic community. We combine rigorous academics with
              real-world exposure, industry partnerships, and a thriving research ecosystem.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our campuses are designed for collaboration — smart classrooms, advanced labs,
              libraries, and green spaces that support holistic student development.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="gradient-bg p-8">
              <p className="text-5xl font-bold gradient-text">25+</p>
              <p className="mt-2 text-muted-foreground">Years of academic excellence</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["84", "Programs"],
                  ["650+", "Faculty"],
                  ["45k+", "Alumni"],
                  ["320+", "Recruiters"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl font-bold">{v}</p>
                    <p className="text-sm text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Culture" title="What we value" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <Card className="h-full p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
