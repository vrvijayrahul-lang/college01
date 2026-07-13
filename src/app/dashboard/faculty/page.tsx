"use client";

import Link from "next/link";
import {
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  LineChart,
  MessagesSquare,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { BarChartCard } from "@/components/charts/charts";
import { coursePopularity } from "@/lib/sample-data";

const tiles = [
  { icon: CalendarCheck, label: "Mark Attendance", href: "/dashboard/mark-attendance" },
  { icon: LineChart, label: "Marks Entry", href: "/dashboard/marks" },
  { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
  { icon: ClipboardCheck, label: "Exams", href: "/dashboard/exams" },
  { icon: MessagesSquare, label: "Chat", href: "/dashboard/chat" },
  { icon: BookOpen, label: "Research", href: "/dashboard/research" },
];

export default function FacultyDashboard() {
  return (
    <>
      <PageHeader title="Faculty Portal" description="Manage teaching, assessments, and student progress." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="My Students" value="120" icon={BookOpen} />
        <StatCard title="Classes Today" value="4" icon={CalendarCheck} />
        <StatCard title="Pending Marks" value="18" icon={LineChart} trend={{ value: -5 }} />
        <StatCard title="Avg Attendance" value="91%" icon={CalendarCheck} trend={{ value: 1.5 }} />
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

      <div className="mt-6">
        <BarChartCard data={coursePopularity} dataKey="value" xKey="name" title="Enrollment by Course" subtitle="This semester" />
      </div>
    </>
  );
}
