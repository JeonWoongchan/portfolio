import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BodyText, SmallText } from "../common/Typography";
import IconBadge from "@/src/components/common/IconBadge";
import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const BOLD_TAG_PATTERN = /<b>(.*?)<\/b>/g;

export default function InfoCard({ icon, title, description }: InfoCardProps) {
    const descriptionNodes = description
        .split(BOLD_TAG_PATTERN)
        .filter((text) => text.length > 0)
        .map((text, index) => {
            const isBold = index % 2 === 1;

            return (
                <span
                    key={`${title}-description-${index}`}
                    className={isBold ? "font-bold text-white" : undefined}
                >
                    {text}
                </span>
            );
        });

    return (
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
                <SmallText>{descriptionNodes}</SmallText>
            </CardContent>
        </Card>
    );
}
