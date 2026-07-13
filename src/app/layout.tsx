import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AuthProvider } from "@/components/auth/auth-provider";
import { PWARegister } from "@/components/pwa-register";
import { APP_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${SITE_NAME} — College Management ERP`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "A modern, full-stack College Management ERP platform with student, faculty, parent, and admin portals, admissions, fees, attendance, exams, and analytics.",
  keywords: [
    "college ERP",
    "university management system",
    "student portal",
    "admission management",
    "education software",
  ],
  openGraph: {
    title: `${SITE_NAME} — College Management ERP`,
    description:
      "Modern College Management ERP with premium UI, role-based dashboards, and powerful analytics.",
    url: APP_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AuthProvider>{children}</AuthProvider>
          <PWARegister />
        </Providers>
      </body>
    </html>
  );
}
