import React from 'react'
import DoctorImage from "../assets/doctor.png"
import NeedleImage from "../assets/needle.png"  
import { Chip } from './Chip'
import { Button } from '@mantine/core'

export const ServicesSection = () => {
    return (
        <div id='services' className='wrapper-transparent services-container h-[870px] pb-5'>
            <section className="services-container-item medic flex flex-col justify-between animate__animated animate__fadeInUp">
                <div>
                    <h3 className='text-center font-bold text-2xl'>Pediatria</h3>
                    <p>Cuidado integral y especializado para la salud de los más pequeños, enfocado en la prevención y tratamiento de enfermedades infecciosas.</p>
                </div>
                <img src={DoctorImage} height={150} className='doctor_image' />
            </section>
            <section className="services-container-item flex flex-col items-end vaccine animate__animated animate__fadeInUp relative">
                <h3 className='text-center w-full font-bold text-2xl'>Vacunacion</h3>
                <p className='text-center'>Protege a tu familia con nuestro servicio de vacunación, siguiendo los más altos estándares de seguridad y eficacia.</p>

                <img src={NeedleImage} className='absolute bottom-0 hidden md:block left-0 h-4/5' />

                <div className='flex flex-col gap-14 h-full justify-center'>
                    <Chip>
                        <span className='font-bold'>100%</span> Atención rápida
                    </Chip>

                    <Chip>
                        <span className='font-bold'>90%</span> Cliente satisfecho
                    </Chip>

                    <Chip>
                        <span className='font-bold'>90%</span> Tratamiento exitoso
                    </Chip>
                </div>

            </section>
            <section className="services-container-item infection animate__animated animate__fadeInUp">
                <h3 className='text-center font-bold text-2xl'>Infectología</h3>
                <p>Diagnóstico y tratamiento especializado para enfermedades infecciosas y trastornos inmunológicos, con un enfoque en la excelencia y la empatía.</p>
            </section>
            <section className="services-container-item benefits animated-background flex flex-col items-center justify-center gap-6">
                <h3 className='text-center font-bold text-2xl'>¡Obten todos los beneficios ahora!</h3>
                <Button
                    color='#0CA5C7'
                    radius={100}
                >
                    Agendar cita ahora
                </Button>
            </section>
        </div>
    )
}
