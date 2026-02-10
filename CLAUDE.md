# Project context (Frontend)

## Must read first (before proposing code changes)
- tailwind.config.ts
- app/globals.css (or src/styles/globals.css)
- package.json
- eslint/prettier config (if present)

## Styling rules (Tailwind + CSS variables)
- Use existing design tokens from globals.css (CSS variables) first.
- **When adding Tailwind classes or styling, ALWAYS prefer what's already defined in globals.css / tailwind.config.ts (tokens, custom utilities, animations, keyframes, existing classnames).**
- **If a utility/animation/class already exists in globals.css, DO NOT re-create or approximate it—reuse it.**
- Colors: use var(--color-*) tokens. Do NOT invent new hex colors unless asked.
- Tailwind v4: prefer utility classes; only add global CSS when truly global.
- When adding new sizes (e.g. 3xl), prefer extending theme (tailwind.config.ts) instead of ad-hoc values.

## Code conventions
- React + TS: prefer function components + hooks
- Do not change formatting/lint rules; follow existing patterns
- **Before creating a new function/component/hook/util, search the codebase for existing modularized files or similar components and reuse/extend them first.**
- **Follow existing code conventions by referencing nearby files in the same feature/module (naming, folder structure, props patterns, hooks usage, exports).**
- When editing UI, check existing components/utilities before creating new ones

## When unsure
- Ask 1-2 clarifying questions OR read the relevant files using @ references.
- **If implementation details are unclear, read the relevant files first (@globals.css, @tailwind.config.ts, and the closest existing component) before proposing new patterns.**
