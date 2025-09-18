# 스테이하롱 (Stay Halong) - 하롱베이 크루즈 여행

하롱베이 현지 전문 한국 여행사 스테이하롱의 크루즈 정보 관리 시스템입니다.

## 🚀 시작하기

### 환경 설정

1. **의존성 설치**
```bash
npm install
```

2. **Supabase 설정**
```bash
# 환경변수 파일 복사 및 설정
cp .env.local.example .env.local

# .env.local 파일을 열어서 다음 값들을 설정하세요:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

3. **Supabase 프로젝트 설정**
```bash
# Supabase CLI 설치 (선택사항)
npm install -g supabase

# Supabase 로그인
supabase login

# 타입 생성 (선택사항)
node scripts/generate-supabase-types.js
```

4. **데이터베이스 스키마 적용**
```bash
# Supabase 대시보드에서 sql/supabase_schema.sql 실행
# 또는 Supabase CLI 사용:
supabase db push
```

### 개발 서버 실행

```bash
# 빠른 개발 (권장) - 빌드 없이 실시간 반영
npm run dev:fast

# 또는 기존 방식
npm run dev
```

> 💡 **팁**: 개발 중에는 `npm run dev`만 사용하세요. 빌드는 배포 전이나 필요할 때만 실행하세요.

### 빌드 및 배포

```bash
# 빠른 빌드 (린트 생략)
npm run build:quick

# 전체 빌드 (린트 포함)
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── admin/          # 관리자 페이지
│   │   ├── api/            # API 라우트
│   │   └── cruises/        # 크루즈 정보 페이지
│   ├── components/         # 재사용 컴포넌트
│   ├── data/              # 데이터 관리
│   └── lib/               # 유틸리티 라이브러리
│       ├── auth.ts        # 인증 시스템
│       └── supabase.ts    # Supabase 클라이언트
├── supabase/              # Supabase 설정
├── sql/                   # 데이터베이스 스크립트
└── scripts/               # 빌드 스크립트
```

## 🔧 주요 기능

- ✅ 크루즈 객실 정보 관리 (CRUD)
- ✅ 관리자 인증 시스템
- ✅ 반응형 웹 디자인
- ✅ Supabase 데이터베이스 연동
- ✅ 실시간 데이터 동기화

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **Deployment**: Vercel

## 📊 관리자 기능

관리자 페이지는 `/admin` 경로에서 접근할 수 있습니다.

**테스트 계정:**
- 관리자: `admin` / `admin123`
- 매니저: `manager` / `manager123`

### 주요 기능:
- 크루즈 정보 조회 및 필터링
- 새 크루즈 정보 등록
- 기존 정보 수정 및 삭제
- 통계 대시보드

## 🚀 배포

### Vercel 배포

1. **Vercel 계정 생성 및 로그인**
2. **프로젝트 연결**
```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 배포
vercel
```

3. **환경변수 설정**
Vercel 대시보드에서 다음 환경변수들을 설정하세요:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 📝 개발 워크플로우

### 🚀 빠른 개발 모드
개발 중 빌드 시간을 절약하기 위한 최적화된 워크플로우:

1. **개발 시작**: `npm run dev` (또는 `npm run dev:fast`)
2. **실시간 변경**: 파일 수정 시 자동 반영 (빌드 불필요)
3. **배포 전 빌드**: `npm run build` (업로드 전 1회만 실행)

### ⚡ 빌드 시간 단축 팁
- **Turbopack 사용**: Next.js 15의 빠른 번들러 활용
- **빠른 빌드**: `npm run build:quick` (린트 생략)
- **증분 빌드**: 변경된 파일만 재빌드
- **캐시 활용**: `.next/cache` 디렉토리 유지

### 🔄 개발 사이클
```
코드 작성 → npm run dev → 브라우저 확인 → 반복
              ↓ (배포 시점)
        npm run build → npm start
```

> ⚠️ **중요**: GitHub 업로드 전에는 반드시 `npm run build`를 실행하세요!

## 🤝 기여하기

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 📞 연락처

- 이메일: stayhalong@gmail.com
- 카카오톡: http://pf.kakao.com/_zvsxaG/chat
- 네이버 카페: https://cafe.naver.com/stayhalong
