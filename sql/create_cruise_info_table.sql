-- 크루즈 정보 테이블 생성 스크립트 (객실별 세부 정보)
-- 생성일: 2025년 9월 18일
-- 수정일: 2025년 9월 18일 (객실별 구조로 변경)

-- 기존 테이블 삭제 (필요시)
-- DROP TABLE IF EXISTS public.cruise_info CASCADE;

-- cruise_info 테이블 생성 (객실별 세부 정보)
CREATE TABLE IF NOT EXISTS public.cruise_info (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    category text NOT NULL, -- 구분 (예: 1박2일, 2박3일, 당일)
    cruise_name text NOT NULL, -- 크루즈명
    cruise_image text, -- 크루즈 이미지 URL
    room_name text NOT NULL, -- 객실명
    room_image text, -- 객실 이미지 URL
    room_area text, -- 객실면적 (예: 25㎡)
    room_description text, -- 객실설명
    room_url text, -- 객실 상세 URL
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT cruise_info_pkey PRIMARY KEY (id)
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_cruise_info_category ON public.cruise_info USING btree (category);
CREATE INDEX IF NOT EXISTS idx_cruise_info_cruise_name ON public.cruise_info USING btree (cruise_name);
CREATE INDEX IF NOT EXISTS idx_cruise_info_room_name ON public.cruise_info USING btree (room_name);
CREATE INDEX IF NOT EXISTS idx_cruise_info_created_at ON public.cruise_info USING btree (created_at);

-- RLS (Row Level Security) 설정 (필요시)
-- ALTER TABLE public.cruise_info ENABLE ROW LEVEL SECURITY;

-- 기본 데이터 삽입 (샘플 데이터)
INSERT INTO public.cruise_info (category, cruise_name, cruise_image, room_name, room_image, room_area, room_description, room_url) VALUES
('1박2일', 'Paradise Elegance', '/images/paradise-elegance.jpg', '디럭스 스위트', '/images/deluxe-suite.jpg', '35㎡', '하롱베이 전망을 즐길 수 있는 넓은 스위트룸입니다. 프라이빗 발코니와 고급스러운 인테리어가 특징입니다.', '/cruises/1-night-2-days/paradise-elegance/deluxe-suite'),
('1박2일', 'Paradise Elegance', '/images/paradise-elegance.jpg', '프리미엄 스위트', '/images/premium-suite.jpg', '45㎡', '최고급 객실로 넓은 공간과 최고급 시설을 갖추고 있습니다. VIP 고객을 위한 특별한 경험을 제공합니다.', '/cruises/1-night-2-days/paradise-elegance/premium-suite'),
('1박2일', 'Calista Cruise', '/images/calista-cruise.jpg', '오션 뷰 디럭스', '/images/ocean-view-deluxe.jpg', '30㎡', '바다 전망이 뛰어난 객실로 편안한 휴식과 아름다운 경치를 동시에 즐길 수 있습니다.', '/cruises/1-night-2-days/calista/ocean-view-deluxe'),
('1박2일', 'Calista Cruise', '/images/calista-cruise.jpg', '패밀리 스위트', '/images/family-suite.jpg', '50㎡', '가족 여행에 최적화된 넓은 객실입니다. 2개의 침실과 거실 공간이 있어 편안한 가족 휴가를 즐길 수 있습니다.', '/cruises/1-night-2-days/calista/family-suite'),
('2박3일', 'Ambassador Cruise', '/images/ambassador-cruise.jpg', '그랜드 스위트', '/images/grand-suite.jpg', '60㎡', '크루즈 최고급 객실로 넓은 공간과 다양한 시설을 갖추고 있습니다. 특별한 여행을 위한 최적의 선택입니다.', '/cruises/2-nights-3-days/ambassador/grand-suite'),
('2박3일', 'Ambassador Cruise', '/images/ambassador-cruise.jpg', '로열 스위트', '/images/royal-suite.jpg', '70㎡', '프레지덴셜급 객실로 모든 최고급 시설을 갖추고 있습니다. 잊지 못할 럭셔리한 경험을 선사합니다.', '/cruises/2-nights-3-days/ambassador/royal-suite'),
('당일', 'Day Cruise Explorer', '/images/day-cruise.jpg', '스탠다드 캐빈', '/images/standard-cabin.jpg', '20㎡', '편안한 당일 크루즈 여행을 위한 기본 객실입니다. 필수 시설을 갖추고 있어 실용적입니다.', '/cruises/day-cruises/explorer/standard-cabin'),
('당일', 'Day Cruise Explorer', '/images/day-cruise.jpg', '프리미엄 캐빈', '/images/premium-cabin.jpg', '25㎡', '더욱 편안한 당일 여행을 위한 업그레이드 객실입니다. 추가적인 편의 시설을 제공합니다.', '/cruises/day-cruises/explorer/premium-cabin')
ON CONFLICT DO NOTHING;

-- 테이블 권한 설정 (필요시)
-- GRANT ALL ON TABLE public.cruise_info TO authenticated;
-- GRANT ALL ON TABLE public.cruise_info TO service_role;

-- 뷰 생성 (카테고리별 조회용)
CREATE OR REPLACE VIEW public.cruise_info_by_category AS
SELECT
    category,
    cruise_name,
    COUNT(*) as room_count,
    array_agg(DISTINCT room_name) as room_names,
    array_agg(DISTINCT room_area) as room_areas
FROM public.cruise_info
GROUP BY category, cruise_name
ORDER BY category, cruise_name;

-- 뷰 권한 설정
-- GRANT SELECT ON public.cruise_info_by_category TO authenticated;

-- 유용한 조회 쿼리를 위한 뷰들
CREATE OR REPLACE VIEW public.cruise_rooms_view AS
SELECT
    id,
    category,
    cruise_name,
    cruise_image,
    room_name,
    room_image,
    room_area,
    room_description,
    room_url,
    created_at,
    updated_at
FROM public.cruise_info
WHERE room_name IS NOT NULL
ORDER BY category, cruise_name, room_name;

-- 트리거 생성 (updated_at 자동 업데이트)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_cruise_info_updated_at ON public.cruise_info;
CREATE TRIGGER update_cruise_info_updated_at
    BEFORE UPDATE ON public.cruise_info
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 완료 메시지
DO $$
BEGIN
    RAISE NOTICE '크루즈 정보 테이블 (객실별 세부 정보) 생성이 완료되었습니다.';
    RAISE NOTICE '총 % 개의 객실 정보가 삽입되었습니다.', (SELECT COUNT(*) FROM public.cruise_info);
END $$;