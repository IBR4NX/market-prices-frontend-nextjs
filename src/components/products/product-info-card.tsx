import { CalendarDays, Package, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatNumber } from "@/components/prices/format";
import { getProductImageBySlug } from "@/lib/constants";
import { InfoStatItem } from "./product-primitives";
import type { Product } from "@/components/products/types"; // عدّل المسار حسب مكان تعريف النوع لديك

interface ProductInfoCardProps {
  product: Product;
}

export function ProductInfoCard({ product }: ProductInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-kcol gap-4 sm:flex-row sm:items-start">
          <div className="flex m-auto h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-muted  sm:h-40 sm:w-40">
            {product.slug ? (
              <img
                src={getProductImageBySlug(product.slug)}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            ) : (
              <Package className="h-12 w-12 text-muted-foreground" />
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Tag className="h-3.5 w-3.5" />
                {product.category[0]?.name ?? "بدون تصنيف"}
              </Badge>
              <Badge variant={product.is_active ? "default" : "destructive"}>
                {product.is_active ? "منتج نشط" : "منتج غير نشط"}
              </Badge>
            </div>

            <CardTitle className="text-2xl font-bold sm:text-3xl">{product.name}</CardTitle>

            {product.description && (
              <CardDescription className="text-sm leading-7">{product.description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid gap-4 sm:grid-cols-2">
        <InfoStatItem
          icon={Package}
          label="الكمية والوحدة"
          value={`${formatNumber(product.quantity)} ${product.unit}`}
        />
        <InfoStatItem icon={CalendarDays} label="تاريخ الإضافة" value={formatDate(product.created_at)} />
      </CardContent>
    </Card>
  );
}
