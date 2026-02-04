'use client'

import {useScroll} from "@/src/hooks/useScroll";
import {MenuProps} from "@/src/types/menu";
import {useSectionStore} from "@/src/store/useSectionStore";

export default function Header() {
    const menuList: string[] = ['Home', 'About', 'Skills', 'Work', 'Contact']
    const { scrollY } = useScroll();
    const { scrollTo } = useSectionStore();

    return (
        <header
            className='fixed top-0 w-full h-20 flex flex-col md:flex-row justify-between items-start md:items-center z-5 px-32 transition-all duration-300 ease-in-out'
            style={{ backgroundColor: scrollY < 100 ? 'transparent' : 'var(--color-black)' }}
        >
            <div className="flex justify-between items-center gap-2 h-20">
                {/*<img className='w-12 h-12' src="/public/globe.svg" alt="로고" />*/}
                <a className='text-4xl text-white font-bold cursor-pointer'>
                    🍀
                </a>
            </div>
            <nav className='w-full md:w-auto'>
                <ul className='flex flex-col md:flex-row gap-4 md:gap-1 text-center px-16 md:px-0 py-4 md:py-0'>
                    {menuList.map((a: string, i: number) => (
                        <Menu key={i} menu={a} handleMenuClick={scrollTo} />
                    ))}
                </ul>
            </nav>
        </header>
    )
}

function Menu({ menu, handleMenuClick }: MenuProps) {
    return (
        <li>
            <a
                className="px-4 py-2 text-white cursor-pointer hover:border-b hover:border-(--color-accent) active:border-b active:border-(--color-accent) active:rounded"
                onClick={() => handleMenuClick(menu)}
            >
                {menu}
            </a>
        </li>
    );
}