import Spline from '@splinetool/react-spline'
import { ArrowRight, Terminal, Database } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* background wires and glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_10%,rgba(56,189,248,0.35),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_30%,rgba(167,139,250,0.35),transparent)]"/>
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 w-full">
          <div className="backdrop-blur-md bg-white/60 dark:bg-[#0b1220]/60 border border-white/50 dark:border-white/10 rounded-2xl p-6 md:p-9 shadow-xl">
            <p className="text-xs uppercase tracking-widest text-sky-600">Backend Engineer</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              I design resilient APIs and data systems — with delightful UX on top
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              FastAPI • MongoDB • Systems thinking. I love shaping domain models, scaling services, and collaborating with frontend to ship end-to-end.
            </p>
            <div className="mt-6 grid sm:flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-black transition">
                View Projects <ArrowRight size={18}/>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-white/5 transition">
                Let’s talk
              </a>
            </div>
            <div className="mt-6 flex gap-4 text-sm text-gray-700 dark:text-gray-300">
              <span className="inline-flex items-center gap-2"><Terminal size={16}/> FastAPI</span>
              <span className="inline-flex items-center gap-2"><Database size={16}/> MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-[#0b1220] via-transparent to-transparent" />
    </section>
  )
}
