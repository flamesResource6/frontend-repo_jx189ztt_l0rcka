import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-slate-900/60 dark:via-slate-900/70 dark:to-slate-900/90 pointer-events-none" />

      {/* Floating accent glow */}
      <motion.div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }} className="max-w-3xl">
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700/80 bg-blue-50 rounded-full px-3 py-1 ring-1 ring-blue-200"
          >
            Available for new projects
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Web Development That Works
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300"
          >
            I craft fast, responsive websites and web apps that look great and drive results. From idea to launch, I help you ship with confidence.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/portfolio" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">
                View My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white/90 dark:bg-slate-800/80 text-slate-900 dark:text-white px-6 py-3 font-semibold ring-1 ring-slate-200 dark:ring-slate-700 hover:bg-white">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
