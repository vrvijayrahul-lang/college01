"use client";

import * as React from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { SITE_NAME } from "@/lib/constants";

export default function AdminSettingsPage() {
  const { toast } = useToast();
  const [name, setName] = React.useState(SITE_NAME);
  const [email, setEmail] = React.useState("admin@vidyauniversity.edu");

  return (
    <>
      <PageHeader title="System Settings" description="Configure institution and platform preferences." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Institution</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="site">Site Name</Label>
              <Input id="site" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="admin">Admin Email</Label>
              <Input id="admin" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button variant="gradient" onClick={() => toast({ title: "Settings saved", variant: "success" })}>
              Save
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Modules</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            {["Admissions", "Fees", "Attendance", "Exams", "Library", "Placements", "Transport", "Hostel"].map((m) => (
              <div key={m} className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                <span>{m}</span>
                <BadgeDot />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function BadgeDot() {
  return <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-label="enabled" />;
}
