import { Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDateTime } from "@/components/prices/format";
import type { Product } from "@/components/products/type";

interface ProductMetaCardProps {
  slug: Product["slug"];
  updatedAt: Product["updated_at"];
}

export function ProductMetaCard({ slug, updatedAt }: ProductMetaCardProps) {
  const metaRows = [
    {
      label: "المعرّف النصي (Slug)",
      value: (
        <code dir="ltr" className="rounded bg-muted px-1.5 py-0.5 text-xs">
          {slug}
        </code>
      ),
    },
    {
      label: "آخر تحديث للمنتج",
      value: <span>{formatDateTime(updatedAt)}</span>,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">معلومات إضافية</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {metaRows.map((row, index) => (
          <Fragment key={row.label}>
            {index > 0 && <Separator />}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-muted-foreground">{row.label}</span>
              {row.value}
            </div>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
}
