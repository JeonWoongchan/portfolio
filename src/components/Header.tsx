'use client'

import {useScroll} from "@/src/hooks/useScroll";
import {MenuProps} from "@/src/types/menu";
import {useSectionStore} from "@/src/store/useSectionStore";
import {Terminal} from "lucide-react";
import React from "react";

export default function Header() {
    const menuList: string[] = ['Home', 'About', 'Skills', 'Work', 'Contact']
    const { scrollY } = useScroll();
    const { scrollTo } = useSectionStore();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header
            className='fixed top-0 w-full h-20 flex justify-center items-center z-5 transition-all duration-300 ease-in-out select-none'
        >
            <nav className="flex items-center justify-center py-4">
                <div
                    className="flex items-center rounded-full border border-border/50 bg-(--color-navy) backdrop-blur-md transition-all duration-500 text-(--color-accent)"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    {!isMenuOpen && scrollY < 300 ? (
                        <div className="flex items-center gap-2 px-5 py-2.5 cursor-pointer">
                            <Terminal className="h-4 w-4"/>
                            <span className="font-mono text-md text-muted-foreground">
                            Jeon.Woongchan
                        </span>
                            <span className="font-mono text-sm">~</span>
                            <span className="inline-block h-4 w-0.5 animate-pulse bg-(--color-accent)"/>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 px-2 py-1.5">
                        <a className="group flex items-center gap-1.5 rounded-full px-3 py-1.5 hover:bg-(--color-accent) cursor-pointer">
                            <Terminal className="h-4 w-4 text-(--color-accent) group-hover:text-(--color-navy)"/>
                            <span className="font-mono text-sm text-(--color-accent) group-hover:text-(--color-navy)">~/</span>
                        </a>
                        <div className="mx-0.5 h-4 w-px bg-border/60" />
                            {menuList.map((a: string, i: number) => (
                                <Menu key={i} menu={a} handleMenuClick={scrollTo} />
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

function Menu({ menu, handleMenuClick }: MenuProps) {
    return (
        <a
            className="px-3 py-1.5 text-white! cursor-pointer hover:bg-(--color-gray) hover:rounded-full"
            onClick={() => handleMenuClick(menu)}
        >
            {menu}
        </a>
    );
}