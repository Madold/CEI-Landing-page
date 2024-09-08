import React from 'react'
import { NavBar } from './components/NavBar'
import { HeroHome } from './components/HeroHome'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FloatingWhatsappIcon } from './components/FloatingWhatsappIcon'

export const App = () => {
  return (
    <>
      <div className='wrapper flex flex-col w-full'>
        <NavBar />
        <HeroHome />
      </div>
      <ServicesSection />
      <AboutSection  />
      <ContactSection />
      <FloatingWhatsappIcon />
    </>
  )
}
