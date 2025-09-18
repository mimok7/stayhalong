"use client";

import Link from "next/link";

export default function HotelsPage() {
  const hotels = [
    {
      id: "hanoi-luxury",
      name: "하노이 럭셔리 호텔",
      location: "하노이 시내",
      category: "5성급",
      priceRange: "$150-300",
      rating: 4.8,
      reviews: 1250,
      description: "하노이 시내 중심에 위치한 최고급 호텔로 공항과 가까운 편리한 위치",
      features: ["공항 셔틀", "스파", "피트니스", "레스토랑", "룸서비스"],
      image: "/images/hanoi-luxury-hotel.jpg"
    },
    {
      id: "hanoi-boutique",
      name: "하노이 부티크 호텔",
      location: "옛 거리 인근",
      category: "4성급",
      priceRange: "$80-150",
      rating: 4.6,
      reviews: 890,
      description: "전통과 현대가 조화를 이루는 부티크 호텔로 하노이의 문화를 체험하기에 최적",
      features: ["전통 인테리어", "카페", "무료 Wi-Fi", "컨시어지"],
      image: "/images/hanoi-boutique-hotel.jpg"
    },
    {
      id: "halong-resort",
      name: "하롱베이 리조트",
      location: "하롱베이",
      category: "5성급",
      priceRange: "$200-400",
      rating: 4.9,
      reviews: 650,
      description: "하롱베이의 아름다운 바다를 바라보며 휴식할 수 있는 프리미엄 리조트",
      features: ["오션뷰", "프라이빗 비치", "스파", "수영장", "크루즈 픽업"],
      image: "/images/halong-resort.jpg"
    },
    {
      id: "halong-budget",
      name: "하롱베이 가성비 호텔",
      location: "하롱 시내",
      category: "3성급",
      priceRange: "$40-80",
      rating: 4.2,
      reviews: 1200,
      description: "합리적인 가격에 깨끗하고 편안한 시설을 제공하는 실용적인 호텔",
      features: ["깨끗한 시설", "무료 Wi-Fi", "에어컨", "24시간 리셉션"],
      image: "/images/halong-budget-hotel.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-900 via-pink-700 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-pink-200 hover:text-white">
              ← 홈으로 돌아가기
            </Link>
            <span className="text-pink-200">|</span>
            <span className="text-sm text-pink-200">서비스</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">베트남 호텔 예약</h1>
          <p className="text-xl text-pink-100">
            하노이와 하롱베이의 검증된 호텔을 특별가로 예약하세요
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hotel Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white text-pink-800 px-3 py-1 rounded-full text-sm font-bold">
                    {hotel.priceRange}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {hotel.location}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {hotel.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <span>⭐ {hotel.rating}</span>
                    <span>({hotel.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {hotel.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {hotel.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium">
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Benefits */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">스테이하롱 호텔 예약 서비스 혜택</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold mb-2">최저가 보장</h3>
              <p className="text-gray-600 text-sm">현지 네트워크를 통한 특별 협상가로 최저가 예약</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2">검증된 호텔</h3>
              <p className="text-gray-600 text-sm">스테이하롱이 직접 검증한 신뢰할 수 있는 호텔만 제공</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold mb-2">24시간 지원</h3>
              <p className="text-gray-600 text-sm">예약에서 체크인까지 전 과정 한국어 지원</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="font-bold mb-2">취소 수수료 없음</h3>
              <p className="text-gray-600 text-sm">여행 일정 변경 시 유연한 취소 정책</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="font-bold mb-2">특별 서비스</h3>
              <p className="text-gray-600 text-sm">공항 픽업, 웰컴 드링크 등 추가 서비스 제공</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold mb-2">VIP 서비스</h3>
              <p className="text-gray-600 text-sm">룸 업그레이드, 조식 포함 등 VIP 고객 혜택</p>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">간편한 호텔 예약 프로세스</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">문의 및 상담</h3>
                <p className="text-gray-600 text-sm">원하는 지역, 예산, 일정을 알려주세요</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">맞춤 추천</h3>
                <p className="text-gray-600 text-sm">여행 스타일에 맞는 호텔을 추천해드립니다</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">예약 확정</h3>
                <p className="text-gray-600 text-sm">실시간으로 호텔 예약을 진행합니다</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">바우처 발급</h3>
                <p className="text-gray-600 text-sm">예약 확인서와 이용 안내서를 보내드립니다</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}