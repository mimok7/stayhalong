"use client";

import Link from "next/link";

// Tour 타입 정의
interface Tour {
  id: string;
  name?: string;
  image?: string;
  price?: string | number;
  duration?: string;
  groupSize?: string;
  description?: string;
  highlights?: string[];
}

export default function KoreanGuidePage() {
  const tours: Tour[] = [
    // 투어 데이터가 비어있으므로 예시 데이터 추가 또는 빈 상태 유지
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🇰🇷</span>
            <span>Professional Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">한국어 가이드 투어</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            언어의 장벽 없이, 현지 전문가와 함께하는 깊이 있는 베트남 여행.
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-900 font-medium">Korean Guide</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Korean Guide Gallery */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">가이드 투어 갤러리</h2>
            <p className="text-slate-500 text-sm">생생한 투어 현장을 확인하세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: "/korean-guide/1 (2).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7697?fromList=true&menuId=617&tc=cafe_article_list", title: "투어 현장 1" },
              { img: "/korean-guide/temple.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/5104?fromList=true&menuId=617&tc=cafe_article_list", title: "투어 현장 2" },
              { img: "/korean-guide/hanoi_affter.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3603?fromList=true&menuId=617&tc=cafe_article_list", title: "투어 현장 3" },
              { img: "/korean-guide//hanoi.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2667?fromList=true&menuId=617&tc=cafe_article_list", title: "투어 현장 4" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square bg-slate-100 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Tour Grid (if data exists) */}
        {tours.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${tour.image}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/30 flex items-center gap-1">
                      <span className="text-yellow-400">💰</span>
                      {tour.price}백만 VND/인
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{tour.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium border border-slate-200">
                      ⏱️ {tour.duration}
                    </span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium border border-slate-200">
                      👥 {tour.groupSize}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm border-b border-slate-100 pb-4">
                    {tour.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {(tour.highlights || []).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-indigo-500">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guide Info */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">전문 가이드 소개</h2>
            <p className="text-slate-600">검증된 전문가들이 최고의 여행을 만들어드립니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold mb-6 text-indigo-900 flex items-center gap-2">
                <span className="text-2xl">👨‍🏫</span> 가이드 자격
              </h3>
              <ul className="space-y-4">
                {[
                  "한국어 능통자 (TOPIK 6급 이상)",
                  "베트남 관광안내사 자격증 보유",
                  "3년 이상 현장 경험",
                  "응급처치 및 안전 교육 이수"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-indigo-800">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold mb-6 text-purple-900 flex items-center gap-2">
                <span className="text-2xl">💬</span> 서비스 특징
              </h3>
              <ul className="space-y-4">
                {[
                  "실시간 한국어 해설 및 통역",
                  "베트남 문화와 역사에 대한 깊이 있는 설명",
                  "고객 맞춤형 일정 조율 및 추천",
                  "여행 중 발생할 수 있는 문제 해결 지원"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-800">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Naver Cafe Link */}
        <section className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">더 자세한 정보가 필요하신가요?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              스테이하롱 네이버 카페에서 한국어 가이드 투어에 대한 상세 정보와 실제 이용자들의 생생한 후기를 확인해보세요.
            </p>
            <div className="flex justify-center">
              <a
                href="https://cafe.naver.com/stayhalong"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
              >
                <span>☕</span>
                <span>스테이하롱 카페 방문하기</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}