import { createSeo } from "@/lib/seo";
import {
  Mail,
  MessageSquare,
  Send,
  Clock,
  ContactRound,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata = createSeo({
  canonicalPath: "/contact",
  title: "اتصل بنا",
  description:
    "تواصل معنا للاستفسارات والاقتراحات والإبلاغ عن الأخطاء أو الأسعار غير الدقيقة. نرحب بملاحظاتك للمساعدة في تحسين تجربة استخدام المنصة ودقة معلومات الأسعار.",
});
const contacts = [
  { type: "البريد الإلكتروني", value: "ibr4nx@gmail.com", note: "الرد خلال 48 ساعة عادةً." },
  { type: "الهاتف", value: "+967 738 386 364", note: "ساعات الدعم: الأحد–الخميس 9:00–17:00 بتوقيت GMT+3." },
];
export default function Contact() {
  console.log(metadata)
  return (
    <main
      dir="rtl"
      className="container mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16"
    >
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MessageSquare className="size-7" />
        </div>

        <Badge variant="secondary" className="mb-4">
          نحن هنا للمساعدة
        </Badge>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          تواصل معنا
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          لديك استفسار أو اقتراح؟ لاحظت سعرًا غير دقيق أو معلومة تحتاج إلى
          تصحيح؟ يسعدنا استقبال رسالتك للمساعدة في تحسين أسعار اليمن.
        </p>
      </header>

      {/* Contact content */}
      <div className="grid items-start gap-6 md:grid-cols-2">
        {/* Contact information */}
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ContactRound className="size-5" />
            </div>

            <CardTitle className="text-xl">
              معلومات التواصل
            </CardTitle>

            <CardDescription className="leading-7">
              يمكنك التواصل معنا مباشرة عبر البريد الإلكتروني.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <a
              href="mailto:ibr4nx@gmail.com"
              dir="ltr"
              className="flex items-center gap-3 rounded-xl border bg-muted/30 p-4 transition-colors hover:border-primary/40 hover:bg-muted/60"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="size-5" />
              </div>

              <div className="min-w-0 flex-1 text-right">
                <p className="mb-1 text-sm text-muted-foreground">
                  البريد الإلكتروني
                </p>

                <p className="break-all font-medium text-foreground">
                  ibr4nx@gmail.com
                </p>
              </div>
            </a>

            <Separator className="my-6" />

            <div className="flex items-start gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-muted-foreground" />

              <div>
                <h2 className="mb-1 font-medium">وقت الرد</h2>

                <p className="text-sm leading-7 text-muted-foreground">
                  نحاول الرد على جميع الرسائل في أقرب وقت ممكن.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact form */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Send className="size-5" />
            </div>

            <CardTitle className="text-xl">
              أرسل لنا رسالة
            </CardTitle>

            <CardDescription className="leading-7">
              املأ الحقول التالية وسنطّلع على رسالتك.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              name="contact"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>

                <Input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>

                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  placeholder="example@email.com"
                  className="text-left"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>

                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  className="min-h-32 resize-y"
                />
              </div>

              <Button type="submit" className="w-full">
                إرسال الرسالة
                <Send className="mr-2 size-4" />
              </Button>

              <p className="text-center text-xs leading-6 text-muted-foreground">
                يرجى التأكد من صحة بيانات التواصل قبل إرسال الرسالة.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

