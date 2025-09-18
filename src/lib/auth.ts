// 간단한 인증 시스템
// 프로덕션에서는 더 안전한 방식으로 구현해야 합니다.

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'manager';
  name: string;
}

// 하드코딩된 사용자 정보 (실제 프로덕션에서는 데이터베이스에서 관리)
const USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    role: 'admin',
    name: '관리자'
  },
  {
    id: '2',
    username: 'manager',
    role: 'manager',
    name: '매니저'
  }
];

// 인증 상태를 localStorage에 저장하는 키
const AUTH_KEY = 'stayhalong_auth';

// 로그인 함수
export function login(username: string, password: string): User | null {
  // 간단한 패스워드 검증 (실제로는 해시된 패스워드 비교)
  const validCredentials = {
    'admin': 'admin123',
    'manager': 'manager123'
  };

  if (validCredentials[username as keyof typeof validCredentials] === password) {
    const user = USERS.find(u => u.username === username);
    if (user) {
      // 인증 정보를 localStorage에 저장
      localStorage.setItem(AUTH_KEY, JSON.stringify({
        user,
        loginTime: new Date().toISOString()
      }));
      return user;
    }
  }

  return null;
}

// 로그아웃 함수
export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}

// 현재 인증된 사용자 정보 가져오기
export function getCurrentUser(): User | null {
  try {
    const authData = localStorage.getItem(AUTH_KEY);
    if (authData) {
      const { user, loginTime } = JSON.parse(authData);

      // 로그인 시간이 24시간이 지나면 자동 로그아웃
      const loginDate = new Date(loginTime);
      const now = new Date();
      const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

      if (hoursDiff > 24) {
        logout();
        return null;
      }

      return user;
    }
  } catch (error) {
    console.error('인증 데이터 파싱 오류:', error);
    logout();
  }

  return null;
}

// 로그인 상태 확인
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

// 관리자 권한 확인
export function hasAdminAccess(): boolean {
  const user = getCurrentUser();
  return user !== null && (user.role === 'admin' || user.role === 'manager');
}

// 특정 역할 권한 확인
export function hasRole(role: 'admin' | 'manager'): boolean {
  const user = getCurrentUser();
  return user !== null && user.role === role;
}

// 인증 리다이렉트 헬퍼
export function redirectToLogin(): void {
  if (typeof window !== 'undefined') {
    window.location.href = '/admin/login';
  }
}

// 인증 체크 후 리다이렉트
export function requireAuth(): User | null {
  const user = getCurrentUser();
  if (!user) {
    redirectToLogin();
    return null;
  }
  return user;
}