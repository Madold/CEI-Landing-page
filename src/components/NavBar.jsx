import React from 'react'
import Logo from "../assets/cei_logo.png"
import { Button } from '@mantine/core'
//import { UserIcon } from "../assets/icons/user.svg"
import { IconPhoto, IconUser } from '@tabler/icons-react'

export const NavBar = () => {


    return (
        <div className="flex justify-between items-center px-4 h-16">
            <img src={Logo} alt="logo" width={72} />

            <div className="nav-link-list"> 
                <a href="#services" className="nav-link">Servicios</a>
                <a href="#testimonials" className="nav-link">Testimonios</a>
                <a href="#about-us" className="nav-link">Sobre nosotros</a>
            </div>

            <Button
                radius={100}
                rightSection={<IconUser color='black' size={22} />}
                color='#FDCBF1'
                >
                <span className='text-black'>Contacto</span>
            </Button>
        </div>
    )
}
