import {
  ArrowLeft,
  BadgeCheck,
  ChartNoAxesCombined,
  MapPin,
  PackageSearch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { MAIN_URL } from "@/lib/constants";

const highlights = [
  {
    title: "ابحث عن سعر المنتج اليوم",
    description: "اكتب اسم المنتج وشوف الأسعار المتاحة له في المدن اليمنية.",
    icon: PackageSearch,
  },
  {
    title: "حدد المدينة أو الفئة",
    description: "فلتر الأسعار حسب صنعاء أو تعز أو عدن أو حسب فئة المنتج.",
    icon: MapPin,
  },
  {
    title: "قارن قبل الشراء",
    description: "راجع السعر والكمية وآخر تحديث لتعرف فرق الأسعار بين المدن.",
    icon: TrendingUp,
  },
];

const stats = [
  { label: "بحث عن السعر", value: "بالمنتج" },
  { label: "مقارنة", value: "بين المدن" },
  { label: "الفلاتر", value: "مدينة وفئة" },
  { label: "الوصول", value: "من الجوال" },
];
const cities = [
  { name: "صنعاء", slug: "sanaa" },
  { name: "تعز", slug: "taiz" },
  { name: "عدن", slug: "aden" },
];

const categories = [{ name: "المواد الغذائية", slug: "food" }];

export default function HomePage() {
  return (
    <>
      <main
        dir="rtl"
        className="overflow-x-clip  bg-background text-foreground"
      >
        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-linear-to-b from-primary/10 via-primary/5 to-transparent sm:h-96" />

          <div className="mx-auto w-full max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-16 sm:pb-16 lg:px-8 lg:pt-44 lg:pb-24">
            <div className="max-w-3xl   ">

              <img src={`${MAIN_URL}/favicons/logo.svg`}
              className=" sm:w-3xs"
              />
              <h1 className="text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
                أسعار المنتجات في وتعز تعاني من ارتفاع حاد بسبب الحروب الحاصله
              </h1>
              <h1 className="text-4xl font-readex font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
                أسعار المنتجات في وتعز تعاني من ارتفاع حاد بسبب الحروب الحاصله
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-9">
                ابحث عن أسعار المنتجات في اليمن حسب المدينة والفئة، وقارن السعر
                المتاح في صنعاء وتعز وعدن وبقية المدن عند توفر البيانات.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                <Button
                  nativeButton={false}
                  render={<Link href="/prices" />}
                  size="lg"
                  className="h-11 w-full sm:w-auto"
                >
                  استعرض الأسعار
                  <ArrowLeft />
                </Button>
                <Button
                  nativeButton={false}
                  render={<a href="#how-it-works" />}
                  variant="outline"
                  size="lg"
                  className="h-11 w-full sm:w-auto"
                >
                  كيف أبحث عن السعر؟
                </Button>
              </div>
            </div>

            <div className=" hidden mt-10 grتid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border-border/70 bg-card/80 py-0 shadow-sm backdrop-blur"
                >
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-lg font-bold sm:text-xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary">
              أسعار المنتجات حسب المدينة
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              تعرّف على أسعار السلع في المدن اليمنية
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
              تختلف أسعار المنتجات والمواد الغذائية من مدينة إلى أخرى بحسب السوق
              والمنتج والكمية. تساعدك منصة أسعار اليمن على استعراض الأسعار
              المسجلة في المدن اليمنية ومقارنة الأسعار المتاحة، مع الاطلاع على
              تفاصيل المنتج وتاريخ آخر تحديث للسعر عند توفره.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Card
                key={city.slug}
                className="py-0 transition-colors ring-primary/50 hover:bg-accent"
              >
                <Link href={`/city/${city.name}`}>
                  <CardContent className="grid grid-cols-6 items-center shadow  shadow-primary  outline outline-primary justify-between gap-4 p-5">
                    <div className=" col-span-5">
                      <h3 className="font-bold">
                        أسعار المنتجات في {city.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        استعرض الأسعار المتاحة في مدينة {city.name} حسب المنتج
                        والتصنيف.
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={`أسعار الشاملة في ${city.name}`}
                    >
                      <ArrowLeft className="size-4" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <span className="text-sm font-semibold text-primary">
              أسعار المنتجات حسب التصنيف
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              ابحث عن أسعار المنتجات التي تحتاجها
            </h2>

            <p className="mt-3 text-sm leading-8 text-muted-foreground sm:text-base">
              تصفح المنتجات بحسب فئاتها لتسهيل الوصول إلى الأسعار المناسبة.
              يمكنك الاطلاع على المواد الغذائية وغيرها من التصنيفات المتاحة،
              ومراجعة الكميات والأسعار المسجلة بدلًا من الاعتماد على تقديرات
              عامة لا تعكس بيانات السوق المتوفرة.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.slug}
                nativeButton={false}
                render={<Link href={`/category/${category.slug}`} />}
                variant="outline"
              >
                {category.name}
                <ArrowLeft className="size-4" />
              </Button>
            ))}

            <Button
              nativeButton={false}
              render={<Link href="/prices" />}
              variant="secondary"
            >
              جميع الأسعار
              <ArrowLeft className="size-4" />
            </Button>
          </div>
        </section>
        <section
          id="how-it-works"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-1 pb-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary">
              طريقة متابعة أسعار المنتجات
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              من اسم المنتج إلى مقارنة الأسعار بين المدن اليمنية
            </h2>
          </div>
          <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="py-0 ">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center justify- gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <h3 className=" text-xl font-bold">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <Card className="overflow-hidden bg-primary py-0 text-primary-foreground">
            <CardContent className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10">
              <div className="max-w-xl">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/15">
                  <ShieldCheck className="size-5" />
                </div>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  ابحث عن سعر المنتج اليوم في اليمن
                </h2>
                <p className="mt-2 text-sm leading-7 text-primary-foreground/75 sm:text-base">
                  استخدم صفحة الأسعار للوصول إلى أسعار المواد الغذائية والمنتجات
                  المتاحة حسب المدينة والتصنيف، بدون ادعاءات أو أرقام غير موجودة
                  في البيانات.
                </p>
              </div>
              <Button
                nativeButton={false}
                render={<Link href="/prices" />}
                size="lg"
                variant="secondary"
                className="h-11 w-full shrink-0 sm:w-auto"
              >
                <ChartNoAxesCombined />
                عرض الأسعار
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
