"use client";

import PricesScopePage from "@/app/_shared/PricesScopePage";
import { getQueryString } from "@/lib/query";

export default function CityProductPrice() {
  return (
    <PricesScopePage
      canonicalPath={``}
      description={(cityName, productName) =>
        `تابع أحدث أسعار ${getQueryString(productName)} في ${getQueryString(cityName)}، مع نتائج مخصصة للمدينة والمنتج فقط.`
      }
      emptyLabel="لا توجد أسعار متاحة لهذا المنتج في هذه المدينة حالياً."
      extraFixedFilter={{
        key: "search",
        paramName: "productName",
        pathSegment: "product",
      }}
      fixedFilterKey="city"
      invalidLabel="اسم المدينة أو المنتج غير صحيح."
      loadingLabel={(cityName, productName) =>
        `جارٍ تحميل أسعار ${getQueryString(productName)} في ${getQueryString(cityName)}...`
      }
      paramName="cityName"
      summary={(cityName, productName) =>
        `هذه نتيجة مركزة لمن يبحث عن سعر ${getQueryString(productName)} في ${getQueryString(cityName)} تحديداً، مع بقاء فلتر الفئة متاحاً إذا احتجت تضييق النتائج.`
      }
      title={(cityName, productName) =>
        `سعر ${getQueryString(productName)} في ${getQueryString(cityName)} اليوم`
      }
    />
  );
}
