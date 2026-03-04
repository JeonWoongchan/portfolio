import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ABOUT_PROFILE_TEXT_DATA } from "@/data/about";
import SocialStackLinks from "@/src/components/common/SocialStackLinks";
import { BodyText, SmallText } from "@/src/components/common/Typography";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";
import IconBadge from "@/src/components/common/IconBadge";
import type { AboutProfileMetaKey } from "@/src/types/about";
import {Code, Code2, GraduationCap, LucideIcon, Mail, Tags} from "lucide-react";

const META_ITEM_ICON_MAP: Record<AboutProfileMetaKey, LucideIcon> = {
    email: Mail,
    techStack: Code2,
    education: GraduationCap,
    tags: Tags,
};

export default function AboutProfileCard() {
    return (
        <Card variant={"surface"} className="h-full p-8 text-center justify-evenly">
            <CardHeader>
                <IconBadge
                    icon={Code}
                    tone={"accent"}
                    className="size-25 rounded-lg p-2 justify-self-center"
                    iconClassName="size-5"
                />
                <BodyText className={"lg:text-lg"}>{ABOUT_PROFILE_TEXT_DATA.name}</BodyText>
                <SmallText className="mb-4 text-(--color-accent)">{ABOUT_PROFILE_TEXT_DATA.role}</SmallText>
            </CardHeader>
            <CardContent className="self-center">
                {ABOUT_PROFILE_TEXT_DATA.metaItems.map((metaItem) => (
                    <CareerMetaItem
                        key={metaItem.id}
                        icon={META_ITEM_ICON_MAP[metaItem.key]}
                        text={metaItem.text}
                    />
                ))}
                <SocialStackLinks className="mt-4 justify-center gap-4" />
            </CardContent>
        </Card>
    );
}
