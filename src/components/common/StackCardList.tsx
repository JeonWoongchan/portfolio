import StackCard from "@/src/components/common/StackCard";
import type {StackName} from "@/src/types/stack";
import {cn} from "@/lib/utils";

interface StackCardListProps {
    stackNames: readonly StackName[];
    keyPrefix: string;
    compact?: boolean;
    border?: boolean;
    className?: string;
}

export default function StackCardList({
    stackNames,
    keyPrefix,
    compact = false,
    border = false,
    className
}: StackCardListProps) {
    return (
        <div className={cn(`flex flex-wrap gap-2 ${border && "border-l border-(--color-border) pl-4"}`, className)}>
            {stackNames.map((stackName, index) => (
                <StackCard
                    key={`${keyPrefix}-${stackName}-${index}`}
                    stackName={stackName}
                    compact={compact}
                />
            ))}
        </div>
    );
}
