import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Habits from './components/Habits'
import PlasticCalculator from './components/PlasticCalculator'
import Sorting from './components/Sorting'
import Challenge from './components/Challenge'
import Tips from './components/Tips'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Problem /><Habits /><PlasticCalculator /><Sorting /><Challenge /><Tips /><CTA />
      </main>
      <Footer />
    </>
  )
}
