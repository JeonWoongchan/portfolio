'use client'

import Image from "next/image";
import {cn} from "@/lib/utils";
import {SkillItem} from "@/src/types/skills";

export default function SkillItemCard({ item }: { item: SkillItem }) {
    return (
        <div
            className={cn(
                "group/item relative flex shrink-0 items-center gap-2 rounded-md",
                "bg-white px-3 py-1.5",
                "font-bold text-black transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-md hover:outline hover:outline-black"
            )}
        >
            <Image
                src={item.img || "/placeholder.svg"}
                alt={`${item.name} icon`}
                width={15}
                height={15}
                className="h-3.75 w-3.75"
            />
            <span className="whitespace-nowrap text-sm">{item.name}</span>

            {/* Hover Tooltip */}
            {item.content && (
                <div className={cn(
                    "pointer-events-none absolute -bottom-9 left-1/2 z-20",
                    "-translate-x-1/2 whitespace-nowrap rounded-md",
                    "bg-black px-2.5 py-1 text-xs font-medium text-white",
                    "opacity-0 transition-all duration-200",
                    "group-hover/item:opacity-100"
                )}>
                    {item.content}
                    <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black" />
                </div>
            )}
        </div>
    );
}
