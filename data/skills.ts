import type { SkillCategory } from "@/src/types/skills";

export const SKILL_DATA = [
    {
        "key": "frontend",
        "title": "Frontend",
        "items": [
            {
                "name": "HTML",
                "content": "Semantic markup & accessibility",
                "tags": ["HTML5", "Semantic"]
            },
            {
                "name": "CSS",
                "content": "Responsive layouts & animations",
                "tags": ["CSS3", "Flexbox & Grid", "Responsive Design"]
            },
            {
                "name": "JavaScript",
                "content": "ES6+ & DOM manipulation",
                "tags": ["ES6+", "DOM", "비동기"]
            },
            {
                "name": "TypeScript",
                "content": "Type-safe development",
                "tags": ["Type System", "Generics"]
            },
            {
                "name": "React",
                "content": "Component-based UI development",
                "tags": ["Hooks", "State Management"]
            },
            {
                "name": "Next.js",
                "content": "Full-stack React framework with SSR",
                "tags": ["App Router", "SSR"]
            }
        ]
    },
    {
        "key": "library",
        "title": "Library",
        "items": [
            {
                "name": "Tailwind CSS",
                "content": "Utility-first CSS framework",
                "tags": ["Responsive Design", "Design System"]
            },
            {
                "name": "Material UI",
                "content": "Material Design React component library",
                "tags": ["Component UI Library"]
            },
            {
                "name": "Ant Design",
                "content": "Enterprise React UI component library",
                "tags": ["Component UI Library"]
            },
            {
                "name": "shadcn/ui",
                "content": "Composable React component library",
                "tags": ["Headless UI Library", "Customization"]
            },
            {
                "name": "Redux Toolkit",
                "content": "Predictable global state management",
                "tags": ["State Management"]
            },
            {
                "name": "Zustand",
                "content": "Lightweight client state management",
                "tags": ["Client State Management"]
            },
            {
                "name": "TanStack Query",
                "content": "Async server state management",
                "tags": ["Server State Management"]
            },
            {
                "name": "Jest",
                "content": "JavaScript testing framework",
                "tags": ["Unit Testing", "Mocking"]
            },
            {
                "name": "Vitest",
                "content": "Vite-native testing framework",
                "tags": ["Unit Testing", "ESM"]
            },
            {
                "name": "Storybook",
                "content": "UI component development & documentation",
                "tags": ["Component Driven Development", "Docs"]
            },
            {
                "name": "CesiumJS",
                "content": "3D geospatial visualization engine",
                "tags": ["3D Visualization", "GIS"]
            }
        ]
    },
    {
        "key": "devops",
        "title": "Environment & Deploy",
        "items": [
            {
                "name": "Vite",
                "content": "Next-generation frontend build tool",
                "tags": ["Bundling", "ESM"]
            },
            {
                "name": "Webpack",
                "content": "Module bundler for complex builds",
                "tags": ["Bundling"]
            },
            {
                "name": "Turborepo",
                "content": "High-performance monorepo build system",
                "tags": ["Monorepo", "Next.js"]
            },
            {
                "name": "Docker",
                "content": "Container-based environment management",
                "tags": ["Container", "Image", "Compose"]
            },
            {
                "name": "Git",
                "content": "Version control & collaboration",
                "tags": ["Branch Strategy", "GitHub", "GitLab"]
            },
            {
                "name": "Vercel",
                "content": "Deployment & hosting platform",
                "tags": ["CI/CD"]
            },
            {
                "name": "Figma",
                "content": "Collaborative UI/UX design tool",
                "tags": ["Design", "Prototype"]
            }
        ]
    },
    {
        "key": "backend",
        "title": "Backend & Database",
        "items": [
            {
                "name": "Nest.js",
                "content": "Scalable Node.js server-side framework",
                "tags": ["REST API", "DI"]
            },
            {
                "name": "MariaDB",
                "content": "Relational database management system",
                "tags": ["SQL", "RDBMS", "MySQL-compatible"]
            },
            {
                "name": "PostgreSQL",
                "content": "Advanced open-source relational database",
                "tags": ["SQL", "JSONB"]
            }
        ]
    },
] satisfies readonly SkillCategory[];

export default SKILL_DATA;
