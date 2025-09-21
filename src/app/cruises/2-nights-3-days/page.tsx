"use client";

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
          <h1 className="text-4xl font-bold mb-2">2박 3일 크루즈 상품</h1>
          <p className="text-xl text-purple-100">
            하롱베이를 여유롭게 즐길 수 있는 <br />프리미엄 2박 3일 크루즈 여행
          </p>
        </div>
      </header>

      {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Cruise Grid removed — showing gallery only */}
        {/* Image Gallery */}
  <section className="bg-white rounded-2xl shadow-lg pt-2 pb-2 px-8 mt-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a
              href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7659?fromList=true&menuId=686&tc=cafe_article_list"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/2night3days/capella_2night.png"
                  alt="2박 3일 이미지 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>

            <a
              href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7658?fromList=true&menuId=686&tc=cafe_article_list"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/2night3days/catherine_2day.png"
                  alt="2박 3일 이미지 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>

            <a
              href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7657?fromList=true&menuId=686&tc=cafe_article_list"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/2night3days/grand_2day.png"
                  alt="2박 3일 이미지 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>

          </div>
        </section>

        {/* Service Info */}
  <section className="mt-6 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2박 3일 크루즈 상품 포함 사항</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🏨</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">숙박</h3>
                <p className="text-gray-600 text-sm">크루즈 내 프리미엄 객실 2박</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">식사</h3>
                <p className="text-gray-600 text-sm">전일 조식, 중식, 석식 포함</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🚤</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">크루즈 투어</h3>
                <p className="text-gray-600 text-sm">하롱베이 심층 관광</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🏝️</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">섬 투어</h3>
                <p className="text-gray-600 text-sm">란하베이 또는 주변 섬 관광</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🚌</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">픽업/샌딩</h3>
                <p className="text-gray-600 text-sm">하노이 공항 ↔ 크루즈 선착장(유료 및 무료)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">가이드</h3>
                <p className="text-gray-600 text-sm">한국어 전문 가이드(선택사항)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}