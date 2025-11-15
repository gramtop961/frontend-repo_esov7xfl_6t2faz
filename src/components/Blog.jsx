import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BlogList() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/blogs`).then(r=>r.json()).then(d=>setPosts(d.items||[])).catch(()=>{})
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_500px_at_90%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(167,139,250,0.25),transparent)] dark:bg-[#0b1220]">
      <div className="pt-20 max-w-6xl mx-auto px-4 py-12">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl font-extrabold text-gray-900 dark:text-white">Blog</motion.h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Notes on APIs, data modeling, and backend patterns.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <motion.a
              key={p._id}
              href={`/blogs/${p.slug}`}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group bg-white dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-sky-100/40 dark:hover:shadow-black/20 transition"
            >
              {p.cover_image && <img src={p.cover_image} alt={p.title} className="h-40 w-full object-cover group-hover:scale-[1.02] transition"/>}
              <div className="p-5">
                <p className="text-xs text-gray-500 dark:text-gray-400">{p.published_at && new Date(p.published_at).toLocaleDateString()}</p>
                <h3 className="font-semibold text-gray-900 dark:text-white mt-1">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">{p.excerpt}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(p.tags||[]).map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
