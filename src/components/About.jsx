import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
          I’m a web developer focused on building clean, performant interfaces with delightful interactions. I collaborate closely with clients to understand goals, then design and deliver solutions that are reliable, scalable, and easy to maintain.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Experience</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>5+ years building with React, Next.js, and TypeScript</li>
              <li>Design systems and component libraries</li>
              <li>Performance, accessibility, and SEO</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Skills</h3>
            <div className="mt-3 space-y-3">
              {[{label: 'HTML/CSS', v: 95}, {label: 'JavaScript', v: 90}, {label: 'React', v: 90}].map(({label, v}, i) => (
                <div key={label} className="w-full">
                  <div className="flex justify-between text-sm"><span>{label}</span><span>{v}%</span></div>
                  <div className="h-2 mt-1 rounded bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: v + '%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 * i }}
                      className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
