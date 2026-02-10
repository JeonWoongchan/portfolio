import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import {useSectionStore} from "@/src/store/useSectionStore";

interface SlideDownProps {
    next: string;
}

export default function SlideDown({next}: SlideDownProps) {
    const { scrollTo } = useSectionStore();

    return (
        <div className="relative flex flex-col gap-2 mx-auto mt-5 h-12.5 w-12.5 cursor-pointer items-center justify-center"
            onClick={() => { scrollTo(next) }}>
            <span className={"opacity-50 text-xs"}>SCROLL</span>
            <MdKeyboardArrowDown className="float-icon text-xl"/>
        </div>
    );
}

