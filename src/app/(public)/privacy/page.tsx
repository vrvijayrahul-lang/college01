import { LegalPage } from "@/components/legal/legal-page";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      updated="2026-01-01"
      intro="This policy explains how we collect, use, and protect your information when you use our College ERP platform."
      sections={[
        { heading: "Information We Collect", body: "We collect account details, academic records, and usage analytics necessary to provide educational services." },
        { heading: "How We Use Information", body: "Information is used to deliver portals, process admissions and fees, and improve the platform experience." },
        { heading: "Data Sharing", body: "We do not sell personal data. Data may be shared with authorized staff and service providers under strict controls." },
        { heading: "Security", body: "We use Firebase security rules, encryption in transit, and role-based access control to protect your data." },
        { heading: "Your Rights", body: "You may request access, correction, or deletion of your personal data by contacting the administration." },
        { heading: "Cookies", body: "We use essential cookies for authentication and optional analytics to understand usage." },
      ]}
    />
  );
}
