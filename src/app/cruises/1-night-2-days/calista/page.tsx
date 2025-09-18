"use client";

import Link from "next/link";

export default function CalistaOneNightPage() {
  const cruiseData = {
    id: "calista",
    name: "Calista Cruise",
    style: "모던 럭셔리",
    rooms: 38,
    launched: "2024",
    originalPrice: 210,
    currentPrice: 168,
    discount: 20,
    rating: 5.0,
    reviews: 0,
    description: "2024년 런칭된 최신 럭셔리 크루즈. 그리스 미의 여신 칼리스타의 이름을 딴 우아한 디자인과 뛰어난 서비스로 하롱베이의 아름다움을 극대화합니다.",
    features: ["무료 요리 시연", "공용 자쿠지", "무료 카약", "4계절 수영장", "스파 및 마사지", "피트니스 센터"],
    facilities: ["Wi-Fi", "레스토랑", "바", "룸서비스", "세탁서비스", "투어 데스크"],
    roomTypes: [
      {
        name: "Calista Bay Room",
        count: 10,
        size: "32m²",
        view: "오션 뷰",
        amenities: ["프라이빗 발코니", "에어컨", "미니바", "안전금고", "헤어드라이어"],
        description: "1층에 위치한 편안한 객실로 넓은 발코니에서 하롱베이의 아름다운 경치를 감상할 수 있습니다.",
        images: ["/images/calista-bay-room-1.jpg", "/images/calista-bay-room-2.jpg"]
      },
      {
        name: "Calista Legacy Room",
        count: 20,
        size: "33m²",
        view: "오션 뷰",
        amenities: ["프라이빗 발코니", "에어컨", "미니바", "안전금고", "헤어드라이어", "욕조"],
        description: "2-4층에 위치한 프리미엄 객실로 더욱 넓은 공간과 고급스러운 인테리어를 자랑합니다.",
        images: ["/images/calista-legacy-room-1.jpg", "/images/calista-legacy-room-2.jpg"]
      },
      {
        name: "Calista Horizon Room",
        count: 2,
        size: "65m²",
        view: "오션 뷰",
        amenities: ["대형 프라이빗 발코니", "거실 공간", "킹사이즈 침대", "고급 욕실", "미니바", "안전금고"],
        description: "4층에 위치한 넓은 스위트 룸으로 별도의 거실 공간과 대형 발코니를 갖추고 있습니다.",
        images: ["/images/calista-horizon-room-1.jpg", "/images/calista-horizon-room-2.jpg"]
      },
      {
        name: "Calista President Room",
        count: 1,
        size: "126m²",
        view: "오션 뷰",
        amenities: ["대형 거실", "별도 침실", "대형 욕실", "자쿠지", "프라이빗 다이닝", "컨시어지 서비스"],
        description: "3층에 위치한 최고급 프레지던트 스위트로 최대한의 편안함과 프라이버시를 제공합니다.",
        images: ["/images/calista-president-room-1.jpg", "/images/calista-president-room-2.jpg"]
      }
    ],
    images: ["/images/calista-exterior-1.jpg", "/images/calista-deck-1.jpg", "/images/calista-restaurant-1.jpg"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/cruises/1-night-2-days" className="text-blue-200 hover:text-white">
              ← 1박2일 크루즈 목록
            </Link>
            <span className="text-blue-200">|</span>
            <span className="text-sm text-blue-200">Calista Cruise</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{cruiseData.name}</h1>
          <p className="text-xl text-blue-100">
            1박 2일 럭셔리 크루즈 여행
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Cruise Overview */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">크루즈 소개</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cruiseData.rooms}개 객실
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cruiseData.style}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {cruiseData.launched}년 런칭
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {cruiseData.description}
              </p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">⭐</span>
                <span className="text-xl font-bold">{cruiseData.rating}</span>
                <span className="text-gray-600">({cruiseData.reviews} 리뷰)</span>
              </div>
              <div className="border-t pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through text-lg">${cruiseData.originalPrice}</span>
                    <span className="text-3xl font-bold text-blue-600 ml-2">${cruiseData.currentPrice}</span>
                    <span className="text-gray-600">/인</span>
                  </div>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium">
                    {cruiseData.discount}% 할인
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-64 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg mb-4"></div>
              <div className="grid grid-cols-3 gap-2">
                {cruiseData.images.slice(1).map((image, index) => (
                  <div key={index} className="h-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">객실 타입</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {cruiseData.roomTypes.map((room, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                      {room.size}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {room.count}개 객실
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {room.view}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {room.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    객실 선택
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities & Features */}
        <section className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">시설 및 서비스</h2>
            <div className="grid grid-cols-2 gap-4">
              {cruiseData.facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">특별 서비스</h2>
            <div className="space-y-4">
              {cruiseData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-blue-500">★</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">지금 바로 예약하세요</h2>
          <p className="text-blue-100 mb-6">
            특별 할인가로 Calista Cruise의 럭셔리한 1박 2일 여행을 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              💬 카카오톡 상담
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
              📞 전화 문의
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}