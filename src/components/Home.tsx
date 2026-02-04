'use client'
import {RefObject} from "react";
import useSectionOpacity from "@/src/hooks/useSectionOpacity";
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import HeroText from "@/src/components/HeroText";
import HeroIcon from "@/src/components/HeroIcon";
import SlideDown from "@/src/components/SlideDown";

export default function Home() {
    const sectionRef = useRegisterSection('Home');

    return (
        <section ref={sectionRef}
                 className="
                    w-full
                    min-h-screen
                    flex
                    flex-col
                    justify-center
                    bg-[#1e3155]
                    text-(--color-text)"
        >
            <div
                style={{ opacity: useSectionOpacity(sectionRef as RefObject<HTMLElement>) }}
                className="w-full flex flex-col justify-center gap-20 select-none"
            >
                {/*<TypeIt*/}
                {/*    options={{*/}
                {/*        speed: 80,*/}
                {/*        waitUntilVisible: true,*/}
                {/*        cursor: false,*/}
                {/*    }}*/}
                {/*>*/}
                {/*</TypeIt>*/}

                <HeroText align="self-start" className="fade-in-up-1">
                    FRONTEND DEVELOPER
                    <HeroIcon
                        src='/images/developer1.svg'
                        alt={"Developer 이미지"}
                        tooltip={'안녕하세요. 프론트엔드 개발자 전웅찬입니다.'}
                    />
                </HeroText>
                <HeroText align="self-end" className="fade-in-up-1">
                    <HeroIcon
                        src='/images/user_experience.svg'
                        alt={"UX 이미지"}
                        tooltip={'디자인 뿐만 아니라\n 원활한 사용자 경험을 고민합니다.'}
                    />
                    USER EXPERIENCE
                </HeroText>
                <HeroText align="self-start" className="fade-in-up-1">
                    CONTINUOUS
                    <HeroIcon
                        src='/images/thought.svg'
                        alt={"Continuous 이미지"}
                        tooltip={'지속가능하고 발전하는 개발자를 지향합니다.'}
                    />
                </HeroText>
            </div>
            <SlideDown next={'About'} />
        </section>
    );
}