/* eslint-disable */
const fs = require('fs');
const path = require('path');

function parseArgs() {
  const argv = process.argv.slice(2);
  if (argv.length === 0) {
    console.error('사용법: npm run create-route -- <route-name> --title "제목" --subtitle "부제"');
    process.exit(1);
  }

  const name = argv[0];
  let title;
  let subtitle;

  for (let i = 1; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--title') {
      title = argv[i + 1];
      i++;
    } else if (a === '--subtitle') {
      subtitle = argv[i + 1];
      i++;
    }
  }

  return { name, title, subtitle };
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, { encoding: 'utf8' });
  console.log('생성됨:', filePath);
}

function templatePageTsx(routeName, title, subtitle) {
  const titleText = title || routeName.replace(/-/g, ' ');
  const subtitleText = subtitle || '';
  return `"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">${titleText}</h1>
        <p className="text-lg text-gray-600 mb-6">${subtitleText}</p>

        <div className="space-y-6">
          <p>이 페이지는 자동 생성된 라우트입니다. 필요한 내용을 여기에 추가하세요.</p>
          <Link href="/">홈으로 돌아가기</Link>
        </div>
      </section>
    </div>
  );
}
`;
}

function run() {
  const args = parseArgs();
  const routesDir = path.resolve(process.cwd(), 'src', 'app');
  const targetDir = path.join(routesDir, args.name);

  ensureDir(targetDir);

  const pageFile = path.join(targetDir, 'page.tsx');
  if (fs.existsSync(pageFile)) {
    console.error('이미 해당 경로의 page.tsx가 존재합니다:', pageFile);
    process.exit(1);
  }

  writeFile(pageFile, templatePageTsx(args.name, args.title, args.subtitle));

  // create nested sample subpage
  const subDir = path.join(targetDir, 'details');
  ensureDir(subDir);
  const subPage = path.join(subDir, 'page.tsx');
  writeFile(subPage, templatePageTsx(`${args.name}/details`, '상세 정보', '서비스 상세 설명을 여기에 추가하세요'));

  console.log('\n완료: 새 라우트를 생성했습니다. 예: /' + args.name);
  console.log('사용법: npm run create-route -- <route-name> --title "제목" --subtitle "부제"');
}

run();
