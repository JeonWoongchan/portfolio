import About from "@/src/components/about/About";
import Skills from "@/src/components/skills/Skills";
import Hero from "@/src/components/hero/Hero";
import Career from "@/src/components/career/Career";
import Archive from "@/src/components/archive/Archive";

// TODO: 블로그 - Tailwind 유지보수 개선(토큰화, 반응형 표준화, 버튼 폭 정책) 내용을 회고로 작성한다.
// TODO: SSR 적용 및 배포 -> 포스팅 작성
export default function App() {
    return (
            <div className="min-h-screen bg-zinc-50 font-sans">
                    <main className="flex min-h-screen flex-col items-center justify-center">
                            <Hero />
                            <About />
                            <Skills />
                            <Career />
                            <Archive />
                    </main>
            </div>
    );
}
