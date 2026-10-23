import { MAIN_URL, SITE_URL } from "@/lib/constants";
import { cn } from "cn";
import Link from "next/link";
import type { ComponentProps } from "react";

type MainLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: `/${string}`;
  className?: string;
};

export default function MainLink({ href, className, ...props }: MainLinkProps) {
  if (!SITE_URL) {
    throw new Error("NEXT_PUBLIC_MAIN_URL is not configured");
  }

  return (
    <Link
      href={`${SITE_URL}${href}`}
      className={cn("hover:underline transition-colors hover:text-primary ", className)}
      {...props}
    />
  );
}
