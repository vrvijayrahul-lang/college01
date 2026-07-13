"use client";

import Link from "next/link";
import {
  Award,
  BarChart3,
  Bell,
  Building2,
  IndianRupee,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { AreaChartCard, PieChartCard } from "@/components/charts/charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { admissionsTrend, placementByDept, revenueTrend } from "@/lib/sample-data";

const shortcuts = [
  { icon: Users, label: "Students", href: "/dashboard/admin/students" },
  { icon: Building2, label: "Departments", href: "/dashboard/admin/departments" },
  { icon: IndianRupee, label: "Fees", href: "/dashboard/admin/fees" },
  { icon: TrendingUp, label: "Admissions", href: "/dashboard/admin/admissions" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/admin/analytics" },
  { icon: Bell, label: "Notices", href: "/dashboard/admin/notices" },
];

export default function PrincipalDashboard() {
  return (
    <>
      <PageHeader title="Principal Dashboard" description="Institution-wide oversight and analytics." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Students" value="12,480" icon={Users} trend={{ value: 4 }} />
        <StatCard title="Faculty" value="652" icon={Users} trend={{ value: 2 }} />
        <StatCard title="Revenue" value="₹6.0 Cr" icon={IndianRupee} trend={{ value: 12 }} />
        <StatCard title="Placements" value="94%" icon={Award} trend={{ value: 3 }} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {shortcuts.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 text-center text-sm font-medium transition hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="h-5 w-5" />
            </span>
            {s.label}
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AreaChartCard data={admissionsTrend} dataKey="value" title="Admissions Trend" />
        <PieChartCard data={placementByDept} dataKey="value" title="Placements by Dept" />
      </div>
      <div className="mt-6">
        <AreaChartCard data={revenueTrend} dataKey="value" title="Revenue" subtitle="Quarterly (₹ Cr)" />
      </div>
    </>
  );
}
