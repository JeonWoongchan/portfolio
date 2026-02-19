import {StackName} from "@/src/types/stack";

export interface CareerItem {
    company: string;
    subtitle: string;
    period: string;
    isCurrent: boolean;
    stack: StackName[];
    tasks: string[];
}

export interface TimelineItemProps {
    item: CareerItem;
    isLast: boolean;
}