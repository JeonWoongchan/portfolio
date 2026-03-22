'use client'

import { useState } from 'react'
import { useScroll } from '@/src/hooks/scroll/useScroll'
import { useSectionStore } from '@/src/store/useSectionStore'
import ExpandedMenu from "@/src/components/header/headerMenu";
import BrandSignature from "@/src/components/common/BrandSignature";

const CONTAINER_CLASSES =
    'flex items-center rounded-full border border-border/50 bg-(--color-navy) backdrop-blur-md transition-all duration-500 text-(--color-accent)'
const HERO_SECTION_KEY = 'Hero'
const HERO_FADE_DELAY_SECONDS = 4.5
const DEFAULT_FADE_DELAY_SECONDS = 2

export default function Header() {
    const { scrollY } = useScroll()
    const { scrollTo, currentSectionKey } = useSectionStore()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const showCollapsedBrand = !isMenuOpen && scrollY < 300

    const headerFadeDelayClassName =
        currentSectionKey === HERO_SECTION_KEY
            ? `fade-delay-${HERO_FADE_DELAY_SECONDS}`
            : `fade-delay-${DEFAULT_FADE_DELAY_SECONDS}`

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-5 flex h-20 select-none items-center justify-center fade-in ${headerFadeDelayClassName}`}
        >
            <nav className="flex items-center justify-center py-4">
                <div
                    className={CONTAINER_CLASSES}
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    {showCollapsedBrand && currentSectionKey === HERO_SECTION_KEY ? (
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
