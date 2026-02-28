import { SmallText } from "@/src/components/common/Typography";
import { VerticalDivider } from "@/src/components/common/VerticalDivider";
import { cn } from "@/lib/utils";
import {CategoryFilterProps} from "@/src/types/category";

interface CountCellProps {
        count: number;
        label: string;
        countClassName: string;
        activeLabelClassName: string;
        isActive: boolean;
        onClick: () => void;
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
                                        isActive ? activeLabelClassName : "text-(--color-text-content)"
                                }`}
                        >
                                {label}
                        </SmallText>
                </button>
        );
}

export default function ArchiveCountItem({
    selectedKey,
    options,
    onSelect,
}: CategoryFilterProps) {
    const projectCount = options.find((category) => category.key === "project")?.count ?? 0;
    const blogPostCount = options.find((category) => category.key === "blog")?.count ?? 0;
    const totalCount = projectCount + blogPostCount;

    return (
            <div className="mx-auto flex w-full max-w-xl items-center justify-center">
                    <CountCell
                        count={totalCount}
                        label={"Total"}
                        countClassName=" text-(--color-accent)"
                        activeLabelClassName="text-(--color-accent)"
                        isActive={selectedKey === "all"}
                        onClick={() => onSelect("all")}
                    />
                    <VerticalDivider className="h-10" />
                    <CountCell
                        count={projectCount}
                        label={"Project"}
                        countClassName="text-(--color-green)"
                        activeLabelClassName="text-(--color-green)"
                        isActive={selectedKey === "project"}
                        onClick={() => onSelect("project")}
                    />
                    <VerticalDivider className="h-10" />
                    <CountCell
                        count={blogPostCount}
                        label={"Blog Posts"}
                        countClassName="text-(--color-yellow)"
                        activeLabelClassName="text-(--color-yellow)"
                        isActive={selectedKey === "blog"}
                        onClick={() => onSelect("blog")}
                    />
            </div>
    );
}
