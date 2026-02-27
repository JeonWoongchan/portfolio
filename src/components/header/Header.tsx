'use client'

import { useState } from 'react'
import { Terminal } from 'lucide-react'
import { useScroll } from '@/src/hooks/useScroll'
import { useSectionStore } from '@/src/store/useSectionStore'
import ExpandedMenu from "@/src/components/header/headerMenu";
import {VerticalDivider} from "@/src/components/common/VerticalDivider";

const CONTAINER_CLASSES =
    'flex items-center rounded-full border border-border/50 bg-(--color-navy) backdrop-blur-md transition-all duration-500 text-(--color-accent)'

export default function Header() {
    const { scrollY } = useScroll()
    const { scrollTo } = useSectionStore()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const showCollapsedBrand = !isMenuOpen && scrollY < 300

    return (
        <header className="fixed top-0 z-5 flex h-20 w-full select-none items-center justify-center transition-all duration-300 ease-in-out">
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
            <Terminal className="h-4 w-4 text-(--color-accent)"/>
            <span className="font-mono text-md text-muted-foreground">Jeon.Woongchan</span>
            <span className="font-mono text-sm">~</span>
            <VerticalDivider className="h-4 w-0.5 mx-0 animate-pulse bg-(--color-accent)" />
        </div>
    )
}
