import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDateTime, formatPrice } from "@/components/prices/format";
import { CityCell, EmptyState } from "./product-primitives";
import type { Product } from "@/components/products/types";

interface ProductHistoryTableProps {
  history: Product["price_history"];
}

export function ProductHistoryTable({ history }: ProductHistoryTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">سجل الأسعار</CardTitle>
        <CardDescription>الأسعار السابقة المسجلة لهذا المنتج.</CardDescription>
      </CardHeader>
      <CardContent>
        {history?.length ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">المدينة</TableHead>
                  <TableHead className="text-right">تاريخ التسجيل</TableHead>
                  <TableHead className="text-left">السعر</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <CityCell name={item.city?.name} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">{formatDateTime(item.created_at)}</TableCell>
                    <TableCell className="text-left font-bold">{formatPrice(item.price)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <EmptyState message="لا يوجد سجل سابق للأسعار." />
        )}
      </CardContent>
    </Card>
  );
}
