import { createBrowserClient } from '@supabase/ssr'

// Supabase 환경변수
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 브라우저용 Supabase 클라이언트
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// 사용자 권한 확인 함수 (id 우선, 없으면 email로 조회)
export async function checkUserRole(params: { id?: string; email?: string }): Promise<'admin' | 'manager' | 'member' | 'user' | null> {
  const supabase = createClient()

  const { id, email } = params
  try {
    // 임시 허용: 특정 이메일은 manager 권한 부여 (DB 값과 무관하게 오버라이드)
    const ALLOW_MANAGER_EMAILS = new Set([
      'kjh@hyojachoe.goe.go.kr',
      'kjh@hyojacho.es.kr',
    ])
    if (email && ALLOW_MANAGER_EMAILS.has(email.toLowerCase())) {
      return 'manager'
    }

    // 1) id 기준 조회 시도
    if (id) {
      const { data, error } = await supabase
        .from('users')
        .select('role, email')
        .eq('id', id)
        .maybeSingle()

      if (!error && data) {
        const role = data.role as 'admin' | 'manager' | 'member' | 'user'
        return role ?? 'user'
      }
    }

    // 2) email 기준 조회로 폴백
    if (email) {
      const { data, error } = await supabase
        .from('users')
        .select('role, email')
        .eq('email', email)
        .maybeSingle()

      if (!error && data) {
        const role = data.role as 'admin' | 'manager' | 'member' | 'user'
        return role ?? 'user'
      }
    }

    return null
  } catch (error) {
    console.error('Error checking user role:', error)
    return null
  }
}

// 타입 정의
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          reservation_date: string | null
          email: string | null
          name: string | null
          english_name: string | null
          nickname: string | null
          phone_number: string | null
          created_at: string
          kakao_id: string | null
          role: string
          birth_date: string | null
          passport_number: string | null
          passport_expiry: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          reservation_date?: string | null
          email?: string | null
          name?: string | null
          english_name?: string | null
          nickname?: string | null
          phone_number?: string | null
          created_at?: string
          kakao_id?: string | null
          role?: string
          birth_date?: string | null
          passport_number?: string | null
          passport_expiry?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          reservation_date?: string | null
          email?: string | null
          name?: string | null
          english_name?: string | null
          nickname?: string | null
          phone_number?: string | null
          created_at?: string
          kakao_id?: string | null
          role?: string
          birth_date?: string | null
          passport_number?: string | null
          passport_expiry?: string | null
          status?: string | null
          updated_at?: string | null
        }
      }
    }
  }
}