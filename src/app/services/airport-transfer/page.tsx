"use client";

import Image from "next/image";
import Link from "next/link";

export default function AirportTransferPage() {
  const services = [
    {
      id: "standard",
      name: "스탠다드 픽업/샌딩",
      vehicle: "승합차 (9인승)",
      capacity: "최대 9명",
      price: 25,
      features: ["에어컨", "편안한 좌석", "기본 음료", "안전 운행"],
      description: "하노이 공항에서 크루즈 선착장까지 안전하고 편안한 이동 서비스"
    },
    {
      id: "premium",
      name: "프리미엄 픽업/샌딩",
      vehicle: "고급 승합차 (12인승)",
      capacity: "최대 12명",
      price: 35,
      features: ["에어컨", "편안한 좌석", "무료 Wi-Fi", "냉장고", "안전 운행", "전문 드라이버"],
      description: "더 넓고 편안한 차량으로 프리미엄 이동 서비스를 제공합니다"
    },
    {
      id: "vip",
      name: "VIP 픽업/샌딩",
      vehicle: "고급 세단 또는 SUV",
      capacity: "최대 4명",
      price: 50,
      features: ["에어컨", "가죽 시트", "무료 Wi-Fi", "음료 서비스", "개인 운전기사", "안전 운행"],
      description: "개인 차량으로 최고급 이동 서비스를 경험하세요"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 via-orange-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-orange-200 hover:text-white">
              ← 홈으로 돌아가기
            </Link>
            <span className="text-orange-200">|</span>
            <span className="text-sm text-orange-200">서비스</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">공항 픽업/샌딩 서비스</h1>
          <p className="text-xl text-orange-100">
            하노이 공항에서 크루즈 선착장까지 안전하고 편안한 이동
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Service Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                    ${service.price}/인
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {service.vehicle}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {service.capacity}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mb-4">
                  <div className="space-y-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">공항 픽업/샌딩 서비스 상세 정보</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-700">📍 이동 경로</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>하노이 노이바이 국제공항 (HAN) → 하롱베이 크루즈 선착장</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>크루즈 선착장 → 하노이 노이바이 국제공항 (HAN)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>이동 시간: 약 3-4시간 (교통 상황에 따라 변동)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>거리: 약 180km</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-700">🕒 운행 시간</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>픽업: 항공편 도착 시간에 맞춰 조율</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>샌딩: 크루즈 일정 종료 후 공항 이동</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>24시간 서비스 가능</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>예약 필수 (최소 24시간 전)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety & Comfort */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">안전과 편안함을 최우선으로</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold mb-2">안전 운행</h3>
              <p className="text-gray-600 text-sm">면허 취득 10년 이상의 전문 드라이버</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-bold mb-2">최신 차량</h3>
              <p className="text-gray-600 text-sm">정기 점검 및 유지보수 완료된 차량</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold mb-2">24시간 지원</h3>
              <p className="text-gray-600 text-sm">긴급 상황 발생 시 즉시 대응</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💺</span>
              </div>
              <h3 className="font-bold mb-2">편안한 좌석</h3>
              <p className="text-gray-600 text-sm">장시간 이동도 편안한 시트</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}