import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

interface InfoCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;

}

export default function InfoCard({imageSrc, imageAlt, title, description}: InfoCardProps) {
    return(
        <Card className="bg-(--color-accent) h-80 transition-all duration-500 ease-in-out hover:scale-103 overflow-hidden">
            <CardContent className="flex flex-col items-center p-4">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="my-4"
                    width={64}
                    height={64} />
                <p className='text-3xl font-bold pb-4'>{title}</p>
                <p className='text-base px-14'>{description}</p>
            </CardContent>
        </Card>
    )
}