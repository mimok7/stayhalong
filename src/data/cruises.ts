export interface CruiseInfo {
  id: string;
  category: string; // 구분 (1박2일, 2박3일, 당일 등)
  cruiseName: string; // 크루즈명
  cruiseImage?: string; // 크루즈 이미지
  roomName: string; // 객실명
  roomImage?: string; // 객실이미지
  roomArea?: string; // 객실면적
  roomDescription?: string; // 객실설명
  roomUrl?: string; // 객실url
  createdAt: Date;
  updatedAt: Date;
}

export const cruiseInfos: CruiseInfo[] = [
  {
    id: "1",
    category: "1박2일",
    cruiseName: "Paradise Elegance",
    cruiseImage: "/images/paradise-elegance.jpg",
    roomName: "디럭스 스위트",
    roomImage: "/images/deluxe-suite.jpg",
    roomArea: "35㎡",
    roomDescription: "하롱베이 전망을 즐길 수 있는 넓은 스위트룸입니다. 프라이빗 발코니와 고급스러운 인테리어가 특징입니다.",
    roomUrl: "/cruises/1-night-2-days/paradise-elegance/deluxe-suite",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    category: "1박2일",
    cruiseName: "Paradise Elegance",
    cruiseImage: "/images/paradise-elegance.jpg",
    roomName: "프리미엄 스위트",
    roomImage: "/images/premium-suite.jpg",
    roomArea: "45㎡",
    roomDescription: "최고급 객실로 넓은 공간과 최고급 시설을 갖추고 있습니다. VIP 고객을 위한 특별한 경험을 제공합니다.",
    roomUrl: "/cruises/1-night-2-days/paradise-elegance/premium-suite",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    category: "1박2일",
    cruiseName: "Calista Cruise",
    cruiseImage: "/images/calista-cruise.jpg",
    roomName: "오션 뷰 디럭스",
    roomImage: "/images/ocean-view-deluxe.jpg",
    roomArea: "30㎡",
    roomDescription: "바다 전망이 뛰어난 객실로 편안한 휴식과 아름다운 경치를 동시에 즐길 수 있습니다.",
    roomUrl: "/cruises/1-night-2-days/calista/ocean-view-deluxe",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    category: "1박2일",
    cruiseName: "Calista Cruise",
    cruiseImage: "/images/calista-cruise.jpg",
    roomName: "패밀리 스위트",
    roomImage: "/images/family-suite.jpg",
    roomArea: "50㎡",
    roomDescription: "가족 여행에 최적화된 넓은 객실입니다. 2개의 침실과 거실 공간이 있어 편안한 가족 휴가를 즐길 수 있습니다.",
    roomUrl: "/cruises/1-night-2-days/calista/family-suite",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    category: "2박3일",
    cruiseName: "Ambassador Cruise",
    cruiseImage: "/images/ambassador-cruise.jpg",
    roomName: "그랜드 스위트",
    roomImage: "/images/grand-suite.jpg",
    roomArea: "60㎡",
    roomDescription: "크루즈 최고급 객실로 넓은 공간과 다양한 시설을 갖추고 있습니다. 특별한 여행을 위한 최적의 선택입니다.",
    roomUrl: "/cruises/2-nights-3-days/ambassador/grand-suite",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    category: "2박3일",
    cruiseName: "Ambassador Cruise",
    cruiseImage: "/images/ambassador-cruise.jpg",
    roomName: "로열 스위트",
    roomImage: "/images/royal-suite.jpg",
    roomArea: "70㎡",
    roomDescription: "프레지덴셜급 객실로 모든 최고급 시설을 갖추고 있습니다. 잊지 못할 럭셔리한 경험을 선사합니다.",
    roomUrl: "/cruises/2-nights-3-days/ambassador/royal-suite",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    category: "당일",
    cruiseName: "Day Cruise Explorer",
    cruiseImage: "/images/day-cruise.jpg",
    roomName: "스탠다드 캐빈",
    roomImage: "/images/standard-cabin.jpg",
    roomArea: "20㎡",
    roomDescription: "편안한 당일 크루즈 여행을 위한 기본 객실입니다. 필수 시설을 갖추고 있어 실용적입니다.",
    roomUrl: "/cruises/day-cruises/explorer/standard-cabin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    category: "당일",
    cruiseName: "Day Cruise Explorer",
    cruiseImage: "/images/day-cruise.jpg",
    roomName: "프리미엄 캐빈",
    roomImage: "/images/premium-cabin.jpg",
    roomArea: "25㎡",
    roomDescription: "더욱 편안한 당일 여행을 위한 업그레이드 객실입니다. 추가적인 편의 시설을 제공합니다.",
    roomUrl: "/cruises/day-cruises/explorer/premium-cabin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// 크루즈 정보를 코드로 가져오는 함수들
export function getCruiseInfoById(id: string): CruiseInfo | undefined {
  return cruiseInfos.find(cruise => cruise.id === id);
}

export function getCruiseInfosByCategory(category: string): CruiseInfo[] {
  return cruiseInfos.filter(cruise => cruise.category === category);
}

export function getCruiseInfosByCruiseName(cruiseName: string): CruiseInfo[] {
  return cruiseInfos.filter(cruise => cruise.cruiseName === cruiseName);
}

export function getAllCruiseInfos(): CruiseInfo[] {
  return cruiseInfos;
}

export function getUniqueCategories(): string[] {
  return [...new Set(cruiseInfos.map(cruise => cruise.category))];
}

export function getUniqueCruiseNames(): string[] {
  return [...new Set(cruiseInfos.map(cruise => cruise.cruiseName))];
}

export function addCruiseInfo(cruiseInfo: Omit<CruiseInfo, 'id' | 'createdAt' | 'updatedAt'>): CruiseInfo {
  const newCruise: CruiseInfo = {
    ...cruiseInfo,
    id: Date.now().toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  cruiseInfos.push(newCruise);
  return newCruise;
}

export function updateCruiseInfo(id: string, updates: Partial<CruiseInfo>): CruiseInfo | null {
  const index = cruiseInfos.findIndex(cruise => cruise.id === id);
  if (index === -1) return null;

  cruiseInfos[index] = {
    ...cruiseInfos[index],
    ...updates,
    updatedAt: new Date(),
  };
  return cruiseInfos[index];
}

export function deleteCruiseInfo(id: string): boolean {
  const index = cruiseInfos.findIndex(cruise => cruise.id === id);
  if (index === -1) return false;

  cruiseInfos.splice(index, 1);
  return true;
}