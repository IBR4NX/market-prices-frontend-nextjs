"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ChartNoAxesCombined, MapPin, PackageSearch, ShieldCheck, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";

const cities = [
  { name: "صنعاء", slug: "sanaa" },
  { name: "تعز", slug: "taiz" },
  { name: "عدن", slug: "aden" },
];

const categories = [{ name: "المواد الغذائية", slug: "food" }];

const highlights = [
  {
    number: "01",
    title: "ابحث عن المنتج",
    description: "اكتب اسم المنتج الذي تريد معرفة سعره، وانتقل مباشرة إلى الأسعار المتاحة.",
    icon: PackageSearch,
  },
  {
    number: "02",
    title: "اختر المدينة",
    description: "استعرض الأسعار بحسب المدينة، وقارن البيانات المتاحة في الأسواق اليمنية.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "قارن الأسعار",
    description: "اطّلع على الأسعار المسجلة وتفاصيل المنتج وتاريخ آخر تحديث عند توفرها.",
    icon: ChartNoAxesCombined,
  },
];

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        "[data-hero-content]",
        { autoAlpha: 0, y: 45 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" },
      );

      // Floating cards
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
        gsap.to(el, { y: i % 2 ? -14 : 14, duration: 2.5 + i * 0.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      });

      // Section reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play reverse play reverse" },
          },
        );
      });

      // Staggered cards
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll("[data-card]"),
          { autoAlpha: 0, y: 30, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 85%", toggleActions: "play reverse play reverse" },
          },
        );
      });

      // Pinned scroll story
      const story = main.querySelector<HTMLElement>("[data-scroll-story]");
      if (story) {
        const panels = gsap.utils.toArray<HTMLElement>("[data-scroll-panel]", story);

        if (panels.length > 1) {
          gsap.set(panels, { autoAlpha: 0, y: 0, scale: 0.5 });
          gsap.set(panels[0], { autoAlpha: 1, y: 0, scale: 1 });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: story,
              start: "top top",
              end: () => `+=${window.innerHeight * (panels.length -51)}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          panels.slice(1).forEach((panel, i) => {
            timeline
              .to(panels[i], { autoAlpha: 0, y: -40, scale: 0.5, duration: 1 }, i)
              .fromTo(panel, { autoAlpha: 0, y: 40, scale: 0.5 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1 }, i);
          });
        }
      }

      // Refresh scroll positions after images and layout settle
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, main);

    return () => context.revert();

    return () => context.revert();
  }, []);

  return (
    <>
      <main ref={mainRef} dir="rtl" className="overflow-x-clip bg-background text-foreground">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#07111f] text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_20%,rgba(14,165,233,0.20),transparent_45%),radial-gradient(ellipse_at_15%_80%,rgba(16,185,129,0.13),transparent_40%)]" />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="mx-auto grid min-h-[90svh] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative z-10">
              <div
                data-hero-content
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300"
              >
                <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                منصة أسعار المنتجات في اليمن
              </div>

              <h1
                data-hero-content
                className="mt-7 max-w-2xl text-5xl font-black leading-[1.2] tracking-tight sm:text-6xl lg:text-7xl"
              >
                السوق أوضح.
                <br />
                <span className="bg-gradient-to-l from-sky-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  والقرار أذكى.
                </span>
              </h1>

              <p data-hero-content className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                اكتشف أسعار المنتجات في المدن اليمنية، واستعرض البيانات المتاحة حسب المدينة والتصنيف، وتابع تفاصيل
                الأسعار وتحديثاتها المسجلة.
              </p>

              <div data-hero-content className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  nativeButton={false}
                  render={<Link href="/prices" />}
                  size="lg"
                  className="h-12 bg-sky-400 px-7 font-bold text-slate-950 hover:bg-sky-300"
                >
                  استكشف الأسعار <ArrowLeft />
                </Button>
                <Button
                  nativeButton={false}
                  render={<a href="#how-it-works" />}
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white"
                >
                  اكتشف المنصة
                </Button>
              </div>

              <div data-hero-content className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-sky-400" /> حسب المدينة
                </span>
                <span className="flex items-center gap-2">
                  <ChartNoAxesCombined className="size-4 text-emerald-400" /> مقارنة الأسعار
                </span>
              </div>
            </div>

            <div className="relative mx-auto flex min-h-[430px] w-full max-w-[500px] items-center justify-center sm:min-h-[500px]">
              <div className="absolute size-[310px] rounded-full border border-sky-300/10 sm:size-[430px]" />
              <div className="absolute size-[240px] rounded-full border border-dashed border-cyan-300/20 sm:size-[340px]" />
              <div className="absolute size-[220px] rounded-full bg-sky-400/10 blur-[80px]" />

              <Card
                data-float
                className="relative z-10 w-[88%] max-w-[360px] border-white/10 bg-[#101f32]/95 py-0 text-white shadow-2xl shadow-sky-950/50 backdrop-blur-xl"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">أسعار اليمن</p>
                      <h2 className="mt-1 text-xl font-bold">استكشف السوق</h2>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <ChartNoAxesCombined className="size-6" />
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                        <PackageSearch className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold">أسعار المنتجات</p>
                        <p className="mt-1 text-xs text-slate-400">ابحث عن المنتج الذي تحتاجه</p>
                      </div>
                    </div>
                    <div className="my-4 h-px bg-white/10" />
                    <p className="text-sm leading-7 text-slate-400">
                      استعرض الأسعار المسجلة وتفاصيل المنتجات عند توفر البيانات.
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      { name: "صنعاء", slug: "sanaa" },
                      { name: "تعز", slug: "taiz" },
                      { name: "عدن", slug: "aden" },
                    ].map((city) => (
                      <Link
                        key={city.slug}
                        href={`/city/${city.slug}`}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center transition-all duration-300 hover:border-sky-300/40 hover:bg-sky-300/10"
                      >
                        <MapPin className="mx-auto mb-2 size-4 text-sky-300" />
                        <span className="text-sm font-medium">{city.name}</span>
                      </Link>
                    ))}
                  </div>

                  <Button
                    nativeButton={false}
                    render={<Link href="/prices" />}
                    className="mt-4 w-full bg-sky-400 font-bold text-slate-950 hover:bg-sky-300"
                  >
                    عرض الأسعار <ArrowLeft />
                  </Button>
                </CardContent>
              </Card>

              <div
                data-float
                className="absolute top-[8%] right-0 z-20 rounded-2xl border border-emerald-300/20 bg-[#102b2a] p-4 shadow-xl shadow-emerald-950/20 sm:right-[-4%]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">بيانات الأسعار</p>
                    <p className="mt-1 text-xs text-emerald-200/70">تفاصيل وتحديثات متاحة</p>
                  </div>
                </div>
              </div>

              <div
                data-float
                className="absolute bottom-[8%] left-0 z-20 rounded-2xl border border-sky-300/20 bg-[#102337] p-4 shadow-xl shadow-sky-950/20 sm:left-[-4%]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                    <TrendingUp className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">مقارنة الأسعار</p>
                    <p className="mt-1 text-xs text-slate-400">حسب البيانات المتاحة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pinned Scroll Story */}
        <section
          data-scroll-story
          className="relative isolate flex min-h-[100svh] items-center overflow-hidden border-y bg-muted/30"
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="relative grid min-h-[65svh] items-center lg:grid-cols-2 lg:gap-16">
              {/* النص الثابت */}
              <div className="relative z-10 mb-8 lg:mb-0">
                <p className="text-sm font-semibold text-primary">كيف تستفيد من المنصة؟</p>

                <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  الوصول إلى السعر يبدأ بخطوة
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">
                  انتقل بين المشاهد واكتشف كيف تساعدك المنصة على الوصول إلى أسعار المنتجات ومقارنتها.
                </p>

                <div className="mt-7 hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
                  <span className="size-2 animate-pulse rounded-full bg-primary" />
                  مرّر للأسفل لمتابعة المشاهد
                </div>
              </div>

              {/* المشاهد المتحركة */}
              <div className="relative min-h-[350px] sm:min-h-[400px]">
                {highlights.map(({ number, title, description, icon: Icon }) => (
                  <article
                    data-scroll-panel
                    key={number}
                    className="absolute inset-0 flex flex-col justify-center rounded-3xl border bg-card p-6 shadow-xl shadow-black/5 sm:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold tracking-widest text-primary">{number} / 03</span>

                      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:size-16">
                        <Icon className="size-7 sm:size-8" />
                      </div>
                    </div>

                    <h3 className="mt-10 text-2xl font-black sm:text-3xl">{title}</h3>

                    <p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">{description}</p>

                    <div className="mt-10 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{
                          width: `${(Number(number) / highlights.length) * 100}%`,
                        }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p data-reveal className="text-sm font-semibold text-primary">
              المدن اليمنية
            </p>

            <h2 data-reveal className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              استعرض الأسعار حسب المدينة
            </h2>

            <p data-reveal className="mt-4 leading-8 text-muted-foreground">
              اختر المدينة للوصول إلى الأسعار المسجلة فيها ومراجعة بيانات المنتجات المتاحة.
            </p>
          </div>

          <div data-stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link key={city.slug} href={`/city/${city.slug}`} data-card className="group">
                <Card className="h-full py-0 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-accent">
                  <CardContent className="flex items-center justify-between gap-4 p-6">
                    <div>
                      <h3 className="text-lg font-bold">أسعار المنتجات في {city.name}</h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        استعرض الأسعار المتاحة في {city.name}.
                      </p>
                    </div>

                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border transition-colors group-hover:border-primary group-hover:text-primary">
                      <ArrowLeft className="size-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="border-y bg-muted/20">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p data-reveal className="text-sm font-semibold text-primary">
                تصنيفات المنتجات
              </p>

              <h2 data-reveal className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                ابحث حسب نوع المنتج
              </h2>

              <p data-reveal className="mt-4 leading-8 text-muted-foreground">
                انتقل إلى التصنيف المناسب للوصول إلى المنتجات والأسعار المسجلة.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  nativeButton={false}
                  render={<Link href={`/category/${category.slug}`} />}
                  variant="outline"
                  size="lg"
                  className="h-12"
                >
                  {category.name}
                  <ArrowLeft />
                </Button>
              ))}

              <Button
                nativeButton={false}
                render={<Link href="/prices" />}
                variant="secondary"
                size="lg"
                className="h-12"
              >
                جميع الأسعار
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="max-w-2xl">
            <p data-reveal className="text-sm font-semibold text-primary">
              تجربة الاستخدام
            </p>

            <h2 data-reveal className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              معلومات أوضح لاتخاذ قرار أفضل
            </h2>
          </div>

          <div data-stagger className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card data-card className="py-0">
              <CardContent className="p-6">
                <PackageSearch className="size-8 text-primary" />

                <h3 className="mt-5 text-xl font-bold">ابحث عن المنتج</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  الوصول إلى المنتجات والأسعار المتاحة بسهولة.
                </p>
              </CardContent>
            </Card>

            <Card data-card className="py-0">
              <CardContent className="p-6">
                <MapPin className="size-8 text-primary" />

                <h3 className="mt-5 text-xl font-bold">حدد المدينة</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  استعرض بيانات الأسعار وفق المدينة التي تريدها.
                </p>
              </CardContent>
            </Card>

            <Card data-card className="py-0">
              <CardContent className="p-6">
                <ShieldCheck className="size-8 text-primary" />

                <h3 className="mt-5 text-xl font-bold">راجع التفاصيل</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  راجع السعر وتاريخ التحديث والمعلومات المتاحة عن المنتج.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <Card data-reveal className="overflow-hidden border-0 bg-primary py-0 text-primary-foreground">
            <CardContent className="flex flex-col gap-7 p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-14">
              <div className="max-w-2xl">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15">
                  <ChartNoAxesCombined className="size-6" />
                </div>

                <h2 className="mt-5 text-2xl font-black sm:text-4xl">ابدأ باستعراض أسعار المنتجات</h2>

                <p className="mt-4 leading-8 text-primary-foreground/80">
                  اختر المنتج أو المدينة واطّلع على بيانات الأسعار المتاحة في منصة أسعار اليمن.
                </p>
              </div>

              <Button
                nativeButton={false}
                render={<Link href="/prices" />}
                size="lg"
                variant="secondary"
                className="h-12 shrink-0"
              >
                استعرض الأسعار
                <ArrowLeft />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}
