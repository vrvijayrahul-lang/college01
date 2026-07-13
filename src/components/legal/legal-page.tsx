import * as React from "react";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export interface LegalSection {
  heading: string;
  body: string;
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  crumb,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  crumb: string;
}) {
  return (
    <>
      <PageHero title={title} crumbs={[{ label: crumb }]} />
      <section className="container section-pad">
        <Card className="mx-auto max-w-3xl p-8">
          <p className="text-sm text-muted-foreground">Last updated: {formatDate(updated)}</p>
          <p className="mt-4 text-muted-foreground">{intro}</p>
          <div className="mt-8 space-y-6">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-lg font-semibold">
                  {i + 1}. {s.heading}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
