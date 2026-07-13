import { GenericFeature } from "@/components/generic-feature";

export default function Page() {
  return (
    <GenericFeature
      title="Assignments"
      description="View and submit assignments, and track deadlines."
      quickLinks={[
        { label: "Upload (Faculty)", href: "/dashboard/assignments" },
        { label: "Notes", href: "/dashboard/materials" },
      ]}
    />
  );
}
