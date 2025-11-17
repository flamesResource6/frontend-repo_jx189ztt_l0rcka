import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <div className="pt-6" />
      <Services />
      <Footer />
    </div>
  )
}
