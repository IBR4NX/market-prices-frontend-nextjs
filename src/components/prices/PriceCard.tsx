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
import { MAIN_URL } from "@/lib/constants";
import Link from "next/link";
import MainLink from "../shared/mainLink";
import {  ArrowLeft } from "lucide-react";
export default function PriceCard({ item, labels }: PriceCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      <CardHeader className="bgamber-100 p-">
          <MainLink href={`/product/${item.product_name}`} className="">
        <CardTitle className="text-2xl mb-4">
            {item.product_name}
        </CardTitle>
          </MainLink>
        <CardDescription className=" line-clamp-2 ">
          <Badge variant="secondary" className="rounded-md p-3 text-md font-medium">
            <MainLink href={`/category/${item.category_name}`} className="hover:text-primary">
              {item.category_name}
            </MainLink>{" "}
          </Badge>
          <Badge variant={"ghost"} className="text-md text-muted-foreground">
            <Link href={`${MAIN_URL}/city/${item.city_name}`} className="hover:text-primary">
              {item.city_name}
            </Link>{" "}
          </Badge>
        </CardDescription>
        <CardAction className="">
          <Button className={"text-xl"} variant="link">
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
              <ItemDescription className=" text-right" dir="rtl">
                {labels.quantity}
              </ItemDescription>
              <ItemTitle>
                {formatNumber(item.quantity)} {item.unit}
              </ItemTitle>
            </ItemContent>
          </Item>
          <Item dir="rtl" className="col-span-2">
            <ItemContent>
              <ItemDescription className=" text-right" dir="rtl">
                {labels.updated}
              </ItemDescription>
              <ItemTitle>{formatDate(item.updated_at)}</ItemTitle>
            </ItemContent>
          </Item>
        </div>
        <h3 className=" line-clamp-2 ">{item.product_description}s</h3>
      </CardContent>
      <CardFooter>
        <Button
        nativeButton={false}
          variant="link"
          className="w-full"
          render={<Link href={`${MAIN_URL}/product/${item.product_name}`} />}
        >
          المزيد
          <ArrowLeft/>
        </Button>
      </CardFooter>
    </Card>
  );
}
