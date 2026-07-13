import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { formatCurrency } from "@/lib/utils";
import { courses } from "@/lib/sample-data";

export const metadata = { title: "Fee Structure" };

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        description="Transparent tuition and program fees for the academic year."
        crumbs={[{ label: "Fee Structure" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Finance" title="Program Fees (per year)" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{c.level}</Badge>
                  <span className="text-sm text-muted-foreground">{c.durationYears} yrs</span>
                </div>
                <h3 className="mt-3 font-semibold">{c.title}</h3>
                <p className="mt-4 text-2xl font-bold">{formatCurrency(c.feePerYear)}</p>
                <p className="text-xs text-muted-foreground">per academic year</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <li>Intake: {c.intake} seats</li>
                  <li>Semester fee: {formatCurrency(Math.round(c.feePerYear / 2))}</li>
                  <li>Exam & lab fees included</li>
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading eyebrow="Notes" title="Payment & Scholarships" align="left" />
          <Card className="p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Fees can be paid in two installments per year via the student portal.</li>
              <li>Merit scholarships up to 100% are available for top performers.</li>
              <li>Need-based financial aid is reviewed by the scholarship committee.</li>
              <li>Hostel, transport, and exam fees are charged separately.</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
