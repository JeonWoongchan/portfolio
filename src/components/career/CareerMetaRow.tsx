import type { LucideIcon } from "lucide-react";
import CareerBadgeList from "@/src/components/career/CareerBadgeList";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";
import { SmallText } from "@/src/components/common/Typography";
import { VerticalDivider } from "@/src/components/common/VerticalDivider";
import type { YearMonth } from "@/src/types/yearMonth";
import { cn } from "@/lib/utils";

interface CareerMetaRowProps {
    periodStart: YearMonth;
    periodEnd: YearMonth | "";
    company: string;
    badges: readonly string[];
    team?: string;
    teamIcon?: LucideIcon;
    className?: string;
}

export default function CareerMetaRow({
    periodStart,
    periodEnd,
    company,
    badges,
    team,
    teamIcon,
    className,
}: CareerMetaRowProps) {
    const TeamIcon = teamIcon;
    const hasTeamMeta = Boolean(team);
    const hasBadges = badges.length > 0;

    return (
        <div className={cn("flex flex-col flex-wrap gap-2 md:flex-row md:gap-0", className)}>
            <SmallText>{periodStart} ~ {periodEnd}</SmallText>
            {(hasTeamMeta || hasBadges) ? <VerticalDivider /> : null}

            {hasTeamMeta ? (
                TeamIcon ? (
                    <CareerMetaItem icon={TeamIcon} text={team ?? ""} />
                ) : (
                    <SmallText>{team}</SmallText>
                )
            ) : null}

            {(hasTeamMeta && hasBadges) ? <VerticalDivider /> : null}
            {hasBadges ? <CareerBadgeList company={company} badges={badges} /> : null}
        </div>
    );
}
