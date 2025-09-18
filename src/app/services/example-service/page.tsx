"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">services/example service</h1>
        <p className="text-lg text-gray-600 mb-6"></p>

        <div className="space-y-6">
          <p>이 페이지는 자동 생성된 라우트입니다. 필요한 내용을 여기에 추가하세요.</p>
          <Link href="/">홈으로 돌아가기</Link>
        </div>
      </section>
    </div>
  );
}
