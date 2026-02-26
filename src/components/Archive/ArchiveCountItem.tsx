import { SmallText } from "@/src/components/Typography";
import { VerticalDivider } from "@/src/components/common/VerticalDivider";
import type { ArchiveFilter } from "@/src/types/archive";
import {cn} from "@/lib/utils";

interface CountCellProps {
    count: number;
    label: string;
    countClassName: string;
    activeLabelClassName: string;
    isActive: boolean;
    onClick: () => void;
}

interface ArchiveCountItemProps {
    projectCount: number;
    blogPostCount: number;
    totalCount: number;
    selectedFilter: ArchiveFilter;
    onFilterChange: (filter: ArchiveFilter) => void;
}

function CountCell({
    count,
    label,
    countClassName,
    activeLabelClassName,
    isActive,
    onClick,
}: CountCellProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex min-w-24 cursor-pointer flex-col items-center justify-center rounded-md px-2 py-1 transition-colors"
            aria-pressed={isActive}
        >
            <p className={cn("text-4xl font-bold", countClassName)}>{count}</p>
            <SmallText
                className={`text-center transition-colors ${
                    isActive ? activeLabelClassName : "text-(--color-text-body)"
                }`}
            >
                {label}
            </SmallText>
        </button>
    );
}

export default function ArchiveCountItem({
    projectCount,
    blogPostCount,
    totalCount,
    selectedFilter,
    onFilterChange,
}: ArchiveCountItemProps) {
    return (
        <div className="mx-auto flex w-full max-w-xl items-center justify-center">
            <CountCell
              count={totalCount}
              label={"Total"}
              countClassName=" text-(--color-accent)"
              activeLabelClassName="text-(--color-accent)"
              isActive={selectedFilter === "all"}
              onClick={() => onFilterChange("all")}
            />
            <VerticalDivider className="h-10"/>
            <CountCell
              count={projectCount}
              label={"Project"}
              countClassName="text-(--color-green)"
              activeLabelClassName="text-(--color-green)"
              isActive={selectedFilter === "project"}
              onClick={() => onFilterChange("project")}
            />
            <VerticalDivider className="h-10"/>
            <CountCell
              count={blogPostCount}
              label={"Blog Posts"}
              countClassName="text-(--color-yellow)"
              activeLabelClassName="text-(--color-yellow)"
              isActive={selectedFilter === "post"}
              onClick={() => onFilterChange("post")}
            />
        </div>
    );
}
