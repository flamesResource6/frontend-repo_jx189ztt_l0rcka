export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
          I’m a web developer focused on building clean, performant interfaces with delightful interactions. I collaborate closely with clients to understand goals, then design and deliver solutions that are reliable, scalable, and easy to maintain.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Experience</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>5+ years building with React, Next.js, and TypeScript</li>
              <li>Design systems and component libraries</li>
              <li>Performance, accessibility, and SEO</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Skills</h3>
            <div className="mt-3 space-y-3">
              <div className="w-full">
                <div className="flex justify-between text-sm"><span>HTML/CSS</span><span>95%</span></div>
                <div className="h-2 mt-1 rounded bg-slate-200 dark:bg-slate-800"><div className="h-2 w-[95%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div></div>
              </div>
              <div className="w-full">
                <div className="flex justify-between text-sm"><span>JavaScript</span><span>90%</span></div>
                <div className="h-2 mt-1 rounded bg-slate-200 dark:bg-slate-800"><div className="h-2 w-[90%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div></div>
              </div>
              <div className="w-full">
                <div className="flex justify-between text-sm"><span>React</span><span>90%</span></div>
                <div className="h-2 mt-1 rounded bg-slate-200 dark:bg-slate-800"><div className="h-2 w-[90%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
