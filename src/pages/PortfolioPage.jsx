import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <div className="pt-6" />
      <Portfolio />
      <Footer />
    </div>
  )
}
