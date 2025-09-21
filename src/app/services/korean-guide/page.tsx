"use client";

import Link from "next/link";

// Tour 타입 정의: 최소한의 프로퍼티만 선언하여 현재 페이지에서 사용하는 필드들에 타입 적용
interface Tour {
  id: string;
  name?: string;
  image?: string;
  price?: string | number;
  duration?: string;
  groupSize?: string;
  description?: string;
  highlights?: string[];
  // 상세 페이지에서 사용되는 선택적 필드들
  pricingTable?: Array<Record<string, unknown>>;
  included?: string[];
  notIncluded?: string[];
  notices?: string[];
  payment?: string[];
  reservation?: string[];
  cancellation?: string[];
}

export default function KoreanGuidePage() {
  const tours: Tour[] = [
    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">한국어 가이드 투어</h1>
          <p className="text-xl text-indigo-100">
            전문 한국어 가이드와 함께하는 베트남 여행
          </p>
        </div>
      </header>
      
  {/* Korean Guide Gallery */}
  <section className="bg-white rounded-2xl shadow-lg p-4 mt-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">한국어 가이드 상세 연결</h2>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7697?fromList=true&menuId=617&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/korean-guide/1 (2).png" alt="하노이 이미지 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/5104?fromList=true&menuId=617&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/korean-guide/temple.jpg" alt="하노이 이미지 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3603?fromList=true&menuId=617&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/korean-guide/hanoi_affter.jpg" alt="사원 이미지" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>

            <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2667?fromList=true&menuId=617&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/korean-guide//hanoi.jpg" alt="가이드 이미지" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
  <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tour Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-36 relative overflow-hidden">
                {/* 배경 이미지 */}
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{backgroundImage: `url('${tour.image}')`}}></div>
                <div className="absolute bottom-2 left-3 text-white">
                  <span className="bg-black/70 text-white px-2 py-0 rounded-full text-xs font-bold leading-tight flex items-center gap-1 backdrop-blur-sm">
                    <span className="text-yellow-400">💰</span>
                    {tour.price}백만 VND/인
                  </span>
                </div>
              </div>
              <div className="p-4">
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
                    {(tour.highlights || []).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-indigo-500">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
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

  {/* 'Why Choose Korean Guide' section removed */}
        {/* Naver Cafe Link */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">네이버 카페 자세한 정보</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              스테이하롱 네이버 카페에서 한국어 가이드 투어에 대한 자세한 정보와 실제 이용자 후기를 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a
                href="https://cafe.naver.com/stayhalong"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium inline-flex items-center gap-2"
              >
                <span>스테이하롱 카페 홈</span>
                <span>↗️</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}