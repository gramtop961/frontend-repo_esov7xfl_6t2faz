import Navbar from './Navbar'
import Hero from './components/Hero'
import { About, Projects, Skills, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Your Name — Built with love</footer>
    </div>
  )
}

export default App
