import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CourseCard } from "@/components/cards/course-card";
import { Reveal } from "@/components/motion/reveal";
import { courses, departments } from "@/lib/sample-data";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Courses & Programs"
        description="Undergraduate, postgraduate, and doctoral programs across disciplines."
        crumbs={[{ label: "Courses" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Programs" title="Featured Programs" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <SectionHeading eyebrow="By Department" title="Browse by Department" align="left" />
          <div className="space-y-6">
            {departments.map((d) => {
              const list = courses.filter((c) => c.departmentId === d.id);
              if (!list.length) return null;
              return (
                <div key={d.id}>
                  <h3 className="mb-3 text-lg font-semibold">{d.name}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((c) => (
                      <CourseCard key={c.id} course={c} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
