import { Code2, ExternalLink, FileText } from "lucide-react";
import type { ArchiveCardItem } from "@/src/types/archive";
import { BodyText, SmallText } from "@/src/components/common/Typography";
import InlineTagList from "@/src/components/common/InlineTagList";
import IconBadge from "@/src/components/common/IconBadge";
import { CardContent, CardFooter, CardHeader, CardLink } from "@/components/ui/card";
import { formatYearMonthRange } from "@/src/utils/yearMonthPeriod";

interface ArchiveGridCardProps {
    item: ArchiveCardItem;
}

export default function ArchiveGridCard({ item }: ArchiveGridCardProps) {
    const isProject = item.category === "project";
    const periodText = formatYearMonthRange(item.periodStart, item.periodEnd);

    return (
        <CardLink
            href={item.link}
            target="_blank"
            className="h-full"
            variant="surface"
            cardClassName="group h-full"
        >
            <CardHeader className="p-0 flex items-baseline">
                <IconBadge icon={isProject ? Code2 : FileText} tone={isProject ? "green" : "yellow"} className="size-7" />
                <span className="text-xs text-(--color-text-content)">{periodText}</span>
                <ExternalLink className="ml-auto size-3.5 shrink-0 text-(--color-text-muted) opacity-0 transition-opacity group-hover:opacity-100" />
            </CardHeader>

            <CardContent>
                <BodyText>{item.title}</BodyText>
                <SmallText className="line-clamp-3">
                    {item.description}
                </SmallText>
            </CardContent>

            <CardFooter className="mt-auto">
                <InlineTagList items={item.tags} keyPrefix={`${item.category}-${item.id}`} />
            </CardFooter>
        </CardLink>
    );
}
