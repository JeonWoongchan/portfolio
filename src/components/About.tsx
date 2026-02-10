'use client'

import React, {RefObject} from 'react';
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import InfoCard from "@/src/components/InfoCard";
import ABOUT_DATA from "@/data/about.json"
import {
    Section,
    SectionHeader,
    GridContainer,
    SectionBody
} from "@/src/components/Container";
import {SectionTitle, SectionDescription} from "@/src/components/Typography";
import useSectionVisibility from "@/src/hooks/useSectionVisibility";
import {AboutData} from "@/src/types/about";
import {cn} from "@/lib/utils";
import useSectionOpacity from "@/src/hooks/useSectionOpacity";

export default function About()  {
    const sectionRef = useRegisterSection('About');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>);

    return (
        <Section
            ref={sectionRef as RefObject<HTMLElement>}
            opacityValue={opacity}
            nextSection={"Skills"}
            className={"bg-(--color-navy-light)"}
        >
            <SectionHeader className={cn("opacity-0", isVisible && "fade-in-down")}>
                <SectionTitle>About Me</SectionTitle>
                <SectionDescription>
                    사용자 경험을 최우선으로 고려하는 개발자입니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className={"justify-center"}>
                {/* 이미지 + 설명 영역 */}
                {/*<ContentWrapper className={"justify-evenly"}>*/}
                {/*    <TextGroup className={`font-bold opacity-0 ${isVisible ? "fade-in-up-1" : ""}`}>*/}
                {/*        <SmallText className="max-w-prose">*/}
                {/*            HTML, CSS, JavaScript를 시작으로 React를 통해 상태 관리와*/}
                {/*            컴포넌트 기반 구조에 대해 경험하였고, SEO를 개선하고 SSR을 경험해보기 위해*/}
                {/*            Next.js를 이용한 페이지도 구현해보았습니다.*/}
                {/*            다양한 라이브러리, 프레임워크에 관심을 갖고 항상 배우며*/}
                {/*            성장하는 개발자를 목표하고 있습니다.*/}
                {/*        </SmallText>*/}
                {/*    </TextGroup>*/}
                {/*    <Image*/}
                {/*        src="/images/developer4.svg"*/}
                {/*        alt="logo"*/}
                {/*        width={280}*/}
                {/*        height={280}*/}
                {/*        className={`opacity-0 ${isVisible ? "fade-in-up-2" : ""} -scale-x-100`}*/}
                {/*    />*/}
                {/*</ContentWrapper>*/}

                {/* 카드 그리드 */}
                <GridContainer>
                    {ABOUT_DATA.map((data: AboutData) => (
                        <li
                            key={data.id}
                            className={`opacity-0 ${isVisible ? `fade-in-up-3` : ""}`}
                        >
                            <InfoCard
                                imageSrc={data.imageSrc}
                                imageAlt={data.imageAlt}
                                title={data.title}
                                description={data.description}
                            />
                        </li>
                    ))}
                </GridContainer>
            </SectionBody>
        </Section>
    );
};
