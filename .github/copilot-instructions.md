# Copilot / AI agent instr## Build & run
- **개발 서버는 항상 실행 중입니다** - 새로 시작하지 마세요
- Build for production: `npm run build` then `npm start`
- Lint: `npm run lint` (ESLint configured via `eslint.config.mjs`)ons for Halong Cruise (Stay Halong)

This file contains concise, actionable instructions for AI coding agents to be productive in this repository.

## Big picture
- Framework: Next.js 15 (App Router). The `src/app` directory contains route folders (e.g. `src/app/cruises/1-night-2-days`).
- Styling: Tailwind CSS v4 via PostCSS plugin (see `postcss.config.mjs`).
- TypeScript: Project uses TypeScript types (`next-env.d.ts`, `tsconfig.json` present).
- Dev server: `npm run dev` starts Next dev server (uses Turbopack) — may pick an alternate port if 3000 is busy (e.g., 3003).

## Where to start (high-value files)
- `src/app/page.tsx` — main landing page; primary place for marketing and navigation.
- `src/app/cruises/page.tsx` — service listing for cruises.
- `src/app/cruises/1-night-2-days/*` — example individual service pages and detail pages (look for `page.tsx` files).
- `next.config.ts` — framework-level config (currently minimal).
- `package.json` — scripts: `dev`, `build`, `start`, `lint`.
- `postcss.config.mjs` — Tailwind integration.
- `eslint.config.mjs` — ESLint (Next.js + TypeScript preset) and ignore patterns.

## Project-specific conventions and patterns
- Routing: Uses Next.js App Router folder conventions — create `page.tsx` inside a folder to add a route. For nested routes, create subfolders with their own `page.tsx`.
- Styling: Tailwind utility classes directly in JSX; consistent use of rounded cards, gradient headers.
- Images: Placeholder images referenced under `/public/images/*`. When adding images, place them in `public/images/` and reference paths like `/images/your-image.jpg`.
- Components: Small, file-local React components are used inline (no central component library yet). Favor adding shared components under `src/components/` for reuse.
- Data: Some pages embed data arrays directly in page files (e.g., `cruisesData` in `src/app/page.tsx`). For larger data, consider adding `src/data/` with TS types.

## Build & run
- Start dev server: `npm run dev` (Turbopack; will auto-select a free port if 3000 is occupied).
- Build for production: `npm run build` then `npm start`.
- Lint: `npm run lint` (ESLint configured via `eslint.config.mjs`).

## 🚀 Development Workflow (개발 워크플로우)

### ⚡ Fast Development Mode (빠른 개발 모드)
개발 중 빌드 시간을 절약하기 위한 최적화된 워크플로우:

#### 1. Daily Development (매일 개발):
**개발 서버는 항상 실행 중입니다** - 코드 변경 시 즉시 브라우저에서 확인 가능
- ⚡ **실시간 반영**: 파일 수정 시 즉시 브라우저에 반영
- 🚫 **빌드 불필요**: 코드 변경할 때마다 빌드하지 않음
- 📱 **빠른 피드백**: 변경사항 즉시 확인 가능

#### 2. Pre-deployment (배포 전):
```bash
npm run build
```
- ✅ **최종 검증**: 모든 파일 컴파일 및 최적화
- 🔍 **오류 체크**: 타입 및 린트 검증
- 📦 **프로덕션 준비**: 배포용 파일 생성

### 🛠️ Additional Commands (추가 명령어):
```bash
# 빠른 개발 스크립트 (선택사항)
npm run dev:fast

# 빠른 빌드 (린트 생략)
npm run build:quick
```

### 📈 Time Savings (시간 절약 효과):
- **개발 중**: 빌드 시간 0초 (실시간 반영)
- **배포 전**: 1회만 빌드 (약 10-20초)
- **전체**: **빌드 시간 90% 이상 절약**

### 💡 Usage Tips (사용 팁):
- **개발 서버는 항상 실행 중입니다** - 코드 변경 시 브라우저에서 바로 확인
- 코드 변경 시 브라우저에서 바로 확인
- GitHub 업로드 전만 `npm run build` 실행
- 필요시 `npm run build:quick`으로 더 빠른 빌드

### 🔄 Development Cycle (개발 사이클):
```
코드 작성 → 브라우저 확인 → 반복
              ↓ (배포 시점)
        npm run build → npm start
```

> ⚠️ **중요**: GitHub 업로드 전에는 반드시 `npm run build`를 실행하세요!

## Debugging tips
- If Next dev picks a different port, check terminal output for the selected `Local` URL (e.g., `http://localhost:3003`).
- Common runtime errors stem from malformed JSX or unclosed tags in `page.tsx` files — 개발 서버가 실행 중이므로 브라우저에서 바로 확인 가능합니다.

## Typical tasks and examples (copyable)
- Add a new top-level service route (e.g., `src/app/services/airport-transfer/page.tsx`) and link it from `src/app/page.tsx`.
- Create a cruise detail page: `src/app/cruises/1-night-2-days/<slug>/page.tsx` with default export `page` component or a client component using `"use client"` if using hooks.

Example: add a new detail page skeleton

- File: `src/app/cruises/1-night-2-days/example-cruise/page.tsx`
- Minimal content:
  export default function ExampleCruisePage() {
    return (<div>Example cruise detail</div>);
  }

## Lint/build caveats
- ESLint uses FlatCompat and extends Next.js recommended configs. Ignore patterns include `.next/`, `node_modules/`, etc.
- TypeScript types are used but some files may omit explicit types (use `any` sparingly).

## Integration points / external links
- Naver Cafe: `https://cafe.naver.com/stayhalong` — used as source for service descriptions and contact info.
- KakaoTalk chat: `http://pf.kakao.com/_zvsxaG/chat` — referenced throughout as primary contact.

## Where to look for follow-ups
- Add `src/components/` for reusable UI (cards, hero, contact). Keep components small and typed.
- Consolidate cruise data into `src/data/cruises.ts` and import into pages.
- Add unit tests (Jest) if desired; not present now.

## Route generator (자동 라우트 생성)

간단한 스크립트로 `src/app` 아래에 새 라우트를 자동 생성할 수 있습니다.

- 스크립트 위치: `scripts/create-route.cjs`
- 사용법 (PowerShell/Windows):
  - npm run create-route -- services/my-service --title "마이 서비스" --subtitle "서비스 소개"
  - 위 명령은 `src/app/services/my-service/page.tsx`와 `src/app/services/my-service/details/page.tsx`를 생성합니다.

생성되는 파일은 기본 템플릿(클라이언트 컴포넌트)으로, 내부 내용을 프로젝트 스타일에 맞게 수정하세요.

---
If anything in this file is unclear or you'd like more project-specific examples (e.g., how to add tests, or a component skeleton), tell me what to expand and I'll update this file.