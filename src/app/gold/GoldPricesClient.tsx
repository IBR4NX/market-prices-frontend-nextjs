"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Coins, TrendingUp, Calculator, MapPin, Info, Sparkles, Scale, DollarSign, ArrowUpDown } from "lucide-react";

// ==================== البيانات المحدثة ====================
const MARKET_DATA = {
  lastUpdate: "مباشر من الصاغة",
  globalOunceUSD: 4087.68,
  sanaa: {
    name: "صنعاء",
    currencyLabel: "ريال (عملة قديمة)",
    shortCurrency: "ر.ي",
    heroKarat21: { buy: 61500, sell: 66500 },
    goldPound: { buy: 503000, sell: 513000 },
    items: [
      {
        title: "ذهب عيار 21",
        subtitle: "الأكثر تداولاً",
        karat: "21K",
        buy: 61500,
        sell: 66500,
        usd: 115.01,
        popular: true,
      },
      {
        title: "الجنيه الذهب",
        subtitle: "وزن 8 جرام (21K)",
        karat: "جنيه",
        buy: 503000,
        sell: 513000,
        usd: 924.35,
        popular: true,
      },
      { title: "ذهب عيار 24", subtitle: "ذهب خالص (سبائك)", karat: "24K", buy: 70285, sell: 76000, usd: 131.44 },
      { title: "ذهب عيار 22", subtitle: "مشغولات خليجية", karat: "22K", buy: 64430, sell: 69650, usd: 120.4 },
      { title: "ذهب عيار 18", subtitle: "مجوهرات وإيطالي", karat: "18K", buy: 52715, sell: 57000, usd: 98.58 },
      { title: "ذهب عيار 14", subtitle: "الدرجة الاقتصادية", karat: "14K", buy: 41000, sell: 44300, usd: 76.89 },
      { title: "أونصة الذهب", subtitle: "31.1 جرام (24K)", karat: "أونصة", buy: 2185000, sell: 2245000, usd: 4087.68 },
    ],
  },
  aden: {
    name: "عدن",
    currencyLabel: "ريال (عملة جديدة)",
    shortCurrency: "ر.ي",
    heroKarat21: { buy: 180000, sell: 199000 },
    goldPound: { buy: 1467270, sell: 1500150 },
    items: [
      {
        title: "ذهب عيار 21",
        subtitle: "الأكثر تداولاً",
        karat: "21K",
        buy: 180000,
        sell: 199000,
        usd: 115.01,
        popular: true,
      },
      {
        title: "الجنيه الذهب",
        subtitle: "وزن 8 جرام (21K)",
        karat: "جنيه",
        buy: 1467270,
        sell: 1500150,
        usd: 924.35,
        popular: true,
      },
      { title: "ذهب عيار 24", subtitle: "ذهب خالص (سبائك)", karat: "24K", buy: 205700, sell: 227400, usd: 131.44 },
      { title: "ذهب عيار 22", subtitle: "مشغولات خليجية", karat: "22K", buy: 188550, sell: 208450, usd: 120.4 },
      { title: "ذهب عيار 18", subtitle: "مجوهرات وإيطالي", karat: "18K", buy: 154285, sell: 170570, usd: 98.58 },
      { title: "ذهب عيار 14", subtitle: "الدرجة الاقتصادية", karat: "14K", buy: 120000, sell: 132600, usd: 76.89 },
      { title: "أونصة الذهب", subtitle: "31.1 جرام (24K)", karat: "أونصة", buy: 6397000, sell: 6650000, usd: 4087.68 },
    ],
  },
  bullion: [
    { name: "سبيكة 1 جرام", weight: "1g", usd: 131.44, sanaa: 73500, aden: 215000 },
    { name: "سبيكة 5 جرام", weight: "5g", usd: 657.2, sanaa: 365000, aden: 1065000 },
    { name: "سبيكة 10 جرام", weight: "10g", usd: 1314.4, sanaa: 728000, aden: 2120000 },
    { name: "سبيكة 20 جرام", weight: "20g", usd: 2628.8, sanaa: 1450000, aden: 4230000 },
    { name: "سبيكة أونصة", weight: "31.1g", usd: 4087.68, sanaa: 2245000, aden: 6650000 },
    { name: "سبيكة 50 جرام", weight: "50g", usd: 6572.0, sanaa: 3615000, aden: 10550000 },
    { name: "سبيكة 100 جرام", weight: "100g", usd: 13144.0, sanaa: 7210000, aden: 21050000 },
  ],
};

