import type { CareerItem } from "@/src/types/career";

export const CAREER_DATA = [
    {
        company: '(주)유리네트웍스',
        period: '2024.11 - 현재',
        quote: '"사용자 중심의 서비스를 만들어가고 있습니다."',
        location: '서울, 대한민국',
        team: '프론트엔드팀',
        badges: ['Frontend 개발', 'Backend 개발'],
        stack: ['React', 'JavaScript', 'Next.js'],
        highlights: ['MAU 50만 서비스 프론트엔드 담당', '코드 리뷰 문화 정착에 기여', '배포 자동화 파이프라인 구축'],
        projects: [
            {
                title: '작가 개인용 웹사이트 전체 리뉴얼',
                period: '2023.03 ~ 2023.05',
                roles: ['Frontend 개발', 'Backend 개발'],
                description: '작가 포트폴리오 및 작품 전시를 위한 웹사이트 전면 리뉴얼',
                stack: ['Next.js', 'TypeScript'],
            },
            {
                title: '내부 관리 시스템 개발',
                period: '2022.12 ~ 2023.02',
                roles: ['Frontend 개발', 'Backend 개발'],
                description: '운영팀 업무 효율화를 위한 백오피스 관리 시스템 개발',
                stack: ['React', 'JavaScript'],
            },
        ],
        isCurrent: true,
    },
    {
        company: '(주)글로벌브릿지',
        period: '2019.08 - 2023.09',
        quote: '"고객과 창작자를 연결하는 플랫폼 서비스"',
        location: '서울, 대한민국',
        team: '개발팀',
        badges: ['Next.js 개발', '테크 리딩', '백 오피스 기획'],
        stack: ['React', 'JavaScript', 'TypeScript'],
        highlights: ['서비스 전면 리뉴얼 리드', '검색엔진 최적화로 트래픽 25.6% 증가', '사내 공통 컴포넌트 라이브러리 구축'],
        projects: [
            {
                title: '비즈프로필 기반의 3팀 서비스 개발',
                period: '2025년 상반기 · 진행 중',
                roles: ['Frontend 개발', 'Backend 개발'],
                description: '비즈프로필 기반의 서비스 개발 (Frontend, Backend)',
                stack: ['React', 'TypeScript', 'Next.js'],
            },
            {
                title: '비즈프로필 멤버쉽 플랫폼 개발',
                period: '2024년 상반기',
                roles: ['Frontend 개발', 'Backend 개발'],
                description: '웹뷰의 생산성, 안정성, 성능을 개선하기 위한 플랫폼 개발',
                stack: ['React', 'TypeScript'],
            },
            {
                title: '지역 동네 업체 정보 관리 개발',
                period: '2024년 하반기',
                roles: ['Frontend 개발', 'Backend 개발'],
                description: '사장님들과 고객님들을 효과적으로 연결하기 위한 기능 개발',
                stack: ['React', 'JavaScript'],
            },
        ],
    },
] satisfies readonly CareerItem[];

export default CAREER_DATA;