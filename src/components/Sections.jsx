import { Code, Database, Server, Rocket, ExternalLink, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            I’m a software developer focused on building performant, accessible, and visually engaging products. I love crafting smooth user experiences and reliable APIs, shipping features fast without sacrificing quality.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2"><Code size={18}/> React, Vite, Tailwind</li>
            <li className="flex items-center gap-2"><Server size={18}/> FastAPI, Node</li>
            <li className="flex items-center gap-2"><Database size={18}/> MongoDB</li>
            <li className="flex items-center gap-2"><Rocket size={18}/> CI/CD, Cloud</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border">
          <p className="text-sm uppercase tracking-wide text-gray-600">Highlights</p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• 5+ years building web apps</li>
            <li>• Strong UX mindset and design eye</li>
            <li>• End‑to‑end ownership from idea to deploy</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/projects`).then(r=>r.json()).then(d=>setProjects(d.items||[])).catch(()=>{})
  }, [])
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <a href="https://github.com/" className="text-sm text-blue-600 hover:underline">View GitHub</a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <article key={idx} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
            {p.image && <img src={p.image} alt={p.title} className="h-40 w-full object-cover"/>}
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-3">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tags||[]).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.github && <a className="text-sm inline-flex items-center gap-1 text-gray-700 hover:text-black" href={p.github} target="_blank" rel="noreferrer"><Github size={16}/> Code</a>}
                {p.live && <a className="text-sm inline-flex items-center gap-1 text-blue-600 hover:underline" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'FastAPI', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'Tailwind', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
  ]
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map(s => (
          <div key={s.name} className="border rounded-xl p-4 bg-white">
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-gray-600">{s.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      setStatus(json.status === 'ok' ? 'Thanks! I will get back to you soon.' : 'Something went wrong.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong.')
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-700">Have a project in mind or just want to say hi? Drop a message.</p>
          {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
        </div>
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 space-y-3">
          <input name="name" required placeholder="Your name" className="w-full border rounded-lg px-3 py-2" />
          <input type="email" name="email" required placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
          <textarea name="message" required placeholder="Message" rows="5" className="w-full border rounded-lg px-3 py-2" />
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black">Send</button>
        </form>
      </div>
    </section>
  )
}
