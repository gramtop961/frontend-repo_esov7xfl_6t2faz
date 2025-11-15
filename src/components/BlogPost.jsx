import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs/${slug}`).then(r=>r.json()).then(setPost).catch(()=>{})
  }, [slug])

  if (!post) return <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-24 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="pt-20 max-w-3xl mx-auto px-4 py-12">
        <Link to="/blogs" className="text-sm text-blue-600">← Back to Blog</Link>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-2">{post.title}</h1>
        {post.cover_image && <img src={post.cover_image} alt={post.title} className="mt-6 rounded-xl"/>}
        <p className="text-gray-600 mt-2">{post.published_at && new Date(post.published_at).toLocaleString()}</p>
        <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        <div className="mt-6 flex gap-2">
          {(post.tags||[]).map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
