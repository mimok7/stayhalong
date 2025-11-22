"use client";

import Link from "next/link";

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-md border border-rose-400/30 text-rose-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏨</span>
            <span>Luxury Stay</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">베트남 호텔 예약</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            하노이와 하롱베이의 엄선된 호텔을 특별한 가격으로 만나보세요.
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-900 font-medium">Hotels</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Hotel Gallery */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">추천 호텔</h2>
            <p className="text-slate-500 text-sm">네이버 카페에서 상세 정보를 확인하세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { img: "/hotel/1.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/8101?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 1" },
              { img: "/hotel/2.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7025?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 2" },
              { img: "/hotel/3.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6805?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 3" },
              { img: "/hotel/4.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4474?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 4" },
              { img: "/hotel/5.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4356?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 5" },
              { img: "/hotel/6.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4124?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 6" },
              { img: "/hotel/7.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4080?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 7" },
              { img: "/hotel/8.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3720?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 8" },
              { img: "/hotel/9.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3717?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 9" },
              { img: "/hotel/10.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3527?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 10" },
              { img: "/hotel/11.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3477?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 11" },
              { img: "/hotel/12.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2674?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 12" },
              { img: "/hotel/13.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2619?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 13" },
              { img: "/hotel/14.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2497?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 14" },
              { img: "/hotel/15.jpg", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/859?fromList=true&menuId=559&tc=cafe_article_list", title: "추천 호텔 15" },
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
              </a>
            ))}
          </div>
        </section>

        {/* Service Benefits */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">호텔 예약 혜택</h2>
            <p className="text-slate-600">스테이하롱만의 특별한 혜택을 누리세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💰", title: "최저가 보장", desc: "현지 네트워크를 통한 특별 협상가로 최저가 예약", color: "bg-rose-50 text-rose-600" },
              { icon: "🔍", title: "검증된 호텔", desc: "스테이하롱이 직접 검증한 신뢰할 수 있는 호텔만 제공", color: "bg-blue-50 text-blue-600" },
              { icon: "📞", title: "24시간 지원", desc: "예약에서 체크인까지 전 과정 한국어 지원", color: "bg-purple-50 text-purple-600" },
              { icon: "🚫", title: "취소 수수료 없음", desc: "여행 일정 변경 시 유연한 취소 정책", color: "bg-green-50 text-green-600" },
              { icon: "🏨", title: "특별 서비스", desc: "공항 픽업, 웰컴 드링크 등 추가 서비스 제공", color: "bg-orange-50 text-orange-600" },
              { icon: "⭐", title: "VIP 서비스", desc: "룸 업그레이드, 조식 포함 등 VIP 고객 혜택", color: "bg-yellow-50 text-yellow-600" },
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

        {/* Booking Process */}
        <section className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-12">간편한 예약 프로세스</h2>

            <div className="grid md:grid-cols-4 gap-8 text-left">
              {[
                { step: "01", title: "문의 및 상담", desc: "원하는 지역, 예산, 일정을 알려주세요" },
                { step: "02", title: "맞춤 추천", desc: "여행 스타일에 맞는 호텔을 추천해드립니다" },
                { step: "03", title: "예약 확정", desc: "실시간으로 호텔 예약을 진행합니다" },
                { step: "04", title: "바우처 발급", desc: "예약 확인서와 이용 안내서를 보내드립니다" },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <div className="text-rose-400 font-bold text-xl mb-2">{item.step}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="http://pf.kakao.com/_zvsxaG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-500/25"
              >
                <span>💬</span>
                <span>호텔 예약 문의하기</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}