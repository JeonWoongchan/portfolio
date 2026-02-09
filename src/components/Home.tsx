'use client'
import {RefObject} from "react";
import useSectionOpacity from "@/src/hooks/useSectionOpacity";
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import {Section, SectionBody} from "@/src/components/Container";
import {HeroTitle} from "@/src/components/Typography";
import TooltipIcon from "@/src/components/HeroIcon";

export default function Home() {
    const sectionRef = useRegisterSection('Home');
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>);

    return (
        <Section
            ref={sectionRef as RefObject<HTMLElement>}
            className={" bg-[#1e3155] text-(--color-text)"}
            nextSection={"About"}
            contentClassName={"justify-center"}
            opacityValue={opacity}
        >
            <SectionBody className={"flex flex-col justify-between gap-4 select-none p-0"}>
                <HeroTitle align="self-start" className="fade-in-up-1">
                    FRONTEND
                </HeroTitle>

                <HeroTitle align="self-center" className="fade-in-up-2">
                    DEVELOPER
                    <TooltipIcon
                        src='/images/developer1.svg'
                        alt={"Developer 이미지"}
                        className={"float-icon"}
                        tooltip={'안녕하세요. 프론트엔드 개발자 전웅찬입니다.'}
                    />
                </HeroTitle>

                <HeroTitle align="self-end" className="fade-in-up-3">
                    <TooltipIcon
                        src='/images/user_experience.svg'
                        alt={"UX 이미지"}
                        className={"float-icon"}
                        tooltip={'디자인 뿐만 아니라\n 원활한 사용자 경험을 고민합니다.'}
                        side={"left"}
                    />
                    EXPERIENCE
                </HeroTitle>

                <HeroTitle align="self-start" className="fade-in-up-4">
                    CONTINUOUS
                    <TooltipIcon
                        src='/images/thought.svg'
                        alt={"Continuous 이미지"}
                        className={"float-icon"}
                        tooltip={'지속가능하고 발전하는 개발자를 지향합니다.'}
                        side={"right"}
                    />
                </HeroTitle>
            </SectionBody>
        </Section>
    );
}