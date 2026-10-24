import { Animationpage } from "@/components/feedback/PageAnimation";
import ClientPage from "./client";
import { createSeo, GetSEO } from "@/lib/seo";
import { motion } from "motion/react";
import { headers } from "next/headers";
import { SITE_NAME } from "@/lib/constants";

export default async function Page() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <ClientPage />
    </>
  );
}
