/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getUniqueCategories, getAllCruiseInfos } from "../data/cruises";

export default function HomePage() {
  const categories = getUniqueCategories();
  const cruiseInfos = getAllCruiseInfos();

  // 페이지 타이틀 설정
  useEffect(() => {
    document.title = "Stay Halong - 하롱베이 크루즈 여행";
  }, []);

  const mainServices = [
    {
      id: "cruise",
      title: "하롱베이 크루즈",
      subtitle: `다수의 옵션 · 다수의 객실`,
      description: "세계자연유산 하롱베이에서 즐기는 프리미엄 크루즈 여행",
      icon: "🚢",
      color: "from-blue-500 to-cyan-500",
      href: "/cruises",
      features: ["럭셔리 크루즈", "부티크 크루즈", "데이 크루즈"]
    },
    {
      id: "airport",
      title: "공항 픽업/샌딩",
      subtitle: "하노이 공항 ↔ 하롱베이",
      description: "안전하고 편안한 전용 차량 서비스",
      icon: "🚗",
      color: "from-green-500 to-emerald-500", 
      href: "/services/airport-transfer",
      features: ["전용 차량", "한국어 가이드", "24시간 서비스"]
    },
    {
      id: "guide",
      title: "한국어 가이드 투어",
      subtitle: "베트남 전문 가이드",
      description: "현지 전문가와 함께하는 맞춤형 베트남 여행",
      icon: "👨‍🏫",
      color: "from-purple-500 to-pink-500",
      href: "/services/korean-guide", 
      features: ["전문 가이드", "맞춤형 일정", "문화 체험"]
    },
    {
      id: "hotel",
      title: "베트남 호텔 예약",
      subtitle: "하노이 · 하롱베이",
      description: "베트남 호텔 예약 및 추천 서비스",
      icon: "🏨",
      color: "from-orange-600 to-red-600",
      href: "/services/hotels",
      features: ["최적가 보장", "실시간 예약", "한국어 지원"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <span>🇻🇳</span>
              하롱베이 현지 전문 유일 한국인 여행사
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">스테이하롱</span>
              <span className="block text-cyan-200">Stay Halong</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100 mb-10">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-green-400">✓</span> 현지 한국인 전문가 운영
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-green-400">✓</span> 한국어 완벽 지원
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-green-400">✓</span> 4,343명 커뮤니티
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-green-400">✓</span> 실시간 예약 시스템
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://pf.kakao.com/_zvsxaG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-[200px] mx-auto bg-yellow-500 text-yellow-900 py-2 px-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 transition-colors text-center shadow-lg"
              >
                💬 카카오톡 상담
              </a>
              <a
                href="https://cafe.naver.com/stayhalong"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-[200px] mx-auto bg-blue-600 text-white py-2 px-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-700 transition-colors text-center shadow-lg"
              >
                🏢 네이버 카페
              </a>
              <a
                href="https://customer.stayhalong.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-[200px] mx-auto bg-green-600 text-white py-2 px-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-700 transition-colors text-center shadow-lg"
              >
                📝 예약 신청
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
  <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">스테이하롱 주요 서비스</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            현지 전문가가 추천하는 여행을 경험해 보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {mainServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className={`h-20 bg-gradient-to-r ${service.color} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-white font-bold text-lg">{service.title}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.subtitle}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium group-hover:text-blue-700">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Company Introduction */}
  <section className="bg-gradient-to-r from-green-50 to-blue-50 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
                <span>🏢</span>
                공식 등록 여행사
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                왜 스테이하롱을 선택해야 할까요?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                베트남 현지에 직접 설립된 <strong className="text-green-700">CONG TY TENPER COMMUNICATIONS</strong>
                (사업자등록번호: 2500707601)로, 한국 여행객을 위한 전문적이고 안전한 여행 서비스를 제공합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">현지 전문성</h3>
                    <p className="text-gray-600">하롱베이 현지 사무소 운영으로 실시간 정보와 최적의 서비스 제공</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">한국어 완벽 지원</h3>
                    <p className="text-gray-600">상담부터 여행 진행까지 모든 과정에서 한국어로 소통</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">안전 보장</h3>
                    <p className="text-gray-600">정식 등록 여행사로 안전하고 신뢰할 수 있는 여행 서비스</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 실시간 예약 현황 카드 삭제됨 */}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">고객 후기</h2>
          <p className="text-xl text-gray-600">
            스테이하롱과 함께한 특별한 여행 경험을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">김** 님</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              "한국어로 모든 소통이 가능해서 너무 편했어요. 
              현지 가이드분도 정말 친절하시고 크루즈도 최고였습니다!"
            </p>
            <div className="text-sm text-gray-500">
              Paradise Elegance 2박3일 이용
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">박** 님</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              "공항 픽업부터 크루즈 예약까지 모든 걸 도와주셔서 
              편안한 여행이었어요. 다음에도 꼭 이용할게요!"
            </p>
            <div className="text-sm text-gray-500">
              Calista 1박2일 + 공항픽업 이용
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-sm text-gray-600">이** 님</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              "가격도 합리적이고 서비스도 훌륭했어요. 
              특히 한국어 가이드 투어는 정말 유익했습니다!"
            </p>
            <div className="text-sm text-gray-500">
              원데이 크루즈 + 가이드 투어 이용
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/menus/13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            <span>📝</span>
            더 많은 후기 보기
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">지금 바로 상담받으세요</h2>
            <p className="text-xl text-gray-300">
              현지 전문가와 1:1 맞춤 상담으로 완벽한 베트남 여행을 계획해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-medium">전화 상담</div>
                    <div className="text-gray-300">070-4554-5185</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-medium">카카오톡 상담</div>
                    <div className="text-gray-300">09:00 - 24:00 (한국시간) 실시간 상담</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium">이메일</div>
                    <div className="text-gray-300">support@stayhalong.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-medium">현지 사무소</div>
                    <div className="text-gray-300">하롱시, 베트남</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">빠른 상담 신청</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="http://pf.kakao.com/_zvsxaG/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto max-w-[200px] mx-auto bg-yellow-500 text-yellow-900 py-2 px-4 rounded-xl font-bold text-sm sm:text-base text-center hover:bg-yellow-400 transition-colors"
                  >
                    💬 카카오톡 상담
                  </a>
                  <a
                    href="https://cafe.naver.com/stayhalong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto max-w-[200px] mx-auto bg-blue-600 text-white py-2 px-4 rounded-xl font-bold text-sm sm:text-base text-center hover:bg-blue-700 transition-colors"
                  >
                    🏢 네이버 카페
                  </a>
                  <a
                    href="https://form.stayhalong.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto max-w-[200px] mx-auto bg-green-600 text-white py-2 px-4 rounded-xl font-bold text-sm sm:text-base text-center hover:bg-green-700 transition-colors"
                  >
                    📝 예약 신청
                  </a>
                </div>
                <div className="text-center text-gray-400 text-sm">
                  평균 응답 시간: 5분 이내
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-bold mb-4">운영 시간</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>카카오톡 상담</span>
                    <span>09:00 - 24:00 (한국시간)</span>
                  </div>
                  <div className="flex justify-between">
                   
                   
                  </div>
                  <div className="flex justify-between">
                    <span>이메일 답변</span>
                    <span>24시간 이내</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">스테이하롱</h4>
              <p className="text-sm leading-relaxed mb-4">
                하롱베이 현지 전문 한국 여행사로, 
                안전하고 특별한 베트남 여행을 제공합니다.
              </p>
              <div className="flex space-x-3">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs cursor-pointer">f</span>
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-xs cursor-pointer">K</span>
                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs cursor-pointer">N</span>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">주요 서비스</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/cruises" className="hover:text-white">하롱베이 크루즈</Link></li>
                <li><Link href="/services/airport-transfer" className="hover:text-white">공항 픽업/샌딩</Link></li>
                <li><Link href="/services/korean-guide" className="hover:text-white">한국어 가이드 투어</Link></li>
                <li><Link href="/services/hotels" className="hover:text-white">호텔 예약</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">고객 지원</h5>
              <ul className="space-y-2 text-sm">
                <li>24시 까지 카카오톡 상담</li>
                <li>여행 중 긴급 지원</li>
                <li>취소/변경 정책</li>
                <li>자주 묻는 질문</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">회사 정보</h5>
              <ul className="space-y-2 text-sm">
                <li>📞 070-4554-5185</li>
                <li>📧 support@stayhalong.com</li>
                <li>📍 하롱시, 베트남</li>
                <li>🏢 사업자번호: 2500707601</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
            <p>&copy; 2025 스테이하롱 (Stay Halong) - CONG TY TENPER COMMUNICATIONS. </p>
            <p className="mt-2">대표: KIM DONG HYUN | 사업자등록번호: 2500707601</p>
          </div>
        </div>
      </footer>
    </div>
  );
}