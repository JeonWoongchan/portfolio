import {useEffect, useRef, useState} from "react";
import TypeIt from "typeit-react";
import {BrandLogo} from "@/src/components/common/BrandLogo";

interface HeroLogoProps {
    visible: boolean;
}

export default function HeroLogo({ visible }: HeroLogoProps) {
    const logoWrapperRef = useRef<HTMLDivElement | null>(null);
    const [isLogoInViewport, setIsLogoInViewport] = useState(false);

    useEffect(() => {
        const logoElement = logoWrapperRef.current;
        if (!logoElement) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsLogoInViewport(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        observer.observe(logoElement);
        return () => observer.disconnect();
    }, []);

    const shouldRenderTyping = visible && isLogoInViewport;

    return (
        <div
            ref={logoWrapperRef}
            className={`absolute transition-all duration-700
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
            <div className="rounded-xl border border-(--color-accent) bg-(--color-navy) px-8 py-4 shadow-[0_0_30px_rgba(0,212,170,0.2)] backdrop-blur-sm">
                {shouldRenderTyping && (
                    <div className="hero-logo-typing font-mono text-4xl font-bold tracking-wider text-(--color-accent) md:text-5xl">
                        <TypeIt
                            options={{
                                speed: 100,
                                cursor: true,
                                cursorChar: "|",
                                waitUntilVisible: false,
                            }}
                        >
                            <BrandLogo className="text-(--color-accent)"/>
                        </TypeIt>
                    </div>
                )}
            </div>
        </div>
    );
}
