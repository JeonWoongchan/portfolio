import { cn } from "@/lib/utils";
import Link from "next/link";
import StackCard from "@/src/components/common/StackCard";
import type { StackName } from "@/src/types/stack";

const SOCIAL_LINK_ITEMS: ReadonlyArray<{
    stackName: StackName;
    href: string;
    imageClassName: string;
}> = [
    {
        stackName: "GitHub",
        href: "https://github.com/JeonWoongchan",
        imageClassName: "bg-white rounded-sm h-7 w-7",
    },
    {
        stackName: "Velog",
        href: "https://velog.io/@jchan715",
        imageClassName: "h-7 w-7",
    },
];

interface SocialStackLinksProps {
    className?: string;
    tooltipSide?: "top" | "right" | "bottom" | "left";
    clickable?: boolean;
}

export default function SocialStackLinks({
    className,
    tooltipSide = "top",
    clickable = false,
}: SocialStackLinksProps) {
    return (
        <div className={cn("flex gap-2", className)}>
            {SOCIAL_LINK_ITEMS.map((item) => {
                const card = (
                    <StackCard
                        stackName={item.stackName}
                        compact={true}
                        imageClassName={item.imageClassName}
                        tooltipSide={tooltipSide}
                    />
                );

                if (!clickable) {
                    return <div key={item.stackName}>{card}</div>;
                }

                return (
                    <Link
                        key={item.stackName}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.stackName} open`}
                        className="inline-flex cursor-pointer"
                    >
                        {card}
                    </Link>
                );
            })}
        </div>
    );
}
