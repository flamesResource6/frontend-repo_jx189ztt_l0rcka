import { Code2, MonitorSmartphone, Gauge, Search } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Website Development',
    desc: 'Bespoke, component-driven builds using modern stacks like React and Next.js for maintainability and performance.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive UI/UX Design',
    desc: 'Mobile-first interfaces with accessible patterns, micro-interactions, and delightful motion.'
  },
  {
    icon: Gauge,
    title: 'Optimization & Speed',
    desc: 'Core Web Vitals, image optimization, code splitting, and caching strategies for instant experiences.'
  },
  {
    icon: Search,
    title: 'SEO-Ready Architecture',
    desc: 'Semantic markup, structured data, and best practices to help your content get discovered.'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Services</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Everything you need to plan, build, and grow a modern web presence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon: Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
