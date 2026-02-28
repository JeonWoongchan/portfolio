import About from "@/src/components/about/About";
import Skills from "@/src/components/skills/Skills";
import Hero from "@/src/components/hero/Hero";
import Career from "@/src/components/career/Career";
import Archive from "@/src/components/archive/Archive";

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
