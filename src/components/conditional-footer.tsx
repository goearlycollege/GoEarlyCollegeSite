"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/apply") return null;
  return <Footer />;
}
