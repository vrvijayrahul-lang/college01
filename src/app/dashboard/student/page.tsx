"use client";

import Link from "next/link";
import {
  BookOpen,
  CalendarCheck,
  GraduationCap,
  Library,
  Receipt,
  Wallet,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { AreaChartCard, PieChartCard } from "@/components/charts/charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { attendanceTrend, placementByDept } from "@/lib/sample-data";

const tiles = [
  { icon: CalendarCheck, label: "Attendance", href: "/dashboard/attendance" },
  { icon: BookOpen, label: "Assignments", href: "/dashboard/assignments" },
  { icon: GraduationCap, label: "Results", href: "/dashboard/results" },
  { icon: Wallet, label: "Fees", href: "/dashboard/fees" },
  { icon: Receipt, label: "Receipts", href: "/dashboard/receipts" },
  { icon: Library, label: "Library", href: "/dashboard/library" },
];

export default function StudentDashboard() {
  return (
    <>
      <PageHeader title="Student Portal" description="Your academics, fees, and campus at a glance." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Attendance" value="92%" icon={CalendarCheck} trend={{ value: 2 }} />
        <StatCard title="CGPA" value="8.7" icon={GraduationCap} trend={{ value: 1.2 }} />
        <StatCard title="Fees Due" value="₹62,500" icon={Wallet} />
        <StatCard title="Rank" value="#14" icon={GraduationCap} trend={{ value: 3 }} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {tiles.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 text-center text-sm font-medium transition hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <t.icon className="h-5 w-5" />
            </span>
            {t.label}
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AreaChartCard data={attendanceTrend} dataKey="present" title="Attendance Trend" subtitle="Monthly %" />
        </div>
        <Card>
          <CardHeader><CardTitle>Today&apos;s Schedule</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {["09:00 · Data Structures", "11:00 · DBMS Lab", "14:00 · Aptitude", "16:00 · Library"].map((s) => (
              <div key={s} className="rounded-xl bg-secondary/50 p-3">{s}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
