import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { Briefcase, TrendingUp } from "lucide-react";
import { companies, placementByDept } from "@/lib/sample-data";
import { PieChartCard } from "@/components/charts/charts";

export const metadata = { title: "Placements" };

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        title="Placements"
        description="Connecting students with leading employers worldwide."
        crumbs={[{ label: "Placements" }]}
      />
      <section className="border-b bg-card/40">
        <div className="container grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {[
            { value: "94%", label: "Placement Rate" },
            { value: "₹45 LPA", label: "Highest Package" },
            { value: "320+", label: "Recruiters" },
            { value: "1,200+", label: "Offers" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-pad">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Statistics" title="Placement by Department" align="left" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.04}>
                  <Card className="h-full p-5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.role}</p>
                      </div>
                    </div>
                    <p className="mt-3 flex items-center gap-1 text-sm font-medium">
                      <TrendingUp className="h-4 w-4 text-emerald-500" /> ₹{c.packageLPA} LPA
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <PieChartCard
              data={placementByDept}
              dataKey="value"
              title="Offers by Department"
              subtitle="2026 batch"
            />
          </div>
        </div>
      </section>
    </>
  );
}
