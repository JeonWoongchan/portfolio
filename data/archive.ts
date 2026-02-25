import type { ArchiveData } from "@/src/types/archive";

export const ARCHIVE_DATA = {
    projects: [
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
    ],
    posts: [
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
    ],
} satisfies ArchiveData;

export default ARCHIVE_DATA;
