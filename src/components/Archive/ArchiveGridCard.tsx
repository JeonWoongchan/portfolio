import { Code2, ExternalLink, FileText } from "lucide-react";
import type { ArchiveCardItem } from "@/src/types/archive";
import { BodyText, SmallText } from "@/src/components/Typography";
import InlineTagList from "@/src/components/common/InlineTagList";
import IconBadge from "@/src/components/common/IconBadge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ArchiveGridCardProps {
    item: ArchiveCardItem;
}

export default function ArchiveGridCard({ item }: ArchiveGridCardProps) {
    const isProject = item.type === "project";

    return (
        <Card className="group bg-(--color-navy-light) hover:border-(--color-accent)">
            <CardHeader className="p-0 flex items-baseline">
                <IconBadge icon={isProject ? Code2 : FileText} tone={isProject ? "green" : "yellow"} className="size-7" />
                <span className="text-xs text-(--color-text-body)">{item.date}</span>
                <ExternalLink className="ml-auto size-3.5 shrink-0 text-(--color-text-muted) opacity-0 transition-opacity group-hover:opacity-100" />
            </CardHeader>

            <CardContent>
                <BodyText className="font-semibold">{item.title}</BodyText>
                <SmallText className="line-clamp-3">
                    {item.description}
                </SmallText>
            </CardContent>

            <CardFooter className="mt-auto">
                <InlineTagList items={item.tags} keyPrefix={`${item.type}-${item.id}`} />
            </CardFooter>
        </Card>
    );
}
