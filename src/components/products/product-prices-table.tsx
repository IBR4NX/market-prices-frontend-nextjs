import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/components/prices/format";
import { CityCell, EmptyState } from "./product-primitives";
import type { Product } from "@/components/products/types";

interface ProductPricesTableProps {
  prices: Product["current_prices"];
}

export function ProductPricesTable({ prices }: ProductPricesTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">الأسعار الحالية</CardTitle>
        <CardDescription>أسعار المنتج المسجلة في المدن المختلفة.</CardDescription>
      </CardHeader>
      <CardContent>
        {prices?.length ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">المدينة</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-left">السعر الحالي</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prices.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <CityCell name={item.city?.name} />
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="gap-1.5 text-emerald-600 dark:text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        مباشر
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left text-lg font-bold text-primary">
                      {formatPrice(item.price)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <EmptyState message="لا توجد أسعار مسجلة لهذا المنتج حاليًا." />
        )}
      </CardContent>
    </Card>
  );
}
