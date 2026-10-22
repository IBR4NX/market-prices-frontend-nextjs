"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Coins,
  TrendingUp,
  TrendingDown,
  Calculator,
  MapPin,
  Info,
  Clock,
  Sparkles,
  Scale,
  DollarSign,
} from "lucide-react";

// ==================== البيانات المحدثة من السوق اليمني ====================
const MARKET_DATA = {
  lastUpdate: "تحديث يومي مباشر - محلات الصاغة",
  globalOunceUSD: 4087.68,
  sanaa: {
    name: "صنعاء",
    currencyLabel: "ريال يمني (عملة قديمة)",
    exchangeNote: "الأسعار وفق تداولات محلات الصاغة في صنعاء (بدون مصنعية عند الشراء منك)",
    highlights: {
      karat21: { buy: 61500, sell: 66500, trend: "up" },
      karat24: { buy: 70285, sell: 76000, trend: "up" },
      karat18: { buy: 52715, sell: 57000, trend: "down" },
      goldPound: { buy: 503000, sell: 513000, trend: "up" },
    },
    table: [
      { unit: "جرام ذهب عيار 24", karat: "24K", buy: 70285, sell: 76000, usd: 131.44 },
      { unit: "جرام ذهب عيار 22", karat: "22K", buy: 64430, sell: 69650, usd: 120.4 },
      { unit: "جرام ذهب عيار 21 (الأكثر تداولاً)", karat: "21K", buy: 61500, sell: 66500, usd: 115.01, popular: true },
      { unit: "جرام ذهب عيار 18", karat: "18K", buy: 52715, sell: 57000, usd: 98.58 },
      { unit: "جرام ذهب عيار 14", karat: "14K", buy: 41000, sell: 44300, usd: 76.89 },
      { unit: "الجنيه الذهب (8 جرام - عيار 21)", karat: "21K", buy: 503000, sell: 513000, usd: 924.35, popular: true },
      { unit: "أونصة الذهب (31.1 جرام)", karat: "24K", buy: 2185000, sell: 2245000, usd: 4087.68 },
    ],
  },
  aden: {
    name: "عدن",
    currencyLabel: "ريال يمني (عملة جديدة)",
    exchangeNote: "الأسعار وفق تداولات محلات الصاغة في عدن والمحافظات الجنوبية",
    highlights: {
      karat21: { buy: 180000, sell: 199000, trend: "up" },
      karat24: { buy: 205700, sell: 227400, trend: "up" },
      karat18: { buy: 154285, sell: 170570, trend: "down" },
      goldPound: { buy: 1467270, sell: 1500150, trend: "up" },
    },
    table: [
      { unit: "جرام ذهب عيار 24", karat: "24K", buy: 205700, sell: 227400, usd: 131.44 },
      { unit: "جرام ذهب عيار 22", karat: "22K", buy: 188550, sell: 208450, usd: 120.4 },
      {
        unit: "جرام ذهب عيار 21 (الأكثر تداولاً)",
        karat: "21K",
        buy: 180000,
        sell: 199000,
        usd: 115.01,
        popular: true,
      },
      { unit: "جرام ذهب عيار 18", karat: "18K", buy: 154285, sell: 170570, usd: 98.58 },
      { unit: "جرام ذهب عيار 14", karat: "14K", buy: 120000, sell: 132600, usd: 76.89 },
      {
        unit: "الجنيه الذهب (8 جرام - عيار 21)",
        karat: "21K",
        buy: 1467270,
        sell: 1500150,
        usd: 924.35,
        popular: true,
      },
      { unit: "أونصة الذهب (31.1 جرام)", karat: "24K", buy: 6397000, sell: 6650000, usd: 4087.68 },
    ],
  },
  bullion: [
    { name: "سبيكة ذهب 1 جرام", weight: "1 جرام", usd: 131.44, sanaa: 73500, aden: 215000 },
    { name: "سبيكة ذهب 5 جرام", weight: "5 جرام", usd: 657.2, sanaa: 365000, aden: 1065000 },
    { name: "سبيكة ذهب 10 جرام", weight: "10 جرام", usd: 1314.4, sanaa: 728000, aden: 2120000 },
    { name: "سبيكة ذهب 20 جرام", weight: "20 جرام", usd: 2628.8, sanaa: 1450000, aden: 4230000 },
    { name: "سبيكة أونصة واحدة", weight: "31.1 جرام", usd: 4087.68, sanaa: 2245000, aden: 6650000 },
    { name: "سبيكة ذهب 50 جرام", weight: "50 جرام", usd: 6572.0, sanaa: 3615000, aden: 10550000 },
    { name: "سبيكة ذهب 100 جرام", weight: "100 جرام", usd: 13144.0, sanaa: 7210000, aden: 21050000 },
    { name: "سبيكة ذهب 1 كيلو", weight: "1000 جرام", usd: 131440.0, sanaa: 71900000, aden: 209800000 },
  ],
};

