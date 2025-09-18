// Supabase 설정 파일
// 이 파일은 Supabase 프로젝트 설정에 사용됩니다

export const supabaseConfig = {
  // 프로젝트 기본 설정
  project: {
    name: 'stay-halong-cruise',
    description: '하롱베이 크루즈 정보 관리 시스템'
  },

  // 데이터베이스 설정
  database: {
    // 기본 스키마
    schema: 'public',

    // 테이블 설정
    tables: {
      cruises: {
        name: 'cruises',
        description: '크루즈 객실 정보',
        primaryKey: 'id',
        columns: {
          id: { type: 'uuid', default: 'gen_random_uuid()' },
          category: { type: 'text', nullable: false },
          cruise_name: { type: 'text', nullable: false },
          cruise_image: { type: 'text', nullable: true },
          room_name: { type: 'text', nullable: false },
          room_image: { type: 'text', nullable: true },
          room_area: { type: 'text', nullable: true },
          room_description: { type: 'text', nullable: true },
          room_url: { type: 'text', nullable: true },
          created_at: { type: 'timestamp with time zone', default: 'now()' },
          updated_at: { type: 'timestamp with time zone', default: 'now()' }
        }
      }
    }
  },

  // 인증 설정
  auth: {
    // 자동 확인 이메일 활성화
    enableConfirmations: true,

    // 추가 사용자 메타데이터 필드
    additionalFields: {
      role: {
        type: 'text',
        default: 'user',
        options: ['admin', 'manager', 'user']
      }
    }
  },

  // 스토리지 설정 (이미지 업로드용)
  storage: {
    buckets: {
      cruise_images: {
        name: 'cruise-images',
        public: true,
        fileSizeLimit: '10MB',
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp']
      }
    }
  },

  // API 설정
  api: {
    // CORS 설정
    cors: {
      origins: ['http://localhost:3000', 'https://your-domain.com']
    },

    // Rate limiting
    rateLimit: {
      maxRequests: 100,
      windowMs: 15 * 60 * 1000 // 15분
    }
  }
}

export default supabaseConfig