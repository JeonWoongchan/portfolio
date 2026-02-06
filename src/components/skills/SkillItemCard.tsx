'use client'

// 스킬 아이템 컴포넌트 분리
import Image from "next/image";
import {cn} from "@/lib/utils";
import {SkillItem} from "@/src/types/skills";
import React from "react";

export default  function SkillItemCard({ item, sectionKey }: { item: SkillItem; sectionKey: string }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li className="flex justify-center">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                    "flex items-center gap-2 rounded-md bg-white px-3 py-1.5",
                    "font-bold text-black transition-all duration-300",
                    "hover:outline hover:outline-black hover:shadow-md"
                )}
            >
                <Image
                    src={item.img}
                    alt={`${item.name} icon`}
                    width={15}
                    height={15}
                    className="h-3.75 w-3.75"
                />
                <span>{item.name}</span>
                {isHovered && (
                    <span className="text-base font-medium animate-in fade-in slide-in-from-left-2 duration-200">
                        {item.content}
                    </span>
                )}
            </div>
        </li>
    );
}