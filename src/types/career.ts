import type {StackName} from '@/src/types/stack';

export interface CareerProject {
    title: string;
    period: string;
    description: string;
    roles: string[]
    stack: readonly StackName[];
}

export interface CareerItem {
    company: string;
    period: string;
    quote: string;
    location: string;
    team: string;
    badges: readonly string[];
    stack: readonly StackName[];
    highlights: readonly string[];
    projects: readonly CareerProject[];
    isCurrent?: boolean;
}