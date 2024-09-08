import React from 'react'
import { BuildingMap } from './BuildingMap'
import { ContactForm } from './ContactForm'

export const ContactSection = () => {
    return (
        <>
            <div id='contact' className='pt-5'></div>
            <section className='wrapper-transparent bg-white flex p-4 gap-3'>
                <div className='flex-1'>
                    <h4 className='text-center font-bold text-2xl flex-1'>Contactanos</h4>

                    <ContactForm />
                </div>

                <div className='flex-1'>
                    <p className='font-bold'>Calle 62ª No. 8-109 local 1 Castellana</p>
                    <BuildingMap />
                </div>
            </section>
        </>
    )
}
