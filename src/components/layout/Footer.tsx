import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

import LinkFooter from "@/components/layout/LinkFooter";
import MainLink from "@/components/shared/mainLink";
import { ABOUT_URL, BLOG_URL, PRICES_URL } from "@/lib/constants";
export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-aut  ma-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 grid-cols-1  lg:gap-12">
          <div dir="rtl">
            <LinkFooter />
            <div className="mt-8 flex justify-between   gap-2">
              <MainLink href="/prices" className="text-3xl font-bold">
                السوق اليمني
              </MainLink>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              منصة مبسطة لمتابعة أسعار المنتجات والبحث عنها حسب المدينة والفئة.
            </p>
          </div>
          <div className="relative  grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            <div className="  w-full">
              <h2 className="text-2xl font-semibold">روابط سريعة</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-muted-foreground">
                <Link
                  href={PRICES_URL}
                  className="w-fit hover:text-foreground hover:underline"
                >
                  ألاسعار
                </Link>
                <Link
                  href={BLOG_URL}
                  className="w-fit hover:text-foreground hover:underline"
                >
                  المدونة
                </Link>
                <MainLink
                  href="/add"
                  className="w-fit hover:text-foreground hover:underline"
                >
                  تعديل سعر
                </MainLink>
                <Link
                  href={ABOUT_URL}
                  className="w-fit hover:text-foreground hover:underline"
                >
                  من نحن
                </Link>
                <MainLink
                  href="/add"
                  className="w-fit hover:text-foreground hover:underline"
                >
                  مركز المساعدة
                </MainLink>
                <MainLink
                  href="/privacy-policy"
                  className="w-fit hover:text-foreground hover:underline"
                >
                  سياسة الخصوصية
                </MainLink>
                <MainLink
                  href="/contact"
                  className="w-fit hover:text-foreground hover:underline"
                >
                  اتصل بنا
                </MainLink>
                <MainLink
                  href="/faq"
                  className="w-fit hover:text-foreground hover:underline"
                >
                  الأسئلة الشائعة
                </MainLink>
              </div>
            </div>

            <div>
              <h2 className="text-lg text-muted-foreground  text-center  font-semibold">
                تابعنا
              </h2>
              <div className="mt-4 max-w-xl text-4xl flex flex-wrap justify-around items-center gap-3 text-muted-foreground">
                <a
                  href="https://www.facebook.com/ibr4nx"
                  aria-label="Facebook"
                  className="rounded-md p-2 hover:bg-muted hover:text-foreground"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/ibr4nx"
                  aria-label="Instagram"
                  className="rounded-md p-2 hover:bg-muted hover:text-foreground"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twitter.com/ibr4nx"
                  aria-label="X"
                  className="rounded-md p-2 hover:bg-muted hover:text-foreground"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.whatsapp.com/+967738386364"
                  aria-label="WhatsApp"
                  className="rounded-md p-2 hover:bg-muted hover:text-foreground"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://github.com/ibr4nx"
                  aria-label="GitHub"
                  className="rounded-md p-2 hover:bg-muted hover:text-foreground"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative -bottom-4 flex flex-col gap-3 border- -5 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-start">
          <p>{`© ${new Date().getFullYear()} السوق اليمني. جميع الحقوق محفوظة.`}</p>
        </div>
      </div>
    </footer>
  );
}
