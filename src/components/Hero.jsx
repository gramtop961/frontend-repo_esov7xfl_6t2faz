import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 w-full">
          <div className="backdrop-blur-sm bg-white/50 rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-sm uppercase tracking-wider text-blue-600">Software Developer</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">I build fast, modern web apps with delightful UX</h1>
            <p className="mt-4 text-gray-700">From 3D‑enhanced landing pages to robust backends, I ship end‑to‑end solutions using React, Tailwind, FastAPI, and MongoDB.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-black transition">
                View Projects <ArrowRight size={18}/>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg border hover:bg-gray-50 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
    </section>
  )
}
