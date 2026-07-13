import { GenericFeature } from "@/components/generic-feature";

export default function Page() {
  return (
    <GenericFeature
      title="Leave Applications"
      description="Apply for leave and track approval status."
      quickLinks={[{ label: "Mark Attendance", href: "/dashboard/mark-attendance" }]}
    />
  );
}
