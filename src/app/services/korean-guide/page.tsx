"use client";

import Link from "next/link";

export default function KoreanGuidePage() {
  const tours = [
    {
      id: "hanoi-history-tour",
      name: "하노이 역사투어",
      duration: "당일",
      price: 45, // 1인 기준 4,500,000동 (백만 단위로 표시)
      groupSize: "1-9인",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=300&fit=crop",
      description: "하노이의 역사와 문화를 깊이 있게 탐방하는 한국어 가이드 투어 - 세레네 스파와 시티투어 버스 티켓 포함",
      highlights: ["하노이 역사 투어", "세레네 스파", "시티투어 버스", "한국어 가이드", "리무진 차량"],
      pricingTable: [
        { people: "1인 투어", perPerson: "4,500,000동", vehicle: "승용차", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "2인 투어", perPerson: "2,750,000동", vehicle: "승용차", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "3인 투어", perPerson: "2,400,000동", vehicle: "SUV", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "4인 투어", perPerson: "2,000,000동", vehicle: "카니발", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "5인 투어", perPerson: "1,800,000동", vehicle: "9인승 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "6인 투어", perPerson: "1,750,000동", vehicle: "9인승 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "7인 투어", perPerson: "1,700,000동", vehicle: "9인승 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "8인 투어", perPerson: "1,650,000동", vehicle: "11인승 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "9인 투어", perPerson: "1,600,000동", vehicle: "11인승 리무진", deposit: "20%", payment: "투어당일 현금지불" }
      ],
      vehicleInfo: [
        "차량 내 생수 1인당 1병 제공",
        "에어컨 완비 및 쾌적한 실내 환경",
        "안전벨트 및 안전시설 완비",
        "가이드의 안전운전 및 친절한 서비스",
        "픽업/드롭오프 서비스 (호텔 ↔ 관광지)"
      ],
      vehicleUpgrade: [
        { from: "승용차", to: "스테이하롱 리무진", cost: "500,000동 추가" },
        { from: "SUV", to: "스테이하롱 리무진", cost: "300,000동 추가" },
        { from: "카니발", to: "스테이하롱 리무진", cost: "200,000동 추가" },
        { from: "9인승 리무진", to: "스테이하롱 리무진", cost: "100,000동 추가" },
        { from: "11인승 리무진", to: "스테이하롱 리무진", cost: "50,000동 추가" }
      ],
      included: [
        "한국어 가이드 동행 (하노이 역사 및 문화 해설)",
        "전문 리무진 차량 이용",
        "세레네 스파 60분 아로마 마사지",
        "하노이 시티투어 버스 티켓 (1일권)",
        "각 관광지 입장료",
        "차량 내 생수 제공",
        "안전 및 긴급 상황 대응"
      ],
      notIncluded: [
        "개인 경비 (음료, 간식 등)",
        "여행자 보험",
        "점심 식사 (별도 지불)",
        "기념품 및 쇼핑 비용",
        "호텔 픽업/드롭오프 외 추가 이동",
        "가이드 팁 (선택사항)"
      ],
      notices: [
        "아로마 마사지 60분을 제외하시는 경우 1인당 50만동씩이 공제 됩니다.",
        "3세 미만 유아는 요금이 적용되지 않습니다.",
        "투어는 하노이의 주요 역사적 명소를 중심으로 진행됩니다.",
        "기상악화 등으로 인한 투어 변경 시 사전 안내 드립니다.",
        "가이드는 한국어 능통자로 문화적 차이를 고려한 친절한 서비스를 제공합니다."
      ],
      reservation: [
        "카카오채널을 통해 예약 신청을 해주세요.",
        "예약 신청 후 상담을 통해 최종 일정 및 요금을 안내 드립니다.",
        "예약금은 투어 총액의 20% 입니다.",
        "예약 확정 후 투어 전날 상세 안내를 드립니다.",
        "투어 당일 가이드와 호텔 로비에서 미팅합니다."
      ],
      payment: [
        "예약금: 투어 총액의 20% (카카오채널을 통한 송금)",
        "잔금: 투어 당일 가이드에게 현금으로 지불 (베트남 동)",
        "신용카드 결제 희망 시 사전 협의 가능합니다.",
        "카드 결제 시 3.1% 수수료가 추가됩니다."
      ],
      cancellation: [
        "취소규정 업데이트로 인한 링크로 참고부탁드립니다.",
        "https://cafe.naver.com/stayhalong/784?tc=shared_link"
      ]
    },
    {
      id: "ninbin-tour",
      name: "닌빈 한국어 가이드 투어",
      duration: "1일",
      price: 45, // 1인 기준 4,500,000동 (백만 단위로 표시)
      groupSize: "1-10인",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=300&fit=crop",
      description: "닌빈 지역의 아름다운 명소를 한국어 가이드와 함께하는 단독 투어",
      highlights: ["바이딘 사원 투어", "전기차 탑승", "족욕 체험", "짱안 나룻배 투어", "왕복 단독차량", "한국어 가이드"],
      pricingTable: [
        { people: "1인 싱글투어", perPerson: "4,500,000동", total: "4,500,000동", vehicle: "승용차" },
        { people: "2인 투어", perPerson: "2,750,000동", total: "5,500,000동", vehicle: "승용차" },
        { people: "3인 투어", perPerson: "2,400,000동", total: "7,200,000동", vehicle: "카니발" },
        { people: "4인 투어", perPerson: "2,000,000동", total: "8,000,000동", vehicle: "카니발" },
        { people: "5인 투어", perPerson: "1,800,000동", total: "9,000,000동", vehicle: "9인승 리무진" },
        { people: "6인 투어", perPerson: "1,750,000동", total: "10,500,000동", vehicle: "9인승 리무진" },
        { people: "7인 투어", perPerson: "1,700,000동", total: "11,900,000동", vehicle: "9인승 리무진" },
        { people: "8인 투어", perPerson: "1,650,000동", total: "13,200,000동", vehicle: "11인승 리무진" },
        { people: "9인 투어", perPerson: "1,600,000동", total: "14,400,000동", vehicle: "11인승 리무진" },
        { people: "10인 투어", perPerson: "1,550,000동", total: "15,500,000동", vehicle: "16인승 리무진" }
      ],
      included: [
        "투어 인원에 따른 왕복 단독차량",
        "차량 내 생수 1인당 1병",
        "국제가이드 자격소지, 한국어 가능 현지 가이드",
        "각 관광지의 입장료 및 투어 비용",
        "바이딘 사원 전 구간 전기차",
        "바이딘 사원 투어 중 족욕 체험 서비스",
        "짱안 나룻배 2시간 투어 코스"
      ],
      notIncluded: [
        "점심식사 개별결제 (한식당 / 염소요리 등 예약가능)",
        "가이드 동행 식사 시 가이드 식사비 (기사님 제외)",
        "개인 경비 (음료 구입 , 기념품 구입 등)",
        "여행자 보험",
        "투어 종료 후 공항으로의 이동 (드롭오프 비용)",
        "하노이 출발 또는 도착이 아닌 타 지역 픽드롭 서비스",
        "기타 개인 간식 등"
      ],
      notices: [
        "본 상품은 \"예약자 팀\" 만을 위한 단독투어 상품 입니다. (조인투어 아님)",
        "투어 프로그램의 순서는 투어 당일, 가이드와 협의하여 변경 가능 합니다.",
        "회원님이 숙박하신 호텔 로비에서 \"가이드\"가 여러분을 만나 투어를 진행합니다.",
        "기상악화 등으로 인한 투어안전에 위험이 있을 시, 투어는 취소 됩니다.",
        "위의 경우 예약자는 날짜를 변경하여 투어를 하거나 취소하실 수 있습니다.",
        "기상문제, 당사의 문제로 투어가 불가할 시엔 전액 반환이 이루어 집니다.",
        "가이드는 국제 가이드 자격을 소지하고 있는 합법적인 가이드 입니다.",
        "가이드는 한국어 소통이 능숙하고, 경험이 풍부한 가이드 입니다."
      ],
      payment: [
        "본 상품의 예약금은 1인당 50만동 입니다.",
        "투어 당일, 가이드를 만나서 잔금은 현금으로 지불 해 주시면 됩니다.",
        "잔금을 사전결제 하고 싶은 분들은 신용카드 결제로만 가능합니다.",
        "신용카드 결제 시에는 카드 수수료 3.1% 가 별도로 부과 됩니다."
      ],
      reservation: [
        "본 상품은 \"카카오채널\"을 통한 예약신청으로 예약이 진행됩니다.",
        "예약 또는 상담을 원하시는 분들은 아래의 \"견적상담/예약하기\"를 클릭하세요.",
        "1단계 : 채팅방을 통해 \"예약신청서\"를 전달 받습니다.",
        "2단계 : 예약신청서 작성을 완료한 후 \"최종금액\" 안내를 받습니다.",
        "3단계 : 1인당 예약금 50만동을 네이버 환율에 따라 원화로 송금 합니다.",
        "4단계 : 익일, 이메일로 전달 된 예약확인서를 확인합니다.",
        "5단계 : 투어 전날, 스테이하롱의 안내메시지에 따라 다음날 가이드와 미팅합니다."
      ],
      cancellation: [
        "투어 예정일로부터 16일 전까지는 위약금 없는 무료 취소가 가능 (전액환불)",
        "투어일자로부터 6일전 ~ 15일전 사이 취소 시 수령한 예약금의 50% 환불",
        "투어일자까지 5일 이내가 남은 경우 취소불가 (예약금 전액 반환불가)",
        "투어일자의 변경은 투어일 10일 전 까지만 가능합니다.",
        "투어일자 변경 후, 투어 전에 투어상품 요금이 변경 될 시 변경요금이 적용됩니다."
      ]
    },
    {
      id: "hanoi-afternoon-tour",
      name: "하노이 오후 투어",
      duration: "오후",
      price: 50, // 1인 기준 5,000,000동 (백만 단위로 표시)
      groupSize: "1-10인",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=300&fit=crop",
      description: "하노이를 한국어 가이드와 함께 투어하는 오후 투어 상품 - 스테이하롱트래블 자체운영 상품",
      highlights: ["호안끼엠 여행자거리", "신도시지역 관광", "서호 데이트명소", "마지막 스파 프로그램", "샤워 서비스"],
      pricingTable: [
        { people: "1인 싱글투어", perPerson: "5,000,000동", vehicle: "승용차", deposit: "20%" },
        { people: "2인 투어", perPerson: "2,950,000동", vehicle: "승용차", deposit: "20%" },
        { people: "3인 투어", perPerson: "2,250,000동", vehicle: "SUV", deposit: "20%" },
        { people: "4인 투어", perPerson: "2,175,000동", vehicle: "카니발", deposit: "20%" },
        { people: "5인 투어", perPerson: "1,980,000동", vehicle: "9인승 리무진", deposit: "20%" },
        { people: "6인 투어", perPerson: "1,780,000동", vehicle: "9인승 리무진", deposit: "20%" },
        { people: "7인 투어", perPerson: "1,700,000동", vehicle: "9인승 리무진", deposit: "20%" },
        { people: "8인 투어", perPerson: "1,725,000동", vehicle: "11인승 리무진", deposit: "20%" },
        { people: "9인 투어", perPerson: "1,630,000동", vehicle: "11인승 리무진", deposit: "20%" },
        { people: "10인 투어", perPerson: "별도상담", vehicle: "11인승 리무진", deposit: "20%" }
      ],
      included: [
        "한국어가이드 동행 (유적지,사원 등 하노이의 역사 등 소개)",
        "마지막 스파 프로그램 (샤워 서비스 제공)",
        "호안끼엠 여행자거리 투어",
        "신도시지역 관광",
        "서호 데이트명소 투어"
      ],
      notIncluded: [
        "점심식사 및 음료",
        "여행자 보험",
        "개인경비",
        "가이드 팁"
      ],
      notices: [
        "아동도 성인 1인과 동일하게 적용됩니다.",
        "5세 미만 아동은 인원에 포함되지 않으나, 차량 변경을 해야할 경우 차액은 부담 해 주셔야합니다.",
        "예약 시에는 예약금만 송금 해 주시고, 잔금은 투어 당일 가이드에게 베트남동으로 지불 해 주셔야합니다. (잔돈준비 불가)",
        "상기 금액은 1인당 금액 입니다.",
        "본 상품은 회원님팀만 진행되는 단독투어로, 투어 순서 등은 가이드와 조율이 가능합니다.",
        "문묘 대신 쩐꾸옥 사원 투어 시 1인당 5만동 할인 / 마사지 이용을 안하실 경우 1인당 50만동 할인이 적용됩니다."
      ],
      reservation: [
        "스테이하롱 카카오채널로 메시지를 보냅니다.",
        "상담사와의 상담을 통해 \"하노이투어 신청서\" URL을 받아 작성합니다.",
        "작성 완료 후 상담사로부터 신용카드 결제창 링크를 전달 받습니다.",
        "안전하게 암호화 된 결제페이지에서 신용카드로 결제 합니다."
      ],
      payment: [
        "현금결제 시 예약금: 투어총액의 20% 결제 후 잔금은 가이드에게 베트남 동으로 지불입니다.",
        "신용카드 전액결제 가능",
        "사전예약금 20% 원화송금"
      ],
      cancellation: [
        "예약취소 및 변경에 대한 안내를 드립니다.",
        "취소 정책은 투어 예정일로부터 기간에 따라 상이합니다.",
        "자세한 취소 정책은 예약 시 안내받으실 수 있습니다."
      ]
    },
    {
      id: "hanoi-oneday-tour",
      name: "하노이 원데이 당일투어 ★",
      duration: "당일",
      price: 43, // 1인 기준 4,300,000동 (백만 단위로 표시)
      groupSize: "1-9인",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=300&fit=crop",
      description: "하노이 시내투어 - 한국어 가이드 동행, 안전한 여행을 위한 스테이하롱 자체운영 상품",
      highlights: ["하노이 시내 관광", "한국어 가이드 동행", "안전한 이동", "세레네 스파 예약대행", "단독투어"],
      pricingTable: [
        { people: "1인 투어", perPerson: "4,300,000동", vehicle: "승용차", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "2인 투어", perPerson: "2,450,000동", vehicle: "승용차", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "3인 투어", perPerson: "1,900,000동", vehicle: "SUV", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "4인 투어", perPerson: "1,750,000동", vehicle: "기아 카니발", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "5인 투어", perPerson: "1,600,000동", vehicle: "9인승 DCAR 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "6인 투어", perPerson: "1,450,000동", vehicle: "9인승 DCAR 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "7인 투어", perPerson: "1,320,000동", vehicle: "9인승 DCAR 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "8인 투어", perPerson: "1,340,000동", vehicle: "11인승 DCAR 리무진", deposit: "20%", payment: "투어당일 현금지불" },
        { people: "9인 투어", perPerson: "1,250,000동", vehicle: "11인승 DCAR 리무진", deposit: "20%", payment: "투어당일 현금지불" }
      ],
      included: [
        "한국어 가이드 동행",
        "하노이 시내 관광",
        "안전한 이동 서비스",
        "세레네 스파 예약대행 (제휴종료로 중단)"
      ],
      notIncluded: [
        "점심식사",
        "개인경비",
        "여행자 보험",
        "기타 개인비용"
      ],
      notices: [
        "3세 미만 유아는 요금이 적용되지 않지만, 아동으로 인해 차량변경이 있는 경우는 차량요금이 변경됩니다.",
        "시끄럽고 복잡한 하노이 오토바이 사이에서 안전한 여행을 하실 수 있도록 스테이하롱이 함께 합니다.",
        "본 투어는 스테이하롱 자체운영 상품입니다."
      ],
      reservation: [
        "스테이하롱 카카오채널로 메시지를 보냅니다.",
        "상담사와의 상담을 통해 \"투어 신청서\" URL을 받아 작성합니다.",
        "작성 완료 후 상담사로부터 신용카드 결제창 링크를 전달 받습니다.",
        "안전하게 암호화 된 결제페이지에서 신용카드로 결제 합니다."
      ],
      payment: [
        "예약금: 투어총액의 20% (원화송금)",
        "잔금: 투어당일 가이드에게 현금지불 (베트남동으로 지불)",
        "신용카드 전액결제 가능"
      ],
      cancellation: [
        "취소규정 업데이트로 인한 링크로 참고부탁드립니다.",
        "https://cafe.naver.com/stayhalong/784?tc=shared_link"
      ]
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
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Tour Grid */}
        <div className="grid lg:grid-cols-2 gap-14 mb-16">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-45 relative overflow-hidden">
                {/* 배경 이미지 */}
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{backgroundImage: `url('${tour.image}')`}}></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-black/70 text-white px-2 py-0 rounded-full text-xs font-bold leading-tight flex items-center gap-1 backdrop-blur-sm">
                    <span className="text-yellow-400">💰</span>
                    {tour.price}백만 VND/인
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

                {/* 닌빈 투어 상세 정보 */}
                {tour.id === "ninbin-tour" && (
                  <div className="space-y-6">
                    {/* 요금표 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">💰 닌빈 단독투어 요금표</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-indigo-100">
                              <th className="px-3 py-2 text-left font-semibold">투어인원</th>
                              <th className="px-3 py-2 text-left font-semibold">1인당 금액</th>
                              <th className="px-3 py-2 text-left font-semibold">총 인원 합계금액</th>
                              <th className="px-3 py-2 text-left font-semibold">투어 이용차량</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tour.pricingTable.map((price, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="px-3 py-2">{price.people}</td>
                                <td className="px-3 py-2 font-medium">{price.perPerson}</td>
                                <td className="px-3 py-2 font-medium">{price.total}</td>
                                <td className="px-3 py-2">{price.vehicle}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 포함사항 */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-green-800 mb-3">✅ 포함사항</h4>
                      <ul className="space-y-1">
                        {tour.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 불포함사항 */}
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-red-800 mb-3">❌ 불포함사항</h4>
                      <ul className="space-y-1">
                        {tour.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-red-700">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 투어 안내사항 */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">📋 투어 안내사항</h4>
                      <ul className="space-y-2">
                        {tour.notices.map((notice, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{notice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 결제 안내 */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-purple-800 mb-3">💳 결제 안내</h4>
                      <ul className="space-y-2">
                        {tour.payment.map((pay, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-purple-700">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{pay}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 예약 방법 */}
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-indigo-800 mb-3">📝 예약 방법</h4>
                      <ul className="space-y-2">
                        {tour.reservation.map((res, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-indigo-700">
                            <span className="text-indigo-500 mt-1">{index + 1}단계:</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 취소 정책 */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">⚠️ 취소 정책</h4>
                      <ul className="space-y-2">
                        {tour.cancellation.map((cancel, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-orange-700">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{cancel}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 예약하기 버튼 */}
                    <div className="text-center pt-4">
                      <a
                        href="http://pf.kakao.com/_zvsxaG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg"
                      >
                        📞 견적상담/예약하기
                      </a>
                    </div>
                  </div>
                )}

                {/* 하노이 역사투어 상세 정보 */}
                {tour.id === "hanoi-history-tour" && (
                  <div className="space-y-6">
                    {/* 요금표 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">� 한국어 가이드, 하노이 역사투어 투어금액 안내</h4>
                      <p className="text-sm text-gray-600 mb-3">투어 관광지 입장료 등의 변경이 있는 경우, 요금은 변경될 수 있습니다.</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-indigo-100">
                              <th className="px-3 py-2 text-left font-semibold">투어인원</th>
                              <th className="px-3 py-2 text-left font-semibold">1인당 가격</th>
                              <th className="px-3 py-2 text-left font-semibold">투어 시 이용차량</th>
                              <th className="px-3 py-2 text-left font-semibold">예약금</th>
                              <th className="px-3 py-2 text-left font-semibold">잔금</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tour.pricingTable.map((price, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="px-3 py-2">{price.people}</td>
                                <td className="px-3 py-2 font-medium">{price.perPerson}</td>
                                <td className="px-3 py-2">{price.vehicle}</td>
                                <td className="px-3 py-2">{price.deposit}</td>
                                <td className="px-3 py-2">{price.payment}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 차량 안내 */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">🚗 한국어 가이드, 하노이 역사투어 &quot;리무진 차량&quot; 안내</h4>
                      <div className="mb-4">
                        <p className="text-sm text-blue-700 mb-3 font-medium">불포함 내역은 반드시 사전에 잘 확인 해 주세요.</p>
                        <ul className="space-y-2">
                          {tour.vehicleInfo.map((info, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{info}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 차량 업그레이드 정보 */}
                      <div className="bg-blue-100 rounded-lg p-3">
                        <h5 className="font-semibold text-blue-800 mb-2">차량 업그레이드 (스테이하롱 리무진으로 변경 시)</h5>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          {tour.vehicleUpgrade.map((upgrade, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span>{upgrade.from} {upgrade.to}</span>
                              <span className="font-medium text-blue-600">{upgrade.cost}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 포함사항 */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-green-800 mb-3">✅ 티켓에 포함 된 사항</h4>
                      <ul className="space-y-1">
                        {tour.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 불포함사항 */}
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-red-800 mb-3">❌ 불포함 된 옵션 및 항목</h4>
                      <ul className="space-y-1">
                        {tour.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-red-700">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 투어 안내사항 */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">📋 투어 안내사항</h4>
                      <ul className="space-y-2">
                        {tour.notices.map((notice, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-orange-700">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{notice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 예약 및 결제방법 */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-purple-800 mb-3">📝 예약 및 결제방법 안내</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">예약방법 안내</h5>
                          <ul className="space-y-1 text-sm text-purple-600">
                            {tour.reservation.map((res, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">결제방법 안내</h5>
                          <ul className="space-y-1 text-sm text-purple-600">
                            {tour.payment.map((pay, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{pay}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 취소 및 환불규정 */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">⚠️ 취소 및 환불규정</h4>
                      <div className="text-sm text-orange-700 space-y-2">
                        <p>취소규정 업데이트로 인한 링크로 참고부탁드립니다.</p>
                        <a
                          href="https://cafe.naver.com/stayhalong/784?tc=shared_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                        >
                          📋 취소규정 상세보기 ↗️
                        </a>
                      </div>
                    </div>

                    {/* 연락처 정보 */}
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">📞 연락처 정보</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><strong>견적상담:</strong> <a href="http://pf.kakao.com/_zvsxaG/chat" className="text-blue-600 hover:underline">카카오채널</a></p>
                        <p><strong>긴급전화연락:</strong> (+84)039 433 4065 (베트남) / 070-4554-5185 (한국폰)</p>
                        <p><strong>일반카톡 보이스톡 아이디:</strong> stayhalong</p>
                      </div>
                    </div>

                    {/* 예약하기 버튼 */}
                    <div className="text-center pt-4">
                      <a
                        href="http://pf.kakao.com/_zvsxaG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg"
                      >
                        📞 견적상담/예약하기
                      </a>
                    </div>
                  </div>
                )}

                {/* 하노이 오후 투어 상세 정보 */}
                {tour.id === "hanoi-afternoon-tour" && (
                  <div className="space-y-6">
                    {/* 상품 소개 */}
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-indigo-800 mb-3">🌅 하노이 오후 투어 소개</h4>
                      <div className="text-sm text-indigo-700 space-y-2">
                        <p>하노이를 한국어 가이드와 함께 투어하는 &quot;오후 투어&quot; 상품 안내</p>
                        <p><strong>스테이하롱트래블 자체운영 상품 입니다.</strong></p>
                        <p>하노이는 베트남의 수도로서 관광도시로 유명한 곳은 아닙니다. 때문에 대부분의 관광객들은 &quot;호안끼엠 여행자거리&quot;라고 불리는 한국의 명동과 같은 지역만 맴돌며 투어를 하게됩니다.</p>
                        <p>하지만, 하노이도 구도심으로 불리우는 &quot;호안끼엠&quot; 지역 외에 다양한 볼거리를 가지고 있는 도시로서 베트남의 경제발전을 볼 수 있는 신도시지역, 그리고 베트남 젊은 사람들의 데이트 명소로 유명한 &quot;서호&quot;지역 등 다양한 볼거리와 즐길거리를 찾아 나서는 즐거움도 함께 공존하는 도시 입니다.</p>
                        <p>스테이하롱은 &quot;하노이 오후투어&quot; 프로그램을 통해 하노이를 보다 안전하고 즐겁게 즐기실 수 있도록 다채로운 구성을 통해 즐거운 여행을 제공 해 드립니다.</p>
                        <p>또한 밤 비행기 또는 새벽비행기로 귀국하시는분들을 위해 마지막 &quot;스파&quot; 프로그램에서는 샤워를 하고 가실 수 있는 서비스를 제공합니다.</p>
                      </div>
                    </div>

                    {/* 요금표 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">💰 하노이 오후 투어 요금표</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-indigo-100">
                              <th className="px-3 py-2 text-left font-semibold">투어인원</th>
                              <th className="px-3 py-2 text-left font-semibold">1인당 가격</th>
                              <th className="px-3 py-2 text-left font-semibold">이용차량</th>
                              <th className="px-3 py-2 text-left font-semibold">예약금</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tour.pricingTable.map((price, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="px-3 py-2">{price.people}</td>
                                <td className="px-3 py-2 font-medium">{price.perPerson}</td>
                                <td className="px-3 py-2">{price.vehicle}</td>
                                <td className="px-3 py-2">{price.deposit}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        <p>현금결제 시 예약금: 투어총액의 20% 결제 후 잔금은 가이드에게 베트남 동으로 지불입니다.</p>
                        <p>신용카드 전액결제 가능</p>
                      </div>
                    </div>

                    {/* 포함사항 */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-green-800 mb-3">✅ 포함사항</h4>
                      <ul className="space-y-1">
                        {tour.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 불포함사항 */}
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-red-800 mb-3">❌ 불포함사항</h4>
                      <ul className="space-y-1">
                        {tour.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-red-700">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 투어 안내사항 */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">📋 투어 안내사항</h4>
                      <ul className="space-y-2">
                        {tour.notices.map((notice, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{notice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 예약 및 결제방법 */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-purple-800 mb-3">📝 예약 및 결제방법 안내</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">예약방법 안내</h5>
                          <ul className="space-y-1 text-sm text-purple-600">
                            {tour.reservation.map((res, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">결제방법 안내</h5>
                          <ul className="space-y-1 text-sm text-purple-600">
                            {tour.payment.map((pay, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>{pay}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 취소 및 변경 안내 */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">⚠️ 예약취소 및 변경안내</h4>
                      <ul className="space-y-2">
                        {tour.cancellation.map((cancel, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-orange-700">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{cancel}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 연락처 정보 */}
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">📞 연락처 정보</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><strong>견적상담:</strong> <a href="http://pf.kakao.com/_zvsxaG/chat" className="text-blue-600 hover:underline">카카오채널</a></p>
                        <p><strong>긴급전화연락:</strong> (+84)039 433 4065</p>
                        <p><strong>일반카톡 보이스톡 아이디:</strong> stayhalong</p>
                      </div>
                    </div>

                    {/* 예약하기 버튼 */}
                    <div className="text-center pt-4">
                      <a
                        href="http://pf.kakao.com/_zvsxaG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg"
                      >
                        📞 예약문의 및 실시간 상담하기
                      </a>
                    </div>
                  </div>
                )}

                {/* 하노이 원데이 당일투어 상세 정보 */}
                {tour.id === "hanoi-oneday-tour" && (
                  <div className="space-y-6">
                    {/* 상품 소개 */}
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-indigo-800 mb-3">🏛️ 하노이 원데이 당일투어 소개</h4>
                      <div className="text-sm text-indigo-700 space-y-2">
                        <p>스테이하롱에서 새롭게 준비한 &quot;하노이 시내투어&quot;</p>
                        <p>시끄럽고 복잡한 하노이 오토바이 사이에서 안전한 여행을 하실 수 있도록 스테이하롱이 하노이에서도 여러분과 함께 합니다.</p>
                        <p><strong>본 투어는 스테이하롱 자체운영 상품입니다.</strong></p>
                      </div>
                    </div>

                    {/* 요금표 */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">💰 한국어 가이드, 하노이 당일투어 투어금액 안내</h4>
                      <p className="text-sm text-gray-600 mb-3">투어 관광지 입장료 등의 변경이 있는 경우, 요금은 변경될 수 있습니다.</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-indigo-100">
                              <th className="px-3 py-2 text-left font-semibold">투어인원</th>
                              <th className="px-3 py-2 text-left font-semibold">1인당 가격</th>
                              <th className="px-3 py-2 text-left font-semibold">투어 시 이용차량</th>
                              <th className="px-3 py-2 text-left font-semibold">예약금</th>
                              <th className="px-3 py-2 text-left font-semibold">잔금</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tour.pricingTable.map((price, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="px-3 py-2">{price.people}</td>
                                <td className="px-3 py-2 font-medium">{price.perPerson}</td>
                                <td className="px-3 py-2">{price.vehicle}</td>
                                <td className="px-3 py-2">{price.deposit}</td>
                                <td className="px-3 py-2">{price.payment}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        <p>3세 미만 유아는 요금이 적용되지 않지만, 아동으로 인해 차량변경이 있는 경우는 차량요금이 변경됩니다.</p>
                      </div>
                    </div>

                    {/* 포함사항 */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-green-800 mb-3">✅ 포함사항</h4>
                      <ul className="space-y-1">
                        {tour.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 불포함사항 */}
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-red-800 mb-3">❌ 불포함사항</h4>
                      <ul className="space-y-1">
                        {tour.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-red-700">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 투어 안내사항 */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">📋 투어 안내사항</h4>
                      <ul className="space-y-2">
                        {tour.notices.map((notice, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{notice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 세레네 스파 안내 */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-purple-800 mb-3">🧖‍♀️ 세레네 스파 안내</h4>
                      <div className="text-sm text-purple-700 space-y-2">
                        <p>공식 투어 후 &quot;세레네 스파&quot; 이용을 원하시는 경우 예약을 대행하여 드립니다.</p>
                        <p>세레네 스파는 스테이하롱이 강력 추천하는 스파샵 입니다.</p>
                        <p className="font-semibold text-red-600">(세레나 스파 예약대행은 제휴종료로 인해 중단 되었습니다)</p>
                      </div>
                    </div>

                    {/* 예약 및 결제방법 */}
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-indigo-800 mb-3">📝 예약 및 결제방법 안내</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-indigo-700 mb-2">예약방법 안내</h5>
                          <ul className="space-y-1 text-sm text-indigo-600">
                            {tour.reservation.map((res, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-700 mb-2">결제방법 안내</h5>
                          <ul className="space-y-1 text-sm text-indigo-600">
                            {tour.payment.map((pay, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{pay}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 취소 및 환불규정 */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">⚠️ 취소 및 환불규정</h4>
                      <div className="text-sm text-orange-700 space-y-2">
                        <p>취소규정 업데이트로 인한 링크로 참고부탁드립니다.</p>
                        <a
                          href="https://cafe.naver.com/stayhalong/784?tc=shared_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                        >
                          📋 취소규정 상세보기 ↗️
                        </a>
                      </div>
                    </div>

                    {/* 연락처 정보 */}
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">📞 연락처 정보</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><strong>견적상담:</strong> <a href="http://pf.kakao.com/_zvsxaG/chat" className="text-blue-600 hover:underline">카카오채널</a></p>
                        <p><strong>긴급전화연락:</strong> (+84)039 433 4065</p>
                        <p><strong>일반카톡 보이스톡 아이디:</strong> stayhalong</p>
                      </div>
                    </div>

                    {/* 예약하기 버튼 */}
                    <div className="text-center pt-4">
                      <a
                        href="http://pf.kakao.com/_zvsxaG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-lg"
                      >
                        📞 예약문의 및 실시간 상담하기
                      </a>
                    </div>
                  </div>
                )}
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

        {/* Naver Cafe Link */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">네이버 카페에서 더 자세한 정보 보기</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              스테이하롱 네이버 카페에서 한국어 가이드 투어에 대한 자세한 정보와 실제 이용자 후기를 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cafe.naver.com/ArticleList.nhn?search.clubid=31003053&search.menuid=617&search.boardtype=I"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium inline-flex items-center gap-2"
              >
                <span>✅ 한국어 가이드 투어 게시판</span>
                <span>↗️</span>
              </a>
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