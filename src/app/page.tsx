import About from "@/src/components/about/About";
import Skills from "@/src/components/skills/Skills";
import Hero from "@/src/components/hero/Hero";
import Career from "@/src/components/career/Career";
import Archive from "@/src/components/archive/Archive";

// TODO: 블로그 - Tailwind 유지보수 개선(토큰화, 반응형 표준화, 버튼 폭 정책) 내용을 회고로 작성한다.
// TODO: 스크롤 위로 올릴 때 섹션 TOP에 스크롤 고정되어 먹통되는 문제
// TODO: 섹션 타이틀 애니메이션은 fade-in-down 으로 수정
export default function App() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Hero />
            <About />
            <Skills />
            <Career />
            <Archive />
        </main>
    );
}
