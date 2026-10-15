"use client";
import { formatNumber, formatDate, formatDateTime, formatPrice } from "@/components/prices/format";
import type { Product } from "../../../components/products/type";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductImageBySlug } from "@/lib/constants";

import { CalendarDays, Dot, MapPin, Package, Tag } from "lucide-react";
function axiosErrorIsNotFound(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof error.response === "object" &&
    error.response !== null &&
    "status" in error.response &&
    error.response.status === 404
  );
}
interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <main dir="rtl" className="mx-auto max-w-5xl space-y-8 p-4 sm:p-6">
      {/* معلومات المنتج */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            {/* صورة المنتج */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-muted sm:h-40 sm:w-40">
              {product.slug ? (
                <img
                  src={`${getProductImageBySlug(product.slug)}`}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <Package className="h-12 w-12 text-muted-foreground" />
              )}
            </div>

            {/* معلومات المنتج */}
            <div className="min-w-0 flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">
                  <Tag className="ms-1 h-3.5 w-3.5" />
                  {product.category?.name ?? "بدون تصنيف"}
                </Badge>

                <Badge variant={product.is_active ? "default" : "destructive"}>
                  {product.is_active ? "منتج نشط" : "منتج غير نشط"}
                </Badge>
              </div>

              <CardTitle className="text-2xl font-bold sm:text-3xl">{product.name}</CardTitle>

              {product.description && (
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{product.description}</p>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-lg border p-4">
            <Package className="h-5 w-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">الكمية والوحدة</p>
              <p className="font-semibold">
                {formatNumber(product.quantity)} {product.unit}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border p-4">
            <CalendarDays className="h-5 w-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">تاريخ الإضافة</p>
              <p className="font-semibold">{formatDate(product.created_at)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* الأسعار الحالية */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">الأسعار الحالية</h2>
          <p className="mt-1 text-sm text-muted-foreground">أسعار المنتج المسجلة في المدن المختلفة.</p>
        </div>

        {product.current_prices?.length ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {product.current_prices.map((item) => (
              <Card key={item.id}>
                <CardContent className="space-y-2 p-">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                      <MapPin className="h-4 te w-4 text-muted-foreground" />
                      {item.city?.name ?? "مدينة غير معروفة"}
                    </div>

                    <p className="text-2xl font-bold text-primary">{formatPrice(item.price)}</p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between gap-2 text-xl font-semibold">
                    <Badge variant="outline" className="p-4">
                      السعر الحالي
                    </Badge>
                    <Badge variant="secondary" className="p-4 text-green-500  ">
                      <Dot />
                      مباشر
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
            لا توجد أسعار مسجلة لهذا المنتج حاليًا.
          </p>
        )}
      </section>

      {/* سجل الأسعار */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">سجل الأسعار</h2>
          <p className="mt-1 text-sm text-muted-foreground">الأسعار السابقة المسجلة لهذا المنتج.</p>
        </div>

        {product.price_history?.length ? (
          <div className="space-y-3">
            {product.price_history.map((item) => (
              <Card key={item.id}>
                <CardContent className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {item.city?.name ?? "مدينة غير معروفة"}
                    </div>

                    <p className="text-sm text-muted-foreground">{formatDateTime(item.created_at)}</p>

                    {item.approved_by_user?.name && (
                      <p className="text-xs text-muted-foreground">اعتمد السعر: {item.approved_by_user.name}</p>
                    )}
                  </div>

                  <p className="text-xl font-bold">{formatPrice(item.price)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="rounded-lg border p-6 text-center text-sm text-muted-foreground">لا يوجد سجل سابق للأسعار.</p>
        )}
      </section>

      {/* بيانات إضافية */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">معلومات إضافية</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-muted-foreground">Slug</span>
            <code dir="ltr" className="break-all text-xs">
              {product.slug}
            </code>
          </div>

          <Separator />

          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-muted-foreground">آخر تحديث للمنتج</span>
            <span>{formatDateTime(product.updated_at)}</span>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
