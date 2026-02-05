import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {BodyText, SmallText } from "./Typography";

interface InfoCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;

}

export default function InfoCard({imageSrc, imageAlt, title, description}: InfoCardProps) {
    return(
        <Card className="cursor-default bg-(--color-accent) h-80 transition-all duration-500 ease-in-out hover:scale-103 overflow-hidden">
            <CardContent className="flex flex-col items-center p-4">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="my-4"
                    width={64}
                    height={64} />
                <BodyText>{title}</BodyText>
                <SmallText>{description}</SmallText>
            </CardContent>
        </Card>
    )
}