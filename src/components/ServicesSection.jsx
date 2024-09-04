import React from 'react'
import DoctorImage from "../assets/doctor.png"

export const ServicesSection = () => {
    return (
        <div className='wrapper-transparent services-container h-[870px]'>
            <section className="services-container-item medic flex flex-col justify-between animate__animated animate__fadeInUp">
                <div>
                <h3 className='text-center font-bold text-2xl'>Pediatria</h3>
                <p>Cuidado integral y especializado para la salud de los más pequeños, enfocado en la prevención y tratamiento de enfermedades infecciosas.</p>
                </div>
                <img src={DoctorImage} height={150} className='doctor_image' />
            </section>
            <section className="services-container-item vaccine animate__animated animate__fadeInUp">
                <h3 className='text-center font-bold text-2xl'>Vacunacion</h3>
                <p className='text-center'>Protege a tu familia con nuestro servicio de vacunación, siguiendo los más altos estándares de seguridad y eficacia.</p>
            </section>
            <section className="services-container-item infection animate__animated animate__fadeInUp">
                <h3 className='text-center font-bold text-2xl'>Infectología</h3>
                <p>Diagnóstico y tratamiento especializado para enfermedades infecciosas y trastornos inmunológicos, con un enfoque en la excelencia y la empatía.</p>
            </section>
            <section className="services-container-item benefits animated-background flex flex-col items-center justify-center">
                <h3 className='text-center font-bold text-2xl'>¡Obten todos los beneficios ahora!</h3>
            </section>
        </div>
    )
}
