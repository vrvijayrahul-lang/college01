"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";

const COLORS = [
  "hsl(221 83% 53%)",
  "hsl(243 75% 59%)",
  "hsl(239 84% 67%)",
  "hsl(160 84% 39%)",
  "hsl(38 92% 50%)",
  "hsl(0 72% 51%)",
];

function ChartShell({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5">
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-base font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

const axisProps = {
  stroke: "hsl(var(--muted-foreground))",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
};

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid hsl(var(--border))",
  background: "hsl(var(--popover))",
  color: "hsl(var(--popover-foreground))",
  fontSize: 12,
  boxShadow: "0 4px 24px -8px rgb(15 23 42 / 0.12)",
};

export function AreaChartCard({
  data,
  dataKey,
  xKey = "name",
  title,
  subtitle,
  color = COLORS[0],
}: {
  data: any[];
  dataKey: string;
  xKey?: string;
  title?: string;
  subtitle?: string;
  color?: string;
}) {
  return (
    <ChartShell title={title} subtitle={subtitle}>
      <AreaChart data={data} margin={{ left: -16, right: 8, top: 8 }}>
        <defs>
          <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.4} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
        <XAxis dataKey={xKey} {...axisProps} />
        <YAxis {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2.5}
          fill={`url(#grad-${dataKey})`}
        />
      </AreaChart>
    </ChartShell>
  );
}

export function BarChartCard({
  data,
  dataKey,
  xKey = "name",
  title,
  subtitle,
  color = COLORS[1],
}: {
  data: any[];
  dataKey: string;
  xKey?: string;
  title?: string;
  subtitle?: string;
  color?: string;
}) {
  return (
    <ChartShell title={title} subtitle={subtitle}>
      <BarChart data={data} margin={{ left: -16, right: 8, top: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
        <XAxis dataKey={xKey} {...axisProps} />
        <YAxis {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))", opacity: 0.4 }} />
        <Bar dataKey={dataKey} fill={color} radius={[8, 8, 0, 0]} maxBarSize={48} />
      </BarChart>
    </ChartShell>
  );
}

export function LineChartCard({
  data,
  dataKey,
  xKey = "name",
  title,
  subtitle,
  color = COLORS[2],
}: {
  data: any[];
  dataKey: string;
  xKey?: string;
  title?: string;
  subtitle?: string;
  color?: string;
}) {
  return (
    <ChartShell title={title} subtitle={subtitle}>
      <LineChart data={data} margin={{ left: -16, right: 8, top: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
        <XAxis dataKey={xKey} {...axisProps} />
        <YAxis {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2.5} dot={{ r: 3 }} />
      </LineChart>
    </ChartShell>
  );
}

export function PieChartCard({
  data,
  dataKey,
  nameKey = "name",
  title,
  subtitle,
}: {
  data: any[];
  dataKey: string;
  nameKey?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <ChartShell title={title} subtitle={subtitle}>
      <PieChart>
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={55}
          outerRadius={90}
          paddingAngle={3}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ChartShell>
  );
}
