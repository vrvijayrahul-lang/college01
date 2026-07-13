"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send, UploadCloud } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/toast";
import { courses } from "@/lib/sample-data";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  courseId: z.string().min(1, "Select a course"),
  qualification: z.string().min(2, "Enter your last qualification"),
  marks: z.coerce.number().min(0).max(100, "Enter marks (0-100)"),
  statement: z.string().min(10, "Tell us a bit about yourself"),
});

type FormData = z.infer<typeof schema>;

export default function AdmissionPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setTimeout(() => {
      setSubmitted(true);
      toast({ title: "Application submitted", description: `Ref #ADM-${Date.now().toString().slice(-6)}`, variant: "success" });
    }, 900);
  };

  return (
    <>
      <PageHero
        title="Admissions 2026"
        description="Apply online in minutes. Track your application from your dashboard."
        crumbs={[{ label: "Admissions" }]}
      />

      <section className="container section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading eyebrow="Process" title="How to Apply" align="left" />
            <ol className="space-y-4">
              {[
                "Fill the online application form",
                "Upload required documents",
                "Pay the application fee",
                "Track status & receive admission letter",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <Card className="p-6">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                <h3 className="mt-4 text-xl font-semibold">Application Received!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Our admissions team will review your application and update the status in
                  your student dashboard.
                </p>
                <Button asChild variant="gradient" className="mt-6">
                  <a href="/auth/login">Go to Dashboard</a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" {...register("fullName")} placeholder="Jane Doe" />
                    {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="jane@email.com" />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" {...register("phone")} placeholder="+91 90000 00000" />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label>Course</Label>
                    <Select onValueChange={(v) => setValue("courseId", v, { shouldValidate: true })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.courseId && <p className="mt-1 text-xs text-destructive">{errors.courseId.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="qualification">Last Qualification</Label>
                    <Input id="qualification" {...register("qualification")} placeholder="12th / B.Sc" />
                    {errors.qualification && <p className="mt-1 text-xs text-destructive">{errors.qualification.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="marks">Marks / %</Label>
                    <Input id="marks" type="number" {...register("marks")} placeholder="85" />
                    {errors.marks && <p className="mt-1 text-xs text-destructive">{errors.marks.message}</p>}
                  </div>
                </div>

                <div>
                  <Label>Documents</Label>
                  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed p-6 text-center">
                    <UploadCloud className="h-7 w-7 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop marksheets, ID proof (PDF/JPG)
                    </p>
                    <Button type="button" variant="outline" size="sm">Choose Files</Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="statement">Statement of Purpose</Label>
                  <Textarea id="statement" {...register("statement")} rows={4} placeholder="Why do you want to join?" />
                  {errors.statement && <p className="mt-1 text-xs text-destructive">{errors.statement.message}</p>}
                </div>

                <Button type="submit" variant="gradient" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Submitting…" : <>Submit Application <Send className="h-4 w-4" /></>}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}
