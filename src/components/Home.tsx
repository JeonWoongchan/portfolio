'use client'
import TypeIt from 'typeit-react';
import {RefObject} from "react";
import useSectionOpacity from "@/src/hooks/useSectionOpacity";
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import Image from "next/image";
import HeroText from "@/src/components/BannerText";
import BannerText from "@/src/components/BannerText";

export default function Home() {
    const sectionRef = useRegisterSection('Home');

    return (
        <section ref={sectionRef}
                 id='home'
                 className="
                    w-full
                    min-h-screen
                    flex
                    bg-[#1e3155]
                    text-[var(--color-text)]
                "
        >
            <div
                style={{ opacity: useSectionOpacity(sectionRef as RefObject<HTMLElement>) }}
                className="w-full flex flex-col justify-center gap-20"
            >
                {/*TODO: 텍스트 아이콘 변경 및 아이콘 툴팁 구현*/}
                <TypeIt
                    options={{
                        speed: 80,
                        waitUntilVisible: true,
                        cursor: false,
                    }}
                >
                    <BannerText align="self-start">
                        FRONTEND DEVELOPER<span className="float-icon">💻</span>
                    </BannerText>
                </TypeIt>
                <BannerText align="self-end" className="fade-in-up-1">
                    <span className="float-icon">🌟</span>USER EXPERIENCE
                </BannerText>

                <BannerText align="self-start" className="fade-in-up-2">
                    CONTINUOUS<span className="float-icon">📈</span>
                </BannerText>

                {/*<a*/}
                {/*    href=""*/}
                {/*    className="*/}
                {/*        inline-block*/}
                {/*        bg-[var(--color-accent)]*/}
                {/*        rounded*/}
                {/*        px-4*/}
                {/*        py-2*/}
                {/*        font-bold*/}
                {/*        my-8*/}
                {/*        transition*/}
                {/*        hover:bg-transparent*/}
                {/*        hover:outline*/}
                {/*        hover:outline-2*/}
                {/*        hover:outline-[var(--color-accent)]*/}
                {/*        hover:text-[var(--color-text)]*/}
                {/*    "*/}
                {/*>*/}
                {/*    Contact Me*/}
                {/*</a>*/}
            </div>
        </section>
    );
}