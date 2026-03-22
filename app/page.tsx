import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="max-w-5xl mx-auto px-6">
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <footer className="py-10 mt-4 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-400">
            <span>© {new Date().getFullYear()} Kailun Wang</span>
            <span>Built with Next.js and Tailwind CSS</span>
          </footer>
        </div>
      </main>
    </>
  );
}
