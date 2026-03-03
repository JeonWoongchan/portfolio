import About from "@/src/components/about/About";
import Skills from "@/src/components/skills/Skills";
import Hero from "@/src/components/hero/Hero";
import Career from "@/src/components/career/Career";
import Archive from "@/src/components/archive/Archive";

// TODO: DevOps - GitHub Actions에서 pnpm lint + pnpm build + pnpm typecheck를 PR 게이트로 강제한다.
// TODO: DevOps - Tailwind class 품질 검사(오타/금지 arbitrary 값 규칙)를 CI 단계에 추가한다.
// TODO: globals.css - text/body 계열 클래스/토큰 네이밍을 의미 기준으로 재정렬하고 사용처를 전부 치환한다.
// TODO: 블로그 - 이번 Tailwind 유지보수 개선(토큰화, 반응형 표준화, 버튼 폭 정책) 내용을 회고로 작성한다.
// TODO: 아카이브 - 카드 클릭 시 링크 이동 구현
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
