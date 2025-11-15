import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium">
      <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
      <li><a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a></li>
      <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
      <li><NavLink to="/blogs" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}>Blog</NavLink></li>
      <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-gray-900">Dev Portfolio</Link>
        <nav className="hidden md:block">{navItem}</nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100"><Github size={18}/></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100"><Linkedin size={18}/></a>
          <a href="#contact" className="p-2 rounded hover:bg-gray-100"><Mail size={18}/></a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 border-t bg-white/80">
          {navItem}
        </div>
      )}
    </header>
  )
}
