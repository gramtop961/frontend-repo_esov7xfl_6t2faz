import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    setDark(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const navItem = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium">
      <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a></li>
      <li><a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a></li>
      <li><a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a></li>
      <li><NavLink to="/blogs" className={({isActive}) => isActive ? 'text-sky-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}>Blog</NavLink></li>
      <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-[#0b1220]/50 border-b border-white/40 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-gray-900 dark:text-white">Backend First.</Link>
        <nav className="hidden md:block">{navItem}</nav>
        <div className="hidden md:flex items-center gap-1">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200">
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><Github size={18}/></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><Linkedin size={18}/></a>
          <a href="#contact" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><Mail size={18}/></a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 border-t bg-white/80 dark:bg-[#0b1220]/80">
          <div className="flex items-center justify-between py-2">
            <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <div className="flex items-center gap-1">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><Github size={18}/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><Linkedin size={18}/></a>
              <a href="#contact" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><Mail size={18}/></a>
            </div>
          </div>
          {navItem}
        </div>
      )}
    </header>
  )
}
