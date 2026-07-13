import Link from "next/link";
import { WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <WifiOff className="h-8 w-8" />
      </span>
      <h1 className="text-2xl font-bold">You&apos;re offline</h1>
      <p className="max-w-sm text-muted-foreground">
        This page isn&apos;t available right now. Check your connection and try again.
      </p>
      <Button asChild variant="gradient">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
