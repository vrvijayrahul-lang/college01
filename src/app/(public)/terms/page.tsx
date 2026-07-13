import { LegalPage } from "@/components/legal/legal-page";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      crumb="Terms & Conditions"
      updated="2026-01-01"
      intro="By accessing the College ERP platform, you agree to the following terms governing its use."
      sections={[
        { heading: "Acceptance of Terms", body: "Use of the platform constitutes acceptance of these terms and the privacy policy." },
        { heading: "User Responsibilities", body: "Users must provide accurate information and keep credentials secure. Accounts are personal and non-transferable." },
        { heading: "Acceptable Use", body: "You agree not to misuse the platform, attempt unauthorized access, or disrupt services." },
        { heading: "Intellectual Property", body: "All content, branding, and software are the property of the institution or its licensors." },
        { heading: "Limitation of Liability", body: "The platform is provided on an 'as is' basis without warranties beyond those required by law." },
        { heading: "Changes", body: "We may update these terms periodically. Continued use implies acceptance of the revised terms." },
      ]}
    />
  );
}
