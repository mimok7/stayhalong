export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">스테이하롱</h4>
            <p className="text-sm leading-relaxed mb-4">하롱베이 현지 전문 한국 여행사로, 안전하고 특별한 베트남 여행을 제공합니다.</p>
            <div className="flex space-x-3">
              <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs cursor-pointer">f</span>
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-xs cursor-pointer">K</span>
              <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs cursor-pointer">N</span>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">주요 서비스</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/cruises" className="hover:text-white">하롱베이 크루즈</a></li>
              <li><a href="/services/airport-transfer" className="hover:text-white">공항 픽업/샌딩</a></li>
              <li><a href="/services/korean-guide" className="hover:text-white">한국어 가이드 투어</a></li>
              <li><a href="/services/hotels" className="hover:text-white">호텔 예약</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">고객 지원</h5>
            <ul className="space-y-2 text-sm">
              <li>24시간 카카오톡 상담</li>
              <li>여행 중 긴급 지원</li>
              <li>취소/변경 정책</li>
              <li>자주 묻는 질문</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">회사 정보</h5>
            <ul className="space-y-2 text-sm">
              <li>📞 070-4554-5185</li>
              <li>📧 stayhalong@gmail.com</li>
              <li>📍 하롱시, 베트남</li>
              <li>🏢 사업자번호: 2500707601</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
          <p>&copy; 2025 스테이하롱 (Stay Halong) - CONG TY TENPER COMMUNICATIONS. 모든 권리 보유.</p>
          <p className="mt-2">대표: KIM DONG HYUN | 사업자등록번호: 2500707601</p>
        </div>
      </div>
    </footer>
  );
}
