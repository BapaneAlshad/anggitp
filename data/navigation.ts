import type { NavigationItem } from "@/types/navigation";

export const navigationItems = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/insight", label: "Insight" },
  { href: "/#faq", label: "FAQ" },
] as const satisfies readonly NavigationItem[];
