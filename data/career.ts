import type { CareerItem } from "@/src/types/career";

export const CAREER_DATA = [
    {
        company: '(주)유리네트웍스',
        period: '2025.10 - 2025.12',
        quote: '지능형 교통 관제 시스템(ITS) 솔루션을 개발하는 기업',
        team: 'ITS개발팀 · 프리랜서',
        badges: ['Frontend 개발'],
        stack: ['JavaScript','React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
        highlights: [
            '대용량 신호 데이터 로딩 구조 개선으로 초기 페이지 로딩 5초 → 1초 미만 단축',
            '지도 기반 교차로 UI를 우선 렌더링하는 구조로 사용자 체감 로딩 속도 개선',
            'React Query 캐싱 구조 도입으로 신호 데이터 및 분석 결과 요청 최적화',
            '지도 위 평균 20개 이상의 교차로 데이터와 차트 데이터를 동시에 처리하는 대시보드 UI 구현'
        ],
        projects: [
            {
                title: '인천광역시 지능형 교통체계(ITS) 3차 신호최적화 대시보드',
                periodStart: "2025-10",
                periodEnd: "2025-12",
                roles: ['Frontend 개발'],
                link: 'https://example.com/projects/artist-portfolio-renewal',
                description:
                    '교차로 신호 데이터와 신호 최적화 알고리즘 결과를 시각화하는 교통 관제 대시보드 개발. 지도 기반 교차로 정보와 대용량 신호 데이터를 동시에 처리하는 UI를 구현하고 데이터 로딩 구조를 개선하여 초기 페이지 로딩 속도를 5초에서 1초 미만으로 단축.',
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
            },
        ],
        isCurrent: true,
    },
    {
        company: '(주)글로벌브릿지',
        period: '2024.04 - 2025.09',
        quote: '컴퓨터 비전 기반 스마트 횡단보도 및 지능형 교통 관제 시스템(ITS)을 개발하는 모빌리티 솔루션 기업',
        team: 'AI 솔루션팀',
        badges: ['Frontend 개발', 'UI/UX 개선', '성능 최적화'],
        stack: ['TypeScript', 'React', 'Next.js', 'Nest.js', 'Turborepo', 'Docker'],
        highlights: [
            '디지털트윈 3D 렌더링 구조 개선으로 초기 로딩 30초 → 1.5초 단축',
            '모노레포 및 공통 컴포넌트 약 15개 정리로 개발 생산성 개선',
            '디자인 토큰 기반 디자인 시스템 구축으로 UI/UX 일관성 확보',
            'HLS → WebRTC 전환으로 영상 지연 시간 약 10초 → 0.5초 단축'
        ],
        projects: [
            {
                title: 'AI 객체 검지 기반 대시보드 솔루션',
                periodStart: "2025-08",
                periodEnd: "2025-09",
                roles: ['기획', 'Frontend 개발'],
                description:
                    'AI 객체 검지 데이터를 다양한 고객 요구사항에 맞게 시각화하는 범용 대시보드 솔루션 개발. 모노레포 구조를 도입하고 공통 컴포넌트와 디자인 토큰 기반 디자인 시스템을 구축하여 프로젝트 간 재사용성과 UI 일관성을 개선.',
                link: '',
                stack: ['TypeScript', 'Next.js', 'Turborepo', 'Tailwind CSS', 'Zustand', 'shadcn/ui', 'Docker'],
            },
            {
                title: '인천광역시 지능형 교통체계(ITS) 2차 디지털트윈 대시보드',
                periodStart: "2024-08",
                periodEnd: "2025-06",
                roles: ['Frontend 개발'],
                description:
                    '교차로 차량 및 보행자 데이터를 디지털트윈 3D 모델로 시각화하는 교통 관제 대시보드 개발. CesiumJS 기반 3D 렌더링 구조를 개선하여 초기 로딩 시간을 30초에서 1.5초로 단축하고 메모리 관리 로직을 개선하여 장시간 구동 안정성을 확보.',
                link: '',
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'CesiumJS'],
            },
            {
                title: '인천항만공사 돌발상황 검지 대시보드',
                periodStart: "2024-10",
                periodEnd: "2024-11",
                roles: ['Frontend 개발'],
                description:
                    '항만 CCTV 영상과 AI 돌발상황 검지 결과를 표출하는 관제 대시보드 개발. Docker 기반 배포 환경을 구축하고 런타임 환경 변수 주입 방식을 도입하여 폐쇄망 환경에서도 안정적인 배포 구조를 구현.',
                link: '',
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'Docker'],
            },
            {
                title: 'AI 모델 학습 파일 관리 시스템',
                periodStart: "2024-05",
                periodEnd: "2024-07",
                roles: ['기획', 'Frontend 개발'],
                description:
                    '모델 파일, 학습 데이터, 학습 클래스 등의 정보를 통합 관리하는 AI 모델 관리 대시보드 개발. 기존에 로컬 PC, NAS, DB에 분산 관리되던 데이터를 통합 관리할 수 있도록 MLOps 기반 대시보드를 구축하여 AI 엔지니어의 모델 관리 효율을 개선.',
                link: '',
                stack: ['JavaScript', 'Next.js', 'Nest.js', 'Tailwind CSS', 'Zustand', 'shadcn/ui', 'Docker', 'Storybook'],
            },
        ],
    }
] satisfies readonly CareerItem[];

export default CAREER_DATA;
