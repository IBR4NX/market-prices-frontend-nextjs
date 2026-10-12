const posts = [
  {
    title: "مرحبًا بكم في مدونة أسعار اليمن",
    excerpt:
      "نسعى إلى تسهيل الوصول إلى أسعار المنتجات والسلع في اليمن من خلال جمع معلومات الأسعار وتنظيمها حسب المدن والتصنيفات. في هذه المدونة، نشارككم مقالات وتحديثات تساعدكم على فهم السوق ومتابعة تغيرات الأسعار واتخاذ قرارات شراء أكثر وعيًا.",
  },
  {
    title: "لماذا تختلف أسعار المنتجات بين المدن اليمنية؟",
    excerpt:
      "قد يختلف سعر المنتج نفسه من مدينة إلى أخرى نتيجة تكاليف النقل والتوزيع، وتوافر السلع، والطلب المحلي، وظروف الإمداد. يساعدك الاطلاع على الأسعار في مدن متعددة على تكوين صورة أوضح عن الفروق السعرية وفهم العوامل التي قد تؤثر في تكلفة المنتجات.",
  },
  {
    title: "كيف تستفيد من مقارنة الأسعار قبل الشراء؟",
    excerpt:
      "مقارنة الأسعار خطوة مهمة قبل اتخاذ قرار الشراء، خاصة عند شراء السلع الأساسية بكميات كبيرة. تعرّف على أهمية مقارنة أسعار المنتجات المتشابهة، والتحقق من وحدة القياس والكمية، والانتباه إلى تاريخ تحديث السعر والمدينة التي سُجّل فيها.",
  },
  {
    title: "أسعار المواد الغذائية ومتابعة تكاليف المعيشة",
    excerpt:
      "تمثل المواد الغذائية جزءًا أساسيًا من المصروفات اليومية للأسر. تساعد متابعة أسعار الأرز والدقيق والسكر والزيوت والبقوليات وغيرها من المنتجات الأساسية على فهم تغير تكاليف المعيشة وملاحظة الفروق بين الأسعار المسجلة في المدن اليمنية.",
  },
  {
    title: "كيف تقرأ بيانات الأسعار بطريقة صحيحة؟",
    excerpt:
      "لا يكفي النظر إلى الرقم وحده عند مقارنة الأسعار؛ فمن المهم معرفة وزن المنتج أو حجمه، ووحدة القياس المستخدمة، والمدينة التي سُجّل فيها السعر، وتاريخ آخر تحديث. تساعدك هذه التفاصيل على إجراء مقارنة أكثر دقة وتجنب الاستنتاجات غير الصحيحة.",
  },
  {
    title: "لماذا يُعد تاريخ تحديث السعر مهمًا؟",
    excerpt:
      "قد تتغير أسعار بعض المنتجات بمرور الوقت، لذلك يساعد تاريخ التحديث على معرفة مدى حداثة المعلومة المتاحة. عند الاطلاع على أي سعر، تحقّق من وقت تسجيله، وتعامل مع الأسعار القديمة بحذر، خصوصًا في الأسواق التي تشهد تغيرات متكررة.",
  },
  {
    title: "دليل متابعة أسعار المنتجات حسب المدينة",
    excerpt:
      "تتيح متابعة الأسعار حسب المدينة الاطلاع على المعلومات المرتبطة بالسوق المحلي بدلًا من الاعتماد على سعر واحد لجميع المناطق. اختر المدينة التي تهمك، واستعرض المنتجات المتاحة، وقارن الأسعار المسجلة مع مراعاة اختلاف الكميات وتواريخ التحديث.",
  },
  {
    title: "كيف تساعد البيانات المنظمة على فهم السوق اليمني؟",
    excerpt:
      "يساعد تنظيم بيانات الأسعار حسب المنتج والمدينة والتصنيف على تسهيل الوصول إلى المعلومات ومقارنتها. وعندما تُعرض الأسعار ضمن بنية واضحة، يصبح من الأسهل ملاحظة الفروق السعرية، ومتابعة التغيرات المتاحة، وتكوين تصور أفضل عن الأسواق المحلية.",
  },
  {
    title: "مواد البناء وأسعار مستلزمات الإنشاء",
    excerpt:
      "تؤثر أسعار مواد البناء في تقدير تكاليف أعمال التشييد والترميم. وتساعد مقارنة الأسعار المسجلة لمختلف المواد، مع الانتباه إلى المواصفات ووحدات القياس والمدينة، على تكوين تقدير أولي للتكاليف قبل الشراء. ويُنصح دائمًا بالتأكد من السعر النهائي لدى المورد.",
  },
  {
    title: "أسعار الوقود وأثرها في تكاليف النقل",
    excerpt:
      "ترتبط تكاليف النقل بحركة السلع وتوزيعها بين الأسواق، وقد تؤثر تغيرات أسعار الوقود في المصروفات اليومية وتكاليف وصول المنتجات. تساعد متابعة الأسعار المتاحة على فهم أحد العوامل التي قد ترتبط بتكاليف النقل، دون افتراض أن الوقود هو السبب الوحيد لتغير أسعار السلع.",
  },
  {
    title: "الإلكترونيات: ما الذي يجب مراعاته عند مقارنة الأسعار؟",
    excerpt:
      "عند مقارنة أسعار الهواتف والأجهزة الإلكترونية، يجب التأكد من تطابق الموديل والمواصفات والسعة والملحقات وحالة المنتج. فقد تكون هناك فروق بين المنتجات التي تبدو متشابهة في الاسم، ولذلك لا تكفي مقارنة الأسعار دون التحقق من تفاصيل كل منتج.",
  },
  {
    title: "كيف تساهم في تحسين بيانات الأسعار؟",
    excerpt:
      "تزداد فائدة منصات الأسعار عندما تكون المعلومات واضحة وحديثة وقابلة للتحقق. إذا كانت المنصة تتيح إرسال الأسعار، فاحرص على إدخال اسم المنتج الصحيح والمدينة والسعر ووحدة القياس، وتجنب إرسال معلومات غير مؤكدة. تساهم البيانات الدقيقة في تحسين جودة المعلومات المتاحة للمستخدمين.",
  },
  {
    title: "الفرق بين السعر المسجل والسعر الفعلي عند الشراء",
    excerpt:
      "السعر المنشور في منصة لمتابعة الأسعار ليس بالضرورة عرضًا نهائيًا من متجر محدد أو ضمانًا لتوافر المنتج. قد يتغير السعر حسب المورد والكمية والمواصفات ووقت الشراء. لذلك، استخدم الأسعار المنشورة للمقارنة والاستدلال، وتأكد من السعر النهائي قبل إتمام عملية الشراء.",
  },
  {
    title: "التخطيط للمشتريات باستخدام معلومات الأسعار",
    excerpt:
      "يمكن أن تساعد متابعة الأسعار في تنظيم قائمة المشتريات وتقدير الميزانية ومقارنة تكلفة المنتجات الأساسية. ابدأ بتحديد احتياجاتك، ثم قارن المنتجات المتشابهة ووحدات القياس، وراجع تاريخ تحديث الأسعار. تذكّر أن المقارنة المفيدة تعتمد على بيانات متوافقة وحديثة قدر الإمكان.",
  },
  {
    title: "ما أهمية الشفافية في معلومات الأسعار؟",
    excerpt:
      "تساعد المعلومات الواضحة حول السعر والمنتج والمدينة وتاريخ التحديث المستخدمين على فهم ما تقوله البيانات وما لا يمكن استنتاجه منها. كما أن توضيح مصدر المعلومة وحدود دقتها يمنح المستخدم تصورًا أكثر واقعية عن الأسعار ويشجعه على التحقق قبل اتخاذ القرار.",
  },
  {
    title: "كيف نتابع تغيرات السوق دون التسرع في الاستنتاج؟",
    excerpt:
      "قد لا تعكس قراءة سعر واحد اتجاه السوق بأكمله. لفهم التغيرات بصورة أفضل، قارن البيانات المتاحة للمنتج نفسه في أوقات مختلفة، وراعِ المدينة ووحدة القياس، وابحث عن معلومات إضافية عند الحاجة. تساعد المقارنة المنضبطة على التمييز بين تغير محدود واتجاه يحتاج إلى متابعة.",
  },
];
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  MapPin,
  Newspaper,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Blog() {
  return (
    <main
      dir="rtl"
      className="container mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16"
    >
      {/* Hero */}
      <section className="relative mb-12 overflow-hidden rounded-3xl border bg-muted/30 px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute -left-12 -top-12 size-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative max-w-3xl">
          <Badge variant="secondary" className="mb-5 gap-2 px-3 py-1">
            <BookOpen className="size-4" />
            المعرفة والأسواق
          </Badge>

          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            مدونة أسعار المنتجات والأسواق في اليمن
          </h1>

          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            مرحبًا بكم في مدونة أسعار اليمن، مساحة معرفية تهتم بمتابعة أسعار
            المنتجات والسلع، وفهم الفروق السعرية بين المدن اليمنية، والتعرّف على
            العوامل التي قد تؤثر في حركة الأسواق. ننشر هنا مقالات وأدلة تساعدك
            على قراءة بيانات الأسعار ومقارنتها والاستفادة منها في التخطيط
            للمشتريات واتخاذ قرارات أكثر وعيًا.
          </p>
        </div>
      </section>

      {/* Section heading */}
      <section aria-label="مقالات مدونة أسعار اليمن">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Newspaper className="size-5" />
              <span className="text-sm font-medium">مكتبة المقالات</span>
            </div>

            <h2 className="text-2xl font-bold sm:text-3xl">
              أحدث المقالات والأدلة
            </h2>

            <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
              معلومات تساعدك على فهم الأسعار ومتابعة تغيرات الأسواق.
            </p>
          </div>

          <Badge variant="outline" className="shrink-0">
            {posts.length} مقال
          </Badge>
        </div>

        <Separator className="mb-8" />

        {/* Posts */}
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, index) => (
            <Card
              key={post.title}
              className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Badge variant="secondary">
                    مقال {String(index + 1).padStart(2, "0")}
                  </Badge>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="size-4" />
                    دليل الأسعار
                  </div>
                </div>

                <CardTitle className="text-xl leading-8 transition-colors group-hover:text-primary sm:text-2xl">
                  {post.title}
                </CardTitle>

                <CardDescription className="text-sm leading-7">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto pt-0">
                <Separator className="mb-4" />

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground">
                    أسعار المنتجات والأسواق
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <ArrowLeft className="size-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Explore prices */}
      <section className="mt-14">
        <Card className="overflow-hidden border-primary/20 bg-primary/[0.03]">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ChartNoAxesCombined className="size-6" />
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                    تابع أسعار المنتجات في اليمن
                  </h2>

                  <p className="max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
                    استكشف الأسعار المتاحة حسب المدينة والتصنيف، وقارن البيانات
                    المسجلة، وراجع تاريخ تحديث كل سعر. تذكّر أن الأسعار المعروضة
                    تعكس المعلومات المتاحة على المنصة، وقد تختلف الأسعار الفعلية
                    حسب المتجر والمورد والوقت.
                  </p>
                </div>
              </div>

              <Link href="/prices">
                <Button className="shrink-0">
                  استكشف الأسعار
                  <ArrowLeft className="mr-2 size-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* City navigation hint */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4" />
        <p>تابع الأسعار حسب المدن اليمنية والتصنيفات المتاحة.</p>
      </div>
    </main>
  );
}
