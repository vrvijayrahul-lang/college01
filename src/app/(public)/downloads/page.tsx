import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Download, FileText } from "lucide-react";

export const metadata = { title: "Downloads" };

const files = [
  { name: "Admission Brochure 2026", size: "4.2 MB", type: "PDF" },
  { name: "Fee Structure 2026-27", size: "1.1 MB", type: "PDF" },
  { name: "Academic Calendar", size: "320 KB", type: "PDF" },
  { name: "Scholarship Guidelines", size: "880 KB", type: "PDF" },
  { name: "Anti-Ragging Affidavit", size: "210 KB", type: "PDF" },
  { name: "Hostel Rules & Form", size: "540 KB", type: "PDF" },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        description="Forms, brochures, and official documents."
        crumbs={[{ label: "Downloads" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Resources" title="Important Documents" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.04}>
              <Card className="flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{f.name}</p>
                  <p className="text-xs text-muted-foreground">{f.type} · {f.size}</p>
                </div>
                <Button variant="ghost" size="icon" aria-label={`Download ${f.name}`}>
                  <Download className="h-4 w-4" />
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
