import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold">WD</div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Clean, modern websites that perform. Available for new projects.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>you@example.com</li>
            <li>+1 (234) 567-890</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500 border-t border-slate-200/60 dark:border-slate-800/60">© {new Date().getFullYear()} Web Developer — All rights reserved.</div>
    </footer>
  )
}
