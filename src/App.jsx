import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeutureSection from './components/FeutureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <Hero />
      <FeutureSection />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App