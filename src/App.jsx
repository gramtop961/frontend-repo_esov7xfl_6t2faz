import Navbar from './Navbar'
import Hero from './components/Hero'
import { About, Projects, Skills, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_90%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(167,139,250,0.25),transparent)] dark:bg-[#0b1220] transition-colors">
      {/* subtle grain/noise overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')]" />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Your Name — Backend Engineer</footer>
    </div>
  )
}

export default App
