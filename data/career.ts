import type { CareerItem } from "@/src/types/career";

export const CAREER_DATA = [
    {
        company: '유리네트웍스',
        periodStart: "2025.10",
        periodEnd: "2025.11",
        quote: '지능형 교통 관제 시스템(ITS) 관련 시스템을 개발하는 기업',
        team: 'ITS개발팀 · 프리랜서',
        badges: ['Frontend 개발'],
        stack: ['JavaScript','React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
        projects: [
            {
                title: '머신러닝 기반 교통 신호 최적화 대시보드',
                periodStart: "2025.10",
                periodEnd: "2025.12",
                roles: ['Frontend 개발'],
                description:
                    '교차로의 실시간 차량 신호 데이터 및 최적화 알고리즘을 통한 신호 최적화 결과를 시각화하는 교통 관제 솔루션',
                highlights: [
                    '대용량 신호 데이터 조회 전략 분리와 TanStack Query 캐싱 도입으로 초기 페이지 로딩 시간 5초 → 1초 미만 단축',
                    '추가로 로딩 지연 영역에 스켈레톤 UI를 적용해 고객사 사용성 테스트 통과에 기여',
                ],
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'TanStack Query', 'Docker'],
            },
        ],
        isCurrent: false,
    },
    {
        company: '글로벌브릿지',
        periodStart: "2024.04",
        periodEnd: "2025.09",
        quote: 'AI 영상 분석과 실시간 관제 기술을 바탕으로 스마트 횡단보도, 돌발상황 검지, 디지털트윈 대시보드 등 지능형 교통 솔루션을 제공하는 기업',
        team: 'AI 솔루션팀',
        badges: ['Frontend 개발', 'Backend 개발'],
        stack: ['TypeScript', 'React', 'Next.js', 'Nest.js', 'Turborepo', 'Docker'],
        projects: [
            {
                title: 'AI 객체 검지 기반 고객 맞춤형 시각화 대시보드 솔루션',
                periodStart: "2025.08",
                periodEnd: "2025.09",
                roles: ['기획', 'Frontend 개발'],
                description:
                    'AI 객체 검지 데이터를 고객 맞춤형 요구사항에 따라 시각화하는 범용 대시보드 솔루션',
                highlights: [
                    '모노레포 도입을 통한 프로젝트별 공통 컴포넌트 평균 10개 정리로 개발 생산성 개선',
                    '디자인 토큰과 shadcn/ui 컴포넌트 연동, 토큰 규격 및 사용 가이드 문서화를 통해 디자인 시스템 구축',
                ],
                stack: ['TypeScript', 'Next.js', 'Turborepo', 'Tailwind CSS', 'Zustand', 'shadcn/ui', 'Docker'],
            },
            {
                title: 'AI 객체 검지 기반 교통 시뮬레이션 3D 시각화 대시보드',
                periodStart: "2024.08",
                periodEnd: "2025.06",
                roles: ['Frontend 개발'],
                description:
                    '교차로 내 차량과 보행자 정보 수집 및 분석하여 3D 모델을 활용한 디지털트윈으로 표출하는 대시보드 솔루션',
                highlights: [
                    'Cesium.js 기반 디지털트윈 3D 모델 렌더링 구조 개선으로 초기 로딩 약 30초 → 1.5초 단축',
                    '대용량 디지털트윈 리소스의 메모리 누수 구간을 개선하여 장시간 구동 시 메모리 사용량을 1.5GB → 500MB 미만으로 절감'
                ],
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'CesiumJS'],
            },
            {
                title: '인천항만공사 돌발상황 검지 대시보드',
                periodStart: "2024.10",
                periodEnd: "2024.11",
                roles: ['Frontend 개발'],
                description:
                    '인천항 부잔교 출입 인원에 대한 돌발상황 검지 결과와 CCTV 영상을 실시간으로 표출하는 대시보드',
                highlights: [
                    'Polling 기반 돌발상황 데이터 수신 구조를 SSE로 전환해 실시간성을 개선하고, 1초 Polling 기준 시간당 3,600건의 반복 요청을 제거',
                    'Docker 런타임 환경변수 주입 방식을 도입하여 배포 환경 간 설정 불일치 문제 해소 및 배포 안정성 향상'
                ],
                stack: ['JavaScript', 'React', 'Redux Toolkit', 'Docker'],
            },
            {
                title: 'AI 모델 학습 파일 · 메타데이터 통합 관리 시스템',
                periodStart: "2024.05",
                periodEnd: "2024.07",
                roles: ['기획', 'Frontend 개발'],
                description:
                    '모델 파일과 함께 학습 모델, 학습 클래스 등의 데이터를 통합 관리할 수 있는 AI 모델 관리 시스템',
                highlights: [
                    '분산된 AI 모델·학습 데이터 통합 관리를 위한 MLOps 도입 및 기획부터 배포까지 End-to-End 개발 경험',
                    'NAS-DB 데이터 동기화 정합성 문제 해결을 위한 보상 트랜잭션 로직 설계',
                ],
                stack: ['JavaScript', 'Next.js', 'Nest.js', 'PostgreSQL', 'Tailwind CSS', 'Zustand', 'Docker', 'Storybook'],
            },
        ],
    }
] satisfies readonly CareerItem[];

export default CAREER_DATA;
