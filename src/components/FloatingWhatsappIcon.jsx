import React from 'react'
import WhatsAppIcon from "../assets/icons/whatsapp_icon.svg"

export const FloatingWhatsappIcon = () => {

    const handleClick = () => { 
        const phoneNumber = '+573177842594'; // Reemplaza con el número de WhatsApp deseado
        const message = 'Hola, me gustaría agendar una cita'; // Mensaje predeterminado (opcional)
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div onClick={handleClick} className='whatsapp-button fixed flex items-center gap-2 rounded-full p-2 bottom-2 right-2 cursor-pointer bg-white shadow-md w-fit z-50'>
            <span className='whatsapp-button-label'>Contacta con el CEI por whatsapp!</span>
            <img src={WhatsAppIcon} width={32} alt="whatsapp icon" />
        </div>
    )
}
