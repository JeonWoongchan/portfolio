export type StackName =
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "TypeScript"
    | "React"
    | "Next.js"
    | "Git"
    | "GitHub"
    | "Vercel"
    | "Neon"
    | "Cloudflare"
    | "VS Code"
    | "IntelliJ IDEA"
    | "Redux Toolkit"
    | "Zustand"
    | "TanStack Query"
    | "Tailwind CSS"
    | "Material UI"
    | "Ant Design"
    | "shadcn/ui"
    | "Jest"
    | "Vitest"
    | "Vite"
    | "Webpack"
    | "Docker"
    | "MariaDB"
    | "PostgreSQL"
    | "Figma"
    | "Turborepo"
    | "Nest.js"
    | "CesiumJS"
    | "Storybook"
        | "Velog";

export interface StackMeta {
    img: string;
    color: string;
}

export const stackMeta: Record<StackName, StackMeta> = {
    HTML: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#e34f26",
    },
    CSS: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572b6",
    },
    JavaScript: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#f7df1e",
    },
    TypeScript: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178c6",
    },
    React: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61dafb",
    },
    "Next.js": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#ffffff",
    },
    Git: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#f05032",
    },
    GitHub: {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            color: "#ffffff",
    },

    Vercel: {
        img: "/vercel.svg",
        color: "#000000",
    },
    Neon: {
        img: "https://avatars.githubusercontent.com/u/77690634?s=200&v=4",
        color: "#00e599",
    },
    Cloudflare: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
        color: "#f38020",
    },
    "VS Code": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007acc",
    },
    "IntelliJ IDEA": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        color: "#fe315d",
    },

    // 상태 관리
    "Redux Toolkit": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        color: "#764abc",
    },
    Zustand: {
        // devicon 미지원 → 공식 로고 대체
        img: "/images/zustand.svg",
        color: "#443e38",
    },
    "TanStack Query": {
        // devicon 미지원 → 공식 로고 대체
        img: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
        color: "#ff4154",
    },

    // UI / 스타일링
    "Tailwind CSS": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06b6d4",
    },
    "Material UI": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        color: "#007fff",
    },
    "Ant Design": {
        // devicon 미지원 → 공식 CDN 대체
        img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        color: "#1677ff",
    },
    "shadcn/ui": {
        // devicon 미지원 → 공식 로고 대체
        img: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
        color: "#ffffff",
    },

    // 테스트
    Jest: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        color: "#c21325",
    },
    Vitest: {
        // devicon 미지원 → 공식 로고 대체
        img: "https://vitest.dev/logo.svg",
        color: "#6e9f18",
    },

    // 빌드 도구
    Vite: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        color: "#646cff",
    },
    Webpack: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        color: "#8dd6f9",
    },

    // 인프라 / DevOps
    Docker: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ed",
    },

    // DB
    MariaDB: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
        color: "#c0765a",
    },
    PostgreSQL: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#4169e1",
    },

    // 디자인
    Figma: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#f24e1e",
    },

    // 모노레포 / 백엔드 / 특수
    Turborepo: {
        // devicon 미지원 → 공식 로고 대체
        img: "/images/turborepo.png",
        color: "#ef4444",
    },
    "Nest.js": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        color: "#e0234e",
    },
    CesiumJS: {
        // devicon 미지원 → 공식 로고 대체
        img: "https://avatars.githubusercontent.com/u/54716382?s=48&v=4",
        color: "#6caddf",
    },
    Storybook: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        color: "#ff4785",
    },
    Velog: {
            img: "https://velog.io/favicon.ico",
            color: "#20c997",
    },
};
