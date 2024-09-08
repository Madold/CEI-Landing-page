import React from 'react'

export const AboutSection = () => {
    return (
        <section id='about-us' className='wrapper-transparent mt-[20px] about-section p-4 flex gap-9 text-white' >
            <div className='flex flex-col flex-1 gap-4 justify-between'>
                <div>
                    <h4 className='about-title'>Misión</h4>
                    <p>Cuidar la salud y la vida de nuestros niños, adolescentes y adultos con el manejo adecuado de enfermedades infecciosas, alcanzando la tranquilidad necesaria a sus familias por medio de un servicio medico humanizado y de excelencia prestado por nuestro excelente equipo de trabajo.</p>
                </div>

                <div>
                    <h4 className='about-title'>Visión</h4>
                    <p>Para el año 2028, el centro de enfermedades infecciosas – CEI, es el referente en el departamento de Córdoba, en la prevención, diagnóstico y tratamiento de las enfermedades recurrentes o persistentes ocasionadas por agentes infecciosos  y también en Trastornos Inmunológicos.</p>
                </div>

                <div>
                    <h4 className='about-title'>MEGA (Meta Estratégica Grande y Ambiciosa)</h4>
                    <p>Seremos una de las cinco instituciones prestadoras de servicios en enfermedades infecciosas más importantes de la región caribe.</p>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <h4 className='about-title'>Principios corporativos</h4>
                <ul className='principles-list flex flex-col h-full justify-between'>
                    <li>Empatía: Conectarnos con nuestros pacientes, familias, médico y colaboradores es lo más importante para un relacionamiento coordinado y armónico</li>
                    <li>Eficiencia: Eficiencia: Brindar a nuestros pacientes el equipo humano y la logística adecuada para lograr prestar los servicios con eficacia y efectividad.</li>
                    <li>Transparencia: Transparencia: Cumplir rigurosamente con los estándares legales y normativos más exigentes para lograr la más alta confiabilidad.</li>
                    <li>Integridad:  Actuamos con coherencia y respeto en nuestra relación con la salud y la vida de los pacientes, familias, médicos y colaboradores.</li>
                    <li>Trabajo en equipo: Trabajo en equipo: Unidos llegamos más lejos, todos contamos en este gran ecosistema valorando y respetando las capacidades de cada individuo.</li>
                </ul>
            </div>
        </section>
    )
}
