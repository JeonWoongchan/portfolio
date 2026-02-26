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
        <div className="flex flex-col gap-2">
            <Card className="cursor-default h-55 transition-all duration-300 ease-in-out hover:scale-101 overflow-hidden">
                <CardContent className="flex flex-col items-center p-4">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        className="my-4"
                        width={64}
                        height={64} />
                </CardContent>
            </Card>
            <BodyText className={"lg:text-xl font-bold"}>{title}</BodyText>
            <SmallText>{description}</SmallText>
        </div>
    )
}
