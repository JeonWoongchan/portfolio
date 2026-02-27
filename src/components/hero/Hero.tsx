'use client'
import {useState} from "react";
import {Section, SectionBody} from "@/src/components/Container";
import Image from "next/image";
import TypeIt from "typeit-react";
import {HeroTitle, SectionDescription} from "@/src/components/Typography";
import SectionActionButton from "@/src/components/common/SectionActionButton";

export default function Hero() {
    const [typingDone, setTypingDone] = useState(false);

    return (
        <Section
            sectionKey={"Hero"}
            className={"bg-[#1e3155] text-(--color-text)"}
            nextSection={"About"}
            contentClassName={"justify-center items-center"}
            slideDownClassName={`opacity-0 ${typingDone && 'fade-in-up-3'}`}
        >
            <SectionBody className={"lg:w-1/2 items-center text-center p-0 gap-4 justify-center"}>
                <Image src="/images/profile.png" alt="프로필 이미지" className={"fade-in-up-1"} width={200} height={200}/>
                <div className="h-35 xl:h-55">
                    <TypeIt
                        options={{
                            speed: 60,
                            waitUntilVisible: true,
                            cursor: false,
                            afterComplete: () => setTypingDone(true),
                        }}
                    >
                        <HeroTitle className={"text-center flex flex-col gap-4"}>
                            <h1>안녕하세요</h1>
                            <h1>프론트엔드 개발자</h1>
                            <h1>
                                <span className={"text-(--color-accent)"}>전웅찬</span>입니다.
                            </h1>
                        </HeroTitle>
                    </TypeIt>
                </div>
                <SectionDescription className={`opacity-0 text-center ${typingDone && 'fade-in-up-1'}`}>
                    다양한 경험을 통해 항상 발전하는
                    <br />
                    프론트엔드 개발자를 목표로 하고 있습니다.
                </SectionDescription>
                <SectionActionButton className={`opacity-0 ${typingDone && 'fade-in-up-2'}`}>Contact Me</SectionActionButton>
            </SectionBody>
        </Section>
    );
}
