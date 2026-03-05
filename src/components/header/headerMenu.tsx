'use client'

import {cn} from "@/lib/utils";
import {VerticalDivider} from "@/src/components/common/VerticalDivider";
import { BrandLogo } from "@/src/components/common/BrandLogo";

const MENU_LIST = ['About', 'Skills', 'Career', 'Archive'] as const
const MENU_BUTTON_CLASSES = 'px-1 py-1 md:px-3 md:py-1.5 text-sm md:text-md cursor-pointer hover:bg-(--color-gray) hover:rounded-full text-white'

type ExpandedMenuProps = {
    onMenuClickAction: (menu: string) => void
}

type MenuButtonProps = {
    menu: (typeof MENU_LIST)[number]
    onClick: (menu: string) => void
}

export default function ExpandedMenu({ onMenuClickAction }: ExpandedMenuProps) {

    return (
        <div className="flex items-center gap-1 px-2 py-1.5">
            <button
                type="button"
                className="group flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 hover:bg-(--color-accent)"
                onClick={()=>onMenuClickAction('Hero')}
            >
                <BrandLogo className="text-xs md:text-sm group-hover:text-(--color-navy)" />
            </button>
            <VerticalDivider className="mx-0 bg-border/60" />
            {MENU_LIST.map((menu) => (
                <MenuButton key={menu} menu={menu} onClick={onMenuClickAction} />
            ))}
        </div>
    )
}

function MenuButton({ menu, onClick }: MenuButtonProps) {
    return (
        <button
            type="button"
            className={cn(MENU_BUTTON_CLASSES)}
            onClick={() => onClick(menu)}
        >
            {menu}
        </button>
    )
}
