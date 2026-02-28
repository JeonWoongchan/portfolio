import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BadgeCheck, Code, Code2, GraduationCap, Mail } from "lucide-react";
import SocialStackLinks from "@/src/components/common/SocialStackLinks";
import IconBadge from "@/src/components/common/IconBadge";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";
import { BodyText, SmallText } from "@/src/components/Typography";

export default function AboutProfileCard() {
    return (
        <Card variant={"surface"} className="h-full p-8 text-center justify-between">
            <CardHeader>
                <IconBadge
                    icon={Code}
                    tone={"accent"}
                    className="size-25 rounded-lg p-2 justify-self-center"
                    iconClassName="size-5"
                />
                <BodyText className={"lg:text-lg"}>전웅찬</BodyText>
                <SmallText className="mb-4 text-(--color-accent)">Frontend Developer</SmallText>
            </CardHeader>
            <CardContent className="self-center">
                <CareerMetaItem icon={Mail} text="jchan71589@gmail.com" />
                <CareerMetaItem icon={Code2} text="Frontend Developer" />
                <CareerMetaItem icon={GraduationCap} text="컴퓨터소프트웨어 전공" />
                <CareerMetaItem icon={BadgeCheck} text="정보처리기사" />
                <SocialStackLinks className="mt-4 justify-center gap-4" />
            </CardContent>
        </Card>
    );
}
