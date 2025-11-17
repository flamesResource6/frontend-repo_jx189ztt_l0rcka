import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <div className="pt-6" />
      <Contact />
      <Footer />
    </div>
  )
}
