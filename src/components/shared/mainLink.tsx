import { MAIN_URL } from "@/lib/constants";
import Link from "next/link";
import type { ComponentProps } from "react";

type MainLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: `/${string}`;
};

export default function MainLink({ href, ...props }: MainLinkProps) {
  if (!MAIN_URL) {
    throw new Error("NEXT_PUBLIC_MAIN_URL is not configured");
  }

  return <Link href={`${MAIN_URL}${href}`} {...props} />;
}