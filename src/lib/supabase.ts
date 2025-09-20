import { createBrowserClient } from '@supabase/ssr'

// Supabase 환경변수
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 브라우저용 Supabase 클라이언트
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// 사용자 권한 확인 함수
export async function checkUserRole(userId: string): Promise<'admin' | 'manager' | 'user' | null> {
  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error checking user role:', error)
      return null
    }

    return data?.role || 'user'
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