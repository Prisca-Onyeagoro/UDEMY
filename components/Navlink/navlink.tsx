"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={`${
          path.startsWith(href) ? "text-orange-400" : "text-white"
        }`}
      >
        {children}
      </Link>
    </>
  );
}
