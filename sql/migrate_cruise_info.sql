-- 크루즈 정보 테이블 마이그레이션 스크립트
-- 기존 테이블을 새로운 구조로 마이그레이션
-- 실행일: 2025년 9월 18일

-- 1. 기존 테이블 백업 (안전하게 진행하기 위해)
CREATE TABLE IF NOT EXISTS public.cruise_info_backup AS
SELECT * FROM public.cruise_info;

-- 2. 기존 테이블에 새로운 컬럼들 추가
ALTER TABLE public.cruise_info
ADD COLUMN IF NOT EXISTS category text,
ADD COLUMN IF NOT EXISTS cruise_name text,
ADD COLUMN IF NOT EXISTS cruise_image text,
ADD COLUMN IF NOT EXISTS room_name text,
ADD COLUMN IF NOT EXISTS room_image text,
ADD COLUMN IF NOT EXISTS room_area text,
ADD COLUMN IF NOT EXISTS room_description text,
ADD COLUMN IF NOT EXISTS room_url text;

-- 3. 기존 데이터 마이그레이션 (기존 cruise_code를 category로 변환)
UPDATE public.cruise_info
SET
    category = CASE
        WHEN cruise_code = '1-night-2-days' THEN '1박2일'
        WHEN cruise_code = '2-nights-3-days' THEN '2박3일'
        WHEN cruise_code = 'day-cruises' THEN '당일'
        ELSE '기타'
    END,
    cruise_name = CASE
        WHEN cruise_code = '1-night-2-days' THEN 'Paradise Elegance'
        WHEN cruise_code = '2-nights-3-days' THEN 'Ambassador Cruise'
        WHEN cruise_code = 'day-cruises' THEN 'Day Cruise Explorer'
        ELSE name
    END,
    room_name = CASE
        WHEN cruise_code = '1-night-2-days' THEN '디럭스 스위트'
        WHEN cruise_code = '2-nights-3-days' THEN '그랜드 스위트'
        WHEN cruise_code = 'day-cruises' THEN '스탠다드 캐빈'
        ELSE '스탠다드 룸'
    END,
    room_area = CASE
        WHEN cruise_code = '1-night-2-days' THEN '35㎡'
        WHEN cruise_code = '2-nights-3-days' THEN '60㎡'
        WHEN cruise_code = 'day-cruises' THEN '20㎡'
        ELSE '25㎡'
    END,
    room_description = description,
    room_url = CASE
        WHEN cruise_code = '1-night-2-days' THEN '/cruises/1-night-2-days/paradise-elegance/deluxe-suite'
        WHEN cruise_code = '2-nights-3-days' THEN '/cruises/2-nights-3-days/ambassador/grand-suite'
        WHEN cruise_code = 'day-cruises' THEN '/cruises/day-cruises/explorer/standard-cabin'
        ELSE '/cruises/' || cruise_code
    END
WHERE category IS NULL;

-- 4. 새로운 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_cruise_info_category ON public.cruise_info USING btree (category);
CREATE INDEX IF NOT EXISTS idx_cruise_info_cruise_name ON public.cruise_info USING btree (cruise_name);
CREATE INDEX IF NOT EXISTS idx_cruise_info_room_name ON public.cruise_info USING btree (room_name);

-- 5. NOT NULL 제약조건 추가 (데이터가 모두 채워진 후)
ALTER TABLE public.cruise_info
ALTER COLUMN category SET NOT NULL,
ALTER COLUMN cruise_name SET NOT NULL,
ALTER COLUMN room_name SET NOT NULL;

-- 6. 기존 컬럼들 정리 (필요시 주석 해제)
-- ALTER TABLE public.cruise_info DROP COLUMN IF EXISTS cruise_code;
-- ALTER TABLE public.cruise_info DROP COLUMN IF EXISTS name;
-- ALTER TABLE public.cruise_info DROP COLUMN IF EXISTS duration;
-- ALTER TABLE public.cruise_info DROP COLUMN IF EXISTS features;
-- ALTER TABLE public.cruise_info DROP COLUMN IF EXISTS images;
-- ALTER TABLE public.cruise_info DROP COLUMN IF EXISTS base_price;

-- 7. 트리거 생성 (updated_at 자동 업데이트)
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

-- 8. 뷰 생성
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

-- 완료 메시지
DO $$
DECLARE
    total_count INTEGER;
    backup_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_count FROM public.cruise_info;
    SELECT COUNT(*) INTO backup_count FROM public.cruise_info_backup;

    RAISE NOTICE '크루즈 정보 테이블 마이그레이션이 완료되었습니다.';
    RAISE NOTICE '총 레코드 수: %', total_count;
    RAISE NOTICE '백업 레코드 수: %', backup_count;
    RAISE NOTICE '마이그레이션 성공!';
END $$;