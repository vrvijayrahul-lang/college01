import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Reveal } from "@/components/motion/reveal";

export const metadata = { title: "Principal Message" };

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHero
        title="Principal's Message"
        description="A note from our Principal on our mission and the years ahead."
        crumbs={[{ label: "Principal Message" }]}
      />
      <section className="container section-pad">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Card className="p-8">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg">DP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">Dr. Deepak Prakash</p>
                  <p className="text-sm text-muted-foreground">Principal, Vidya University</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  It gives me immense pleasure to welcome you to our institution. Education is
                  not merely the transfer of knowledge — it is the cultivation of character,
                  curiosity, and the courage to question.
                </p>
                <p>
                  Over the past two decades, we have built an ecosystem where students learn by
                  doing, where faculty mentor with purpose, and where research meets real-world
                  impact. Our goal is to nurture graduates who are not only employable but also
                  socially responsible.
                </p>
                <p>
                  As we embrace digital transformation through our new ERP platform, we remain
                  committed to the human connections that make a campus a community.
                </p>
                <p className="font-medium text-foreground">Warm regards,<br />Dr. Deepak Prakash</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
