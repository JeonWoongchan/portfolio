'use client'
import TypeIt from 'typeit-react';
import {RefObject} from "react";
import useSectionOpacity from "@/src/hooks/useSectionOpacity";
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";

export default function Home() {
    const sectionRef = useRegisterSection('Home');

    return (
        <section ref={sectionRef}
                 id='home'
                 className="
                    w-full
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    bg-[#1e3155]
                    text-[var(--color-text)]
                    px-4
                "
        >
            <div
                style={{ opacity: useSectionOpacity(sectionRef as RefObject<HTMLElement>) }}
                className="max-container pt-20"
            >
                {/* 프로필 이미지 */}
                {/*
                <img
                    src="/images/profile.png"
                    alt=""
                    className="w-[200px] object-cover mb-4"
                />
                */}

                <TypeIt
                    options={{
                        speed: 80,
                        waitUntilVisible: true,
                        cursor: false,
                    }}
                >
                    <h1 className="min-h-[132px] text-3xl font-bold leading-tight">
                        안녕하세요 <br />
                        <span className="text-[var(--color-accent)]">
                            전웅찬
                        </span>
                        의 포트폴리오 사이트입니다
                    </h1>
                </TypeIt>

                <p className="mt-4 text-lg opacity-90">
                    다양한 경험을 통해 항상 발전하는 프론트엔드 개발자를 목표로 하고 있습니다.
                </p>

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