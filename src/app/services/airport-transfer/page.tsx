"use client";

export default function AirportTransferPage() {
  // 차량 종류별 요금표
  const vehicleTypes = [
    {
      name: "승합차 (4인승)",
      routes: [
        { destination: "하노이 시내", time: "40분", price: "300,000" },
        { destination: "하이퐁 (깟바, 옌뜨)", time: "2시간", price: "1,500,000" },
        { destination: "하롱베이", time: "2시간 30분 ~ 3시간", price: "1,700,000" },
        { destination: "요코온센 리조트", time: "3시간 ~ 3시간 30분", price: "2,000,000" },
        { destination: "닌빈 / 땀꼭", time: "2시간 10분 ~ 2시간 30분", price: "1,200,000" },
        { destination: "사파", time: "4시간 40분 ~ 5시간 10분", price: "2,500,000" }
      ]
    },
    {
      name: "승합차 (7인승)",
      routes: [
        { destination: "하노이 시내", time: "40분", price: "400,000" },
        { destination: "하이퐁 (깟바, 옌뜨)", time: "2시간", price: "1,700,000" },
        { destination: "하롱베이", time: "2시간 30분 ~ 3시간", price: "1,900,000" },
        { destination: "요코온센 리조트", time: "3시간 ~ 3시간 30분", price: "2,200,000" },
        { destination: "닌빈 / 땀꼭", time: "2시간 10분 ~ 2시간 30분", price: "1,400,000" },
        { destination: "사파", time: "4시간 40분 ~ 5시간 10분", price: "2,700,000" }
      ]
    },
    {
      name: "승합차 (9인승)",
      routes: [
        { destination: "하노이 시내", time: "40분", price: "700,000" },
        { destination: "하이퐁 (깟바, 옌뜨)", time: "2시간", price: "2,000,000" },
        { destination: "하롱베이", time: "2시간 30분 ~ 3시간", price: "2,200,000" },
        { destination: "요코온센 리조트", time: "3시간 ~ 3시간 30분", price: "2,500,000" },
        { destination: "닌빈 / 땀꼭", time: "2시간 10분 ~ 2시간 30분", price: "1,700,000" },
        { destination: "사파", time: "4시간 40분 ~ 5시간 10분", price: "3,400,000" }
      ]
    },
    {
      name: "승합차 (15인승)",
      routes: [
        { destination: "하노이 시내", time: "40분", price: "1,000,000" },
        { destination: "하이퐁 (깟바, 옌뜨)", time: "2시간", price: "2,800,000" },
        { destination: "하롱베이", time: "2시간 30분 ~ 3시간", price: "3,000,000" },
        { destination: "요코온센 리조트", time: "3시간 ~ 3시간 30분", price: "3,300,000" },
        { destination: "닌빈 / 땀꼭", time: "2시간 10분 ~ 2시간 30분", price: "2,700,000" },
        { destination: "사파", time: "4시간 40분 ~ 5시간 10분", price: "4,400,000" }
      ]
    },
    {
      name: "승합차 (28인승)",
      routes: [
        { destination: "하노이 시내", time: "40분", price: "1,200,000" },
        { destination: "하이퐁 (깟바, 옌뜨)", time: "2시간", price: "3,300,000" },
        { destination: "하롱베이", time: "2시간 30분 ~ 3시간", price: "3,500,000" },
        { destination: "요코온센 리조트", time: "3시간 ~ 3시간 30분", price: "3,800,000" },
        { destination: "닌빈 / 땀꼭", time: "2시간 10분 ~ 2시간 30분", price: "3,000,000" },
        { destination: "사파", time: "4시간 40분 ~ 5시간 10분", price: "4,700,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-900 via-orange-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">&quot;픽업 / 샌딩&quot; 서비스</h1>
          
        </div>
      </header>

      {/* Airport Images Gallery */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="/airport_01.gif"
                alt="공항 픽업 서비스 이미지 1"
                className="w-full h-auto min-h-64 object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-center text-gray-700 font-medium">공항 픽업 서비스</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="/airport_03.gif"
                alt="공항 픽업 서비스 이미지 3"
                className="w-full h-auto min-h-64 object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-center text-gray-700 font-medium">전문 기사 서비스</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="/airport_04.gif"
                alt="공항 픽업 서비스 이미지 4"
                className="w-full h-auto min-h-64 object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-center text-gray-700 font-medium">안전한 이동 서비스</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">차량별 요금 안내</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicleTypes.map((vehicle, vehicleIndex) => (
              <div key={vehicleIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{vehicle.name}</h3>
                  <p className="text-orange-100 text-sm">편도 (픽업 또는 드랍) 1대당 금액(통화는 베트남동)</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">차량 이용 코스</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-700">편도 평균 소요시간</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-700">편도 요금</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehicle.routes.map((route, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <span className="font-medium">하노이 공항 - {route.destination}</span>
                            </td>
                            <td className="py-3 px-4 text-center text-gray-600">
                              {route.time}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <span className="font-bold text-orange-600">{route.price}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reservation Guide */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">차량서비스 예약방법 안내</h3>
          <p className="text-center text-gray-600 mb-8">GUIDE TO RESERVING RENT-CAR with DRIVER SERVICE</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">예약과정에 대한 안내</h4>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• 아래 &quot;예약하기&quot; 버튼을 눌러 &quot;스테이하롱&quot; 담당자에게 &quot;차량 서비스 신청&quot;을 요청해 주세요.</li>
                <li>• 담당자가 &quot;신청서&quot; 작성을 위한 URL 링크를 전달 드립니다.</li>
                <li>• 신청서 작성을 완료하시면 &quot;신청내용&quot;을 확인하여 최종 금액을 안내 드립니다.</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">결제방법에 대한 안내</h4>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• 차량 서비스는 최소의 당사 이익금 1% ~ 2%만 포함되므로 &quot;원화 송금&quot; 결제만 가능합니다.</li>
                <li>• 부득이 &quot;신용카드&quot;결제로 결제를 원하시는 경우는 3.1%의 카드 수수료가 추가발생 합니다.</li>
                <li>• 트래블월릿 등을 통한 &quot;베트남 동&quot; 송금은 가능 합니다.</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">상품의 취소규정 안내</h4>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• 예약의 취소는 차량 이용일 5일 전까지만 가능합니다.</li>
                <li>• 이용일자 6일 전부터 15일전 사이 취소시에는 위약금 10%가 발생합니다.</li>
                <li>• 이용일자 16일 전부터는 무료취소가 가능합니다. (전액환불)</li>
                <li>• 차량승차일까지 5일 이내가 남은 경우는 취소 및 환불이 불가 합니다.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fast Track Images Gallery */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏃‍♂️ 패스트트랙 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/fasttrack_02.gif"
                  alt="패스트트랙 서비스 이미지 2"
                  className="w-full h-auto min-h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-center text-gray-700 font-medium">패스트트랙 이용 서비스</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/fasttrack_03.gif"
                  alt="패스트트랙 서비스 이미지 3"
                  className="w-full h-auto min-h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-center text-gray-700 font-medium">빠른 출입국 심사</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/fasttrack_09.gif"
                  alt="패스트트랙 서비스 이미지 9"
                  className="w-full h-auto min-h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-center text-gray-700 font-medium">전담 가이드 서비스</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">지금 바로 예약하세요</h3>
          <p className="text-orange-100 mb-6">
            스테이하롱의 안전하고 편안한 공항 픽업/샌딩 서비스를 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://pf.kakao.com/_zvsxaG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
            >
              💬 카카오톡 예약 상담
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
              📞 전화 문의: 070-4554-5185
            </button>
          </div>
        </section>

        {/* Service Rules */}
        <section className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">📥</span>
              공항픽업 서비스 이용안내
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>이용일자 3일 이내 시점부터는 예약이 불가 합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>밤 22:00 이후 도착 항공편은 픽업서비스 제공이 불가 합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>항공편 연착 시, 도착 시까지 기사님들이 무료 대기합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>단, 00:00 이후 도착하게 될 경우, 공항픽업서비스는 취소 됩니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>예약 시 전액 &quot;원화송금&quot;으로 결제가 진행되므로, 기사님께 지불할 돈은 없습니다.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-green-600">📤</span>
              공항샌딩 서비스 이용안내
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>이용일자 3일 이내 시점부터는 예약이 불가 합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>밤 22:00 이후 승차의 경우 공항샌딩 서비스 제공이 불가 합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>픽업시간 변경, 픽업위치 변경은 이용일 전날 저녁 18:00까지만 가능합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>예약 시 전액 &quot;원화송금&quot;으로 결제가 진행되므로, 기사님께 지불할 돈은 없습니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>간혹 도로사정 등에 따라 차량이 10분 내외 지연도착 할 수 있습니다.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}