#!/usr/bin/env node

/**
 * Supabase 타입 생성 스크립트
 *
 * 사용법:
 * 1. Supabase CLI 설치: npm install -g supabase
 * 2. 프로젝트 초기화: supabase init
 * 3. 로그인: supabase login
 * 4. 타입 생성: node scripts/generate-types.js
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID || 'your-project-id'
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'types', 'supabase.ts')

console.log('🔄 Supabase 타입 생성 중...')

try {
  // Supabase CLI로 타입 생성
  const command = `supabase gen types typescript --project-id ${SUPABASE_PROJECT_ID} --schema public > ${OUTPUT_PATH}`

  execSync(command, { stdio: 'inherit' })

  console.log('✅ Supabase 타입 생성 완료!')
  console.log(`📁 생성된 파일: ${OUTPUT_PATH}`)

  // 생성된 파일 내용 확인
  if (fs.existsSync(OUTPUT_PATH)) {
    const content = fs.readFileSync(OUTPUT_PATH, 'utf8')
    console.log('📊 생성된 타입 수:', (content.match(/export interface/g) || []).length)
  }

} catch (error) {
  console.error('❌ 타입 생성 실패:', error.message)
  console.log('\n🔧 문제 해결:')
  console.log('1. Supabase CLI가 설치되어 있는지 확인: npm install -g supabase')
  console.log('2. Supabase에 로그인되어 있는지 확인: supabase login')
  console.log('3. 환경변수 SUPABASE_PROJECT_ID가 설정되어 있는지 확인')
  console.log('4. 또는 수동으로 타입을 정의하세요')
}