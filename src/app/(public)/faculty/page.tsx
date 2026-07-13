import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { faculty, departments } from "@/lib/sample-data";
import { initials } from "@/lib/utils";

export const metadata = { title: "Faculty Directory" };

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Faculty Directory"
        description="Meet our distinguished professors and researchers."
        crumbs={[{ label: "Faculty" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="People" title="Our Faculty" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => {
            const dept = departments.find((d) => d.id === f.departmentId);
            return (
              <Reveal key={f.id} delay={i * 0.05}>
                <Card className="flex h-full flex-col items-center p-6 text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-xl">{initials(f.name)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 font-semibold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.designation}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.qualification}</p>
                  {dept && (
                    <Badge variant="secondary" className="mt-3">
                      {dept.code}
                    </Badge>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
