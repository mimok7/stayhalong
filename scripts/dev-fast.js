#!/usr/bin/env node

/**
 * 빠른 개발을 위한 스크립트
 * 빌드 없이 바로 개발 서버 실행
 */

const { exec } = require('child_process');
const path = require('path');

console.log('🚀 빠른 개발 모드 시작...');
console.log('📝 변경사항은 실시간으로 반영됩니다');
console.log('🏗️  배포 전이나 필요할 때만 npm run build 실행');
console.log('');

exec('npm run dev', {
  cwd: path.join(__dirname),
  stdio: 'inherit'
});