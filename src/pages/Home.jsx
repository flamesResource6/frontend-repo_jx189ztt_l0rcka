import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  )
}
