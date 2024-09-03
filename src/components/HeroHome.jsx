import React from 'react'
import NurseIllustration from "../assets/nurse.png"
import { Button } from '@mantine/core'

export const HeroHome = () => {
    return (
        <section id='services' className='hero-home animated-background'>
            <div className='flex flex-col gap-3'>
                <span className='text-4xl font-bold animate__animated animate__fadeInUp'>Tu <span className='text-[#0CA5C7]'>
                    Salud
                </span>
                </span>
                <span className='text-4xl font-bold animate__animated animate__fadeInUp'>Nuestra <span className='text-[#AA27E7]'>Prioridad</span></span>

                <p className='animate__animated animate__fadeInUp'>Confía en los expertos del CEI para la prevención, diagnóstico y tratamiento de enfermedades infecciosas con un servicio médico humanizado y de excelencia.</p>
                <Button
                    radius={100}
                    className='self-start animate__animated animate__fadeInUp'
                    color='#0CA5C7'
                >
                    <span>Agenda una cita con nosotros</span>
                </Button>
            </div>
            <img className='aanimate__animated animate__fadeInUp' src={NurseIllustration} />
        </section>
    )
}
