-- Supabase 데이터베이스 스키마
-- 크루즈 정보 테이블

-- 크루즈 객실 정보 테이블
CREATE TABLE IF NOT EXISTS public.cruises (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  cruise_name TEXT NOT NULL,
  cruise_image TEXT,
  room_name TEXT NOT NULL,
  room_image TEXT,
  room_area TEXT,
  room_description TEXT,
  room_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- RLS (Row Level Security) 활성화
ALTER TABLE public.cruises ENABLE ROW LEVEL SECURITY;

-- 모든 사용자에게 읽기 권한 부여
CREATE POLICY "Allow public read access" ON public.cruises
  FOR SELECT USING (true);

-- 인증된 사용자에게 쓰기 권한 부여 (관리자용)
CREATE POLICY "Allow authenticated users to insert" ON public.cruises
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update" ON public.cruises
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete" ON public.cruises
  FOR DELETE USING (auth.role() = 'authenticated');

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS cruises_category_idx ON public.cruises (category);
CREATE INDEX IF NOT EXISTS cruises_cruise_name_idx ON public.cruises (cruise_name);
CREATE INDEX IF NOT EXISTS cruises_created_at_idx ON public.cruises (created_at DESC);

-- updated_at 자동 업데이트 함수
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- updated_at 트리거
CREATE TRIGGER handle_cruises_updated_at
  BEFORE UPDATE ON public.cruises
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();