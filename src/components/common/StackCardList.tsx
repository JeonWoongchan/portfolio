import StackCard from "@/src/components/common/StackCard";
import type {StackName} from "@/src/types/stack";
import {cn} from "@/lib/utils";
import {VerticalInsetDivider} from "@/src/components/common/VerticalDivider";

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
    const listContent = (
        <div className={cn("flex flex-wrap gap-2", className)}>
            {stackNames.map((stackName, index) => (
                <StackCard
                    key={`${keyPrefix}-${stackName}-${index}`}
                    stackName={stackName}
                    compact={compact}
                />
            ))}
        </div>
    );

    if (border) {
        return <VerticalInsetDivider side="left">{listContent}</VerticalInsetDivider>;
    }

    return (
        listContent
    );
}
