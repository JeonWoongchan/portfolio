'use client'

import { MdKeyboardArrowDown } from "react-icons/md";
import {useSectionStore} from "@/src/store/useSectionStore";
import {cn} from "@/lib/utils";

interface SlideDownProps {
    next: string;
    className?: string;
}

export default function SlideDown({next, className}: SlideDownProps) {
    const { scrollTo } = useSectionStore();

    return (
        <button className={cn("relative flex flex-col gap-2 mx-auto my-5 h-12.5 w-12.5 cursor-pointer items-center justify-center ", className)}
            onClick={() => { scrollTo(next) }}>
            <span className={"opacity-50 text-xs float-icon"}>SCROLL</span>
            <MdKeyboardArrowDown className="float-icon text-xl"/>
        </button>
    );
}
