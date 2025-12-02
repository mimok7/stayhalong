"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome
        ? "bg-white/40 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-1"
        : "bg-transparent py-1"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <div className="relative w-48 h-20">
              <Image
                src="/logosht.png"
                alt="Stay Halong Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* 예약하기 버튼 */}
          <Link
            href="https://customer.stayhalong.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            예약하기
          </Link>
        </div>
      </div>
    </header>
  );
}
