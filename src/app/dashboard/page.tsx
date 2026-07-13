"use client";

import * as React from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  CalendarCheck,
  GraduationCap,
  IndianRupee,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { useAuth } from "@/components/auth/auth-provider";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import {
  AreaChartCard,
  BarChartCard,
  PieChartCard,
} from "@/components/charts/charts";
import {
  admissionsTrend,
  attendanceTrend,
  coursePopularity,
  fees,
  placementByDept,
  revenueTrend,
  students,
} from "@/lib/sample-data";
import { formatCurrency, formatDate, initials } from "@/lib/utils";
import { ROLE_LABELS } from "@/lib/constants";

export default function DashboardHome() {
  const { profile, role } = useAuth();
  const name = profile?.displayName?.split(" ")[0] ?? "User";
  const isAdmin = role === "super_admin" || role === "principal" || role === "vice_principal";

  return (
    <>
      <PageHeader
        title={`Welcome, ${name}`}
        description={`${ROLE_LABELS[role ?? "student"]} dashboard · ${formatDate(new Date())}`}
      >
        <Link
          href="/dashboard/profile"
          className="inline-flex h-10 items-center rounded-xl border border-input px-4 text-sm font-medium transition hover:bg-secondary"
        >
          View Profile
        </Link>
      </PageHeader>

      {isAdmin ? <AdminWidgets /> : role === "faculty" || role === "hod" ? <FacultyWidgets /> : role === "parent" ? <ParentWidgets /> : <StudentWidgets />}
    </>
  );
}

function StudentWidgets() {
  const due = fees.filter((f) => !f.paid);
  const cgpa = students[0]?.cgpa ?? 8.7;
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Attendance" value="92%" icon={CalendarCheck} trend={{ value: 2, label: "this month" }} />
        <StatCard title="CGPA" value={cgpa} icon={GraduationCap} trend={{ value: 1.2 }} />
        <StatCard title="Fees Due" value={formatCurrency(due.reduce((s, f) => s + f.amount, 0))} icon={Wallet} />
        <StatCard title="Rank" value="#14" icon={Award} trend={{ value: 3, label: "positions" }} />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AreaChartCard data={attendanceTrend} dataKey="present" title="Attendance Trend" subtitle="Monthly %" />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Data Structures Exam — Fri", "Assignment Due — Mon", "Library Book Return — Wed"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-primary" /> {t}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function FacultyWidgets() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="My Students" value={120} icon={Users} />
        <StatCard title="Classes Today" value={4} icon={BookOpen} />
        <StatCard title="Pending Marks" value={18} icon={GraduationCap} trend={{ value: -5 }} />
        <StatCard title="Avg Attendance" value="91%" icon={CalendarCheck} trend={{ value: 1.5 }} />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarChartCard data={coursePopularity} dataKey="value" xKey="name" title="Enrollment by Course" subtitle="This semester" />
        </div>
        <Card>
          <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Link href="/dashboard/mark-attendance" className="rounded-xl bg-secondary p-3 text-center text-sm font-medium transition hover:bg-primary/10">Mark Attendance</Link>
            <Link href="/dashboard/marks" className="rounded-xl bg-secondary p-3 text-center text-sm font-medium transition hover:bg-primary/10">Marks Entry</Link>
            <Link href="/dashboard/assignments" className="rounded-xl bg-secondary p-3 text-center text-sm font-medium transition hover:bg-primary/10">Upload</Link>
            <Link href="/dashboard/reports" className="rounded-xl bg-secondary p-3 text-center text-sm font-medium transition hover:bg-primary/10">Reports</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ParentWidgets() {
  const child = students[0];
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Child Attendance" value={`${child.attendancePct}%`} icon={CalendarCheck} />
        <StatCard title="CGPA" value={child.cgpa} icon={GraduationCap} />
        <StatCard title="Fees Due" value={formatCurrency(62500)} icon={Wallet} />
        <StatCard title="Semester" value={child.semester} icon={BookOpen} />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AreaChartCard data={attendanceTrend} dataKey="present" title="Child Attendance" subtitle="Monthly %" />
        </div>
        <Card>
          <CardHeader><CardTitle>Notices</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>PTM scheduled for next week.</p>
            <p>Fee installment due 15 Jul.</p>
            <p>Unit test results published.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AdminWidgets() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Students" value="12,480" icon={Users} trend={{ value: 4 }} />
        <StatCard title="Faculty" value="652" icon={BookOpen} trend={{ value: 2 }} />
        <StatCard title="Revenue" value="₹6.0 Cr" icon={IndianRupee} trend={{ value: 12 }} />
        <StatCard title="Admissions" value="4,200" icon={TrendingUp} trend={{ value: 8 }} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AreaChartCard data={admissionsTrend} dataKey="value" title="Admissions Trend" subtitle="Last 6 years" />
        <AreaChartCard data={revenueTrend} dataKey="value" title="Revenue" subtitle="Quarterly (₹ Cr)" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <BarChartCard data={coursePopularity} dataKey="value" xKey="name" title="Course Popularity" subtitle="Enrollments" />
        <PieChartCard data={placementByDept} dataKey="value" title="Placements" subtitle="By department" />
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { t: "New admission — Lakshmi Rao", b: "B.Tech AI", tag: "approved" },
              { t: "Fee collected — ₹62,500", b: "Semester tuition", tag: "paid" },
              { t: "Leave request — Dr. Mehta", b: "2 days", tag: "pending" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                  <div>
                    <p className="text-sm font-medium">{a.t}</p>
                    <p className="text-xs text-muted-foreground">{a.b}</p>
                  </div>
                  <Badge variant={a.tag === "approved" || a.tag === "paid" ? "success" : a.tag === "pending" ? "warning" : "secondary"}>
                    {a.tag}
                  </Badge>
                </div>
              </Reveal>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
