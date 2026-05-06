import type { LiveServiceData } from "@/src/types/liveService";

const LIVE_SERVICE_DATA = {
    name: "Open Issue Map",
    status: "운영 중",
    summary: "GitHub 프로필과 온보딩 설문을 기반으로 지금 기여하기 좋은 오픈소스 이슈를 추천하는 서비스입니다.",
    description:
        "오픈소스에 기여하고 싶지만 시작점을 찾기 어려운 사용자를 위해 추천 이슈 탐색, 관심 이슈 저장, PR 활동 확인 흐름을 한 화면에서 관리하도록 설계했습니다.",
    images: [
        {
            src: "/images/open-issue-map/login.png",
            alt: "Open Issue Map 로그인 화면",
            title: "GitHub OAuth 진입",
        },
        {
            src: "/images/open-issue-map/onboarding1.png",
            alt: "Open Issue Map 온보딩 설문 화면",
            title: "온보딩 프로필 수집",
        },
        {
            src: "/images/open-issue-map/dashboard.png",
            alt: "Open Issue Map 추천 이슈 대시보드 화면",
            title: "추천 이슈 대시보드",
        },
        {
            src: "/images/open-issue-map/bookmarks.png",
            alt: "Open Issue Map 북마크 화면",
            title: "관심 이슈 북마크",
        },
        {
            src: "/images/open-issue-map/pr-history.png",
            alt: "Open Issue Map PR 히스토리 화면",
            title: "PR 활동 히스토리",
        },
    ],
    links: [
        {
            label: "서비스",
            href: "https://openissuemap.com",
        },
        {
            label: "GitHub",
            href: "https://github.com/JeonWoongchan/open-issue-map",
        },
    ],
    stack: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "TanStack Query",
        "PostgreSQL",
        "Vitest",
    ],
    metrics: [
        {
            label: "인증",
            value: "GitHub OAuth",
        },
        {
            label: "연동",
            value: "GitHub GraphQL",
        },
        {
            label: "인프라",
            value: "Neon + Vercel + Cloudflare",
            stackNames: ["Neon", "Vercel", "Cloudflare"],
        },
    ],
    features: [
        {
            title: "맞춤 이슈 추천",
            description: "GitHub 프로필 및 사용자 온보딩 결과를 반영해 이슈를 추천합니다.",
        },
        {
            title: "추천 점수",
            description: "언어, 난이도, 기여 유형, 경쟁도, 작업 시간, 목적 등의 기준으로 추천 점수를 계산합니다.",
        },
        {
            title: "북마크",
            description: "관심 이슈를 저장하고 GitHub 조회 실패 시에도 DB에 저장된 정보로 fallback 표시합니다.",
        },
        {
            title: "PR 히스토리",
            description: "본인 소유 저장소를 제외한 외부 저장소 PR과 additions/deletions 통계를 확인합니다.",
        },
    ],
    architecture: [
        {
            title: "화면 진입",
            description: "App Router에서 로그인 여부와 온보딩 완료 여부를 먼저 확인합니다.",
        },
        {
            title: "내부 API",
            description: "Route Handler가 브라우저 요청을 받아 GitHub 연동과 서비스 로직을 중계합니다.",
        },
        {
            title: "도메인 로직",
            description: "추천 점수, 저장소 건강도, 북마크 fallback 처리를 화면 코드와 분리했습니다.",
        },
        {
            title: "외부 연동",
            description: "GitHub API와 저장소 데이터 처리는 서버 경계 안에서만 수행합니다.",
        },
    ],
    recommendation: {
        stages: [
            {
                title: "사용자 온보딩",
                description: "온보딩에서 경험 수준, 선호 언어, 기여 목적, 주간 가능 시간을 받습니다.",
            },
            {
                title: "이슈 후보 수집",
                description: "선호 언어와 GitHub 검색 조건으로 오픈 이슈 후보를 가져옵니다.",
            },
            {
                title: "매칭 점수 계산",
                description: "이슈 라벨, 제목, 댓글 수, 저장소 상태를 온보딩 정보와 비교합니다.",
            },
            {
                title: "추천 목록 정리",
                description: "필터를 적용하고 사용자가 바로 비교할 수 있는 순서로 정렬합니다.",
            },
        ],
    },
    highlights: [
        "사용자 온보딩 프로필과 이슈 메타데이터를 비교해 추천 점수를 계산",
        "GitHub API 장애 시에도 저장된 북마크 정보를 fallback으로 표시",
        "TanStack Query로 추천 이슈, 북마크, PR 활동의 캐시와 mutation 상태 관리",
    ],
} satisfies LiveServiceData;

export default LIVE_SERVICE_DATA;
