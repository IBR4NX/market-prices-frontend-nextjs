import Link from "next/link";
import { createSeo } from "@/lib/seo";

import {
  Search,
  MapPin,
  Tags,
  CircleHelp,
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  BookOpen,
  ChartNoAxesCombined,
  Mail,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = createSeo({
  canonicalPath: "/help",
  title: "مركز المساعدة",
  description:
    "تعرّف على كيفية البحث عن أسعار المنتجات في اليمن، واستعراض الأسعار حسب المدينة والتصنيف، وفهم بيانات الأسعار والتواصل معنا للحصول على المساعدة.",
});

const guides = [
  {
    icon: Search,
    title: "البحث عن المنتجات",
    description:
      "ابحث عن المنتج الذي تريده للوصول إلى الأسعار والمعلومات المتاحة عنه بسهولة.",
    steps: [
      "اكتب اسم المنتج في خانة البحث.",
      "استعرض النتائج المتاحة.",
      "افتح صفحة المنتج لمعرفة تفاصيل الأسعار المسجلة.",
    ],
  },
  {
    icon: MapPin,
    title: "استعراض الأسعار حسب المدينة",
    description:
      "تعرّف على الأسعار المسجلة في المدن اليمنية، واكتشف الفروق السعرية بين المناطق.",
    steps: [
      "اختر المدينة التي تريد استعراض أسعارها.",
      "تصفح المنتجات المتاحة في المدينة.",
      "راجع السعر ووحدة القياس وتاريخ التحديث عند توفرها.",
    ],
  },
  {
    icon: Tags,
    title: "استكشاف التصنيفات",
    description:
      "تصفح المنتجات ضمن مجموعات منظمة تساعدك على الوصول إلى السلع التي تبحث عنها.",
    steps: [
      "افتح صفحة التصنيفات.",
      "اختر التصنيف المناسب لاحتياجك.",
      "استعرض المنتجات والأسعار المتاحة ضمنه.",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "فهم الأسعار ومقارنتها",
    description:
      "استفد من البيانات المتاحة للتعرف على الفروق بين أسعار المنتجات في المدن المختلفة.",
    steps: [
      "تحقق من اسم المنتج والكمية ووحدة القياس.",
      "قارن الأسعار ضمن المدينة أو بين المدن عند توفر البيانات.",
      "راجع تاريخ التحديث قبل الاعتماد على السعر.",
    ],
  },
];

const usefulLinks = [
  {
    icon: CircleHelp,
    title: "الأسئلة الشائعة",
    description: "إجابات عن الأسئلة المتكررة حول استخدام المنصة والأسعار.",
    href: "/faq",
    label: "عرض الأسئلة",
  },
  {
    icon: ShieldCheck,
    title: "سياسة الخصوصية",
    description: "اطّلع على سياسة الخصوصية وكيفية التعامل مع المعلومات.",
    href: "/privacy-policy",
    label: "قراءة السياسة",
  },
  {
    icon: Mail,
    title: "اتصل بنا",
    description: "أرسل استفسارك أو اقتراحك أو بلاغك عن معلومة غير دقيقة.",
    href: "/contact",
    label: "تواصل معنا",
  },
];

export default function Help() {
  return (
    <main
      dir="rtl"
      className="container mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16"
    >
      {/* Hero */}
      <section className="relative mb-12 overflow-hidden rounded-3xl border bg-muted/30 px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute -left-12 -top-12 size-48 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <Badge variant="secondary" className="mb-5 gap-2 px-3 py-1">
            <BookOpen className="size-4" />
            مركز المعرفة والمساعدة
          </Badge>

          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            كيف يمكننا مساعدتك؟
          </h1>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            اكتشف كيفية استخدام منصة أسعار اليمن للوصول إلى معلومات
            الأسعار بسهولة. ستجد هنا إرشادات تساعدك على البحث عن المنتجات،
            واستعراض الأسعار حسب المدينة والتصنيف، وفهم البيانات المتاحة
            والاستفادة منها في مقارنة الأسعار والتخطيط لمشترياتك.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/faq">
            <Button >
                تصفح الأسئلة الشائعة
                <ArrowLeft className="mr-2 size-4" />
            </Button>
              </Link>

              <Link href="/contact">
            <Button  variant="outline">
              تواصل معنا
            </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section aria-labelledby="guides-heading" className="mb-14">
        <div className="mb-7">
          <h2
            id="guides-heading"
            className="mb-2 text-2xl font-bold sm:text-3xl"
          >
            دليل استخدام المنصة
          </h2>

          <p className="leading-7 text-muted-foreground">
            خطوات بسيطة تساعدك على الوصول إلى المعلومات التي تحتاجها.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {guides.map((guide, index) => {
            const Icon = guide.icon;

            return (
              <Card key={guide.title} className="h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <Badge variant="outline">
                      دليل {String(index + 1).padStart(2, "0")}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl">
                    {guide.title}
                  </CardTitle>

                  <CardDescription className="text-sm leading-7">
                    {guide.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Separator className="mb-4" />

                  <ol className="space-y-3">
                    {guide.steps.map((step, stepIndex) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                          {stepIndex + 1}
                        </span>

                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Important notice */}
      <section className="mb-14">
        <Card className="border-amber-500/20 bg-amber-500/[0.04]">
          <CardContent className="flex items-start gap-4 p-5 sm:p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
              <ShieldCheck className="size-5" />
            </div>

            <div>
              <h2 className="mb-2 font-semibold">
                ملاحظة مهمة حول دقة الأسعار
              </h2>

              <p className="text-sm leading-7 text-muted-foreground">
                قد تختلف الأسعار الفعلية حسب المدينة والمتجر والمورد
                والكمية ووقت الشراء. راجع تاريخ تحديث السعر ووحدة القياس
                عند توفرهما، وتحقق من السعر لدى البائع قبل اتخاذ قرار
                الشراء. البيانات المعروضة تعكس المعلومات المتاحة على
                المنصة، ولا تعني بالضرورة أن السعر ثابت أو متوفر لدى جميع
                المتاجر.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Helpful pages */}
      <section aria-labelledby="links-heading" className="mb-14">
        <div className="mb-7">
          <h2
            id="links-heading"
            className="mb-2 text-2xl font-bold sm:text-3xl"
          >
            صفحات قد تساعدك
          </h2>

          <p className="leading-7 text-muted-foreground">
            انتقل مباشرة إلى الصفحة المناسبة لاحتياجك.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {usefulLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.href}
                className="group transition-colors hover:border-primary/40"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <CardTitle className="text-lg">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="leading-7">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Link href={item.href}>
                  <Button
                    
                    variant="ghost"
                    className="px-0 text-primary hover:bg-transparent hover:text-primary"
                  >
                      {item.label}
                      <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
                  </Button>
                    </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <Card className="overflow-hidden border-primary/20 bg-primary/[0.03]">
          <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="size-6" />
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold sm:text-2xl">
                  هل تحتاج إلى مساعدة إضافية؟
                </h2>

                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  إذا لم تجد ما تبحث عنه، أو كانت لديك ملاحظة حول أحد
                  المنتجات أو الأسعار، يمكنك التواصل معنا وتوضيح ما
                  تحتاج إليه.
                </p>
              </div>
            </div>

              <Link href="/contact">
            <Button  className="shrink-0">
                أرسل استفسارك
                <ArrowLeft className="mr-2 size-4" />
            </Button>
              </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

