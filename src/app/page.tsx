/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getUniqueCategories, getAllCruiseInfos } from "../data/cruises";

export default function HomePage() {
  // 페이지 타이틀 설정
  useEffect(() => {
    document.title = "Stay Halong - 하롱베이 크루즈 여행";
  }, []);

  const mainServices = [
    {
      id: "cruise",
      title: "하롱베이 크루즈",
      subtitle: "Premium Cruises",
      description: "세계자연유산 하롱베이에서 즐기는 프리미엄 크루즈 여행",
      icon: "🚢",
      href: "/cruises",
      features: ["럭셔리 크루즈", "부티크 크루즈", "데이 크루즈"]
    },
    {
      id: "airport",
      title: "공항 픽업/샌딩",
      subtitle: "Private Transfer",
      description: "하노이 공항에서 하롱베이까지 안전하고 편안하게",
      icon: "🚗",
      href: "/services/airport-transfer",
      features: ["전용 차량", "한국어 가이드", "24시간 서비스"]
    },
    {
      id: "guide",
      title: "한국어 가이드 투어",
      subtitle: "Local Guide",
      description: "베트남 현지 전문가와 함께하는 맞춤형 여행",
      icon: "👨‍🏫",
      href: "/services/korean-guide",
      features: ["전문 가이드", "맞춤형 일정", "문화 체험"]
    },
    {
      id: "hotel",
      title: "베트남 호텔 예약",
      subtitle: "Hotel Booking",
      description: "엄선된 베트남 호텔 최적가 예약 및 추천",
      icon: "🏨",
      href: "/services/hotels",
      features: ["최적가 보장", "실시간 예약", "한국어 지원"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
          {/* Placeholder for a high-quality hero image. Ideally, use a real image here. */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-slow-zoom" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="text-brand-300">✨</span>
            <span>하롱베이 현지 전문 유일 한국인 여행사</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 animate-fade-in-up delay-100">
            Discover the Beauty of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Halong Bay</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
            스테이하롱은 베트남 현지 법인 여행사로, <br className="hidden md:block" />
            가장 안전하고 특별한 하롱베이 여행을 약속드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-lg transition-all shadow-lg shadow-brand-900/20 hover:shadow-brand-900/40 hover:-translate-y-0.5"
            >
              카카오톡 상담하기
            </a>
            <Link
              href="/cruises"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg transition-all hover:-translate-y-0.5"
            >
              크루즈 찾아보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { label: "누적 여행객", value: "4,300+", icon: "👥" },
              { label: "고객 만족도", value: "4.9/5.0", icon: "⭐" },
              { label: "현지 파트너", value: "50+", icon: "🤝" },
              { label: "운영 기간", value: "Since 2015", icon: "📅" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium flex items-center justify-center gap-2">
                  <span>{stat.icon}</span> {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Premium Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              단순한 여행이 아닌, 평생 기억에 남을 특별한 경험을 선사합니다.
              <br />스테이하롱만의 차별화된 서비스를 만나보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 text-9xl select-none pointer-events-none grayscale">
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <div className="text-sm font-bold text-brand-600 mb-2 tracking-wider uppercase">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed min-h-[3rem]">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative z-10">
                {/* Placeholder for About Image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-50 rounded-full -z-0 blur-3xl opacity-50"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-50 rounded-full -z-0 blur-3xl opacity-50"></div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6">
                <span>🏢</span> 공식 등록 여행사
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                왜 <span className="text-brand-600">스테이하롱</span>을 <br />
                선택해야 할까요?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                베트남 현지에 직접 설립된 <strong className="text-slate-900">CONG TY TENPER COMMUNICATIONS</strong>
                (사업자등록번호: 2500707601)로, 한국 여행객을 위한 전문적이고 안전한 여행 서비스를 제공합니다.
              </p>

              <div className="space-y-6">
                {[
                  { title: "현지 전문성", desc: "하롱베이 현지 사무소 운영으로 실시간 정보 제공", icon: "🎯" },
                  { title: "한국어 완벽 지원", desc: "상담부터 여행 진행까지 한국어로 편안하게 소통", icon: "💬" },
                  { title: "안전 보장", desc: "정식 등록 여행사로 신뢰할 수 있는 서비스", icon: "🛡️" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Traveler Reviews</h2>
            <p className="text-slate-400 text-lg">
              스테이하롱과 함께한 여행객들의 생생한 이야기를 들어보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "김** 님",
                rating: 5,
                content: "한국어로 모든 소통이 가능해서 너무 편했어요. 현지 가이드분도 정말 친절하시고 크루즈도 최고였습니다!",
                tag: "Paradise Elegance 2박3일"
              },
              {
                name: "박** 님",
                rating: 5,
                content: "공항 픽업부터 크루즈 예약까지 모든 걸 도와주셔서 편안한 여행이었어요. 다음에도 꼭 이용할게요!",
                tag: "Calista 1박2일 + 공항픽업"
              },
              {
                name: "이** 님",
                rating: 5,
                content: "가격도 합리적이고 서비스도 훌륭했어요. 특히 한국어 가이드 투어는 정말 유익했습니다!",
                tag: "원데이 크루즈 + 가이드 투어"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-brand-500/50 transition-colors">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed min-h-[4rem]">
                  "{review.content}"
                </p>
                <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
                  <span className="font-bold text-white">{review.name}</span>
                  <span className="text-xs text-brand-400 bg-brand-900/30 px-2 py-1 rounded-md">{review.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/menus/13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-brand-300 font-medium transition-colors border-b border-transparent hover:border-brand-300 pb-0.5"
            >
              더 많은 후기 보러가기 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            완벽한 하롱베이 여행, <br />
            지금 바로 상담받아보세요
          </h2>
          <p className="text-brand-100 text-lg mb-12 max-w-2xl mx-auto">
            전문 상담원이 고객님의 취향과 일정에 맞는 최적의 여행을 제안해드립니다.
            <br />부담 없이 문의해주세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>💬</span> 카카오톡 상담하기
            </a>
            <a
              href="https://customer.stayhalong.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-brand-600 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>📝</span> 간편 예약 신청
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-brand-200 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              평균 응답 5분 이내
            </span>
            <span>•</span>
            <span>09:00 - 24:00 (연중무휴)</span>
          </div>
        </div>
      </section>
    </div>
  );
}