import type { PriceRecord } from "@/components/catalog/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, formatNumber } from "./format";
import { Button } from "@/components/ui/button";
interface PriceCardProps {
  item: PriceRecord;
  labels: {
    price: string;
    quantity: string;
    updated: string;
  };
}
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import MainLink from "../shared/mainLink";
import { ArrowLeft, CalendarDays, MapPin, Package, Tag, Weight } from "lucide-react";
import { getProductImageBySlug } from "@/lib/constants";

export default function PriceCard({ item, labels }: PriceCardProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.product_name,
    description:
      item.product_description ||
      `أحدث سعر لـ ${item.product_name} (${item.quantity} ${item.unit}) في ${item.city_name}, اليمن.`,
    sku: item.product_id ? item.product_id.toString() : undefined,
    category: item.category_name,

    // العرض (Offer) الخاص بالسعر في هذه المدينة
    offers: {
      "@type": "Offer",
      priceCurrency: "YER",
      image: [getProductImageBySlug(item.product_id)],
      price: item.price,
      priceValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: "https://schema.org/InStock",
      // توضيح نطاق الكمية ووحدة القياس إن وجد
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: item.quantity,
        unitText: item.unit,
      },
      // المنطقة أو المدينة التي يتوفر فيها السعر
      areaServed: {
        "@type": "City",
        name: item.city_name,
      },
    },
  };

  return (
    <Card className="overflow-hidden border-border gap-4 bg-card shadow-sm">
      <script id="item" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CardHeader className="bgamber-100 p-">
        <MainLink href={`/${item.product_name.replaceAll(" ", "-")}`} className="flex mb-4 items-center gap-2">
          <Package className="size-5 shrink-0 text-primary" />
          <CardTitle className=" text-2xl">{item.product_name}</CardTitle>
        </MainLink>
        <CardDescription className=" line-clamp-2 col-span-2 ">{item.product_description}</CardDescription>
        <CardAction className="flex items-center gap-1">
          <Tag className="size-5 text-primary" />
          <Button className="text-xl" variant="link">
            {formatNumber(item.price)}
          </Button>
          ريال
        </CardAction>
      </CardHeader>

      <CardContent className=" border-t  sm">
        {/* Details */}
        <div className="grid grid-cols-3">
          <Item dir="rtl" className=" col-span-1">
            <ItemMedia hidden variant="icon"></ItemMedia>
            <ItemContent>
              <ItemDescription className="flex items-center gap-2 text-right" dir="rtl">
                <Weight className="size-4 text-muted-foreground" />
                {labels.quantity}
              </ItemDescription>
              <ItemTitle>
                {formatNumber(item.quantity)} {item.unit}
              </ItemTitle>
            </ItemContent>
          </Item>
          <Item dir="rtl" className="col-span-2">
            <ItemContent>
              <ItemDescription className="flex items-center gap-2 text-right" dir="rtl">
                <CalendarDays className="size-4 text-muted-foreground" />
                {labels.updated}
              </ItemDescription>
              <ItemTitle>{formatDate(item.updated_at)}</ItemTitle>
            </ItemContent>
          </Item>
        </div>
        <h3 className=" line-clamp-1 "></h3>
      </CardContent>

      <CardFooter className="">
        <Badge variant="secondary" className="rounded-md p-3 text-md font-medium">
          <Tag className="ml-1 size-4" />
          <MainLink href={`/prices?category=${item.category_name}&city=${item.city_name}`}>
            {item.category_name}
          </MainLink>
        </Badge>
        <Badge variant="ghost" className="text-md p-3 text-muted-foreground">
          <MapPin className="ml-1 size-4" />
          <MainLink href={`/city/${item.city_name}`}>{item.city_name}</MainLink>
        </Badge>
        <Button
          nativeButton={false}
          variant="link"
          className="  mr-auto gap-2"
          render={<MainLink href={`/product/${item.product_name}`} />}
        >
          المزيد
          <ArrowLeft className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
