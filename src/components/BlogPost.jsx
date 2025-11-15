import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs/${slug}`).then(r=>r.json()).then(setPost).catch(()=>{})
  }, [slug])

  if (!post) return <div className="min-h-screen bg-[radial-gradient(1000px_500px_at_90%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(167,139,250,0.25),transparent)] dark:bg-[#0b1220] pt-24 text-center text-gray-700 dark:text-gray-300">Loading...</div>

  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_500px_at_90%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(167,139,250,0.25),transparent)] dark:bg-[#0b1220]">
      <div className="pt-20 max-w-3xl mx-auto px-4 py-12">
        <Link to="/blogs" className="text-sm text-sky-600">← Back to Blog</Link>
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2">{post.title}</motion.h1>
        {post.cover_image && <img src={post.cover_image} alt={post.title} className="mt-6 rounded-2xl"/>}
        <p className="text-gray-600 dark:text-gray-400 mt-2">{post.published_at && new Date(post.published_at).toLocaleString()}</p>
        <div className="prose prose-slate dark:prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        <div className="mt-6 flex gap-2">
          {(post.tags||[]).map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
