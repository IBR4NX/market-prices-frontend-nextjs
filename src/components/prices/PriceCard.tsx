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
import { Separator } from "@/components/ui/separator";
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
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Icon } from "lucide-react";
export default function PriceCard({ item, labels }: PriceCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      <CardHeader className="bgamber-100 p-">
        <CardTitle className="text-xl">{item.product_name}</CardTitle>
        <CardDescription className=" line-clamp-2 ">
          <Badge variant="secondary" className="rounded-md p-3 text-md font-medium">
            {item.category_name}
          </Badge>
          <Badge variant={"ghost"} className="text-md text-muted-foreground">
            {item.city_name}
          </Badge>
        </CardDescription>
        <CardAction className="">
          <Button className={"text-xl"} variant="link">
            {formatNumber(item.price)}
          </Button>
          ريال
        </CardAction>
      </CardHeader>

      <CardContent className=" border-t  sm:p-5">
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
      </CardContent>
      <CardFooter>
        <h3 className=" line-clamp-2 static ">{item.product_description}</h3>
      </CardFooter>
    </Card>
  );
}
