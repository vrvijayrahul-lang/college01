"use client";

import Link from "next/link";
import { CalendarCheck, GraduationCap, MessagesSquare, Wallet } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { AreaChartCard } from "@/components/charts/charts";
import { attendanceTrend } from "@/lib/sample-data";

const tiles = [
  { icon: CalendarCheck, label: "Attendance", href: "/dashboard/attendance" },
  { icon: GraduationCap, label: "Results", href: "/dashboard/results" },
  { icon: Wallet, label: "Fee Status", href: "/dashboard/fees" },
  { icon: MessagesSquare, label: "Communication", href: "/dashboard/chat" },
];

export default function ParentDashboard() {
  return (
    <>
      <PageHeader title="Parent Portal" description="Track your child's progress and stay connected." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Attendance" value="92%" icon={CalendarCheck} />
        <StatCard title="CGPA" value="8.7" icon={GraduationCap} />
        <StatCard title="Fees Due" value="₹62,500" icon={Wallet} />
        <StatCard title="Semester" value="5" icon={GraduationCap} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
        <AreaChartCard data={attendanceTrend} dataKey="present" title="Child Attendance" subtitle="Monthly %" />
      </div>
    </>
  );
}
