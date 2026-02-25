import { Code2, ExternalLink, FileText } from "lucide-react";
import type { ArchiveCardItem } from "@/src/types/archive";

interface ArchiveGridCardProps {
    item: ArchiveCardItem;
}

export default function ArchiveGridCard({ item }: ArchiveGridCardProps) {
    const isProject = item.type === "project";

    return (
        <article className="group flex h-full w-full max-w-sm flex-col rounded-xl border border-(--color-border-light) bg-(--color-navy-light) p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-accent)">
            <div className="mb-3 flex items-center gap-2">
                <span
                    className={`flex size-7 items-center justify-center rounded-md ${
                        isProject
                            ? "bg-(--color-green)/15 text-(--color-green)"
                            : "bg-(--color-yellow)/15 text-(--color-yellow)"
                    }`}
                >
                    {isProject ? <Code2 className="size-3.5" /> : <FileText className="size-3.5" />}
                </span>
                <span className="text-xs text-(--color-text-body)">{item.date}</span>
                <ExternalLink className="ml-auto size-3.5 shrink-0 text-(--color-text-muted) opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-(--color-text-body)">
                {item.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {item.tags.map((tag) => (
                    <span
                        key={`${item.type}-${item.id}-${tag}`}
                        className="rounded bg-(--color-border-light) px-2 py-0.5 text-[10px] text-(--color-text-body)"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
