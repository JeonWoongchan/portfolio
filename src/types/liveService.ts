import type { StackName } from "@/src/types/stack";

export interface LiveServiceLink {
    label: string;
    href: string;
}

export interface LiveServiceMetric {
    label: string;
    value: string;
    stackNames?: readonly StackName[];
}

export interface LiveServiceArchitectureStep {
    title: string;
    description: string;
}

export interface LiveServiceDetailItem {
    title: string;
    description: string;
}

export interface LiveServiceRecommendationDesign {
    stages: readonly LiveServiceDetailItem[];
}

export interface LiveServiceImage {
    src: string;
    alt: string;
    title: string;
}

export interface LiveServiceData {
    name: string;
    status: string;
    summary: string;
    description: string;
    images: readonly LiveServiceImage[];
    links: readonly LiveServiceLink[];
    stack: readonly StackName[];
    metrics: readonly LiveServiceMetric[];
    features: readonly LiveServiceDetailItem[];
    architecture: readonly LiveServiceArchitectureStep[];
    recommendation: LiveServiceRecommendationDesign;
    highlights: readonly string[];
}
