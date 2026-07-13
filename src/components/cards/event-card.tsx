import { CalendarDays, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { Event } from "@/types";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="p-5 transition hover:shadow-glow">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo text-white">
          <span className="text-xs uppercase">
            {new Date(event.startDate).toLocaleString("en-IN", { month: "short" })}
          </span>
          <span className="text-lg font-bold leading-none">
            {new Date(event.startDate).getDate()}
          </span>
        </div>
        <div>
          <h3 className="font-semibold">{event.title}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {event.location}
          </p>
        </div>
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
      <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
        <CalendarDays className="h-3.5 w-3.5" />
        {formatDate(event.startDate)} – {formatDate(event.endDate)}
      </div>
    </Card>
  );
}
