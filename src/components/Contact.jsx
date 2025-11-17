import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      // Placeholder: send via email service or backend
      console.log('Contact form submitted', data)
      setStatus('Thanks! I’ll get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s build something great</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Tell me a bit about your project and I’ll follow up to schedule a call.</p>

            <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-200">
              <a href="mailto:you@example.com" className="flex items-center gap-3"><Mail size={18}/> you@example.com</a>
              <a href="tel:+1234567890" className="flex items-center gap-3"><Phone size={18}/> +1 (234) 567-890</a>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-slate-200 dark:ring-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"><Linkedin size={18}/> LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-slate-200 dark:ring-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"><Github size={18}/> GitHub</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
              </div>
            </div>
            {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/20">
              Send <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
