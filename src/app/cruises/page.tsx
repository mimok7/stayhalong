import Link from "next/link";
import { getAllCruiseInfos, getUniqueCategories } from "../../data/cruises";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하롱베이 크루즈 | Stay Halong",
  description: "하롱베이 크루즈 여행 옵션을 확인하세요. 1박2일, 2박3일, 당일 크루즈 등 다양한 옵션으로 세계자연유산 하롱베이를 경험해보세요.",
  keywords: "하롱베이 크루즈, 베트남 크루즈, 하롱베이 여행, 크루즈 예약",
};

export default function CruisesPage() {
  const cruiseInfos = getAllCruiseInfos();
  const categories = getUniqueCategories();

  // 헬퍼 함수들
  function getCategoryDescription(category: string): string {
    switch (category) {
      case "1박2일":
        return "하롱베이의 아름다움을 만끽할 수 있는 최적의 여행 기간으로 다양한 크루즈 옵션을 제공합니다.";
      case "2박3일":
        return "충분한 시간을 가지고 하롱베이를 깊이 있게 경험할 수 있는 여유로운 여행입니다.";
      case "당일":
        return "하루 만에 하롱베이의 핵심 명소를 둘러보는 효율적인 여행 옵션입니다.";
      default:
        return "하롱베이 크루즈 여행을 즐겨보세요.";
    }
  }

  function getCategoryIcon(category: string): string {
    switch (category) {
      case "1박2일":
        return "🚢";
      case "2박3일":
        return "🏝️";
      case "당일":
        return "☀️";
      default:
        return "🛳️";
    }
  }

  function getCategoryColor(category: string): string {
    switch (category) {
      case "1박2일":
        return "from-blue-600 to-cyan-600";
      case "2박3일":
        return "from-green-600 to-emerald-600";
      case "당일":
        return "from-orange-600 to-red-600";
      default:
        return "from-purple-600 to-pink-600";
    }
  }

  function getCategoryPrice(category: string): string {
    switch (category) {
      case "1박2일":
        return "151USD부터";
      case "2박3일":
        return "220USD부터";
      case "당일":
        return "85USD부터";
      default:
        return "문의";
    }
  }

  function getCategoryHref(category: string): string {
    switch (category) {
      case "1박2일":
        return "/cruises/1-night-2-days";
      case "2박3일":
        return "/cruises/2-nights-3-days";
      case "당일":
        return "/cruises/day-cruises";
      default:
        return "/cruises";
    }
  }

  function getCategoryFeatures(category: string): string[] {
    switch (category) {
      case "1박2일":
        return ["숙박 포함", "식사 3회", "크루즈 투어", "액티비티"];
      case "2박3일":
        return ["숙박 포함", "식사 6회", "크루즈 투어", "다양한 액티비티"];
      case "당일":
        return ["점심 포함", "크루즈 투어", "동굴 탐험", "카약"];
      default:
        return ["크루즈 투어", "식사 포함"];
    }
  }

  // 카테고리별 크루즈 그룹화
  const cruiseCategories = categories.map(category => {
    const categoryCruises = cruiseInfos.filter(cruise => cruise.category === category);
    const uniqueCruises = [...new Set(categoryCruises.map(c => c.cruiseName))];

    return {
      id: category.toLowerCase().replace(/\s+/g, '-'),
      title: `${category} 크루즈`,
      subtitle: `${uniqueCruises.length}개 크루즈 · ${categoryCruises.length}개 객실`,
      description: getCategoryDescription(category),
      icon: getCategoryIcon(category),
      color: getCategoryColor(category),
      href: getCategoryHref(category),
      duration: category,
      price: getCategoryPrice(category),
      features: getCategoryFeatures(category),
      cruises: uniqueCruises,
      roomCount: categoryCruises.length
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🇻🇳</span>
              스테이하롱 크루즈 서비스
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">하롱베이 크루즈</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              세계자연유산 하롱베이에서 즐기는 다양한 크루즈 옵션을 만나보세요. 
              스테이하롱이 엄선한 최고의 크루즈 상품들을 제공합니다.
            </p>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">홈</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">크루즈 서비스</span>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Service Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">스테이하롱 크루즈 중개 서비스</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              하롱베이 현지 전문가들이 엄선한 다양한 크루즈 옵션을 한 번에 비교하고 예약하세요. 
              Paradise Elegance, Calista, Ambassador 등 최고급 크루즈부터 가성비 좋은 크루즈까지 
              모든 옵션을 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">맞춤형 추천</h3>
              <p className="text-gray-600 text-sm">고객의 예산과 선호도에 맞는 최적의 크루즈 추천</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">최적가 보장</h3>
              <p className="text-gray-600 text-sm">현지 직접 운영으로 최저가 크루즈 상품 제공</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">안전 보장</h3>
              <p className="text-gray-600 text-sm">정식 등록 여행사의 신뢰할 수 있는 예약 시스템</p>
            </div>
          </div>
        </section>

        {/* Cruise Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">크루즈 상품 카테고리</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {cruiseCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className={`h-32 bg-gradient-to-r ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <div className="text-white font-bold text-xl">{category.title}</div>
                      <div className="text-white/80 text-sm">{category.subtitle}</div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {category.duration}
                    </span>
                    <span className="text-lg font-bold text-blue-600">{category.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium group-hover:text-blue-700">
                      상품 보기 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Our Cruise Service */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-12 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">왜 스테이하롱 크루즈를 선택해야 할까요?</h2>
            <p className="text-xl text-blue-100">현지 전문가가 제공하는 차별화된 서비스</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">다양한 옵션</h3>
              <p className="text-blue-100 text-sm">럭셔리부터 가성비까지 모든 크루즈 옵션 제공</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">한국어 지원</h3>
              <p className="text-blue-100 text-sm">예약부터 여행까지 완벽한 한국어 서비스</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24시간 지원</h3>
              <p className="text-blue-100 text-sm">여행 중 언제든 연락 가능한 현지 지원팀</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">안전 보장</h3>
              <p className="text-blue-100 text-sm">정식 등록 여행사의 신뢰할 수 있는 서비스</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">크루즈 상담 및 예약</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            하롱베이 크루즈 전문가와 상담하여 최적의 크루즈를 선택하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg inline-block text-center"
            >
              💬 카카오톡 크루즈 상담
            </a>
            <a
              href="https://cafe.naver.com/stayhalong"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all inline-block text-center"
            >
              🏢 네이버 카페 방문
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>📞 070-4554-5185 | 📧 stayhalong@gmail.com</p>
            <p className="mt-2">평균 응답 시간: 5분 이내</p>
          </div>
        </section>
      </main>
    </div>
  );
}