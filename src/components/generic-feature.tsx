import { FeaturePage } from "@/components/feature-page";
import { PlaceholderCard } from "@/components/feature-page";

export function GenericFeature({
  title,
  description,
  note = "This module is wired into the architecture. Wire it to your Firestore collections to manage live data.",
  quickLinks,
}: {
  title: string;
  description?: string;
  note?: string;
  quickLinks?: { label: string; href: string }[];
}) {
  return (
    <FeaturePage title={title} description={description} quickLinks={quickLinks}>
      <PlaceholderCard title={`${title} module`} text={note} />
    </FeaturePage>
  );
}
