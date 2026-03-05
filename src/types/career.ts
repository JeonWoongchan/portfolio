import type {StackName} from '@/src/types/stack';
import type { YearMonth } from "@/src/types/yearMonth";

export interface CareerProject {
    title: string;
    periodStart: YearMonth;
    periodEnd: YearMonth | "";
    description: string;
    roles: string[];
    highlights: readonly string[];
    stack: readonly StackName[];
}

export interface CareerItem {
    company: string;
    periodStart: YearMonth;
    periodEnd: YearMonth | "";
    quote: string;
    team: string;
    badges: readonly string[];
    stack: readonly StackName[];
    projects: readonly CareerProject[];
    isCurrent?: boolean;
}
