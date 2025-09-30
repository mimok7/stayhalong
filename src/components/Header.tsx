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

          {/* 데스크톱 네비게이션 메뉴 */}
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
              href="https://form.stayhalong.com/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
            >
              자료관리
            </Link>
            <Link
              href="https://form.stayhalong.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
            >
              예약신청
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

          {/* 모바일 네비게이션 메뉴 */}
          <nav className="md:hidden flex items-center gap-2">
            {/* 자료관리은 모바일에서 표시하지 않음 */}
            <Link
              href="https://form.stayhalong.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors px-3 py-2 rounded bg-green-500 text-white hover:bg-green-600 shadow-sm"
            >
              예약신청
            </Link>
            <Link
              href="https://reservation.stayhalong.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 shadow-sm"
            >
              예약관리
            </Link>
          </nav>

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