'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient, checkUserRole } from '@/lib/supabase';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // 페이지 타이틀 설정
  useEffect(() => {
    document.title = "관리자 로그인 | Stay Halong";
  }, []);

  // 이미 로그인되어 있다면 DB 기반 권한 확인 후에만 /admin 이동
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const role = await checkUserRole({ id: user.id, email: user.email ?? undefined });
      if (role === 'admin' || role === 'manager') {
        router.push('/admin');
      }
    };
    checkUser();
  }, [router, supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError('잘못된 이메일 또는 비밀번호입니다.');
      } else if (data.user) {
        const userRole = await checkUserRole({ id: data.user.id, email: data.user.email ?? undefined });

        if (userRole === 'admin' || userRole === 'manager') {
          router.push('/admin');
        } else {
          await supabase.auth.signOut();
          setError(`관리자 권한이 없습니다.`);
        }
      }
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-2xl bg-brand-50 text-brand-600 text-2xl font-bold mb-6">
            S
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            관리자 로그인
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Stay Halong 관리 시스템에 접속합니다
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="admin@stayhalong.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 p-4 flex items-start gap-3">
              <div className="flex-shrink-0 text-red-400">⚠️</div>
              <div className="text-sm text-red-700 font-medium">{error}</div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              '로그인'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}