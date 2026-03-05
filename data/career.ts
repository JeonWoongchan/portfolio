import type { CareerItem } from "@/src/types/career";

export const CAREER_DATA = [
    {
        company: '(주)유리네트웍스',
        periodStart: "2025.10",
        periodEnd: "2025.12",
        quote: '지능형 교통 관제 시스템(ITS) 솔루션을 개발하는 기업',
        team: 'ITS개발팀 · 프리랜서',
        badges: ['Frontend 개발'],
        stack: ['JavaScript','React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
        highlights: [
            '지도 위 평균 20개 이상의 교차로 데이터와 차트 데이터를 동시에 처리하는 대시보드 UI 구현',
            '대용량 신호 데이터 로딩 구조 개선으로 초기 페이지 로딩 5초 → 1초 미만 단축',
            '넓은 범위 지도 타일 렌더링 시 사용자 시야 영역을 우선 렌더링하여 체감 로딩 속도를 개선',
            'TanStack Query 캐싱 구조 도입으로 신호 데이터 및 분석 결과 요청 최적화',
        ],
        projects: [
            {
                title: '인천광역시 지능형 교통체계(ITS) 신호최적화 대시보드',
                periodStart: "2025.10",
                periodEnd: "2025.12",
                roles: ['Frontend 개발'],
                description:
                    '교차로 내 차량/보행자 신호 데이터와 신호최적화 알고리즘 결과를 3D모델/히트맵/차트 등으로 시각화하는 교통 관제 대시보드 솔루션',
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
            },
        ],
        isCurrent: true,
    },
    {
        company: '(주)글로벌브릿지',
        periodStart: "2024.04",
        periodEnd: "2025.09",
        quote: '컴퓨터 비전 기반 스마트 횡단보도 및 지능형 교통 관제 시스템(ITS)을 개발하는 모빌리티 솔루션 기업',
        team: 'AI 솔루션팀',
        badges: ['Frontend 개발', 'Backend 개발'],
        stack: ['TypeScript', 'React', 'Next.js', 'Nest.js', 'Turborepo', 'Docker'],
        highlights: [
            'Cesium.js 기반 디지털트윈 3D모델 렌더링 구조 개선으로 초기 로딩 30초 → 1.5초 단축',
            '모노레포 도입을 통한 공통 컴포넌트 약 15개 정리로 개발 생산성 개선',
            '디자인 토큰 기반 디자인 시스템 구축으로 UI/UX 일관성 확보',
            'HLS → WebRTC 전환으로 영상 지연 시간 약 10초 → 0.5초 단축'
        ],
        projects: [
            {
                title: 'AI 객체 검지 기반 대시보드 솔루션',
                periodStart: "2025.08",
                periodEnd: "2025.09",
                roles: ['기획', 'Frontend 개발'],
                description:
                    'AI 객체 검지 데이터를 고객 맞춤형 요구사항에 따라 시각화하는 범용 대시보드 솔루션',
                stack: ['TypeScript', 'Next.js', 'Turborepo', 'Tailwind CSS', 'Zustand', 'shadcn/ui', 'Docker'],
            },
            {
                title: '인천광역시 지능형 교통체계(ITS) 디지털트윈 대시보드',
                periodStart: "2024.08",
                periodEnd: "2025.06",
                roles: ['Frontend 개발'],
                description:
                    '교차로 내 차량과 보행자 정보 수집 및 분석하여 3D모델을 활용한 디지털트윈으로 표출하는 대시보드 솔루션',
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'CesiumJS'],
            },
            {
                title: '인천항만공사 돌발상황 검지 대시보드',
                periodStart: "2024.10",
                periodEnd: "2024.11",
                roles: ['Frontend 개발'],
                description:
                    '인천항 부잔교 출입 인원에 대한 돌발상황 검지 결과와 CCTV 영상을 실시간으로 표출하는 대시보드',
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'Docker'],
            },
            {
                title: 'AI 모델 학습 파일 관리 시스템',
                periodStart: "2024.05",
                periodEnd: "2024.07",
                roles: ['기획', 'Frontend 개발'],
                description:
                    '모델 파일과 함께 학습 모델, 학습 클래스 등의 데이터를 통합 관리할 수 있는 AI 모델 관리 시스템',
                stack: ['JavaScript', 'Next.js', 'Nest.js', 'Tailwind CSS', 'Zustand', 'shadcn/ui', 'Docker', 'Storybook'],
            },
        ],
    }
] satisfies readonly CareerItem[];

export default CAREER_DATA;
