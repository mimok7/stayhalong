"use client";

import Link from "next/link";

export default function DayCruisesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503207262638-482337679534?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>☀️</span>
            <span>One Day Trip</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">원데이 크루즈</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            시간이 부족한 여행객을 위한 하롱베이 핵심 투어입니다.
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
            <span className="text-slate-900 font-medium">Day Cruises</span>
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
              { img: "/day-cruise/1.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/9405?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 1" },
              { img: "/day-cruise/1 (1).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/9006?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 2" },
              { img: "/day-cruise/1 (2).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7251?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 3" },
              { img: "/day-cruise/1 (3).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6113?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 4" },
              { img: "/day-cruise/1 (4).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6091?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 5" },
              { img: "/day-cruise/1 (5).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4143?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 6" },
              { img: "/day-cruise/8.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2597?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 7" },
              { img: "/day-cruise/1 (6).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/504?fromList=true&menuId=128&tc=cafe_article_list", title: "원데이 크루즈 8" },
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
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-100 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">포함 사항 안내</h2>
            <p className="text-slate-600">원데이 크루즈 상품에 기본적으로 포함되는 서비스입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🚤", title: "크루즈 투어", desc: "하롱베이 크루즈 관광 (4-6시간)", color: "bg-green-50 text-green-600" },
              { icon: "🍽️", title: "식사", desc: "런치 포함 (음료 별도)", color: "bg-teal-50 text-teal-600" },
              { icon: "🛶", title: "액티비티", desc: "카약, 동굴 탐험 등", color: "bg-blue-50 text-blue-600" },
              { icon: "🚌", title: "픽업/샌딩", desc: "하노이 시내 ↔ 크루즈 선착장 (옵션)", color: "bg-purple-50 text-purple-600" },
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

        {/* Time Schedule */}
        <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">원데이 크루즈 일정 예시</h2>
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[85px] top-2 bottom-2 w-0.5 bg-slate-200"></div>

            <div className="space-y-8">
              {[
                { time: "08:00", title: "하노이 출발", desc: "호텔 또는 지정 장소에서 픽업" },
                { time: "10:00", title: "크루즈 승선", desc: "하롱베이 선착장에서 크루즈 탑승" },
                { time: "11:00", title: "크루즈 투어", desc: "하롱베이 관광 및 액티비티" },
                { time: "13:00", title: "런치", desc: "크루즈에서 런치 즐기기" },
                { time: "16:00", title: "하노이 귀환", desc: "선착장에서 하노이로 이동" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 relative z-10">
                  <div className="w-16 text-right font-bold text-brand-600 pt-1">{item.time}</div>
                  <div className="w-4 h-4 bg-white border-4 border-brand-500 rounded-full mt-1.5 shadow-sm"></div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}