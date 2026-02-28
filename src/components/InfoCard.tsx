import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {BodyText, SmallText } from "./Typography";
import IconBadge from "@/src/components/common/IconBadge";
import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;

}

export default function InfoCard({icon, title, description}: InfoCardProps) {
    return(
        <Card variant="surface" className="h-full">
            <CardHeader>
                <IconBadge
                    icon={icon}
                    tone={"accent"}
                    className="size-10 rounded-lg p-2"
                    iconClassName="size-5"
                />
            </CardHeader>
            <CardContent>
                <BodyText className={"lg:text-lg"}>{title}</BodyText>
                <SmallText>{description}</SmallText>
            </CardContent>
        </Card>
    )
}
