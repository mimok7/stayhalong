"use client";

import Link from "next/link";

export default function DayCruisesPage() {
  const cruises = [
    {
      id: "calista",
      name: "Calista Cruise",
      style: "모던 럭셔리",
      duration: "4-6시간",
      originalPrice: 85,
      currentPrice: 68,
      discount: 20,
      rating: 5.0,
      reviews: 0,
      description: "2024년 런칭된 최신 럭셔리 크루즈로 즐기는 당일 크루즈 투어. 하롱베이의 아름다운 경치를 단 하루 만에 경험할 수 있습니다.",
      features: ["무료 요리 시연", "공용 자쿠지", "무료 카약", "4계절 수영장"],
      image: "/images/calista-exterior-1.jpg"
    },
    {
      id: "ambassador",
      name: "Ambassador Cruise",
      style: "모던 인터내셔널",
      duration: "4-6시간",
      originalPrice: 94,
      currentPrice: 70,
      discount: 25,
      rating: 5.0,
      reviews: 407,
      description: "하롱베이에서 가장 크고 최신식인 스틸 선박으로 즐기는 당일 크루즈. 미슐랭 수준의 런치와 다양한 액티비티를 제공합니다.",
      features: ["라이브 음악", "야간 오징어 낚시", "요리 시연", "미슐랭급 메뉴"],
      image: "/images/ambassador-exterior-1.jpg"
    },
    {
      id: "hermes",
      name: "Hermes Cruise",
      style: "모던 엘레간트",
      duration: "4-6시간",
      originalPrice: 80,
      currentPrice: 64,
      discount: 20,
      rating: 4.8,
      reviews: 32,
      description: "그리스 신 헤르메스의 이름을 딴 럭셔리 아이언 크루즈. 2개의 야외 수영장을 갖춘 당일 크루즈로 최고의 휴식을 선사합니다.",
      features: ["야외 수영장 2개", "야간 낚시", "스파", "요리 시연"],
      image: "/images/hermes-exterior-1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 via-green-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">원데이 크루즈 상품</h1>
          <p className="text-xl text-green-100">
            하롱베이의 아름다움을 하루 만에 경험하는 당일 크루즈 투어
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Cruise Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cruises.map((cruise) => (
            <div key={cruise.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    {cruise.discount}% 할인
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cruise.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {cruise.duration}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {cruise.style}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {cruise.description}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-gray-400 line-through text-sm">${cruise.originalPrice} VND</span>
                    <span className="text-xl font-bold text-green-600 ml-1">${cruise.currentPrice} VND</span>
                    <span className="text-gray-600 text-sm">/인</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <span>⭐ {cruise.rating}</span>
                      <span>({cruise.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    {cruise.features.slice(0, 2).map((feature, index) => (
                      <span key={index}>• {feature}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/cruises/day-cruises/${cruise.id}`}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-center block text-sm font-medium"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Info */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">원데이 크루즈 상품 포함 사항</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚤</span>
              </div>
              <h3 className="font-bold mb-2">크루즈 투어</h3>
              <p className="text-gray-600 text-sm">하롱베이 크루즈 관광 (4-6시간)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-bold mb-2">식사</h3>
              <p className="text-gray-600 text-sm">런치 포함 (음료 별도)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛶</span>
              </div>
              <h3 className="font-bold mb-2">액티비티</h3>
              <p className="text-gray-600 text-sm">카약, 동굴 탐험 등</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-bold mb-2">픽업/샌딩</h3>
              <p className="text-gray-600 text-sm">하노이 시내 ↔ 크루즈 선착장</p>
            </div>
          </div>
        </section>

        {/* Time Schedule */}
        <section className="mt-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">원데이 크루즈 일정 예시</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 text-right font-bold text-green-700">08:00</div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold">하노이 출발</h3>
                  <p className="text-gray-600 text-sm">호텔 또는 지정 장소에서 픽업</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-right font-bold text-green-700">10:00</div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold">크루즈 승선</h3>
                  <p className="text-gray-600 text-sm">하롱베이 선착장에서 크루즈 탑승</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-right font-bold text-green-700">11:00</div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold">크루즈 투어</h3>
                  <p className="text-gray-600 text-sm">하롱베이 관광 및 액티비티</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-right font-bold text-green-700">13:00</div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold">런치</h3>
                  <p className="text-gray-600 text-sm">크루즈에서 런치 즐기기</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-right font-bold text-green-700">16:00</div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-bold">하노이 귀환</h3>
                  <p className="text-gray-600 text-sm">선착장에서 하노이로 이동</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}