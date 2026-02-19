export type StackName =
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "TypeScript"
    | "React"
    | "Next.js"
    | "Git"
    | "Vercel"
    | "VS Code"
    | "IntelliJ";

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
    Vercel: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        color: "#ffffff",
    },
    "VS Code": {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007acc",
    },
    IntelliJ: {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        color: "#fe315d",
    },
};