import {
  BarChart3,
  MapPin,
  Search,
  ShieldCheck,
  Target,
  Users,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: MapPin,
    title: "الأسعار حسب المدينة",
    description:
      "استكشف الأسعار المسجلة في المدن اليمنية، وتعرّف على الفروق السعرية بين المناطق.",
  },
  {
    icon: Search,
    title: "سهولة الوصول",
    description:
      "ابحث عن المنتجات والسلع، واستعرض المعلومات المتاحة ضمن تصنيفات منظمة.",
  },
  {
    icon: BarChart3,
    title: "مقارنة الأسعار",
    description:
      "قارن الأسعار المسجلة للمنتجات بين المدن، مع مراعاة الكمية ووحدة القياس وتاريخ التحديث.",
  },
  {
    icon: ShieldCheck,
    title: "وضوح المعلومات",
    description:
      "نعمل على تقديم بيانات الأسعار بطريقة واضحة تساعد المستخدم على فهم المعلومات المتاحة وحدودها.",
  },
];

const goals = [
  "تسهيل الوصول إلى أسعار المنتجات والسلع في اليمن.",
  "تنظيم المنتجات ضمن تصنيفات واضحة وسهلة التصفح.",
  "توفير إمكانية مقارنة الأسعار المسجلة حسب المدينة.",
  "تطوير تجربة البحث والوصول إلى المعلومات.",
  "تحسين وضوح بيانات الأسعار وتواريخ تحديثها.",
];

export default function About() {
  return (
    <main dir="rtl" className="container mx-auto max-w-5xl px-4 py-10 sm:py-16">
      <section className="mb-16 text-center">
        <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <BarChart3 className="size-8" />
        </div>

        <h1 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          من نحن
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          منصة تهدف إلى تسهيل الوصول إلى أسعار المنتجات والسلع في اليمن،
          وتنظيم المعلومات حسب المدن والتصنيفات لمساعدة المستخدمين على
          متابعة الأسعار ومقارنتها بسهولة.
        </p>
      </section>

      <section className="mb-16">
        <Card className="overflow-hidden border-border/60 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl">ما هي منصة أسعار اليمن؟</CardTitle>
            <CardDescription className="text-sm">
              معلومات الأسعار في مكان واحد
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base leading-8 text-muted-foreground">
              أسعار اليمن منصة إلكترونية تهتم بجمع وعرض معلومات أسعار
              المنتجات والسلع في الأسواق اليمنية ضمن واجهة منظمة وسهلة
              الاستخدام. تتيح المنصة استكشاف المنتجات حسب المدينة والتصنيف،
              والاطلاع على الأسعار المسجلة ومقارنتها عندما تتوفر البيانات
              اللازمة لذلك.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <div className="mb-7">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            ماذا تقدم المنصة؟
          </h2>

          <p className="leading-7 text-muted-foreground">
            أدوات تساعدك على استكشاف بيانات الأسعار وفهمها بسهولة.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="h-full">
                <CardHeader>
                  <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <CardTitle className="text-lg">
                    {feature.title}
                  </CardTitle>

                  <CardDescription className="text-sm leading-7">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator className="mb-16" />

      <section className="mb-16 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="size-5" />
            </div>

            <CardTitle className="text-2xl">رؤيتنا</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-8 text-muted-foreground">
              نسعى إلى جعل معلومات الأسعار أكثر سهولة في الوصول والمقارنة،
              وتقديم تجربة تساعد المستخدمين على فهم الفروق السعرية بين
              المدن ومتابعة المعلومات المتاحة عن المنتجات والسلع في اليمن.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="size-5" />
            </div>

            <CardTitle className="text-2xl">من نخدم؟</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-8 text-muted-foreground">
              نخدم الأفراد والمهتمين بمتابعة أسعار السلع ومقارنتها بين
              المدن اليمنية، وكل من يبحث عن طريقة منظمة للوصول إلى
              المعلومات المتاحة حول المنتجات وتكاليفها.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          أهدافنا
        </h2>

        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <span className="leading-7 text-muted-foreground">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">
              دقة المعلومات وشفافية الأسعار
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-8 text-muted-foreground">
              قد تختلف الأسعار حسب المدينة والمورد والكمية ووقت الشراء.
              لذلك ننصح بمراجعة تاريخ تحديث السعر والتحقق من السعر الفعلي
              لدى البائع قبل اتخاذ قرار الشراء. الأسعار المنشورة تعكس
              البيانات المتاحة على المنصة، ولا تضمن بالضرورة توافر المنتج
              أو ثبات سعره لدى جميع المتاجر.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                لديك سؤال أو اقتراح؟
              </h2>

              <p className="max-w-xl leading-7 text-muted-foreground">
                نرحب بملاحظاتك واقتراحاتك التي تساعدنا على تحسين المنصة
                وتطوير تجربة المستخدم.
              </p>
            </div>

              <Link href="/contact">
            <Button className="shrink-0">
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

