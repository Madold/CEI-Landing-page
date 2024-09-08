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
      <div className='hidden nav-bar-wrapper sticky top-0 z-50'>
        <NavBar />
      </div>
      <div className='pt-3'></div>
      <div className='wrapper flex flex-col w-full pt-[10px]'>
        <HeroHome />
      </div>
      <ServicesSection />
      <AboutSection  />
      <ContactSection />
      <FloatingWhatsappIcon />
    </>
  )
}
