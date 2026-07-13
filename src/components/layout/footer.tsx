import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { SITE_NAME, CONTACT, NAV_LINKS } from "@/lib/constants";

const resources = [
  { label: "Courses", href: "/courses" },
  { label: "Departments", href: "/departments" },
  { label: "Faculty", href: "/faculty" },
  { label: "Placements", href: "/placements" },
  { label: "Research", href: "/research" },
  { label: "Downloads", href: "/downloads" },
];

const company = [
  { label: "About College", href: "/about" },
  { label: "Principal Message", href: "/principal-message" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card/60">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="gradient-text">{SITE_NAME}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A modern, technology-driven institution committed to academic excellence,
            research, and holistic student development.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {resources.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {CONTACT.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {CONTACT.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {CONTACT.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-foreground">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="transition hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
