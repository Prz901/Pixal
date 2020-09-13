import React from 'react'

import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import Descriptions from '../components/Descriptions/Descriptions'
import Exhibitions from '../components/Exhibitions/Exhibitions'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <div className='min-h-screen'>
        <Hero />
      </div>
      <Portfolio />
      <Descriptions />
      <Exhibitions />
      <Footer />
    </>
  )
}
