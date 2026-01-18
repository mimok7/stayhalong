"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle, Coffee, Youtube } from "lucide-react";

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

          {/* 소셜 링크 섹션 */}
          <div className="flex items-center gap-3">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FEE500] hover:bg-[#FDB200] text-black font-bold text-[13px] rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">카톡상담</span>
            </a>
            <a
              href="https://cafe.naver.com/stayhalong"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#03C75A] hover:bg-[#02b350] text-white font-bold text-[13px] rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Coffee size={16} />
              <span className="hidden sm:inline">네이버카페</span>
            </a>
            <a
              href="https://www.youtube.com/@Realhalong"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FF0000] hover:bg-[#e60000] text-white font-bold text-[13px] rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Youtube size={16} />
              <span className="hidden sm:inline">유튜브</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
