import type { LucideIcon } from "lucide-react";

export type AboutData = {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
};

export type AboutProfileMetaKey = "email" | "position" | "education" | "tags";

export type AboutProfileMetaText = {
    id: number;
    key: AboutProfileMetaKey;
    text: string;
};

export type AboutProfileTextData = {
    name: string;
    role: string;
    metaItems: readonly AboutProfileMetaText[];
};
