import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCachedPageBySlug, getAllPublishedSlugs } from "@/services/page.service";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. بناء الصفحات المنشورة مسبقاً (SSG)
export async function generateStaticParams() {
  const pages = await getAllPublishedSlugs();
  return pages.map((page) => ({ slug: page.slug }));
}

// 2. توليد بيانات الـ SEO من الأعمدة المخصصة لها
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getCachedPageBySlug(slug);

  if (!page) return { title: "الصفحة غير موجودة" };

  return {
    title: page.meta_title || page.title,
    description: page.meta_description || page.description || undefined,
  };
}

// 3. عرض محتوى الصفحة
export default async function DynamicPublicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getCachedPageBySlug(slug);

  if (!page) notFound();

  // نستخدم name في الـ Breadcrumb إذا كان موجوداً (لأنه غالباً أقصر)، وإلا نستخدم title

  return (
    <div>
      <article className={""}>
        <header className="mb-6 border-b border-slate-100 pb-4 dark:border-slate-800">
          <h1 className={""}>{page.title}</h1>
          {page.description && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{page.description}</p>}
        </header>

        <div className="">{page.content}</div>
      </article>
    </div>
  );
}
