"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 로고 및 브랜드 */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <img
              src="/logo.png"
              alt="Stay Halong Logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold">Stay Halong</span>
          </Link>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/cruises"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/cruises")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              크루즈
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/services")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              서비스
            </Link>
            <Link
              href="https://reservation.stayhalong.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
            >
              예약관리
            </Link>
            <Link
              href="/admin"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/admin")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              관리자
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isHome
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              <span>🏠</span>
              <span>홈</span>
            </Link>
          </div>

          {/* 데스크톱 홈 버튼 */}
          {!isHome && (
            <div className="hidden md:block">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm"
              >
                <span>🏠</span>
                <span>홈으로</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}