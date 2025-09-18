"use client";

import Link from "next/link";

export default function KoreanGuidePage() {
  const tours = [
    {
      id: "halong-cruise",
      name: "하롱베이 크루즈 투어",
      duration: "1박 2일",
      price: 50,
      groupSize: "최대 15명",
      description: "하롱베이 크루즈 여행 전문 한국어 가이드와 함께하는 프리미엄 투어",
      highlights: ["크루즈 탑승", "동굴 탐험", "카약 체험", "전통 마을 방문"]
    },
    {
      id: "halong-day",
      name: "하롱베이 당일 투어",
      duration: "4-6시간",
      price: 30,
      groupSize: "최대 20명",
      description: "하롱베이의 아름다운 경치를 하루 만에 경험하는 당일 투어",
      highlights: ["크루즈 관광", "동굴 탐험", "섬 트레킹", "전통 점심"]
    },
    {
      id: "hanoi-city",
      name: "하노이 시내 투어",
      duration: "4시간",
      price: 25,
      groupSize: "최대 15명",
      description: "하노이의 역사와 문화를 깊이 있게 탐방하는 시내 투어",
      highlights: ["호치민 묘", "문묘", "호안끼엠 호", "옛 거리 탐방"]
    },
    {
      id: "sapa-mountain",
      name: "사파 산악 투어",
      duration: "2박 3일",
      price: 80,
      groupSize: "최대 12명",
      description: "베트남 북부의 아름다운 산악 지역 사파를 탐험하는 투어",
      highlights: ["소수민족 마을", "팡시 팬 전망대", "계단밭 트레킹", "전통 문화 체험"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">한국어 가이드 투어</h1>
          <p className="text-xl text-indigo-100">
            전문 한국어 가이드와 함께하는 베트남 여행
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Tour Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white text-indigo-800 px-3 py-1 rounded-full text-sm font-bold">
                    ${tour.price} VND/인
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {tour.duration}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {tour.groupSize}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {tour.description}
                </p>
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-indigo-500">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guide Info */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">한국어 가이드 소개</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-700">👨‍🏫 가이드 자격</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>한국어 능통자 (TOPIK 6급 이상)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>베트남 관광안내사 자격증 보유</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>3년 이상 현장 경험</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>응급처치 및 안전 교육 이수</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-700">💬 서비스 특징</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>실시간 한국어 해설</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>문화적 차이점 설명</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>맞춤형 일정 조율</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>24시간 긴급 지원</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Korean Guide */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">왜 한국어 가이드 투어를 선택해야 할까요?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="font-bold mb-2">언어 장벽 해소</h3>
              <p className="text-gray-600 text-sm">어려움 없이 현지 문화와 역사를 이해</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold mb-2">맞춤형 서비스</h3>
              <p className="text-gray-600 text-sm">여행 스타일에 맞는 최적의 일정</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold mb-2">안전 우선</h3>
              <p className="text-gray-600 text-sm">위급 상황 발생 시 즉각 대응</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold mb-2">가성비 우수</h3>
              <p className="text-gray-600 text-sm">합리적인 가격으로 프리미엄 서비스</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}