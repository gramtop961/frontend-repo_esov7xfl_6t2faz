import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BlogList() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/blogs`).then(r=>r.json()).then(d=>setPosts(d.items||[])).catch(()=>{})
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="pt-20 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900">Blog</h1>
        <p className="text-gray-700 mt-2">Thoughts on building modern web apps.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p._id} href={`/blogs/${p.slug}`} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
              {p.cover_image && <img src={p.cover_image} alt={p.title} className="h-40 w-full object-cover"/>}
              <div className="p-5">
                <p className="text-xs text-gray-500">{p.published_at && new Date(p.published_at).toLocaleDateString()}</p>
                <h3 className="font-semibold text-gray-900 mt-1">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{p.excerpt}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(p.tags||[]).map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
