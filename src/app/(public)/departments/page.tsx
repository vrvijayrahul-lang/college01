import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { Building2 } from "lucide-react";
import { departments } from "@/lib/sample-data";

export const metadata = { title: "Departments" };

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        title="Departments"
        description="Explore our academic departments and centers of excellence."
        crumbs={[{ label: "Departments" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Academics" title="Our Departments" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.05}>
              <Card className="group h-full p-6 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo text-white">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <Badge variant="secondary">{d.code}</Badge>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Established {d.establishedYear}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
