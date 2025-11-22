import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import Gallery from '../construction/gallary-section'
import AboutGoldmanConstruction from '../construction/about-construction'
import Footer from '../components/ui/footer'

export const page = () => {
  return (
    <div>
         <Navbar />
        
                    <Gallery />
        
        
                    <AboutGoldmanConstruction />
                    <Footer/>
    </div>
  )
}
