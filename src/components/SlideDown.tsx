import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import {useSectionStore} from "@/src/store/useSectionStore";

interface SlideDownProps {
    next: string;
}

export default function SlideDown({next}: SlideDownProps) {
    const { scrollTo } = useSectionStore();

    return (
        <div className="slide-down relative mx-auto mt-5 flex h-12.5 w-12.5 cursor-pointer items-center justify-center
            rounded-full border-0 bg-black/30"
            onClick={() => { scrollTo(next) }}>
            <MdKeyboardArrowDown className="slide-down-btn" />
        </div>
    );
}

