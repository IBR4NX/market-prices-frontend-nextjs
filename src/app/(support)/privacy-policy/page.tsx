import { createSeo } from "@/lib/seo";

export const metadata = createSeo({
  canonicalPath: "/privacy-policy",
  title: "سياسة الخصوصية",
  description:
    "توضّح سياسة الخصوصية كيفية جمع المعلومات واستخدامها وحمايتها، وطرق التعامل مع بيانات المستخدمين وملفات تعريف الارتباط أثناء استخدام المنصة.",
});

const ParagraphList = ({ items }: { items: string[] }) => (
  <ul className="mb-4 list-disc space-y-1 pr-6">{items.map((item) => <li key={item}>{item}</li>)}</ul>
);
export default function PrivacyPolicy() {
  return (
    <div className="*:max-w-4xl px-5 py-12 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">سياسة الخصوصية</h1>
      <p className="mb-4">نحن نحترم خصوصية مستخدمي موقعنا وملتزمون بحماية أي معلومات يتم جمعها أثناء استخدامك لهذا الموقع. توضح هذه السياسة أسس جمع واستخدام وحماية المعلومات وحقوق المستخدم ومسؤولياته.</p>
      <p className="mb-8">باستخدامك لهذا الموقع، فإنك تقر بموافقتك على بنود سياسة الخصوصية. في حال عدم موافقتك على أي بند، يرجى التوقف عن استخدام الموقع.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">1. نطاق التطبيق</h2><p>تنطبق هذه السياسة على جميع الصفحات والخدمات والمحتويات المقدمة عبر الموقع، ولا تنطبق على المواقع أو الخدمات الخارجية.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">2. المعلومات التي نقوم بجمعها</h2>
      <h3 className="text-xl font-medium mt-6 mb-2">2.1 المعلومات الشخصية</h3><p className="mb-3">لا نقوم بجمع معلومات شخصية تعريفية إلا إذا قدمها المستخدم طوعاً عند:</p><ParagraphList items={personalList} /><p>تستخدم هذه المعلومات فقط للرد على الاستفسارات أو تقديم الدعم.</p>
      <h3 className="text-xl font-medium mt-6 mb-2">2.2 المعلومات غير الشخصية</h3><p className="mb-3">قد نجمع معلومات غير شخصية تلقائياً، تشمل:</p><ParagraphList items={nonPersonalList} /><p>تستخدم هذه البيانات لأغراض تحليلية وإحصائية وتحسين أداء الموقع فقط.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">3. ملفات تعريف الارتباط</h2><p className="mb-3">يستخدم الموقع ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربة المستخدم وتخصيص المحتوى وتحليل حركة الزوار.</p><p>يمكنك التحكم فيها أو تعطيلها من إعدادات المتصفح، وقد يؤثر تعطيلها على بعض وظائف الموقع.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">4. الإعلانات وخدمات الطرف الثالث</h2><h3 className="text-xl font-medium mt-6 mb-2">4.1 Google AdSense</h3><p className="mb-3">قد يستخدم الموقع خدمة Google AdSense لعرض الإعلانات. تستخدم Google وشركاؤها ملفات تعريف الارتباط لعرض إعلانات مناسبة للمستخدمين.</p><h3 className="text-xl font-medium mt-6 mb-2">4.2 مزودو خدمات آخرون</h3><ParagraphList items={otherList} /><p>تخضع هذه الأطراف لسياسات الخصوصية الخاصة بها.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">5. كيفية استخدام المعلومات</h2><ParagraphList items={usageList} />
      <h2 className="text-2xl font-semibold mt-10 mb-3">6. مشاركة المعلومات والإفصاح القانوني</h2><p>لا نبيع أو نؤجر أو نشارك المعلومات الشخصية إلا في الحالات التالية:</p><ParagraphList items={sharingList} />
      <h2 className="text-2xl font-semibold mt-10 mb-3">7. حماية المعلومات</h2><p>نتخذ التدابير الفنية والتنظيمية المناسبة لحماية المعلومات، ومع ذلك لا يمكن ضمان الأمان الكامل عبر الإنترنت.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">8. حقوق المستخدم</h2><p>يحق للمستخدم طلب معرفة أو تصحيح أو حذف البيانات ضمن الحدود القانونية عبر صفحة <a href="/contact" className="text-blue-600 underline">اتصل بنا</a>.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">9. خصوصية الأطفال</h2><p>لا يستهدف الموقع الأطفال دون سن 13 عاماً ولا نجمع معلومات شخصية عنهم عن قصد.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">10. الروابط الخارجية</h2><p>لسنا مسؤولين عن محتوى أو سياسات الخصوصية للمواقع الخارجية.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">11. حدود المسؤولية</h2><p>يقدم المحتوى كما هو دون أي ضمانات.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">12. التعديلات</h2><p>نحتفظ بالحق في تعديل هذه السياسة في أي وقت.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">13. القانون الواجب التطبيق</h2><p>يعد استمرار استخدام الموقع بعد نشر التعديلات موافقة قانونية عليها.</p>
      <h2 className="text-2xl font-semibold mt-10 mb-3">14. الاتصال بنا</h2><p>لأي استفسار قانوني يرجى زيارة صفحة <a href="/contact" className="text-blue-600 underline">اتصل بنا</a>.</p>
    </div>
  );
}

const personalList = ["التواصل معنا عبر البريد الإلكتروني", "استخدام نماذج الاتصال"];
const nonPersonalList = ["عنوان بروتوكول الإنترنت (IP)", "نوع المتصفح", "نظام التشغيل", "مزود خدمة الإنترنت", "الصفحات التي تمت زيارتها", "وقت وتاريخ الزيارة", "مصدر الإحالة"];
const otherList = ["تحليل البيانات", "عرض الإعلانات", "تحسين الأداء"];
const usageList = ["تشغيل الموقع وصيانته", "تحسين جودة المحتوى وتجربة المستخدم", "تحليل سلوك المستخدمين", "الكشف عن الأنشطة الاحتيالية أو غير القانونية", "الامتثال للالتزامات القانونية والتنظيمية"];
const sharingList = ["الامتثال لأمر قضائي أو طلب قانوني ملزم", "حماية حقوق الموقع أو المستخدمين", "منع أو التحقيق في أنشطة غير قانونية"];
