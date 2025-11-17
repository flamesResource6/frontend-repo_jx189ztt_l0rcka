import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <div className="pt-6" />
      <About />
      <Footer />
    </div>
  )
}
