import { SmallText } from "@/src/components/Typography";
import { VerticalDivider } from "@/src/components/common/VerticalDivider";

interface CountCellProps {
    count: number;
    label: string;
    countClassName: string;
}

interface ArchiveCountItemProps {
    projectCount: number;
    blogPostCount: number;
    totalCount: number;
}

function CountCell({ count, label, countClassName }: CountCellProps) {
    return (
        <div className="flex min-w-24 flex-col items-center justify-center">
            <p className={countClassName}>{count}</p>
            <SmallText className="text-center text-(--color-text-body)">{label}</SmallText>
        </div>
    );
}

export default function ArchiveCountItem({
    projectCount,
    blogPostCount,
    totalCount,
}: ArchiveCountItemProps) {
    return (
        <div className="mx-auto flex w-full max-w-xl items-center justify-center">
            <CountCell
                count={projectCount}
                label={"Project"}
                countClassName="text-3xl font-bold text-(--color-green)"
            />
            <VerticalDivider className="mx-6 h-12 bg-(--color-border)" />
            <CountCell
                count={blogPostCount}
                label={"Blog Posts"}
                countClassName="text-3xl font-bold text-(--color-yellow)"
            />
            <VerticalDivider className="mx-6 h-12 bg-(--color-border)" />
            <CountCell
                count={totalCount}
                label={"Total"}
                countClassName="text-3xl font-bold text-(--color-accent)"
            />
        </div>
    );
}
