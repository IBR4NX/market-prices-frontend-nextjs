import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/contact",
  description: "تواصل مع فريق Markets Yemen.",
  title: "تواصل معنا",
});


export default function Contact() {
  return (
    <main className="max-w-3xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">تواصل معنا</h1>
      <p className="mb-8 leading-relaxed">إذا كانت لديك ملاحظة بخصوص منتج أو مدينة أو تصنيف في أسعار اليمن، يمكنك التواصل معنا عبر البريد الموضح أدناه.</p>
      <div className="rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">معلومات التواصل</h2>
        <p className="mb-3">يمكنك التواصل معنا مباشرة عبر البريد الإلكتروني:</p>
        <p className="text-lg font-medium">📧 <a href="mailto:ibr4nx@gmail.com" className="text-blue-600 underline">ibr4nx@gmail.com</a></p>
        <p className="mt-6 text-sm text-gray-600">نحاول الرد على جميع الرسائل في أقرب وقت ممكن.</p>
        <form name="contact" method="POST" data-netlify="true" className="mx-auto mt-5 w-full max-w-sm space-y-4 rounded-xl border bg-card p-6 shadow-sm">
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-center text-2xl">التواصل مباشرة</h2>
          <label htmlFor="name" className="text-sm font-medium">الاسم</label>
          <input id="name" type="text" name="name" required placeholder="أدخل اسمك" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
          <input id="email" type="email" name="email" required placeholder="example@email.com" dir="ltr" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm" />
          <label htmlFor="message" className="text-sm font-medium">الرسالة</label>
          <textarea id="message" name="message" required rows={5} placeholder="اكتب رسالتك هنا..." className="flex min-h-32 w-full resize-y rounded-md border bg-background px-3 py-2 text-sm" />
          <button type="submit" className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">إرسال الرسالة</button>
        </form>
      </div>
    </main>
  );
}

