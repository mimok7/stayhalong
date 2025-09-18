"use client";

import Image from "next/image";
import Link from "next/link";

export default function TwoNightsThreeDaysPage() {
  const cruises = [
    {
      id: "calista",
      name: "Calista Cruise",
      style: "모던 럭셔리",
      rooms: 38,
      launched: "2024",
      originalPrice: 320,
      currentPrice: 256,
      discount: 20,
      rating: 5.0,
      reviews: 0,
      description: "2024년 런칭된 최신 럭셔리 크루즈. 그리스 미의 여신 칼리스타의 이름을 딴 우아한 디자인과 뛰어난 서비스로 하롱베이의 아름다움을 극대화합니다.",
      features: ["무료 요리 시연", "공용 자쿠지", "무료 카약", "4계절 수영장", "스파 및 마사지", "피트니스 센터"],
      image: "/images/calista-exterior-1.jpg"
    },
    {
      id: "ambassador",
      name: "Ambassador Cruise",
      style: "모던 인터내셔널",
      rooms: 46,
      launched: "2018",
      originalPrice: 351,
      currentPrice: 263,
      discount: 25,
      rating: 5.0,
      reviews: 407,
      description: "하롱베이에서 가장 크고 최신식인 스틸 선박. 미슐랭 수준의 메뉴, 하롱베이 유일의 야외 자쿠지, 라이브 음악과 전문 버틀러 서비스까지 완벽한 럭셔리를 제공합니다.",
      features: ["라이브 음악", "무료 셔틀", "야간 오징어 낚시", "요리 시연", "미슐랭급 메뉴", "전문 버틀러"],
      image: "/images/ambassador-exterior-1.jpg"
    },
    {
      id: "hermes",
      name: "Hermes Cruise",
      style: "모던 엘레간트",
      rooms: 18,
      launched: "2022",
      originalPrice: 301,
      currentPrice: 241,
      discount: 20,
      rating: 4.8,
      reviews: 32,
      description: "그리스 신 헤르메스의 이름을 딴 럭셔리 아이언 크루즈. 하롱베이 크루즈 중 유일하게 2개의 야외 수영장을 보유하여 최고의 휴식을 선사합니다.",
      features: ["야외 수영장 2개", "무료 셔틀", "야간 낚시", "스파", "피트니스", "요리 시연"],
      image: "/images/hermes-exterior-1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-purple-200 hover:text-white">
              ← 홈으로 돌아가기
            </Link>
            <span className="text-purple-200">|</span>
            <span className="text-sm text-purple-200">크루즈 상품</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">2박 3일 크루즈 상품</h1>
          <p className="text-xl text-purple-100">
            하롱베이를 여유롭게 즐길 수 있는 프리미엄 2박 3일 크루즈 여행
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Cruise Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {cruises.map((cruise) => (
            <div key={cruise.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-purple-500 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {cruise.discount}% 할인
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cruise.name}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cruise.rooms}개 객실
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cruise.style}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cruise.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-gray-400 line-through">${cruise.originalPrice}</span>
                    <span className="text-2xl font-bold text-purple-600 ml-2">${cruise.currentPrice}</span>
                    <span className="text-gray-600">/인</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>⭐ {cruise.rating}</span>
                      <span>({cruise.reviews} 리뷰)</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {cruise.features.slice(0, 3).map((feature, index) => (
                      <span key={index}>• {feature}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/cruises/2-nights-3-days/${cruise.id}`}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-center block font-medium"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Info */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2박 3일 크루즈 상품 포함 사항</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="font-bold mb-2">숙박</h3>
              <p className="text-gray-600 text-sm">크루즈 내 프리미엄 객실 2박</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-bold mb-2">식사</h3>
              <p className="text-gray-600 text-sm">전일 조식, 중식, 석식 포함</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚤</span>
              </div>
              <h3 className="font-bold mb-2">크루즈 투어</h3>
              <p className="text-gray-600 text-sm">하롱베이 심층 관광</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏝️</span>
              </div>
              <h3 className="font-bold mb-2">섬 투어</h3>
              <p className="text-gray-600 text-sm">란하베이 또는 주변 섬 관광</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-bold mb-2">픽업/샌딩</h3>
              <p className="text-gray-600 text-sm">하노이 공항 ↔ 크루즈 선착장</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-bold mb-2">가이드</h3>
              <p className="text-gray-600 text-sm">한국어 전문 가이드</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}