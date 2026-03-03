'use client'

import { useState } from 'react'
import { useScroll } from '@/src/hooks/useScroll'
import { useSectionStore } from '@/src/store/useSectionStore'
import { useHeroIntroStore } from '@/src/store/useHeroIntroStore'
import ExpandedMenu from "@/src/components/header/headerMenu";
import BrandSignature from "@/src/components/common/BrandSignature";

const CONTAINER_CLASSES =
    'flex items-center rounded-full border border-border/50 bg-(--color-navy) backdrop-blur-md transition-all duration-500 text-(--color-accent)'

export default function Header() {
    const { scrollY } = useScroll()
    const { scrollTo } = useSectionStore()
    const phase = useHeroIntroStore((state) => state.phase)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isHeaderVisible = phase >= 2
    const showCollapsedBrand = !isMenuOpen && scrollY < 300

    return (
        <header
            className={`fixed top-0 z-5 flex h-20 w-full select-none items-center justify-center transition-all duration-500 ease-in-out ${
                isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"
            }`}
        >
            <nav className="flex items-center justify-center py-4">
                <div
                    className={CONTAINER_CLASSES}
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    {showCollapsedBrand ? (
                        <CollapsedBrand/>
                    ) : (
                        <ExpandedMenu onMenuClickAction={scrollTo} />
                    )}
                </div>
            </nav>
        </header>
    )
}

export function CollapsedBrand() {
    return (
        <div className="flex cursor-pointer items-center gap-2 px-5 py-2.5">
            <BrandSignature
                nameClassName="text-md text-muted-foreground"
            />
        </div>
    )
}
