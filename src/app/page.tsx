import About from "@/src/components/About";
import Skills from "@/src/components/skills/Skills";
import Hero from "@/src/components/hero/Hero";


export default function App() {
  return (
      <div className="min-h-screen bg-zinc-50 font-sans">
          <main className="flex flex-col min-h-screen items-center justify-center">
              <Hero />
              <About />
              <Skills />
          </main>
      </div>
  );
}
