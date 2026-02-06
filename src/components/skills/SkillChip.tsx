import Image from "next/image";
import {SkillItem} from "@/src/types/skills";

export default function SkillChip({ item }: { item: SkillItem }) {
    return (
        <div className="group/item relative flex shrink-0 cursor-default items-center gap-2.5 rounded-md
                        bg-(--color-primary-variant) px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <Image
                src={item.img || "/placeholder.svg"}
                alt={`${item.name} icon`}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
                crossOrigin="anonymous"
                unoptimized
            />
            <span className="whitespace-nowrap text-sm font-bold text-(--color-text)">
                {item.name}
              </span>

            {item.content && (
                <div className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover/item:opacity-100">
                    {item.content}
                    <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black" />
                </div>
            )}
        </div>
    )
}