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
        return "bg-blue-50 text-blue-600";
      case "2박3일":
        return "bg-teal-50 text-teal-600";
      case "당일":
        return "bg-orange-50 text-orange-600";
      default:
        return "bg-purple-50 text-purple-600";
    }
  }

  function getCategoryPrice(category: string): string {
    switch (category) {
      case "1박2일":
        return "1,510,000 VND 부터";
      case "2박3일":
        return "2,200,000 VND 부터";
      case "당일":
        return "850,000 VND 부터";
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
      subtitle: `다양한 크루즈 · 다수의 객실`,
      description: getCategoryDescription(category),
      icon: getCategoryIcon(category),
      colorClass: getCategoryColor(category),
      href: getCategoryHref(category),
      duration: category,
      price: getCategoryPrice(category),
      features: getCategoryFeatures(category),
      cruises: uniqueCruises,
      roomCount: categoryCruises.length
    };
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span>🇻🇳</span>
            스테이하롱 크루즈 서비스
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            하롱베이 크루즈
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            세계자연유산 하롱베이에서 즐기는 다양한 크루즈 옵션을 만나보세요.
            <br className="hidden md:block" />
            스테이하롱이 엄선한 최고의 크루즈 상품들을 제공합니다.
          </p>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-900 font-medium">Cruises</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Introduction */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Premium Cruise Service</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              하롱베이 현지 전문가들이 엄선한 다양한 크루즈 옵션을 한 번에 비교하고 예약하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "맞춤형 추천", desc: "고객의 예산과 선호도에 맞는 최적의 크루즈 추천", icon: "🎯" },
              { title: "최적가 보장", desc: "현지 직접 운영으로 최저가 크루즈 상품 제공", icon: "💰" },
              { title: "안전 보장", desc: "정식 등록 여행사의 신뢰할 수 있는 예약 시스템", icon: "🛡️" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl mb-6 text-brand-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cruise Categories */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">크루즈 상품 카테고리</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cruiseCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 ${category.colorClass}`}>
                    {category.icon}
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium">{category.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed min-h-[3rem]">
                    {category.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xs">✓</div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-lg font-bold text-slate-900">{category.price}</span>
                    <span className="text-brand-600 font-medium group-hover:translate-x-1 transition-transform">
                      상품 보기 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Our Cruise Service */}
        <section className="bg-brand-900 rounded-3xl p-12 text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Stay Halong?</h2>
              <p className="text-brand-200 text-lg">현지 전문가가 제공하는 차별화된 서비스</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "다양한 옵션", desc: "럭셔리부터 가성비까지 모든 크루즈 옵션 제공", icon: "🎯" },
                { title: "한국어 지원", desc: "예약부터 여행까지 완벽한 한국어 서비스", icon: "💬" },
                { title: "24시간 지원", desc: "여행 중 언제든 연락 가능한 현지 지원팀", icon: "📞" },
                { title: "안전 보장", desc: "정식 등록 여행사의 신뢰할 수 있는 서비스", icon: "🛡️" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-3xl shadow-lg p-12 text-center border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">크루즈 상담 및 예약</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            하롱베이 크루즈 전문가와 상담하여 최적의 크루즈를 선택하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-yellow-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>💬</span> 카카오톡 상담하기
            </a>
            <a
              href="https://cafe.naver.com/stayhalong"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <span>🏢</span> 네이버 카페 방문
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <span>📞 070-4554-5185</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>📧 support@stayhalong.com</span>
          </div>
        </section>
      </main>
    </div>
  );
}