import CareerBadgeList from "@/src/components/career/CareerBadgeList";
import { useCareerCardItem } from "@/src/components/career/CareerCardContext";
import { BriefcaseBusiness, Users2 } from "lucide-react";
import { BodyText, SmallText } from "@/src/components/common/Typography";
import CareerCurrentBadge from "@/src/components/career/CareerCurrentBadge";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";
import StackCardList from "@/src/components/common/StackCardList";
import IconBadge from "@/src/components/common/IconBadge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { VerticalDivider } from "@/src/components/common/VerticalDivider";
import InlineTagList from "@/src/components/common/InlineTagList";

const CURRENT_LABEL = "재직 중";

export default function CareerCardOverview() {
    const item = useCareerCardItem();
    const projectTitles = item.projects.map((project) => project.title);

    return (
        <Card className="gap-4 border-none p-4">
            <CardHeader className="flex gap-4 flex-col md:flex-row">
                <IconBadge
                    icon={BriefcaseBusiness}
                    tone="accent"
                    className="size-11 rounded-xl"
                    iconClassName="size-5"
                />
                <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <BodyText className="lg:text-xl">{item.company}</BodyText>
                        {item.periodEnd === "" ? <CareerCurrentBadge label={CURRENT_LABEL} /> : null}
                    </div>
                    <div className="flex flex-wrap text-sm">
                        <SmallText>{item.periodStart} ~ {item.periodEnd}</SmallText>
                        <VerticalDivider />
                        <CareerMetaItem icon={Users2} text={item.team} />
                        <VerticalDivider />
                        <CareerBadgeList company={item.company} badges={item.badges} />
                    </div>
                </div>
                <StackCardList
                    stackNames={item.stack}
                    keyPrefix={`${item.company}-${item.stack}`}
                    compact={true}
                    className="absolute right-6"
                />
            </CardHeader>
            <CardContent className="space-y-4">
                <SmallText className="text-(--color-accent)">{item.quote}</SmallText>
                <InlineTagList items={projectTitles} keyPrefix={`${item.company}-projects`} />
            </CardContent>
        </Card>
    );
}
