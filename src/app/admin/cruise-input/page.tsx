"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCurrentUser, redirectToLogin } from "../../../lib/auth";

interface CruiseFormData {
  category: string;
  cruiseName: string;
  cruiseImage: string;
  roomName: string;
  roomImage: string;
  roomArea: string;
  roomDescription: string;
  roomUrl: string;
}

const initialFormData: CruiseFormData = {
  category: "",
  cruiseName: "",
  cruiseImage: "",
  roomName: "",
  roomImage: "",
  roomArea: "",
  roomDescription: "",
  roomUrl: "",
};

export default function CruiseInputPage() {
  const [formData, setFormData] = useState<CruiseFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  // 페이지 타이틀 설정
  useEffect(() => {
    document.title = "크루즈 정보 등록 | Stay Halong";
  }, []);

  // 인증 체크
  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      redirectToLogin();
      return;
    }
  }, [router]);

  const categoryOptions = ["1박2일", "2박3일", "당일"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/cruises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newCruise = await response.json();
        setSubmitMessage({
          type: "success",
          text: `크루즈 정보가 성공적으로 저장되었습니다. (ID: ${newCruise.id})`
        });
        setFormData(initialFormData);
      } else {
        const error = await response.json();
        setSubmitMessage({
          type: "error",
          text: error.error || "저장 중 오류가 발생했습니다."
        });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "네트워크 오류가 발생했습니다."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateRoomUrl = () => {
    if (formData.category && formData.cruiseName && formData.roomName) {
      const categorySlug = formData.category === "1박2일" ? "1-night-2-days" :
        formData.category === "2박3일" ? "2-nights-3-days" : "day-cruises";
      const cruiseSlug = formData.cruiseName.toLowerCase().replace(/\s+/g, "-");
      const roomSlug = formData.roomName.toLowerCase().replace(/\s+/g, "-");
      const url = `/cruises/${categorySlug}/${cruiseSlug}/${roomSlug}`;

      setFormData(prev => ({
        ...prev,
        roomUrl: url
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">크루즈 정보 입력</h1>
              <p className="text-gray-600 mt-2">새로운 크루즈 객실 정보를 등록합니다</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/admin"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 기본 정보 섹션 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600">🚢</span>
                기본 정보
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    구분 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">구분을 선택하세요</option>
                    {categoryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cruiseName" className="block text-sm font-medium text-gray-700 mb-2">
                    크루즈명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cruiseName"
                    name="cruiseName"
                    value={formData.cruiseName}
                    onChange={handleInputChange}
                    required
                    placeholder="예: Paradise Elegance"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="cruiseImage" className="block text-sm font-medium text-gray-700 mb-2">
                    크루즈 이미지 URL
                  </label>
                  <input
                    type="url"
                    id="cruiseImage"
                    name="cruiseImage"
                    value={formData.cruiseImage}
                    onChange={handleInputChange}
                    placeholder="예: /images/paradise-elegance.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 객실 정보 섹션 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-green-600">🏨</span>
                객실 정보
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-2">
                    객실명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="roomName"
                    name="roomName"
                    value={formData.roomName}
                    onChange={handleInputChange}
                    required
                    placeholder="예: 디럭스 스위트"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="roomArea" className="block text-sm font-medium text-gray-700 mb-2">
                    객실면적
                  </label>
                  <input
                    type="text"
                    id="roomArea"
                    name="roomArea"
                    value={formData.roomArea}
                    onChange={handleInputChange}
                    placeholder="예: 35㎡"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="roomImage" className="block text-sm font-medium text-gray-700 mb-2">
                    객실 이미지 URL
                  </label>
                  <input
                    type="url"
                    id="roomImage"
                    name="roomImage"
                    value={formData.roomImage}
                    onChange={handleInputChange}
                    placeholder="예: /images/deluxe-suite.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="roomDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    객실설명
                  </label>
                  <textarea
                    id="roomDescription"
                    name="roomDescription"
                    value={formData.roomDescription}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="객실의 특징, 시설, 전망 등을 상세히 설명해주세요."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="roomUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    객실 URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="roomUrl"
                      name="roomUrl"
                      value={formData.roomUrl}
                      onChange={handleInputChange}
                      placeholder="예: /cruises/1-night-2-days/paradise-elegance/deluxe-suite"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={generateRoomUrl}
                      className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      자동 생성
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    자동 생성 버튼을 클릭하면 위 정보들을 기반으로 URL이 자동 생성됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 저장 메시지 */}
            {submitMessage && (
              <div className={`p-4 rounded-lg ${submitMessage.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {submitMessage.type === "success" ? "✅" : "❌"}
                  </span>
                  <span>{submitMessage.text}</span>
                </div>
              </div>
            )}

            {/* 제출 버튼 */}
            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={() => setFormData(initialFormData)}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                초기화
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    저장 중...
                  </>
                ) : (
                  <>
                    <span>💾</span>
                    크루즈 정보 저장
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* 도움말 섹션 */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span>💡</span>
            입력 가이드
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">필수 입력 항목</h4>
              <ul className="space-y-1">
                <li>• 구분: 1박2일, 2박3일, 당일 중 선택</li>
                <li>• 크루즈명: 정확한 크루즈 이름</li>
                <li>• 객실명: 객실 타입 이름</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">이미지 및 URL</h4>
              <ul className="space-y-1">
                <li>• 이미지는 /images/ 경로 사용 권장</li>
                <li>• URL은 자동 생성 기능 활용</li>
                <li>• 객실 설명은 상세할수록 좋습니다</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}