import About from "@/src/components/about/About";
import Skills from "@/src/components/skills/Skills";
import Hero from "@/src/components/hero/Hero";
import Career from "@/src/components/career/Career";
import Archive from "@/src/components/archive/Archive";
import Footer from "@/src/components/footer/Footer";


export default function App() {
    return (
            <div className="min-h-screen bg-zinc-50 font-sans">
                    <main className="flex flex-col min-h-screen items-center justify-center">
                            <Hero />
                            <About />
                            <Skills />
                            <Career />
                            <Archive />
                            <Footer />
                    </main>
            </div>
    );
}