const formatNum = (num: number) => new Intl.NumberFormat("ar").format(Math.round(num));
const formatUSD = (num: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);
interface GoldPricesClientProps {
  initialCity?: "sanaa" | "aden";
}
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function GoldPricesClient({ initialCity = "sanaa" }: GoldPricesClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [region, setRegion] = useState<"sanaa" | "aden">(initialCity);
  const [sectionTab, setSectionTab] = useState<"karats" | "bullion">("karats");

  // حالات الحاسبة
  const [calcKarat, setCalcKarat] = useState<string>("21K");
  const [calcWeight, setCalcWeight] = useState<string>("10");
  const [calcWorkmanship, setCalcWorkmanship] = useState<string>("0");
  const [calcType, setCalcType] = useState<"buy_from_shop" | "sell_to_shop">("buy_from_shop");

  const currentData = MARKET_DATA[region];

  // حساب تكلفة الذهب في الحاسبة
  const calculationResult = useMemo(() => {
    const weight = parseFloat(calcWeight) || 0;
    const workmanship = parseFloat(calcWorkmanship) || 0;

    const karatRow = currentData.items.find((r) => r.karat === calcKarat);
    if (!karatRow) return { gramPrice: 0, basePrice: 0, totalWorkmanship: 0, finalTotal: 0 };

    const gramPrice = calcType === "buy_from_shop" ? karatRow.sell : karatRow.buy;
    const basePrice = gramPrice * weight;
    const totalWorkmanship = calcType === "buy_from_shop" ? workmanship * weight : 0;
    const finalTotal = basePrice + totalWorkmanship;

    return { gramPrice, basePrice, totalWorkmanship, finalTotal };
  }, [currentData, calcKarat, calcWeight, calcWorkmanship, calcType]);

  return (
    <div dir="rtl" className="min-h-screen bg-muted/30 pb-24">
      {/* حاوية بحجم شاشة الجوال لتجربة تطبيق أصلي */}
      <div className="max-w-md mx-auto bg-background min-h-screen shadow-sm border-x flex flex-col">
        {/* ==================== 1. شريط علوي مثبت (Sticky App Bar) ==================== */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b px-4 pt-3 pb-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-600">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-base font-extrabold leading-none">أسعار الذهب باليمن</h1>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {MARKET_DATA.lastUpdate}
                </span>
              </div>
            </div>

            {/* السعر العالمي مصغر */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-2.5 py-1 text-left">
              <span className="text-[10px] text-muted-foreground block leading-none">الأونصة عالمياً</span>
              <span className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400">
                {formatUSD(MARKET_DATA.globalOunceUSD)}
              </span>
            </div>
          </div>

          {/* أزرار التبديل السريع بين صنعاء وعدن */}
          <div className="grid grid-cols-2 gap-1.5 bg-muted p-1 rounded-xl">
            <button
              onClick={() => setRegion("sanaa")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                region === "sanaa"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${region === "sanaa" ? "text-amber-500" : ""}`} />
              صنعاء (قديمة)
            </button>
            <button
              onClick={() => setRegion("aden")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                region === "aden"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${region === "aden" ? "text-amber-500" : ""}`} />
              عدن (جديدة)
            </button>
          </div>
        </header>

        {/* ==================== 2. المحتوى الرئيسي للجوال ==================== */}
        <main className="p-4 space-y-5 flex-1">
          {/* بطاقة السعر الأهم (Hero Card - عيار 21 والجنيه) */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 text-white p-4 shadow-md space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-yellow-200" />
                <span className="text-xs font-medium text-amber-100">سعر جرام عيار 21 في {currentData.name}</span>
              </div>
              <Badge className="bg-black/20 hover:bg-black/30 text-white border-0 text-[10px]">
                {currentData.currencyLabel}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-black/15 rounded-xl p-3 backdrop-blur-xs">
              <div>
                <span className="text-[11px] text-amber-100 block">شراء منك (بدون مصنعية)</span>
                <div className="text-xl font-black mt-0.5 tracking-tight">
                  {formatNum(currentData.heroKarat21.buy)}
                  <span className="text-[10px] font-normal mr-1">{currentData.shortCurrency}</span>
                </div>
              </div>
              <div className="border-r border-white/20 pr-3">
                <span className="text-[11px] text-amber-100 block">بيع لك (بالمصنعية)</span>
                <div className="text-xl font-black mt-0.5 tracking-tight">
                  {formatNum(currentData.heroKarat21.sell)}
                  <span className="text-[10px] font-normal mr-1">{currentData.shortCurrency}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-white/15 text-amber-50">
              <span>سعر الجنيه الذهب (8 جرام):</span>
              <span className="font-bold">
                {formatNum(currentData.goldPound.buy)} - {formatNum(currentData.goldPound.sell)}{" "}
                {currentData.shortCurrency}
              </span>
            </div>
          </div>

          {/* تبويب التبديل بين (العيارات) و (السبائك) */}
          <Tabs value={sectionTab} onValueChange={(v) => setSectionTab(v as "karats" | "bullion")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-10 mb-3">
              <TabsTrigger value="karats" className="text-xs font-bold gap-1.5">
                <Coins className="w-3.5 h-3.5" />
                أسعار العيارات
              </TabsTrigger>
              <TabsTrigger value="bullion" className="text-xs font-bold gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                أسعار السبائك
              </TabsTrigger>
            </TabsList>

            {/* قائمة بطاقات العيارات (بديل الجداول للجوال) */}
            <TabsContent value="karats" className="space-y-2.5 mt-0">
              {currentData.items.map((item, idx) => (
                <Card
                  key={idx}
                  className={`overflow-hidden transition-all ${
                    item.popular ? "border-amber-500/40 bg-amber-500/5" : ""
                  }`}
                >
                  <CardContent className="p-3.5">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                            item.popular ? "bg-amber-500 text-white shadow-xs" : "bg-muted text-foreground"
                          }`}
                        >
                          {item.karat}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm leading-tight">{item.title}</h3>
                          <p className="text-[11px] text-muted-foreground mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="font-mono text-[11px] bg-background">
                        {formatUSD(item.usd)}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-muted/60 rounded-lg p-2.5 text-center">
                      <div className="bg-background rounded-md py-1.5 px-2 shadow-2xs">
                        <span className="text-[10px] text-muted-foreground block">شراء (منك)</span>
                        <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                          {formatNum(item.buy)}
                        </span>
                        <span className="text-[9px] text-muted-foreground mr-0.5">{currentData.shortCurrency}</span>
                      </div>

                      <div className="bg-background rounded-md py-1.5 px-2 shadow-2xs">
                        <span className="text-[10px] text-muted-foreground block">بيع (لك)</span>
                        <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400">
                          {formatNum(item.sell)}
                        </span>
                        <span className="text-[9px] text-muted-foreground mr-0.5">{currentData.shortCurrency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* قائمة بطاقات السبائك عيار 24 */}
            <TabsContent value="bullion" className="space-y-2.5 mt-0">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-800 dark:text-amber-300 mb-3">
                السبائك جميعها من الذهب الخالص <strong>عيار 24 (نقاء 999.9)</strong>، وتُعرض هنا بأسعار{" "}
                <strong className="underline">{currentData.name}</strong>.
              </div>

              {MARKET_DATA.bullion.map((b, idx) => {
                const localPrice = region === "sanaa" ? b.sanaa : b.aden;
                return (
                  <Card key={idx}>
                    <CardContent className="p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex flex-col items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                          <span className="text-[11px] font-black font-mono leading-none">{b.weight}</span>
                          <span className="text-[8px] mt-0.5">24K</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-sm">{b.name}</h3>
                          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                            {formatUSD(b.usd)}
                          </span>
                        </div>
                      </div>

                      <div className="text-left">
                        <span className="text-[10px] text-muted-foreground block">السعر في {currentData.name}</span>
                        <span className="text-base font-extrabold text-foreground">{formatNum(localPrice)}</span>
                        <span className="text-[10px] text-muted-foreground mr-1">{currentData.shortCurrency}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>

          {/* ملاحظة توضيحية مختصرة للجوال */}
          <div className="rounded-xl bg-muted p-3.5 text-xs text-muted-foreground space-y-1.5 leading-relaxed border">
            <div className="font-bold text-foreground flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-500 shrink-0" />
              تنويه للمستهلك في اليمن:
            </div>
            <p>
              هذه الأسعار حقيقية من محلات الصاغة في {currentData.name} وليست أسعار البنك المركزي الرسمية الوهمية. قد
              تختلف قيمة المصنعية عند الشراء من محل لآخر حسب نوع المشغولات.
            </p>
          </div>
        </main>

        {/* ==================== 3. الشريط السفلي العائم + نافذة الحاسبة (Bottom Sheet) ==================== */}
        <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
          <div className="max-w-md mx-auto p-4 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-auto">
            <Sheet>
              <SheetTrigger
                render={
                  <Button className="w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg flex items-center justify-between px-5">
                    <span className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      حاسبة الذهب والمصنعية ({currentData.name})
                    </span>
                    <span className="text-xs bg-black/20 px-2.5 py-1 rounded-md">احسب الآن</span>
                  </Button>
                }
              />

              <SheetContent side="top" dir="rtl" className="rounded-t-2xl max-w-md mx-auto my-auto px-5 pb-8 pt-6">
                <SheetHeader className="text-right pb-4 border-b">
                  <SheetTitle className="flex items-center gap-2 text-lg">
                    <Calculator className="w-5 h-5 text-amber-500" />
                    حاسبة الذهب في {currentData.name}
                  </SheetTitle>
                  <SheetDescription className="text-xs">
                    احسب قيمة الذهب الصافي أو مع المصنعية حسب أسعار {currentData.name} ({currentData.currencyLabel})
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-4 pt-4">
                  {/* أزرار سريعة لنوع العملية */}
                  <div className="grid grid-cols-2 gap-2 bg-muted p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setCalcType("buy_from_shop")}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        calcType === "buy_from_shop" ? "bg-amber-500 text-white shadow-xs" : "text-muted-foreground"
                      }`}
                    >
                      شراء ذهب من المحل
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcType("sell_to_shop")}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        calcType === "sell_to_shop" ? "bg-emerald-600 text-white shadow-xs" : "text-muted-foreground"
                      }`}
                    >
                      بيع ذهب للمحل
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">العيار</Label>
                      <Select value={calcKarat} onValueChange={(value) => (value ? setCalcKarat(value) : "")}>
                        <SelectTrigger className="h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                          <SelectItem value="24K">عيار 24</SelectItem>
                          <SelectItem value="22K">عيار 22</SelectItem>
                          <SelectItem value="21K">عيار 21 (الأشهر)</SelectItem>
                          <SelectItem value="18K">عيار 18</SelectItem>
                          <SelectItem value="14K">عيار 14</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs">الوزن (بالجرام)</Label>
                      <Input
                        type="number"
                        inputMode="decimal"
                        className="h-11 font-bold text-base"
                        value={calcWeight}
                        onChange={(e) => setCalcWeight(e.target.value)}
                        placeholder="10"
                      />
                    </div>
                  </div>

                  {calcType === "buy_from_shop" && (
                    <div className="space-y-1.5">
                      <Label className="text-xs flex justify-between">
                        <span>مصنعية الجرام الإضافية (اختياري)</span>
                        <span className="text-muted-foreground">{currentData.shortCurrency}</span>
                      </Label>
                      <Input
                        type="number"
                        inputMode="numeric"
                        className="h-11"
                        value={calcWorkmanship}
                        onChange={(e) => setCalcWorkmanship(e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  )}

                  {/* ملخص النتيجة النهائية */}
                  <div className="rounded-xl bg-muted/80 p-4 space-y-2.5 border">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">سعر الجرام المحسوب:</span>
                      <span className="font-bold">{formatNum(calculationResult.gramPrice)} ريال</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">قيمة الذهب الصافي:</span>
                      <span className="font-bold">{formatNum(calculationResult.basePrice)} ريال</span>
                    </div>
                    {calcType === "buy_from_shop" && calculationResult.totalWorkmanship > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">إجمالي المصنعية:</span>
                        <span className="font-bold text-amber-600">
                          + {formatNum(calculationResult.totalWorkmanship)} ريال
                        </span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="text-sm font-bold">المبلغ الإجمالي:</span>
                      <div>
                        <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                          {formatNum(calculationResult.finalTotal)}
                        </span>
                        <span className="text-xs text-muted-foreground mr-1">ريال</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
