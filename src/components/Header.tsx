"use client";

import Link from "next/link";
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
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* 로고 및 브랜드 */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            {/* 로고 이미지가 있다면 사용, 없다면 텍스트 로고 */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-colors ${scrolled || !isHome ? "bg-brand-600 text-white" : "bg-white text-brand-600"
              }`}>
              S
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled || !isHome ? "text-slate-900" : "text-white"
              }`}>
              Stay Halong
            </span>
          </Link>

          {/* 데스크톱 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "크루즈", href: "/cruises" },
              { name: "앱시트신청", href: "https://form.stayhalong.com/" },
              { name: "자료관리", href: "https://form.stayhalong.com/admin" },
              { name: "예약신청", href: "https://customer.stayhalong.com" },
              { name: "예약관리", href: "https://manager.stayhalong.com" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${pathname === item.href
                    ? "text-brand-600 font-bold"
                    : scrolled || !isHome
                      ? "text-slate-600 hover:text-brand-600"
                      : "text-slate-200 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 (간소화) */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="https://customer.stayhalong.com"
              target="_blank"
              className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${scrolled || !isHome
                  ? "bg-brand-600 text-white hover:bg-brand-700"
                  : "bg-white text-brand-600 hover:bg-slate-100"
                }`}
            >
              예약하기
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}