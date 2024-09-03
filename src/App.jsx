import React from 'react'
import { NavBar } from './components/NavBar'
import { HeroHome } from './components/HeroHome'
import { ServicesSection } from './components/ServicesSection'

export const App = () => {
  return (
    <>
      <div className='wrapper flex flex-col w-full'>
        <NavBar />
        <HeroHome />
      </div>
      <ServicesSection />
    </>
  )
}
