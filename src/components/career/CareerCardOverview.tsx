import CareerBadgeList from "@/src/components/career/CareerBadgeList";
import InlineTagList from "@/src/components/common/InlineTagList";
import { useCareerCardItem } from "@/src/components/career/CareerCardContext";
import { BriefcaseBusiness, MapPin, Users2 } from "lucide-react";
import { BodyText, SmallText } from "@/src/components/Typography";
import CareerCurrentBadge from "@/src/components/career/CareerCurrentBadge";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";
import StackCardList from "@/src/components/common/StackCardList";
import IconBadge from "@/src/components/common/IconBadge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { VerticalDivider } from "@/src/components/common/VerticalDivider";

const CURRENT_LABEL = "재직 중";

export default function CareerCardOverview() {
    const item = useCareerCardItem();
    const projectTitles = item.projects.map((project) => project.title);

    return (
        <Card className="gap-2 border-none p-4">
            <CardHeader className="flex gap-4">
                <IconBadge
                    icon={BriefcaseBusiness}
                    tone="accent"
                    className="size-11 rounded-xl"
                    iconClassName="size-5"
                />
                <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <BodyText className="font-bold lg:text-xl">{item.company}</BodyText>
                        {item.isCurrent ? <CareerCurrentBadge label={CURRENT_LABEL} /> : null}
                    </div>
                    <div className="flex text-sm">
                        <SmallText>{item.period}</SmallText>
                        <VerticalDivider />
                        <CareerMetaItem icon={MapPin} text={item.location} />
                        <VerticalDivider />
                        <CareerMetaItem icon={Users2} text={item.team} />
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
                <div className="flex">
                    <CareerBadgeList company={item.company} badges={item.badges} />
                    <VerticalDivider />
                    <InlineTagList items={projectTitles} keyPrefix={`${item.company}-projects`} />
                </div>
            </CardContent>
        </Card>
    );
}
