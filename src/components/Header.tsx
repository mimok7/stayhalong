"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 h-20">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex items-center">
            {/* Placeholder for the Cat Logo - using a text representation for now if image is missing, 
                but based on image it's a specific graphic. I'll use a text/shape combo. */}
            <div className="flex flex-col">
              <div className="flex items-end leading-none">
                <span className="text-4xl font-extrabold text-slate-700 tracking-tighter">SHT</span>
                <div className="flex flex-col ml-2 mb-1">
                  <span className="text-xs font-bold text-slate-600">스테이하롱 트래블 RMC</span>
                  <span className="text-[10px] text-slate-400 tracking-wider">RESERVATION MANAGEMENT CENTER</span>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 mt-1 tracking-tight">
                스테이하롱트래블의 투어상품 예약관리 서비스입니다.
              </div>
            </div>
          </div>
        </Link>

        {/* Right Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/login" className="flex flex-col items-center gap-1 group">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-[11px] text-slate-500 group-hover:text-brand-600">로그인</span>
          </Link>

          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>

          <a href="http://pf.kakao.com/_zvsxaG/chat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </div>
            <span className="text-[11px] text-slate-500 group-hover:text-brand-600">상담원과 채팅연결</span>
          </a>

          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>

          <a href="https://cafe.naver.com/stayhalong" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-[11px] text-slate-500 group-hover:text-brand-600">네이버 공식카페</span>
          </a>

          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>

          <a href="https://www.youtube.com/@stayhalong" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <span className="text-[11px] text-slate-500 group-hover:text-brand-600">유튜브 공식채널</span>
          </a>
        </nav>
      </div>
    </header>
  );
}