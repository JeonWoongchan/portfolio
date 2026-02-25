'use client'

import {Terminal} from "lucide-react";
import {cn} from "@/lib/utils";
import {VerticalDivider} from "@/src/components/common/VerticalDivider";

const MENU_LIST = ['About', 'Skills', 'Career', 'Archive'] as const
const MENU_BUTTON_CLASSES = 'px-3 py-1.5 cursor-pointer hover:bg-(--color-gray) hover:rounded-full'

type ExpandedMenuProps = {
    onMenuClick: (menu: string) => void
}

type MenuButtonProps = {
    menu: (typeof MENU_LIST)[number]
    onClick: (menu: string) => void
}

export default function ExpandedMenu({ onMenuClick }: ExpandedMenuProps) {

    return (
        <div className="flex items-center gap-1 px-2 py-1.5">
            <button
                type="button"
                className="group flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 hover:bg-(--color-accent)"
                onClick={()=>onMenuClick('Hero')}
            >
                <Terminal className="h-4 w-4 text-(--color-accent) group-hover:text-(--color-navy)" />
                <span className="font-mono text-sm text-(--color-accent) group-hover:text-(--color-navy)">~/</span>
            </button>
            <VerticalDivider className="mx-0.5 bg-border/60" />
            {MENU_LIST.map((menu) => (
                <MenuButton key={menu} menu={menu} onClick={onMenuClick} />
            ))}
        </div>
    )
}

function MenuButton({ menu, onClick }: MenuButtonProps) {
    return (
        <button
            type="button"
            className={cn(MENU_BUTTON_CLASSES, 'text-white!')}
            onClick={() => onClick(menu)}
        >
            {menu}
        </button>
    )
}
