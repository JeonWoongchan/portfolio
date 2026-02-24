import {cn} from "@/lib/utils";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Card} from "@/components/ui/card";
import {stackMeta, type StackName} from "@/src/types/stack";

interface StackCardProps {
    stackName: StackName;
    compact?: boolean;
}

// TODO: Footer에 Icons provided by Devicon. 추가
export default function StackCard({stackName, compact = false}: StackCardProps) {
    const stack = stackMeta[stackName] ?? {img: "/placeholder.svg", color: "#ffffff"};

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {compact ? (
                    <Image
                        src={stack.img}
                        alt={`skill-icon ${stackName}`}
                        width={30}
                        height={30}
                        className={cn("h-7 w-7 object-contain")}
                    />
                ) : (
                    <Card
                        className="group/item relative flex shrink-0 cursor-default flex-col items-center gap-2.5 rounded-md
                        bg-(--color-navy-light) px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <Image
                            src={stack.img}
                            alt={`skill-icon ${stackName}`}
                            width={30}
                            height={30}
                            className={cn("h-8 w-8 object-contain")}
                        />
                    </Card>
                )}
            </TooltipTrigger>
            <TooltipContent
                className="rounded-md border bg-white text-(--color-navy)"
                side={"bottom"}
                sideOffset={5}
            >
                <p>{stackName}</p>
            </TooltipContent>
        </Tooltip>
    );
}
