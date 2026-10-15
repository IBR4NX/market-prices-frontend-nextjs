import type { LucideIcon } from "lucide-react";
import { MapPin } from "lucide-react";

interface InfoStatItemProps {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
}

export function InfoStatItem({ icon: Icon, label, value }: InfoStatItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
      <Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
      {message}
    </div>
  );
}

interface CityCellProps {
  name?: string | null;
}

export function CityCell({ name }: CityCellProps) {
  return (
    <div className="flex items-center gap-2 font-medium">
      <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
      <span>{name ?? "مدينة غير معروفة"}</span>
    </div>
  );
}