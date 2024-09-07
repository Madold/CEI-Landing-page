import { Button, Textarea, TextInput } from '@mantine/core'
import React from 'react'
import SendIcon from '../assets/icons/send_icon.svg'
import emailjs from '@emailjs/browser'
import { useForm } from '@mantine/form'

export const ContactForm = () => {

    const form = useForm({
        initialValues: {
            nombre: '',
            telefono: '',
            correo: '',
            mensaje: '',
        },

        validate: {
            nombre: (value) => (value.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : null),
            telefono: (value) =>
                value.match(/^\d{10}$/) ? null : 'El teléfono debe tener exactamente 10 dígitos',
            correo: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo inválido'),
            mensaje: (value) => (value.length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : null),
        },
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            to_name: form.values.nombre,
            from_name: form.values.correo,
            message: form.values.mensaje,
        };

        console.log(form.values);
        if (!form.validate().hasErrors) {
            // Si no hay errores de validación, enviamos el formulario
            emailjs
                .send(
                    "service_ayzpms8",
                    "template_5igkm9g",
                    templateParams,
                    "5wJjH5OvBevvtkrCW"
                )
                .then(
                    (response) => {
                        alert('Mensaje enviado con éxito');
                        form.reset(); // Reiniciar el formulario después de enviar
                    },
                    (error) => {
                        alert('Error al enviar el mensaje');
                        console.log(error);
                    }
                );
        }

    }



    return (
        <>
            <form onSubmit={onSubmit} className='flex flex-wrap gap-2'>
                <TextInput
                    className='w-full'
                    label='Nombre'
                    placeholder='Ej: Jhon Doe'
                    required
                    {...form.getInputProps('nombre')}
                />
                <TextInput
                    className='flex-1'
                    label='Teléfono'
                    placeholder='Ej: 1234567890'
                    required
                    {...form.getInputProps('telefono')}
                />
                <TextInput
                    className='flex-1'
                    label='Correo'
                    placeholder='Ej: correo@gmail.com'
                    required
                    {...form.getInputProps('correo')}
                />
                <Textarea
                    className='w-full'
                    label='Mensaje'
                    placeholder='Escribe tu mensaje aquí'
                    autosize={true}
                    required
                    {...form.getInputProps('mensaje')}
                />

                <div className='flex w-full justify-center'>
                    <Button
                        type='submit'
                        color='#FDCBF1'
                        className='mt-2 rounded-full'
                    >
                        <span className='text-black'>Enviar</span>
                        <img src={SendIcon} alt='Send Icon' className='ml-2' />
                    </Button>
                </div>
            </form>


        </>
    )
}
