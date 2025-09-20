'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient, checkUserRole } from '@/lib/supabase';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error || !user) {
          setAuthorized(false);
          setLoading(false);
          router.push('/login');
          return;
        }

  // users 테이블에서 사용자 권한 확인 (id 우선, email 폴백)
  const userRole = await checkUserRole({ id: user.id, email: user.email ?? undefined });

        const ok = userRole === 'admin' || userRole === 'manager'
        setAuthorized(!!ok);
        if (!ok) {
          await supabase.auth.signOut();
          router.push('/login?error=unauthorized');
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setAuthorized(false);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">권한 확인 중...</p>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}