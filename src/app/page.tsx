import Home from "@/src/components/Home";
import About from "@/src/components/About";
import Skills from "@/src/components/skills/Skills";


export default function App() {
  return (
      <div className="min-h-screen bg-zinc-50 font-sans">
          <main className="flex flex-col min-h-screen items-center justify-center">
              <Home />
              <About />
              <Skills />
          </main>
      </div>
  );
}
