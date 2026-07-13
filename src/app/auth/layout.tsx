import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      <div className="hero-grid absolute inset-0 -z-10 opacity-50" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <Link
        href="/"
        className="absolute left-6 top-6 flex items-center gap-2 font-heading font-bold"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo text-white">
          <GraduationCap className="h-5 w-5" />
        </span>
        <span className="gradient-text">Vidya University</span>
      </Link>
      {children}
    </div>
  );
}
