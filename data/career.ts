import type { CareerItem } from "@/src/types/career";

export const CAREER_DATA = [
    {
        company: '유리네트웍스',
        periodStart: '2025.10',
        periodEnd: '2025.12',
        quote: '지능형 교통 시스템(ITS) 관련 솔루션을 개발하는 기업',
        team: 'ITS개발팀 · 프리랜서',
        badges: ['Frontend 개발'],
        stack: ['JavaScript', 'React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
        projects: [
            {
                title: '머신러닝 기반 교통 신호 최적화 시스템',
                periodStart: '2025.10',
                periodEnd: '2025.12',
                roles: ['Frontend 개발'],
                description:
                    '지역별 교통량과 신호 데이터를 기반으로, 신호 최적화 결과를 확인할 수 있는 시스템',
                highlights: [
                    '대용량 신호 데이터의 조회 전략 분리와 TanStack Query 캐싱 도입으로 초기 페이지 로딩 시간 5초 → 1초 미만 단축',
                    '로딩 지연 구간에 스켈레톤 UI를 적용해 사용자 체감 속도를 개선하고 고객사 사용성 테스트 통과에 기여',
                ],
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
            },
        ],
        isCurrent: false,
    },
    {
        company: '글로벌브릿지',
        periodStart: '2024.04',
        periodEnd: '2025.09',
        quote: '컴퓨터 비전 기반 AI 객체 검지와 데이터 시각화 기술을 바탕으로 교통 솔루션을 제공하는 기업',
        team: 'AI 솔루션팀',
        badges: ['Frontend 개발', 'Backend 개발'],
        stack: ['TypeScript', 'React', 'Next.js', 'Nest.js', 'Turborepo', 'Docker'],
        projects: [
            {
                title: '객체 검지 데이터 맞춤형 시각화 솔루션',
                periodStart: '2025.03',
                periodEnd: '2025.09',
                roles: ['기획', 'Frontend 개발'],
                description:
                    '사용자가 원하는대로 영상, 차트, 지도 등 다양한 시각화 방식을 조합해 객체 검지 데이터를 효율적으로 확인할 수 있는 솔루션',
                highlights: [
                    'Polling 기반 데이터 수신 구조를 SSE로 전환해 실시간성을 개선하고, 1초 Polling 기준 시간당 3,600건의 반복 요청 제거',
                    'Monorepo 도입 후 프로젝트별 공통 컴포넌트 평균 10개를 재사용 가능한 구조로 정리해 신규 프로젝트 개발 기간 2주 단축',
                    '디자인 토큰과 shadcn/ui를 연동하고 토큰 규격 및 사용 가이드를 문서화해 디자인 시스템 구축',
                ],
                stack: ['TypeScript', 'Next.js', 'Turborepo', 'Tailwind CSS', 'Zustand', 'shadcn/ui', 'Docker'],
            },
            {
                title: '교차로 시뮬레이션 3D 시각화 시스템',
                periodStart: '2024.08',
                periodEnd: '2025.06',
                roles: ['Frontend 개발'],
                description:
                    '교차로별 도로, 차량, 보행자 등을 3D로 시각화해 교통 흐름을 직관적으로 확인할 수 있는 시스템',
                highlights: [
                    'Cesium.js 기반 3D 모델 렌더링 구조를 개선해 초기 로딩 시간을 약 30초에서 5초 미만으로 단축',
                    '3D 객체 누적에 따른 메모리 누수 구간을 개선해 장시간 구동 시 메모리 사용량을 최대 1.5GB에서 500MB 미만으로 절감',
                    'Docker 도입과 런타임 환경변수 적용으로 배포 환경별 설정 차이를 줄이고 배포 안정성 개선',
                ],
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'CesiumJS', 'Docker'],
            },
            {
                title: 'AI 모델 학습 파일·메타데이터 관리 시스템',
                periodStart: '2024.05',
                periodEnd: '2024.07',
                roles: ['기획', 'Frontend 개발'],
                description:
                    '모델 파일과 학습 모델, 학습 클래스 등의 메타데이터를 통합 관리할 수 있는 AI 모델 관리 시스템',
                highlights: [
                    '분산된 AI 모델 및 학습 데이터를 통합 관리할 수 있도록 기획부터 개발, 배포까지 End-to-End로 참여',
                    'NAS와 DB 간 데이터 정합성 문제를 해결하기 위해 보상 트랜잭션 로직을 설계하고 반영',
                ],
                stack: ['JavaScript', 'Next.js', 'Nest.js', 'PostgreSQL', 'Tailwind CSS', 'Zustand', 'Docker', 'Storybook'],
            },
        ],
    }
] satisfies readonly CareerItem[];

export default CAREER_DATA;
