"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "How do I apply for admission?", a: "Visit the Admissions page, fill the online application form, upload documents, and track your status from your student dashboard." },
  { q: "What are the eligibility criteria?", a: "Eligibility varies by program. Generally, UG programs require 10+2 with the relevant stream; PG programs require a bachelor's degree in a related field." },
  { q: "Are scholarships available?", a: "Yes. Merit-based and need-based scholarships are available. Eligible students can apply during admission or through the student portal." },
  { q: "How do I pay fees online?", a: "Log in to the student portal, go to Fee Payments, choose an installment, and pay securely via the integrated payment gateway." },
  { q: "Is hostel accommodation guaranteed?", a: "Hostel seats are allocated based on availability and distance from campus. Apply early through the Hostel section of the portal." },
  { q: "How can faculty access the ERP?", a: "Faculty receive credentials from the admin team and can manage attendance, marks, and reports from the faculty dashboard." },
];

export default function FAQPage() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Answers to common questions about admissions, academics, and campus life."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="container section-pad">
        <SectionHeading eyebrow="Help" title="FAQ" />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border bg-card">
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    open === i && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all",
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
