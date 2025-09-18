import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Supabase 환경변수
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 브라우저용 Supabase 클라이언트
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// 서버용 Supabase 클라이언트
export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // 서버 컴포넌트에서는 쿠키 설정이 불가능할 수 있습니다
        }
      },
    },
  })
}

// 관리자용 서버 클라이언트 (서비스 역할 키 사용)
export async function createServerSupabaseAdmin() {
  const cookieStore = await cookies()
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createServerClient(supabaseUrl, supabaseServiceKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // 서버 컴포넌트에서는 쿠키 설정이 불가능할 수 있습니다
        }
      },
    },
  })
}

// 타입 정의 (실제 데이터베이스 스키마에 맞게 수정하세요)
export type Database = {
  public: {
    Tables: {
      cruises: {
        Row: {
          id: string
          category: string
          cruise_name: string
          cruise_image: string | null
          room_name: string
          room_image: string | null
          room_area: string | null
          room_description: string | null
          room_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category: string
          cruise_name: string
          cruise_image?: string | null
          room_name: string
          room_image?: string | null
          room_area?: string | null
          room_description?: string | null
          room_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category?: string
          cruise_name?: string
          cruise_image?: string | null
          room_image?: string | null
          room_area?: string | null
          room_description?: string | null
          room_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}