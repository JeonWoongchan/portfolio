'use client'

//section의 스크롤 위치에 따라 opacity 조절하는 함수
import {useScroll} from "@/src/hooks/useScroll";
import {RefObject, useEffect, useState} from "react";

const useSectionOpacity = (ref: RefObject<HTMLElement>)=>{
    const [scrollOpacity, setScrollOpacity] = useState(1)
    const { scrollY } = useScroll()

    useEffect(() => {
        if(!ref || !ref.current) return;

        const sectionY = ref.current.getBoundingClientRect().y
        const newOpacity = (1 / 1000) * sectionY + 1

        if(sectionY <= 0 && sectionY >= -600){
            setScrollOpacity(Math.max(0, newOpacity))
        }
    }, [scrollY])

    return scrollOpacity
}

export default useSectionOpacity;