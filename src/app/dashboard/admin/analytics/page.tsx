"use client";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import {
  AreaChartCard,
  BarChartCard,
  PieChartCard,
  LineChartCard,
} from "@/components/charts/charts";
import {
  admissionsTrend,
  attendanceTrend,
  coursePopularity,
  placementByDept,
  revenueTrend,
} from "@/lib/sample-data";
import { IndianRupee, TrendingUp, Users, GraduationCap } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <>
      <PageHeader title="Analytics" description="Institution-wide insights across academics and operations." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students" value="12,480" icon={Users} trend={{ value: 4 }} />
        <StatCard title="Admissions" value="4,200" icon={TrendingUp} trend={{ value: 8 }} />
        <StatCard title="Revenue" value="₹6.0 Cr" icon={IndianRupee} trend={{ value: 12 }} />
        <StatCard title="Graduates" value="3,100" icon={GraduationCap} trend={{ value: 6 }} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AreaChartCard data={admissionsTrend} dataKey="value" title="Admissions Over Time" subtitle="Last 6 years" />
        <AreaChartCard data={revenueTrend} dataKey="value" title="Revenue" subtitle="Quarterly (₹ Cr)" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <BarChartCard data={coursePopularity} dataKey="value" xKey="name" title="Course Popularity" subtitle="Enrollments" />
        <PieChartCard data={placementByDept} dataKey="value" title="Placements" subtitle="By department" />
        <LineChartCard data={attendanceTrend} dataKey="present" title="Attendance" subtitle="Monthly %" />
      </div>
    </>
  );
}
