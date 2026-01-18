"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CruiseInfo } from "../../data/cruises";
import { getCurrentUser, logout, redirectToLogin, User } from "../../lib/auth";

export default function CruiseListPage() {
  const [cruises, setCruises] = useState<CruiseInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCruiseName, setSelectedCruiseName] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();

  const fetchCruises = useCallback(async () => {
    try {
      setLoading(true);
      let url = "/api/cruises";
      const params = new URLSearchParams();

      if (selectedCategory) params.append("category", selectedCategory);
      if (selectedCruiseName) params.append("cruiseName", selectedCruiseName);

      if (params.toString()) {
        url += "?" + params.toString();
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCruises(data);
      } else {
        setError("데이터를 불러오는데 실패했습니다.");
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedCruiseName]);

  // 페이지 타이틀 설정
  useEffect(() => {
    document.title = "크루즈 정보 관리 | Stay Halong";
  }, []);

  // 인증 체크
  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      redirectToLogin();
      return;
    }
    setCurrentUser(user);
  }, [router]);

  // 데이터 로딩
  useEffect(() => {
    if (currentUser) {
      fetchCruises();
    }
  }, [selectedCategory, selectedCruiseName, currentUser, fetchCruises]);

  const deleteCruise = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const response = await fetch(`/api/cruises?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCruises(prev => prev.filter(cruise => cruise.id !== id));
        alert("삭제되었습니다.");
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 유니크한 카테고리와 크루즈명 추출
  const uniqueCategories = [...new Set(cruises.map(c => c.category))];
  const uniqueCruiseNames = [...new Set(cruises.map(c => c.cruiseName))];

  // 로그아웃 핸들러
  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">크루즈 정보 관리</h1>
              <p className="text-gray-600 mt-2">등록된 크루즈 객실 정보를 조회하고 관리합니다</p>
              {currentUser && (
                <p className="text-sm text-blue-500 mt-1">
                  로그인: {currentUser.name} ({currentUser.role === 'admin' ? '관리자' : '매니저'})
                </p>
              )}
            </div>
            <div className="flex gap-4">
              <Link
                href="/admin/cruise-input"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                새 크루즈 등록
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">필터</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700 mb-2">
                구분
              </label>
              <select
                id="categoryFilter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              >
                <option value="">전체</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cruiseNameFilter" className="block text-sm font-medium text-gray-700 mb-2">
                크루즈명
              </label>
              <select
                id="cruiseNameFilter"
                value={selectedCruiseName}
                onChange={(e) => setSelectedCruiseName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              >
                <option value="">전체</option>
                {uniqueCruiseNames.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedCruiseName("");
                }}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                필터 초기화
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-200 text-blue-500">🚢</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">전체 객실</p>
                <p className="text-2xl font-bold text-gray-900">{cruises.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">📋</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">구분</p>
                <p className="text-2xl font-bold text-gray-900">{uniqueCategories.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">🏨</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">크루즈</p>
                <p className="text-2xl font-bold text-gray-900">{uniqueCruiseNames.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">⭐</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">평균 면적</p>
                <p className="text-2xl font-bold text-gray-900">
                  {cruises.length > 0
                    ? Math.round(cruises
                      .filter(c => c.roomArea)
                      .map(c => parseInt(c.roomArea?.replace(/[^\d]/g, '') || '0'))
                      .reduce((a, b) => a + b, 0) /
                      cruises.filter(c => c.roomArea).length
                    ) + '㎡'
                    : '0㎡'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p className="text-gray-600">데이터를 불러오는 중...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-red-600 text-4xl mb-4">❌</div>
            <p className="text-red-700 font-medium">{error}</p>
            <button
              onClick={fetchCruises}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              다시 시도
            </button>
          </div>
        )}

        {/* Data Table */}
        {!loading && !error && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      구분
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      크루즈명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      객실명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      면적
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      설명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      등록일
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      작업
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cruises.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        <div className="text-4xl mb-4">📝</div>
                        <p className="text-lg font-medium">등록된 크루즈 정보가 없습니다</p>
                        <p className="text-sm mt-2">새로운 크루즈를 등록해주세요.</p>
                      </td>
                    </tr>
                  ) : (
                    cruises.map((cruise) => (
                      <tr key={cruise.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-700">
                            {cruise.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{cruise.cruiseName}</div>
                          {cruise.cruiseImage && (
                            <div className="text-xs text-gray-500 mt-1">이미지: {cruise.cruiseImage}</div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{cruise.roomName}</div>
                          {cruise.roomImage && (
                            <div className="text-xs text-gray-500 mt-1">이미지: {cruise.roomImage}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {cruise.roomArea || '-'}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-xs truncate">
                            {cruise.roomDescription || '-'}
                          </div>
                          {cruise.roomUrl && (
                            <div className="text-xs text-blue-500 mt-1">
                              <a href={cruise.roomUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {cruise.roomUrl}
                              </a>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(cruise.createdAt).toLocaleDateString('ko-KR')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            href={`/admin/cruise-edit?id=${cruise.id}`}
                            className="text-blue-500 hover:text-blue-800"
                          >
                            수정
                          </Link>
                          <button
                            onClick={() => deleteCruise(cruise.id)}
                            className="text-red-600 hover:text-red-900 ml-4"
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}