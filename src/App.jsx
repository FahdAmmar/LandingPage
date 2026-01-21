import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeutureSection from './components/FeutureSection'
import WorkFlow from './components/WorkFlow'
function App() {
  return (
    <main className='overflow-hidden'>
      <Navbar />
      <Hero />
      <FeutureSection />
      <WorkFlow />
    </main>
  )
}

export default App