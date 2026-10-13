import Link from "next/link";
import { createSeo } from "@/lib/seo";
import {
  CircleHelp,
  Search,
  MapPin,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = createSeo({
  canonicalPath: "/faq",
  title: "الأسئلة الشائعة",
  description:
    "إجابات عن كيفية البحث عن أسعار المنتجات في اليمن ومقارنتها حسب المدينة، وتحديث الأسعار ودقة المعلومات المنشورة على منصة أسعار اليمن.",
});

const items = [
  {
    q: "ما هي منصة أسعار اليمن؟",
    a: "أسعار اليمن منصة إلكترونية تهدف إلى تسهيل الوصول إلى معلومات أسعار المنتجات والسلع في الأسواق اليمنية. يمكنك استكشاف المنتجات والتصنيفات والاطلاع على الأسعار المتاحة حسب المدينة، مما يساعدك على تكوين صورة أوضح عن الأسعار المسجلة.",
    icon: CircleHelp,
  },
  {
    q: "كيف أبحث عن سعر منتج معين؟",
    a: "استخدم خاصية البحث للوصول إلى المنتج الذي تريده، أو تصفح المنتجات حسب التصنيفات. افتح صفحة المنتج للاطلاع على الأسعار والمعلومات المتاحة عنه.",
    icon: Search,
  },
  {
    q: "كيف أعرف سعر المنتج في مدينتي؟",
    a: "اختر المدينة التي تريد معرفة أسعار المنتجات فيها، ثم استعرض المنتجات والأسعار المسجلة. يعتمد ظهور السعر على توفر بيانات للمنتج في المدينة المطلوبة.",
    icon: MapPin,
  },
  {
    q: "لماذا تختلف أسعار المنتج من مدينة إلى أخرى؟",
    a: "قد تختلف الأسعار نتيجة تكاليف النقل والتوزيع، وتوفر المنتجات، واختلاف الموردين والطلب المحلي. لذلك قد لا يكون السعر المسجل في مدينة مماثلًا للسعر في مدينة أخرى.",
    icon: TrendingUp,
  },
  {
    q: "هل الأسعار المعروضة هي الأسعار الحالية في الأسواق؟",
    a: "تعكس الأسعار المعلومات المسجلة والمتاحة على المنصة، وقد لا تطابق السعر الفعلي لدى جميع المتاجر. ننصح بمراجعة تاريخ تحديث السعر والتحقق منه لدى البائع قبل الشراء.",
    icon: ShieldCheck,
  },
  {
    q: "لماذا لا يظهر سعر لبعض المنتجات؟",
    a: "قد لا تتوفر بيانات سعرية للمنتج في المدينة التي اخترتها، أو قد لا تكون هناك معلومات حديثة مسجلة عنه. يمكنك العودة لاحقًا للاطلاع على أي تحديثات جديدة.",
    icon: Search,
  },
  {
    q: "كيف يمكنني الإبلاغ عن سعر غير دقيق؟",
    a: "إذا لاحظت سعرًا غير دقيق أو معلومة تحتاج إلى تصحيح، يمكنك التواصل معنا عبر صفحة اتصل بنا، مع ذكر اسم المنتج والمدينة وتفاصيل الملاحظة لمساعدتنا على مراجعتها.",
    icon: MessageCircle,
  },
  {
    q: "كيف أتواصل مع فريق أسعار اليمن؟",
    a: "يمكنك زيارة صفحة اتصل بنا وإرسال استفسارك أو اقتراحك عبر وسائل التواصل المتاحة. نرحب بملاحظاتك التي تساعدنا على تحسين المنصة وجودة المعلومات.",
    icon: MessageCircle,
  },
  {
    q: "كيف أطلع على سياسة الخصوصية؟",
    a: "توضح صفحة سياسة الخصوصية كيفية التعامل مع المعلومات ذات الصلة باستخدام المنصة. يمكنك الاطلاع عليها لمعرفة المزيد عن ممارسات الخصوصية.",
    icon: ShieldCheck,
  },
];

const benefits = [
  {
    icon: Search,
    title: "بحث أسهل",
    description: "اعثر على المنتجات التي تريد معرفة أسعارها.",
  },
  {
    icon: MapPin,
    title: "حسب المدينة",
    description: "استعرض الأسعار المتاحة في المدن اليمنية.",
  },
  {
    icon: TrendingUp,
    title: "مقارنة أوضح",
    description: "تعرّف على الفروق بين الأسعار المسجلة.",
  },
];

export default function Faq() {
  return (
    <main
      dir="rtl"
      className="container mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16"
    >
      {/* Hero */}
      <section className="relative mb-12 overflow-hidden rounded-3xl border bg-muted/30 px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute -left-12 -top-12 size-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-16 right-1/3 size-40 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative max-w-3xl">
          <Badge variant="secondary" className="mb-5 gap-2 px-3 py-1">
            <CircleHelp className="size-4" />
            مركز المعرفة
          </Badge>

          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            كيف يمكننا مساعدتك؟
          </h1>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            لديك سؤال حول أسعار المنتجات في اليمن؟ هنا ستجد إجابات عن
            كيفية البحث عن الأسعار، ومعرفة الفروق بين المدن، وفهم
            المعلومات المعروضة على المنصة. هدفنا أن نجعل وصولك إلى
            معلومات الأسعار أسهل وأكثر وضوحًا.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section
        aria-label="مميزات المنصة"
        className="mb-14 grid gap-4 sm:grid-cols-3"
      >
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card key={benefit.title} className="border-border/70">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <div>
                  <h2 className="mb-1 font-semibold">
                    {benefit.title}
                  </h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Questions */}
      <section aria-labelledby="faq-heading">
        <div className="mb-6">
          <h2
            id="faq-heading"
            className="mb-2 text-2xl font-bold sm:text-3xl"
          >
            الأسئلة الأكثر شيوعًا
          </h2>

          <p className="leading-7 text-muted-foreground">
            إجابات واضحة عن أهم ما تحتاج إلى معرفته عند استخدام المنصة.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <Accordion itemType="single"  className="w-full po">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <AccordionItem
                    key={item.q}
                    value={`question-${index + 1}`}
                    className="border-b last:border-b-0 "
                  >
                    <AccordionTrigger className="gap-4 py-5 text-right text-sm font-semibold leading-7 hover:no-underline sm:text-base">
                      <span className="flex min-w-0 items-start gap-3">
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                          <Icon className="size-4" />
                        </span>

                        <span>{item.q}</span>
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-5 pe-12 text-sm leading-8 text-muted-foreground sm:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA */}
      <section className="mt-12">
        <Card className="overflow-hidden border-primary/20 bg-primary/3">
          <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="size-6" />
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold sm:text-2xl">
                  لم تجد الإجابة التي تبحث عنها؟
                </h2>

                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  يسعدنا استقبال أسئلتك وملاحظاتك واقتراحاتك. تواصل معنا
                  وسنحاول مساعدتك وتوضيح ما تحتاج إلى معرفته.
                </p>
              </div>
            </div>

              <Link href="/contact">
            <Button  className="shrink-0">
                تواصل معنا
                <ArrowLeft className="mr-2 size-4" />
            </Button>
              </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

