import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-slate-900/60 dark:via-slate-900/70 dark:to-slate-900/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700/80 bg-blue-50 rounded-full px-3 py-1 ring-1 ring-blue-200">Available for new projects</p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Web Development That Works
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            I craft fast, responsive websites and web apps that look great and drive results. From idea to launch, I help you ship with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/portfolio" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-shadow">
              View My Work
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white/90 dark:bg-slate-800/80 text-slate-900 dark:text-white px-6 py-3 font-semibold ring-1 ring-slate-200 dark:ring-slate-700 hover:bg-white">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
