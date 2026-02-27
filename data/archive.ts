import type { ArchiveCategory } from "@/src/types/archive";

export const ARCHIVE_DATA = [
        {
            key: "project",
            title: "Project",
            items: [
                {
                    id: 1,
                    date: "2025.01",
                    title: "개인 블로그 리뉴얼",
                    description:
                        "Next.js 14 App Router와 MDX를 활용한 개인 블로그 리뉴얼 프로젝트. SSG 기반으로 빌드 시점에 정적 페이지를 생성하여 빠른 로딩 속도를 구현.",
                    tags: ["Next.js", "MDX", "Tailwind CSS"],
                },
                {
                    id: 2,
                    date: "2024.11",
                    title: "실시간 채팅 애플리케이션",
                    description:
                        "WebSocket을 활용한 실시간 채팅 앱. Socket.io와 Express 서버를 연동하여 실시간 메시지 전송 및 읽음 처리 기능 구현.",
                    tags: ["Socket.io", "Express", "React"],
                },
                {
                    id: 3,
                    date: "2024.09",
                    title: "포트폴리오 사이트 v2",
                    description:
                        "기존 포트폴리오 사이트를 Next.js App Router 기반으로 전면 리뉴얼. 데이터를 분리하여 관리하며 빌드 시점에 SSG로 렌더링.",
                    tags: ["Next.js", "App Router", "SSG"],
                },
                {
                    id: 4,
                    date: "2024.07",
                    title: "E-Commerce 대시보드",
                    description:
                        "React Query와 Zustand를 활용한 관리자 대시보드. 상품 관리, 주문 현황, 매출 통계 등 핵심 기능을 구현하고 차트 라이브러리로 데이터 시각화.",
                    tags: ["React", "React Query", "Zustand"],
                },
                {
                    id: 5,
                    date: "2024.04",
                    title: "날씨 예보 PWA",
                    description:
                        "OpenWeatherMap API를 연동한 날씨 예보 Progressive Web App. 오프라인 캐싱과 푸시 알림 기능을 구현하여 네이티브 앱에 준하는 사용자 경험 제공.",
                    tags: ["PWA", "Service Worker", "TypeScript"],
                },
                {
                    id: 6,
                    date: "2024.02",
                    title: "칸반 보드 협업 툴",
                    description:
                        "드래그 앤 드롭 기반의 칸반 보드 협업 도구. dnd-kit으로 직관적인 카드 이동을 구현하고 Supabase Realtime으로 팀원 간 실시간 동기화 지원.",
                    tags: ["Supabase", "dnd-kit", "React"],
                },
            ],
        },
        {
            key: "blog",
            title: "Blog Posts",
            items: [
                {
                    id: 1,
                    date: "2025.02",
                    title: "React Server Components 이해하기",
                    description:
                        "RSC의 동작 원리와 기존 SSR과의 차이점을 정리한 글. 번들 사이즈 최적화와 서버-클라이언트 경계에 대한 심층 분석.",
                    tags: ["React", "RSC", "SSR"],
                },
                {
                    id: 2,
                    date: "2024.10",
                    title: "TypeScript 제네릭 활용 패턴",
                    description:
                        "실무에서 자주 사용하는 TypeScript 제네릭 패턴 정리. 유틸리티 타입 구현부터 조건부 타입까지 단계별로 설명.",
                    tags: ["TypeScript", "Generic", "Utility Type"],
                },
                {
                    id: 3,
                    date: "2024.08",
                    title: "CSS-in-JS vs Tailwind CSS 비교",
                    description:
                        "styled-components, emotion 등 CSS-in-JS 라이브러리와 Tailwind CSS의 성능 및 DX 비교. 프로젝트 규모별 추천 가이드.",
                    tags: ["CSS", "Tailwind", "styled-components"],
                },
                {
                    id: 4,
                    date: "2024.06",
                    title: "Next.js 캐싱 전략 완벽 정리",
                    description:
                        "Next.js 14에서 도입된 네 가지 캐싱 레이어(Request Memoization, Data Cache, Full Route Cache, Router Cache)의 동작 방식과 무효화 전략을 예제와 함께 정리.",
                    tags: ["Next.js", "Caching", "Performance"],
                },
                {
                    id: 5,
                    date: "2024.03",
                    title: "웹 접근성 구현 실전 가이드",
                    description:
                        "WCAG 2.1 기준에 맞춰 React 컴포넌트의 접근성을 높이는 방법 정리. ARIA 속성, 키보드 내비게이션, 스크린 리더 대응 등 실무 적용 사례 중심으로 설명.",
                    tags: ["Accessibility", "ARIA", "React"],
                },
                {
                    id: 6,
                    date: "2024.01",
                    title: "프론트엔드 테스트 전략",
                    description:
                        "Vitest와 React Testing Library를 활용한 단위·통합 테스트 작성법. MSW로 API 모킹하는 방법과 테스트 커버리지를 효율적으로 관리하는 전략을 소개.",
                    tags: ["Testing", "Vitest", "MSW"],
                },
            ],
        },
    ] satisfies readonly ArchiveCategory[];

export default ARCHIVE_DATA;
