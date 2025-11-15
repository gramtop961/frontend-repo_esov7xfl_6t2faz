import { Code, Database, Server, Rocket, ExternalLink, Github, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Backend-focused engineer with a product mindset. I craft resilient APIs, model data with care, and ship features that scale. I thrive at the boundary between clean architecture and great UX.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2"><Code size={18}/> FastAPI, Python</li>
            <li className="flex items-center gap-2"><Server size={18}/> Systems & Services</li>
            <li className="flex items-center gap-2"><Database size={18}/> MongoDB</li>
            <li className="flex items-center gap-2"><Rocket size={18}/> CI/CD, Cloud</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-white/5 dark:to-white/0 p-8 rounded-2xl border border-white/60 dark:border-white/10">
          <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Highlights</p>
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• API-first development</li>
            <li>• Pragmatic testing and monitoring</li>
            <li>• Collaboration across product/design</li>
          </ul>
        </motion.div>
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
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <a href="https://github.com/" className="text-sm text-sky-600 hover:underline">View GitHub</a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="group bg-white dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-sky-100/40 dark:hover:shadow-black/20 transition"
          >
            {p.image && <img src={p.image} alt={p.title} className="h-40 w-full object-cover group-hover:scale-[1.02] transition"/>}
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tags||[]).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.github && <a className="text-sm inline-flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" href={p.github} target="_blank" rel="noreferrer"><Github size={16}/> Code</a>}
                {p.live && <a className="text-sm inline-flex items-center gap-1 text-sky-600 hover:underline" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { name: 'FastAPI', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Cloud/CI', level: 'Intermediate' },
  ]
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s, idx) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="relative border border-white/60 dark:border-white/10 rounded-2xl p-4 bg-white dark:bg-white/5 overflow-hidden">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-sky-300/30 to-fuchsia-300/30"/>
            <p className="font-semibold text-gray-900 dark:text-white">{s.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{s.level}</p>
          </motion.div>
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
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Want to collaborate or have a backend challenge? I’d love to help.</p>
          {status && <p className="mt-3 text-sm text-emerald-600">{status}</p>}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <ChevronRight size={16}/> Prefer email? your.email@domain.com
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-2xl p-6 space-y-3">
          <input name="name" required placeholder="Your name" className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent rounded-xl px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400" />
          <input type="email" name="email" required placeholder="Email" className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent rounded-xl px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400" />
          <textarea name="message" required placeholder="Message" rows="5" className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-transparent rounded-xl px-3 py-2 text-gray-900 dark:text-white placeholder:text-gray-400" />
          <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl hover:opacity-90">Send</button>
        </form>
      </div>
    </section>
  )
}
