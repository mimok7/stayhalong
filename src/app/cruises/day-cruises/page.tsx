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
          <h1 className="text-3xl font-bold mb-2">원데이 크루즈 상품</h1>
          <p className="text-xl text-green-100">
            하롱베이의 아름다움을 하루 만에 경험하는 당일 크루즈 투어
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">

        {/* Image Gallery */}
        <section className="bg-white rounded-2xl shadow-lg pt-2 pb-2 px-8 mt-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a
              href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/9405?fromList=true&menuId=128&tc=cafe_article_list"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1.png" alt="원데이 이미지 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/9006?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1 (1).png" alt="원데이 이미지 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7251?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1 (2).png" alt="원데이 이미지 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6113?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1 (3).png" alt="원데이 이미지 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6091?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1 (4).png" alt="원데이 이미지 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4143?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1 (5).png" alt="원데이 이미지 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2597?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/8.png" alt="원데이 이미지 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/504?fromList=true&menuId=128&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/day-cruise/1 (6).png" alt="원데이 이미지 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>
          </div>
        </section>

        {/* Service Info */}
        <section className="mt-6 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">원데이 크루즈 상품 포함 사항</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🚤</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">크루즈 투어</h3>
                <p className="text-gray-600 text-sm">하롱베이 크루즈 관광 (4-6시간)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">식사</h3>
                <p className="text-gray-600 text-sm">런치 포함 (음료 별도)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🛶</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">액티비티</h3>
                <p className="text-gray-600 text-sm">카약, 동굴 탐험 등</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🚌</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-1">픽업/샌딩</h3>
                <p className="text-gray-600 text-sm">하노이 시내 ↔ 크루즈 선착장(유료 및 무료)</p>
              </div>
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