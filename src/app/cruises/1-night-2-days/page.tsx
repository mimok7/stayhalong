"use client";

import Link from "next/link";

export default function OneNightTwoDaysPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528127223428-742013d43a9e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🚢</span>
            <span>Best Seller</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">1박 2일 크루즈</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            하롱베이의 아름다움을 만끽할 수 있는 가장 인기 있는 여행 코스입니다.
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/cruises" className="hover:text-brand-600 transition-colors">Cruises</Link>
            <span>›</span>
            <span className="text-slate-900 font-medium">1 Night 2 Days</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Image Gallery */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">추천 크루즈 상품</h2>
            <p className="text-slate-500 text-sm">네이버 카페에서 상세 정보를 확인하세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { img: "/1night2days/1.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/8767?fromList=true&menuId=493&tc=cafe_article_list", title: "추천 크루즈 1" },
              { img: "/1night2days/1 (1).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7441?fromList=true&menuId=493&tc=cafe_article_list", title: "추천 크루즈 2" },
              { img: "/1night2days/1 (2).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/5930?fromList=true&menuId=493&tc=cafe_article_list", title: "추천 크루즈 3" },
              { img: "/1night2days/1 (3).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/5062?fromList=true&menuId=493&tc=cafe_article_list", title: "추천 크루즈 4" },
              { img: "/1night2days/1 (4).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4918?fromList=true&menuId=493&tc=cafe_article_list", title: "추천 크루즈 5" },
              { img: "/1night2days/17.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7256?fromList=true&menuId=493&tc=cafe_article_list", title: "추천 크루즈 6" },
              { img: "/1night2days/ambassa_signa_1_2.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7456?fromList=true&menuId=493&tc=cafe_article_list", title: "Ambassador Cruise" },
              { img: "/1night2days/capella_1.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2593?fromList=true&menuId=493&tc=cafe_article_list", title: "Capella Cruise" },
              { img: "/1night2days/hermes.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2057?fromList=true&menuId=493&tc=cafe_article_list", title: "Hermes Cruise" },
              { img: "/1night2days/lyra_1.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6485?fromList=true&menuId=493&tc=cafe_article_list", title: "Lyra Cruise" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <span>상세보기</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Service Info */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">포함 사항 안내</h2>
            <p className="text-slate-600">모든 1박 2일 크루즈 상품에 기본적으로 포함되는 서비스입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏨", title: "숙박", desc: "크루즈 내 프리미엄 객실 1박", color: "bg-blue-50 text-blue-600" },
              { icon: "🍽️", title: "식사", desc: "조식, 중식, 석식 포함 (음료 별도)", color: "bg-green-50 text-green-600" },
              { icon: "🚤", title: "크루즈 투어", desc: "하롱베이 주요 명소 크루즈 관광", color: "bg-purple-50 text-purple-600" },
              { icon: "🛶", title: "액티비티", desc: "카약, 동굴 탐험, 쿠킹 클래스 등", color: "bg-yellow-50 text-yellow-600" },
              { icon: "🚌", title: "픽업/샌딩", desc: "하노이 공항 ↔ 크루즈 선착장 (옵션)", color: "bg-red-50 text-red-600" },
              { icon: "👨‍🏫", title: "가이드", desc: "전문 가이드 동행 (선택 사항)", color: "bg-indigo-50 text-indigo-600" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}