const formatNumber = (num: number) => new Intl.NumberFormat("ar-YE").format(Math.round(num));
const formatUSD = (num: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);

export default function GoldPricesClient() {
  const [region, setRegion] = useState<"sanaa" | "aden">("sanaa");

  // حالات الحاسبة
  const [calcRegion, setCalcRegion] = useState<"sanaa" | "aden">("sanaa");
  const [calcKarat, setCalcKarat] = useState<string>("21");
  const [calcWeight, setCalcWeight] = useState<string>("10");
  const [calcWorkmanship, setCalcWorkmanship] = useState<string>("3000"); // مصنعية الجرام الواحد
  const [calcType, setCalcType] = useState<"buy_from_shop" | "sell_to_shop">("buy_from_shop");

  const currentData = MARKET_DATA[region];

  // حساب تكلفة الذهب في الحاسبة
  const calculationResult = useMemo(() => {
    const targetMarket = MARKET_DATA[calcRegion];
    const weight = parseFloat(calcWeight) || 0;
    const workmanship = parseFloat(calcWorkmanship) || 0;

    const karatRow = targetMarket.table.find((r) => r.karat === `${calcKarat}K`);
    if (!karatRow) return { basePrice: 0, totalWorkmanship: 0, finalTotal: 0 };

    // إذا كان المستخدم يشتري من المحل نأخذ سعر (البيع للمستهلك)، وإذا كان يبيع للمحل نأخذ سعر (الشراء من المستهلك)
    const gramPrice = calcType === "buy_from_shop" ? karatRow.sell : karatRow.buy;
    const basePrice = gramPrice * weight;
    const totalWorkmanship = calcType === "buy_from_shop" ? workmanship * weight : 0;
    const finalTotal = basePrice + totalWorkmanship;

    return {
      gramPrice,
      basePrice,
      totalWorkmanship,
      finalTotal,
    };
  }, [calcRegion, calcKarat, calcWeight, calcWorkmanship, calcType]);

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* ==================== الترويسة (Header) ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-amber-500/10 text-amber-600 border-amber-500/30 px-3 py-1 text-xs font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 ml-1 inline-block" />
                تحديث حي ومباشر
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {MARKET_DATA.lastUpdate}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">أسعار الذهب في اليمن اليوم</h1>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
              دليلك الشامل لأسعار بيع وشراء الذهب في محلات الصاغة اليمنية في كلٍ من{" "}
              <span className="font-semibold text-foreground">صنعاء</span> و{" "}
              <span className="font-semibold text-foreground">عدن</span>، بالإضافة إلى أسعار السبائك والأونصة عالمياً.
            </p>
          </div>

          {/* السعر العالمي للأونصة */}
          <Card className="w-full md:w-auto bg-gradient-to-br from-amber-500/10 via-background to-background border-amber-500/30">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">سعر الأونصة عالمياً</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight">{formatUSD(MARKET_DATA.globalOunceUSD)}</span>
                  <Badge variant="secondary" className="text-xs text-emerald-600 bg-emerald-500/10">
                    عيار 24K
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ==================== تبويب اختيار المدينة (صنعاء / عدن) ==================== */}
        <Tabs
          defaultValue="sanaa"
          value={region}
          onValueChange={(val) => {
            setRegion(val as "sanaa" | "aden");
            setCalcRegion(val as "sanaa" | "aden");
          }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/40 p-4 rounded-xl border">
            <div className="space-y-1">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                اختر السوق المحلي لعرض الأسعار:
              </h2>
              <p className="text-xs text-muted-foreground">
                نظراً لاختلاف الطبعة النقدية بين المحافظات، يرجى تحديد السوق المطلوب.
              </p>
            </div>

            <TabsList className="grid grid-cols-2 w-full sm:w-[340px] h-11">
              <TabsTrigger value="sanaa" className="text-sm font-bold">
                صنعاء (عملة قديمة)
              </TabsTrigger>
              <TabsTrigger value="aden" className="text-sm font-bold">
                عدن (عملة جديدة)
              </TabsTrigger>
            </TabsList>
          </div>

          {/* محتوى السوق (يتغير ديناميكياً حسب التبويب) */}
          <TabsContent value={region} className="space-y-8 mt-0">
            {/* البطاقات البارزة (Top Highlights) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* عيار 21 */}
              <HighlightCard
                title="ذهب عيار 21"
                subtitle="الأكثر طلباً في اليمن"
                buy={currentData.highlights.karat21.buy}
                sell={currentData.highlights.karat21.sell}
                currency={currentData.currencyLabel}
                trend="up"
                featured
              />
              {/* الجنيه الذهب */}
              <HighlightCard
                title="الجنيه الذهب"
                subtitle="وزن 8 جرام - عيار 21"
                buy={currentData.highlights.goldPound.buy}
                sell={currentData.highlights.goldPound.sell}
                currency={currentData.currencyLabel}
                trend="up"
              />
              {/* عيار 24 */}
              <HighlightCard
                title="ذهب عيار 24"
                subtitle="الذهب الخالص (السبائك)"
                buy={currentData.highlights.karat24.buy}
                sell={currentData.highlights.karat24.sell}
                currency={currentData.currencyLabel}
                trend="up"
              />
              {/* عيار 18 */}
              <HighlightCard
                title="ذهب عيار 18"
                subtitle="المجوهرات والمشغولات"
                buy={currentData.highlights.karat18.buy}
                sell={currentData.highlights.karat18.sell}
                currency={currentData.currencyLabel}
                trend="down"
              />
            </div>

            {/* القسم الرئيسي: الجدول التفصيلي + الحاسبة */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* جدول الأسعار التفصيلي (يأخذ ثلثين على الشاشات الكبيرة) */}
              <Card className="lg:col-span-2 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Coins className="w-5 h-5 text-amber-500" />
                        جدول أسعار الذهب في {currentData.name} اليوم
                      </CardTitle>
                      <CardDescription className="mt-1">{currentData.exchangeNote}</CardDescription>
                    </div>
                    <Badge variant="secondary">{currentData.currencyLabel}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border overflow-x-auto">
                    <Table dir="rtl">
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead className="text-right font-bold">العيار / الوحدة</TableHead>
                          <TableHead className="text-right font-bold text-emerald-600 dark:text-emerald-400">
                            سعر الشراء (منك)
                          </TableHead>
                          <TableHead className="text-right font-bold text-amber-600 dark:text-amber-400">
                            سعر البيع (لك)
                          </TableHead>
                          <TableHead className="text-right font-bold">السعر العالمي ($)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentData.table.map((row, idx) => (
                          <TableRow key={idx} className={row.popular ? "bg-amber-500/5 font-medium" : ""}>
                            <TableCell className="py-3.5">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={row.popular ? "default" : "outline"}
                                  className={row.popular ? "bg-amber-500 hover:bg-amber-600 text-white" : ""}
                                >
                                  {row.karat}
                                </Badge>
                                <span>{row.unit}</span>
                              </div>
                            </TableCell>
                            <TableCell className="font-semibold text-emerald-600 dark:text-emerald-400">
                              {formatNumber(row.buy)} ريال
                            </TableCell>
                            <TableCell className="font-semibold text-amber-600 dark:text-amber-400">
                              {formatNumber(row.sell)} ريال
                            </TableCell>
                            <TableCell className="text-muted-foreground font-mono text-sm">
                              {formatUSD(row.usd)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/20 border-t px-6 py-4 text-xs text-muted-foreground flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>
                    ملاحظة: أسعار البيع أعلاه تشمل متوسط مصنعية تقليدي، وقد تزيد أو تنقص قليلاً من محل صاغة لآخر حسب نوع
                    المشغولات (خليجي، تركي، أو محلي).
                  </span>
                </CardFooter>
              </Card>

              {/* حاسبة الذهب والمصنعية التفاعلية */}
              <Card className="shadow-sm border-amber-500/20">
                <CardHeader className="bg-gradient-to-b from-amber-500/10 to-transparent pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-500" />
                    حاسبة الذهب والمصنعية
                  </CardTitle>
                  <CardDescription>احسب التكلفة الفعلية لشراء أو بيع ذهبك بدقة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  {/* نوع العملية */}
                  <div className="space-y-2">
                    <Label>نوع العملية</Label>
                    <Select value={calcType} onValueChange={(v) => setCalcType(v as "buy_from_shop" | "sell_to_shop")}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر العملية" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        <SelectItem value="buy_from_shop">أريد شراء ذهب من المحل</SelectItem>
                        <SelectItem value="sell_to_shop">أريد بيع ذهب مستعمل للمحل</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* المدينة */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>المدينة</Label>
                      <Select value={calcRegion} onValueChange={(v) => setCalcRegion(v as "sanaa" | "aden")}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                          <SelectItem value="sanaa">صنعاء</SelectItem>
                          <SelectItem value="aden">عدن</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* العيار */}
                    <div className="space-y-2">
                      <Label>العيار</Label>
                      <Select value={calcKarat} onValueChange={(value) => (value ? setCalcKarat(value) : "")}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent dir="rtl">
                          <SelectItem value="24">عيار 24</SelectItem>
                          <SelectItem value="22">عيار 22</SelectItem>
                          <SelectItem value="21">عيار 21</SelectItem>
                          <SelectItem value="18">عيار 18</SelectItem>
                          <SelectItem value="14">عيار 14</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* الوزن بالجرام */}
                  <div className="space-y-2">
                    <Label htmlFor="weight">الوزن (بالجرام)</Label>
                    <Input
                      id="weight"
                      type="number"
                      min="0.1"
                      step="0.5"
                      value={calcWeight}
                      onChange={(e) => setCalcWeight(e.target.value)}
                      placeholder="مثال: 10"
                    />
                  </div>

                  {/* المصنعية الإضافية (تظهر فقط عند الشراء) */}
                  {calcType === "buy_from_shop" && (
                    <div className="space-y-2">
                      <Label htmlFor="workmanship" className="flex justify-between">
                        <span>مصنعية إضافية للجرام (اختياري)</span>
                        <span className="text-xs text-muted-foreground">بالريال</span>
                      </Label>
                      <Input
                        id="workmanship"
                        type="number"
                        min="0"
                        step="500"
                        value={calcWorkmanship}
                        onChange={(e) => setCalcWorkmanship(e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  )}

                  <Separator className="my-4" />

                  {/* نتيجة الحساب */}
                  <div className="rounded-lg bg-muted p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">سعر الجرام المعتمد:</span>
                      <span className="font-semibold">{formatNumber(calculationResult.gramPrice || 0)} ريال</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">قيمة الذهب الصافي:</span>
                      <span className="font-semibold">{formatNumber(calculationResult.basePrice)} ريال</span>
                    </div>
                    {calcType === "buy_from_shop" && calculationResult.totalWorkmanship > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">إجمالي المصنعية المضافة:</span>
                        <span className="font-semibold text-amber-600">
                          + {formatNumber(calculationResult.totalWorkmanship)} ريال
                        </span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-bold text-base">الإجمالي التقريبي:</span>
                      <div className="text-left">
                        <span className="text-xl font-extrabold text-amber-600 dark:text-amber-400">
                          {formatNumber(calculationResult.finalTotal)}
                        </span>
                        <span className="text-xs text-muted-foreground mr-1">ريال</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* ==================== جدول أسعار السبائك الذهبية ==================== */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-500" />
              أسعار سبائك الذهب في اليمن (عيار 24 نقاء 999.9)
            </CardTitle>
            <CardDescription>مقارنة لأسعار السبائك الاستثمارية في صنعاء وعدن وبالدولار الأمريكي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-auto">
              <Table dir="rtl">
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="text-right font-bold">نوع السبيكة</TableHead>
                    <TableHead className="text-right font-bold">الوزن</TableHead>
                    <TableHead className="text-right font-bold">السعر في صنعاء (قديم)</TableHead>
                    <TableHead className="text-right font-bold">السعر في عدن (جديد)</TableHead>
                    <TableHead className="text-right font-bold">السعر بالدولار ($)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MARKET_DATA.bullion.map((b, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium py-3">{b.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{b.weight}</Badge>
                      </TableCell>
                      <TableCell className="font-semibold">{formatNumber(b.sanaa)} ريال</TableCell>
                      <TableCell className="font-semibold">{formatNumber(b.aden)} ريال</TableCell>
                      <TableCell className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {formatUSD(b.usd)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* ==================== تنبيه ومعلومات مهمة للمستهلك ==================== */}
        <Alert className="bg-amber-500/5 border-amber-500/30">
          <Info className="h-5 w-5 text-amber-600" />
          <AlertTitle className="font-bold text-amber-700 dark:text-amber-400 mb-1">
            لماذا تختلف أسعار الذهب في المواقع العالمية عن محلات الصاغة في اليمن؟
          </AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground leading-relaxed">
            كثير من المواقع الأجنبية تحسب سعر الذهب في اليمن بناءً على السعر الرسمي المعلن للبنك المركزي (حوالي 236 ريال
            للدولار)، مما يُظهر سعر جرام عيار 21 بحوالي 27,150 ريال فقط. بينما في الواقع العملي داخل محلات الصاغة
            اليمنية، يتم تسعير الذهب وفقاً لسعر الصرف الفعلي في السوق الموازي (حوالي{" "}
            <strong>61,500 ريال في صنعاء</strong> و <strong>180,000 ريال في عدن</strong> للجرام عيار 21). لذلك نحن نعرض
            لك الأسعار الحقيقية المتداولة فعلياً في السوق.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

// ==================== مكون البطاقة البارزة (Highlight Card) ====================
interface HighlightCardProps {
  title: string;
  subtitle: string;
  buy: number;
  sell: number;
  currency: string;
  trend: "up" | "down";
  featured?: boolean;
}

function HighlightCard({ title, subtitle, buy, sell, currency, trend, featured = false }: HighlightCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all ${
        featured
          ? "border-amber-500/50 shadow-md bg-gradient-to-b from-amber-500/5 to-transparent"
          : "hover:border-foreground/20"
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-br-md">
          الأكثر مبيعاً
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
            <CardDescription className="text-xs">{subtitle}</CardDescription>
          </div>
          <div
            className={`p-2 rounded-lg ${
              trend === "up" ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
            }`}
          >
            {trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-2 gap-2 pt-2 border-t">
          <div>
            <span className="text-[11px] text-muted-foreground block">شراء (منك)</span>
            <span className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
              {formatNumber(buy)}
            </span>
          </div>
          <div className="border-r pr-3">
            <span className="text-[11px] text-muted-foreground block">بيع (لك)</span>
            <span className="text-base sm:text-lg font-extrabold text-amber-600 dark:text-amber-400">
              {formatNumber(sell)}
            </span>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-3 text-left">{currency}</p>
      </CardContent>
    </Card>
  );
}
