import TypeIt from "typeit-react";
import {BrandLogo} from "@/src/components/common/BrandLogo";

interface HeroLogoProps {
    visible: boolean;
}

// TODO: Card 컴포넌트로 리팩토링 검토
export default function HeroLogo({ visible }: HeroLogoProps) {
    return (
        <div
            className={`absolute transition-all duration-700 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
        >
            <div className="mb-12 flex items-center justify-center">
                <div className="rounded-xl border border-(--color-accent) bg-(--color-navy) px-8 py-4 shadow-[0_0_30px_rgba(0,212,170,0.2)] backdrop-blur-sm">
                    {visible && (
                        <div className="hero-logo-typing font-mono text-4xl font-bold tracking-wider text-(--color-accent) md:text-5xl">
                            <TypeIt
                                options={{
                                    speed: 120,
                                    cursor: true,
                                    cursorChar: "|",
                                    waitUntilVisible: true,
                                }}
                            >
                                <BrandLogo className="text-(--color-accent)"/>
                            </TypeIt>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
