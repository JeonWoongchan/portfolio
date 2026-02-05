'use client'

import React, { useEffect, useState} from 'react';
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import Image from "next/image";
import InfoCard from "@/src/components/InfoCard";
import aboutData from "@/data/about.json"

export default function About()  {
    const sectionRef = useRegisterSection('About');
    const [isVisible, setIsVisible] = useState(false); // 추가
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 한 번만 트리거되도록
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // 20% 보이면 트리거
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // TODO: section 컴포넌트 모듈화
    // TODO: About 페이지 카드 컴포넌트 내용 변경
    // TODO: 브라우저 너비에 따른 반응형 구현(이미지+설명 및 카드에서 텍스트 영역과 크기 조절 필요)
    return (
        <section ref={sectionRef}
                className="
                w-full
                min-h-screen
                flex
                flex-col
                justify-between"
        >
            <div>
                <div className={`
                    flex
                    justify-start
                    border-b-2 
                    border-gray-300 
                    pb-3 
                    opacity-0 
                    ${isVisible  ? "fade-in-down"  : ""}`}
                >
                    <h1 className="text-8xl font-bold">ABOUT ME</h1>
                </div>
                <div className="flex flex-col xl:flex-row w-full gap-8 xl:px-30 py-8 justify-center items-center">
                    <Image
                        src="/images/developer4.svg"
                        alt="logo"
                        width={300}
                        height={300}
                        className={`opacity-0 ${isVisible  ? "fade-in-up-1" : ""}`}
                    />
                    <div className={`space-y-4 md:space-y-6 text-left font-bold opacity-0 ${isVisible  ? "fade-in-up-2" : ""}`}>
                        <p className="lg:text-lg leading-relaxed">
                            안녕하세요! 2년차 프론트엔드 개발자 전웅찬입니다.
                        </p>
                        <p className="lg:text-base leading-relaxed max-w-prose">
                            HTML, CSS, JavaScript를 시작으로 React를 통해 상태 관리와
                            컴포넌트 기반 구조에 대해 경험하였고...
                        </p>
                    </div>
                </div>
                <ul className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-2 my-9'>
                    {aboutData.map((data) => (
                        <li
                            key={data.id}
                            className={`opacity-0 ${isVisible  ? `fade-in-up-3` : ""}`}
                        >
                            <InfoCard
                                imageSrc={data.imageSrc}
                                imageAlt={data.imageAlt}
                                title={data.title}
                                description={data.description}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};


