export type SectionTone = "navy" | "navyLight";

type SurfaceVars = Record<`--${string}`, string>;

interface SectionToneStyle {
    sectionClassName: string;
    surfaceVars: SurfaceVars;
}

export const SECTION_TONE_STYLE_MAP: Record<SectionTone, SectionToneStyle> = {
    navy: {
        sectionClassName: "bg-(--color-navy)",
        surfaceVars: {
            "--surface-card": "var(--color-navy-light)",
            "--surface-card-border": "var(--color-border-light)",
            "--surface-button": "var(--color-navy-light)",
            "--surface-button-text": "var(--color-white)",
            "--surface-button-hover": "var(--color-accent)",
            "--surface-button-hover-text": "var(--color-black)",
        },
    },
    navyLight: {
        sectionClassName: "bg-(--color-navy-light)",
        surfaceVars: {
            "--surface-card": "var(--color-navy)",
            "--surface-card-border": "var(--color-border)",
            "--surface-button": "var(--color-navy)",
            "--surface-button-text": "var(--color-white)",
            "--surface-button-hover": "var(--color-accent)",
            "--surface-button-hover-text": "var(--color-black)",
        },
    },
};
