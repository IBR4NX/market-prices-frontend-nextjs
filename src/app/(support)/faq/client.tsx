"use client";
 const items= [
    { "q": "كيف أنشئ حسابًا؟", "a": "اضغط تسجيل ثم أدخل بريدك الإلكتروني واتبع خطوات التحقق." },
    { "q": "كيف أتواصل مع الدعم؟", "a": "استخدم صفحة الدعم للاطلاع على البريد والهاتف أو افتح تذكرة عبر مركز المساعدة." },
    { "q": "أين أجد سياسة الخصوصية؟", "a": "يمكنك الاطلاع على سياسة الخصوصية في /privacy-policy حيث نشرح كيفية معالجة البيانات." }
  ]
export default function Faq() {

  
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        أسئلة شائعة عن أسعار المنتجات
      </h1>
      <p className="mb-6 leading-relaxed">
        هنا تجد إجابات تساعدك على فهم طريقة البحث عن الأسعار، ولماذا قد لا
        يظهر سعر منتج أو مدينة في بعض الأوقات.
      </p>

      <section className="space-y-4">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((it, i) => (
            <details key={i} className="group border rounded p-3">
              <summary className="font-semibold cursor-pointer">{it.q}</summary>
              <div className="mt-2 text-alpha">{it.a}</div>
            </details>
          ))
        ) : (
          <p>لا توجد أسئلة شائعة متاحة.</p>
        )}
      </section>
    </main>
  );
}
