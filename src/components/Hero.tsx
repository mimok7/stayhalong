"use client";

export default function Hero({
  title = "스테이하롱",
  subtitle = "Stay Halong",
  description = "하롱베이 현지 전문 한국 여행사",
}: {
  title?: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
          <span>🇻🇳</span>
          하롱베이 현지 전문 한국 여행사
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="block">{title}</span>
          <span className="block text-cyan-200">{subtitle}</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://pf.kakao.com/_zvsxaG/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg inline-block text-center"
          >
            💬 카카오톡 상담하기
          </a>
          <a
            href="https://cafe.naver.com/stayhalong"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all inline-block text-center"
          >
            🏢 네이버 카페 방문
          </a>
        </div>
      </div>
    </section>
  );
}
