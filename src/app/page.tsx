import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans flex flex-col pt-20">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-normal text-slate-900 mb-4 tracking-tight">
            어떤 서비스 이용을 원하시나요?
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            원하시는 서비스를 클릭하시면 해당 페이지로 이동 합니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-4xl justify-center">
          {/* New Reservation Button */}
          <a
            href="https://customer.stayhalong.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full md:w-[320px] h-[120px] rounded-[40px] bg-gradient-to-b from-[#7CA6B3] to-[#6B909C] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-3xl font-medium text-white tracking-wide drop-shadow-md">
              신규 예약신청
            </span>
          </a>

          {/* Check Reservation Button */}
          <a
            href="https://customer.stayhalong.com/check"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full md:w-[320px] h-[120px] rounded-[40px] bg-gradient-to-b from-[#5B8CA3] to-[#4A788E] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-3xl font-medium text-white tracking-wide drop-shadow-md">
              나의 예약확인
            </span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#64748b] text-white">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white/90">
                TENPER COMMUNICATIONS <span className="font-normal text-white/70">VIET NAM | 스테이하롱 트래블</span>
              </h2>
              <p className="text-xs text-white/70 leading-relaxed">
                dịch vụ cao cấp, Khu, Tòa nhà S2, Lô HH05, Bến Đoan, Hồng Gai, Hạ Long, Quảng Ninh
              </p>
              <div className="text-xs text-white/70 space-y-1">
                <p><span className="font-bold">대표자</span> VU KIEU NHUNG / KIM DONG HYUN</p>
                <p>
                  <span className="font-bold">대표전화</span> 070-4554-5185
                  <span className="mx-2">|</span>
                  <span className="font-bold">이메일</span> stayhalong@gmail.com
                  <span className="mx-2">|</span>
                  <span className="font-bold">제휴문의</span> partner@stayhalong.com
                </p>
                <p><span className="font-bold">베트남 법인등록번호</span> 250-0707-601</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center">
              {/* Cat Logo in Footer */}
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12">
                  {/* Placeholder for cat logo if image not available, using emoji or shape */}
                  <div className="absolute inset-0 bg-slate-800 rounded-full flex items-center justify-center text-2xl">
                    🐱
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 tracking-widest uppercase">A FRIEND FOR YOUR ENJOYABLE TRAVEL</span>
                  <span className="text-xl font-bold text-white tracking-tighter">스테이하롱트래블</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Partners */}
        <div className="bg-white py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
              {/* Partner Logos - Using text placeholders for now as I don't have the assets */}
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">AMBASSADOR<br />CRUISE</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">CAPELLA<br />CRUISE</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">Catherine Cruise</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">GRAND PIONEERS</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">CALISTA</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">HYATT<br />PLACE</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">LYRA<br />CRUISE COLLECTION</div>
              <div className="h-8 flex items-center text-slate-400 font-serif font-bold text-xs tracking-widest border-b border-slate-300 pb-1">SAQUILA<br />YACHT</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}