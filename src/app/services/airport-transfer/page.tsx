"use client";

import Link from "next/link";

export default function AirportTransferPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🚗</span>
            <span>Premium Transport</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">공항 픽업 & 렌트카</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            안전하고 편안한 이동을 위한 프리미엄 차량 서비스를 제공합니다.
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-900 font-medium">Airport Transfer</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Service Highlights */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { img: "/airport_01.gif", title: "공항 픽업 서비스", desc: "공항에서 호텔까지 편안하게" },
            { img: "/airport_03.gif", title: "전문 기사 서비스", desc: "베테랑 기사의 안전 운행" },
            { img: "/airport_04.gif", title: "안전한 이동 서비스", desc: "최신 차량으로 쾌적하게" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-slate-100 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Detailed Gallery */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">차량 서비스 상세</h2>
            <p className="text-slate-500 text-sm">네이버 카페에서 상세 정보를 확인하세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { img: "/airport/airport_01.gif", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/8609?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 1" },
              { img: "/airport/3.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7546?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 2" },
              { img: "/airport/1.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7545?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 3" },
              { img: "/airport/2.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7544?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 4" },
              { img: "/airport/1%20(1).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7542?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 5" },
              { img: "/airport/2%20(1).png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7541?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 6" },
              { img: "/airport/sha_limousine_01.gif", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6368?fromList=true&menuId=611&tc=cafe_article_list", title: "리무진 서비스" },
              { img: "/airport/26.png", link: "https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/5047?fromList=true&menuId=611&tc=cafe_article_list", title: "차량 상세 8" },
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

        {/* Booking Guide */}
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-100 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">예약 및 이용 안내</h2>
            <p className="text-slate-600">간편하게 예약하고 안전하게 이용하세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

            {[
              {
                step: "1",
                title: "예약 신청",
                desc: "카카오톡으로 담당자에게 차량 서비스를 신청해주세요. 신청서 링크를 보내드립니다.",
                color: "bg-orange-50 text-orange-600 border-orange-100"
              },
              {
                step: "2",
                title: "결제 진행",
                desc: "최종 금액 확인 후 원화 송금으로 결제합니다. (카드 결제 시 수수료 발생)",
                color: "bg-blue-50 text-blue-600 border-blue-100"
              },
              {
                step: "3",
                title: "이용 및 취소",
                desc: "이용일 5일 전까지 취소 가능하며, 16일 전 취소 시 전액 환불됩니다.",
                color: "bg-green-50 text-green-600 border-green-100"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center relative bg-white p-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold border ${item.color}`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Rules */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">📥</span>
              공항 픽업 이용안내
            </h3>
            <ul className="space-y-4">
              {[
                "이용일자 3일 전부터는 예약이 불가합니다.",
                "밤 22:00 이후 도착 항공편은 픽업이 불가합니다.",
                "항공편 연착 시, 도착 시까지 기사님이 무료 대기합니다.",
                "00:00 이후 도착 시 픽업 서비스는 취소됩니다.",
                "전액 선결제이므로 현장에서 지불할 금액은 없습니다."
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">📤</span>
              공항 샌딩 이용안내
            </h3>
            <ul className="space-y-4">
              {[
                "이용일자 3일 전부터는 예약이 불가합니다.",
                "밤 22:00 이후 승차 시 샌딩 서비스가 불가합니다.",
                "픽업 시간/위치 변경은 이용 전일 18:00까지만 가능합니다.",
                "도로 사정에 따라 차량이 10분 내외 지연될 수 있습니다.",
                "전액 선결제이므로 현장에서 지불할 금액은 없습니다."
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">지금 바로 예약하세요</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              스테이하롱의 안전하고 편안한 공항 픽업/샌딩 서비스를 경험해보세요.
              카카오톡으로 쉽고 빠르게 예약하실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://pf.kakao.com/_zvsxaG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                <span>💬</span>
                <span>카카오톡 예약 상담</span>
              </a>
              <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2">
                <span>📞</span>
                <span>070-4554-5185</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}