import type { Product } from "@/components/products/type";
import { ProductInfoCard } from "./product-info-card";
import { ProductPricesTable } from "./product-prices-table";
import { ProductHistoryTable } from "./product-history-table";
import { ProductMetaCard } from "./product-meta-card";

interface ProductDetailsProps {
  product: Product;
}
export {Product};
export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <main dir="rtl" className="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
      <ProductInfoCard product={product} />
      <ProductPricesTable prices={product.current_prices} />
      <ProductHistoryTable history={product.price_history} />
      <ProductMetaCard slug={product.slug} updatedAt={product.updated_at} />
    </main>
  );
}
