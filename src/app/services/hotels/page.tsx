"use client";

import Link from "next/link";

export default function HotelsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-900 via-pink-700 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">베트남 호텔 예약</h1>
          <p className="text-xl text-pink-100">
            하노이와 하롱베이의 검증된 호텔을 특별가로 예약하세요
          </p>
        </div>
      </header>

      {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 py-4">
        

        {/* Hotels Gallery (Naver Cafe 링크) */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">호텔 상세 링크 안내</h2>
          <div className="max-w-7xl mx-auto px-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/8101?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/1.png" alt="호텔 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/7025?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/2.png" alt="호텔 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/6805?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/3.png" alt="호텔 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4474?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/4.jpg" alt="호텔 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4356?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/5.jpg" alt="호텔 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4124?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/6.jpg" alt="호텔 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/4080?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/7.jpg" alt="호텔 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3720?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/8.jpg" alt="호텔 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3717?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/9.jpg" alt="호텔 9" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3527?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/10.jpg" alt="호텔 10" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/3477?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/11.jpg" alt="호텔 11" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2674?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/12.jpg" alt="호텔 12" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2619?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/13.jpg" alt="호텔 13" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/2497?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/14.jpg" alt="호텔 14" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>

              <a href="https://m.cafe.naver.com/ca-fe/web/cafes/31003053/articles/859?fromList=true&menuId=559&tc=cafe_article_list" target="_blank" rel="noopener noreferrer" className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src="/hotel/15.jpg" alt="호텔 15" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">호텔 예약 서비스 혜택</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">최저가 보장</h3>
                <p className="text-gray-600 text-sm">현지 네트워크를 통한 특별 협상가로 최저가 예약</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">검증된 호텔</h3>
                <p className="text-gray-600 text-sm">스테이하롱이 직접 검증한 신뢰할 수 있는 호텔만 제공</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">24시간 지원</h3>
                <p className="text-gray-600 text-sm">예약에서 체크인까지 전 과정 한국어 지원</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🚫</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">취소 수수료 없음</h3>
                <p className="text-gray-600 text-sm">여행 일정 변경 시 유연한 취소 정책</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">🏨</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">특별 서비스</h3>
                <p className="text-gray-600 text-sm">공항 픽업, 웰컴 드링크 등 추가 서비스 제공</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">VIP 서비스</h3>
                <p className="text-gray-600 text-sm">룸 업그레이드, 조식 포함 등 VIP 고객 혜택</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">간편한 호텔 예약 프로세스</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 items-stretch">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mt-1 text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">문의 및 상담</h3>
                  <p className="text-gray-600 text-sm">원하는 지역, 예산, 일정을 알려주세요</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mt-1 text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">맞춤 추천</h3>
                  <p className="text-gray-600 text-sm">여행 스타일에 맞는 호텔을 추천해드립니다</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mt-1 text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">예약 확정</h3>
                  <p className="text-gray-600 text-sm">실시간으로 호텔 예약을 진행합니다</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mt-1 text-lg font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">바우처 발급</h3>
                  <p className="text-gray-600 text-sm">예약 확인서와 이용 안내서를 보내드립니다</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}