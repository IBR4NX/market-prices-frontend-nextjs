import Link from "next/link";
import PriceCard from "./PriceCard";
import type { PriceRecord } from "@/components/catalog/types";
import MainLink from "../shared/mainLink";

interface PriceListProps {
  items: PriceRecord[];
  labels: {
    price: string;
    quantity: string;
    updated: string;
  };
}

export default function PriceList({ items, labels }: PriceListProps) {
  return (
    <section className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {items.map((item) => (
          <MainLink
            key={`${item.product_id}-${item.city_id}`}
            href={`/${item.product_name.replaceAll(" ", " ") ?? ""}`}
          >
            <PriceCard item={item} labels={labels} />
          </MainLink>
        ))}
      </div>
    </section>
  );
}
