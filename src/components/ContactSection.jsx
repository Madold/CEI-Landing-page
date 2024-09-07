import { Button, Textarea, TextInput } from '@mantine/core'
import React from 'react'
import { BuildingMap } from './BuildingMap'
import SendIcon from "../assets/icons/send_icon.svg"

export const ContactSection = () => {
    return (
        <>
            <div className='pt-5'></div>
            <section className='wrapper-transparent bg-white flex p-4 gap-3'>
                <div className='flex-1'>
                    <h4 className='text-center font-bold text-2xl flex-1'>Contactanos</h4>

                    <form action="#" className='flex flex-wrap gap-2'>
                        <TextInput className='w-full' label="Nombre" placeholder="Ej: Jhon Doe" required />
                        <TextInput className='flex-1' label="Telefono" placeholder="Ej: 1234567890" required />
                        <TextInput className='flex-1' label="Correo" placeholder="Ej: correo@gmail.com" required />
                        <Textarea
                            className='w-full'
                            label="Mensaje"
                            placeholder="Escribe tu mensaje aquí"
                            autosize={true}
                            required />
                    </form>

                    <div className='flex w-full justify-center'>
                        <Button
                            color='#FDCBF1'
                            className='mt-2 rounded-full'
                            onClick={() => { console.log('Enviar') }}
                        >
                            <span className='text-black'>Enviar</span>
                            <img src={SendIcon} alt='Send Icon' className='ml-2' />
                        </Button>
                    </div>
                </div>

                <div className='flex-1'>
                    <p className='font-bold'>Calle 62ª No. 8-109 local 1 Castellana</p>
                    <BuildingMap />
                </div>
            </section>
        </>
    )
}
