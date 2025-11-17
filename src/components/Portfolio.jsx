import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

// Replace with your real projects
const projects = [
  {
    name: 'SaaS Marketing Site',
    desc: 'Conversion-focused landing pages and docs built with React and Tailwind.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    url: 'https://example.com'
  },
  {
    name: 'E-commerce Frontend',
    desc: 'Product browsing, cart, and checkout UX with high performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    url: 'https://example.com'
  },
  {
    name: 'Startup Launch Page',
    desc: 'Hero animations, feature highlights, and signup flow integration.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    url: 'https://example.com'
  },
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Selected Work</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A snapshot of projects shipped for startups, agencies, and founders.</p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  </div>
                  <motion.a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
