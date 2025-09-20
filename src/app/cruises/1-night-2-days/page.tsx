"use client";

export default function OneNightTwoDaysPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold mb-2">1박 2일 크루즈 상품</h1>
          <p className="text-xl text-blue-100">
            가장 인기 있는 크루즈 여행 상품
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Image Gallery */}
        <section className="bg-white rounded-2xl shadow-lg pt-4 pb-8 px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/8767?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/1.png"
                  alt="1박 2일 크루즈 이미지 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/7441?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/1 (1).png"
                  alt="1박 2일 크루즈 이미지 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/5930?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/1 (2).png"
                  alt="1박 2일 크루즈 이미지 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/5062?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/1 (3).png"
                  alt="1박 2일 크루즈 이미지 4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/4918?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/1 (4).png"
                  alt="1박 2일 크루즈 이미지 5"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/7256?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/17.png"
                  alt="1박 2일 크루즈 이미지 6"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/7456?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/ambassa_signa_1_2.png"
                  alt="Ambassador 크루즈 이미지"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/2593?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/capella_1.png"
                  alt="Capella 크루즈 이미지"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/2057?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/hermes.png"
                  alt="Hermes 크루즈 이미지"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <a
              href="https://cafe.naver.com/f-e/cafes/31003053/articles/6485?boardtype=I&menuid=493&referrerAllArticles=false"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="/1night2days/lyra_1.png"
                  alt="Lyra 크루즈 이미지"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
          </div>
        </section>

        {/* Service Info */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1박 2일 크루즈 상품 포함 사항</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="font-bold mb-2">숙박</h3>
              <p className="text-gray-600 text-sm">크루즈 내 프리미엄 객실 1박</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-bold mb-2">식사</h3>
              <p className="text-gray-600 text-sm">조식, 중식, 석식 포함 (음료 별도)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚤</span>
              </div>
              <h3 className="font-bold mb-2">크루즈 투어</h3>
              <p className="text-gray-600 text-sm">하롱베이 크루즈 관광</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛶</span>
              </div>
              <h3 className="font-bold mb-2">액티비티</h3>
              <p className="text-gray-600 text-sm">카약, 동굴 탐험 등</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-bold mb-2">픽업/샌딩</h3>
              <p className="text-gray-600 text-sm">하노이 공항 ↔ 크루즈 선착장(유료 및 무료)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-bold mb-2">가이드</h3>
              <p className="text-gray-600 text-sm">한국어 전문 가이드(선택 사항)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}