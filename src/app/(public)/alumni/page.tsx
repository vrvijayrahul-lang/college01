import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link2, Users } from "lucide-react";

export const metadata = { title: "Alumni" };

const alumni = [
  { name: "Priya Menon", role: "SWE, Google", year: "2018" },
  { name: "Arjun Rao", role: "DS, Flipkart", year: "2019" },
  { name: "Sneha Iyer", role: "PM, Microsoft", year: "2017" },
  { name: "Karan Patel", role: "Founder, EdTech", year: "2015" },
  { name: "Neha Gupta", role: "Analyst, Goldman", year: "2020" },
  { name: "Ravi Verma", role: "Eng, Amazon", year: "2016" },
];

export default function AlumniPage() {
  return (
    <>
      <PageHero
        title="Alumni Network"
        description="Stay connected. Give back. Grow together."
        crumbs={[{ label: "Alumni" }]}
      />
      <section className="container section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Community"
            title="45,000+ Alumni Worldwide"
            description="Our graduates lead across technology, business, research, and public service."
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient">
              <a href="#">Register as Alumni</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#">Share a Story</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alumni.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <Card className="flex items-center gap-4 p-5">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{a.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.role}</p>
                  <p className="text-xs text-muted-foreground">Class of {a.year}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Card className="gradient-bg p-6">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-semibold">Mentorship</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Alumni mentor current students through career guidance and projects.
            </p>
          </Card>
          <Card className="gradient-bg p-6">
            <Link2 className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-semibold">Donations</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Support scholarships, labs, and student initiatives through the alumni fund.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
