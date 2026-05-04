import type { ArchiveCategory } from "@/src/types/archive";

export const ARCHIVE_DATA = [
    {
        key: "project",
        title: "Project",
        items: [
            {
                id: 1,
                periodStart: "2023.09",
                periodEnd: "2023.11",
                title: "커뮤니티+OTT 사이트",
                link: "https://github.com/JeonWoongchan/BomBomOTT",
                description:
                    "대학 진학 중 처음 진행한 웹개발 팀 프로젝트. TMDB API를 활용한 디즈니플러스 클론코딩에 커뮤니티를 접목시킨 사이트",
                tags: ["React", "Team Development", "TMDB API"],
            },
            {
                id: 2,
                periodStart: "2023.11",
                periodEnd: "2024.04",
                title: "포트폴리오 사이트",
                link: "https://github.com/JeonWoongchan/Portfolio_old",
                description:
                    "신입 프론트엔드 개발자 취업을 위해 나를 소개하는 포트폴리오 사이트 개발. 반응형 웹 구현에 신경쓰며 개발",
                tags: ["React", "Responsive Design"],
            },
            {
                id: 3,
                periodStart: "2024.01",
                periodEnd: "2024.04",
                title: "Weather Life",
                link: "https://github.com/JeonWoongchan/weatherLife",
                description:
                    "기상청 Open API를 사용한 초단기/단기 예보 정보 제공 사이트. 신입 개발자 준비 과정에서 진행한 개인 프로젝트",
                tags: ["React", "Open API"],
            },
            {
                id: 4,
                periodStart: "2024.09",
                periodEnd: "2024.09",
                title: "Restaurant WooDy",
                link: "https://github.com/JeonWoongchan/restaurant",
                description:
                    "레스토랑 홍보 및 예약 기능을 구현한 레스토랑 홈페이지. 사용자 경험을 고려한 UI와 예약 기능 구현에 초점을 맞춰 진행",
                tags: ["React", "Team Development"],
            },
            {
                id: 5,
                periodStart: "2026.02",
                periodEnd: "2026.03",
                title: "포트폴리오 사이트 리뉴얼",
                link: "https://github.com/JeonWoongchan/portfolio",
                description:
                    "프론트엔드 개발자 경력 소개를 위한 포트폴리오 사이트 리뉴얼 프로젝트",
                tags: ["TypeScript", "Next.js", "SSG"],
            },
            {
                id: 6,
                periodStart: "2026.04",
                periodEnd: "2026.05",
                title: "Open Issue Map",
                link: "https://github.com/JeonWoongchan/open-issue-map",
                description:
                    "GitHub 계정으로 로그인하고 간단한 설문에 답하면, 사용자 수준과 시간에 맞는 오픈소스 이슈를 추천해주는 서비스",
                tags: ["TypeScript", "Next.js", "Live Service"],
            },
        ],
    },
    {
        key: "blog",
        title: "Blog Posts",
        items: [
            {
                id: 1,
                periodStart: "2024.03",
                periodEnd: "2024.03",
                title: "useRef를 이용하여 원하는 컴포넌트 위치로 스크롤 이동시키기",
                link: "https://velog.io/@jchan715/React-useRef%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9B%90%ED%95%98%EB%8A%94-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9C%84%EC%B9%98%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99%EC%8B%9C%ED%82%A4%EA%B8%B0",
                description:
                    "포트폴리오 사이트 개발 중 학습한 useRef 활용 방안 기록",
                tags: ["React", "useRef"],
            },
            {
                id: 2,
                periodStart: "2024.06",
                periodEnd: "2024.06",
                title: "Restaurant WooDy 캘린더 구현",
                link: "https://velog.io/@jchan715/React-%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0",
                description:
                    "라이브러리 사용 없이 Restaurant WooDy 프로젝트 예약 기능에 사용하는 캘린더를 직접 구현",
                tags: ["React", "UI/UX"],
            },
            {
                id: 3,
                periodStart: "2024.10",
                periodEnd: "2024.10",
                title: "JWT를 활용한 React 로그인 구현",
                link: "https://velog.io/@jchan715/React-%EB%A6%`AC%EC%95%A1%ED%8A%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%B2%98%EB%A6%ACJWT",
                description:
                    "JWT를 활용한 로그인 동작방식과 AccessToken, RefreshToken 관리 방안 기록",
                tags: ["React", "JWT"],
            },
            {
                id: 4,
                periodStart: "2026.02",
                periodEnd: "2026.02",
                title: "Props Drilling 개선 방향",
                link: "https://velog.io/@jchan715/Props-Drilling-%EC%A4%84%EC%9D%B4%EA%B8%B0ContextZustandTanstack-Query",
                description:
                    "포트폴리오 리뉴얼 프로젝트 중 상태 관리 기준에 맞는 Props Drilling 개선에 대한 고민",
                tags: ["React", "State Management"],
            },
            {
                id: 5,
                periodStart: "2026.03",
                periodEnd: "2026.03",
                title: "SSR/SSG/ISR/CSR 렌더링 방식 선정",
                link: "https://velog.io/@jchan715/Next.js-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EB%B0%B0%ED%8F%AC-%ED%9A%8C%EA%B3%A0-%EC%99%9C-SSG%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C",
                description:
                    "포트폴리오 리뉴얼 프로젝트에서 페이지 성격에 따라 Next.js 렌더링 방식을 적용한 과정",
                tags: ["Next.js", "SSR/SSG/ISR/CSR"],
            },
            {
                id: 6,
                periodStart: "2026.03",
                periodEnd: "2026.03",
                title: "프론트엔드 성능(FCP, LCP) 측정 방법과 최적화 방안",
                link: "https://velog.io/@jchan715/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%84%B1%EB%8A%A5FCP-LCP-%EC%B8%A1%EC%A0%95-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EC%95%88",
                description:
                    "Chrome DevTools Performance 탭을 활용해 FCP와 LCP를 측정하고 최적화 방안",
                tags: ["Performance", "FCP", "LCP"],
            },
            {
                id: 7,
                periodStart: "2026.04",
                periodEnd: "2026.04",
                title: "모노레포와 디자인 시스템 도입기(feat. AI Context 활용까지)",
                link: "https://velog.io/@jchan715/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC%EC%99%80-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%8F%84%EC%9E%85%EA%B8%B0feat.-AI-Context-%ED%99%9C%EC%9A%A9%EA%B9%8C%EC%A7%80",
                description:
                    "실무에서 모노레포와 디자인 시스템을 설계하고 적용한 경험을 기록",
                tags: ["Monorepo", "Design System", "실무 경험"],
            },
        ],
    },
] satisfies readonly ArchiveCategory[];

export default ARCHIVE_DATA;
