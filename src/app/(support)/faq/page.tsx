import { createSeo } from "@/lib/seo";
export const metadata = createSeo({
  canonicalPath: "/faq",
  description: "إجابات عن الأسئلة الشائعة حول Markets Yemen.",
  title: "الأسئلة الشائعة",
});
const contacts = [
  { type: "البريد الإلكتروني", value: "ibr4nx@gmail.com", note: "الرد خلال 48 ساعة عادةً." },
  { type: "الهاتف", value: "+967 738 386 364", note: "ساعات الدعم: الأحد–الخميس 9:00–17:00 بتوقيت GMT+3." },
];
export default function Page() {
  return (
        <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">المساعدة في البحث عن أسعار المنتجات</h1>
      <p className="mb-6 leading-relaxed">استخدم هذه الصفحة لمعرفة طريقة البحث عن سعر المنتج اليوم في اليمن، وكيفية تضييق النتائج حسب المدينة أو الفئة.</p>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">كيف أبحث عن سعر منتج؟</h2>
        <p className="text-gray-600 dark:text-gray-300">افتح صفحة الأسعار، اكتب اسم المنتج، ثم اختر المدينة أو الفئة عند الحاجة. إذا لم تظهر نتيجة فهذا يعني أن البيانات غير متوفرة حالياً.</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold mb-3">خيارات التواصل</h2>
        <ul className="space-y-2">
          {contacts.map((contact) => (
            <li key={contact.type}>
              <strong>{contact.type}:</strong> <span className="text-gray-700 dark:text-gray-200">{contact.value}</span>
              <div className="text-sm text-gray-500">{contact.note}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
