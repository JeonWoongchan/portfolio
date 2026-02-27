import type { SkillCategory } from "@/src/types/skills";

export const SKILL_DATA = [
    {
        "key": "frontend",
        "title": "Frontend",
        "items": [
            {
                "name": "HTML",
                "content": "Semantic markup & accessibility",
                "tags": ["Semantic", "SEO", "Accessibility"]
            },
            {
                "name": "CSS",
                "content": "Responsive layouts & animations",
                "tags": ["Flexbox", "Grid", "Animation"]
            },
            {
                "name": "JavaScript",
                "content": "ES6+ & DOM manipulation",
                "tags": ["ES6+", "DOM API", "Async"]
            },
            {
                "name": "TypeScript",
                "content": "Type-safe development",
                "tags": ["Type System", "Generics"]
            },
            {
                "name": "React",
                "content": "Component-based UI development",
                "tags": ["Hooks", "State Mgmt"]
            },
            {
                "name": "Next.js",
                "content": "SSR & full-stack React framework",
                "tags": ["SSR", "App Router"]
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
                "tags": ["Utility-first", "Responsive", "Dark Mode"]
            },
            {
                "name": "Material UI",
                "content": "Google Material Design component library",
                "tags": ["Components", "Theming", "Accessibility"]
            },
            {
                "name": "Ant Design",
                "content": "Enterprise-grade UI component library",
                "tags": ["Components", "Form", "Table"]
            },
            {
                "name": "shadcn/ui",
                "content": "Composable & unstyled component library",
                "tags": ["Radix UI", "Tailwind CSS", "Composable"]
            },
            {
                "name": "Redux Toolkit",
                "content": "Predictable global state management",
                "tags": ["Slice", "RTK Query", "Middleware"]
            },
            {
                "name": "Zustand",
                "content": "Lightweight client state management",
                "tags": ["Store", "Middleware", "Devtools"]
            },
            {
                "name": "TanStack Query",
                "content": "Async server state management",
                "tags": ["Caching", "Refetch", "Optimistic UI"]
            },
            {
                "name": "Jest",
                "content": "JavaScript unit & integration testing",
                "tags": ["Unit Test", "Mocking", "Coverage"]
            },
            {
                "name": "Vitest",
                "content": "Vite-native fast unit testing",
                "tags": ["Unit Test", "ESM", "Vite"]
            },
            {
                "name": "Storybook",
                "content": "UI component development & documentation",
                "tags": ["Component Driven", "Docs", "Addons"]
            },
            {
                "name": "CesiumJS",
                "content": "3D geospatial visualization engine",
                "tags": ["3D Globe", "GIS", "WebGL"]
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
                "tags": ["HMR", "ESM", "Bundle"]
            },
            {
                "name": "Webpack",
                "content": "Module bundler for complex builds",
                "tags": ["Bundling", "Loader", "Plugin"]
            },
            {
                "name": "Turborepo",
                "content": "High-performance monorepo build system",
                "tags": ["Monorepo", "Cache", "Pipeline"]
            },
            {
                "name": "Docker",
                "content": "Container-based environment management",
                "tags": ["Container", "Image", "Compose"]
            },
            {
                "name": "Git",
                "content": "Version control & collaboration",
                "tags": ["Branch", "Merge", "GitHub"]
            },
            {
                "name": "Vercel",
                "content": "Deployment & hosting platform",
                "tags": ["CI/CD", "Preview", "Domain"]
            },
            {
                "name": "Figma",
                "content": "Collaborative UI/UX design tool",
                "tags": ["Design", "Prototype", "Handoff"]
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
                "tags": ["REST API", "DI", "Decorator"]
            },
            {
                "name": "MariaDB",
                "content": "Relational database management system",
                "tags": ["SQL", "RDBMS", "MySQL-compatible"]
            },
            {
                "name": "PostgreSQL",
                "content": "Advanced open-source relational database",
                "tags": ["SQL", "JSONB", "Extensions"]
            }
        ]
    },
] satisfies readonly SkillCategory[];

export default SKILL_DATA;
