"use client";

const posts = [
  { title: "مرحباً بكم في مدونة السوق اليمني", excerpt: "مقدمة عن تحديثات الأسعار ونصائح متابعة المنتجات بين المدن." },
  { title: "دليل البداية", excerpt: "كيفية إنشاء حساب وضبط الإعدادات والبدء باستخدام المنصة." },
];

export default function Blog() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">مقالات وتحديثات أسعار المنتجات</h1>
      <p className="mb-6 leading-relaxed">مساحة للمقالات والتحديثات المرتبطة بأسعار المنتجات في اليمن، وطريقة قراءة تغير الأسعار بين المدن.</p>
      <section className="space-y-6">
        {posts.map((post) => (
          <article key={post.title}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
