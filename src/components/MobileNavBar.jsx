import React, { useState } from 'react'
import Logo from "../assets/cei_logo.png"
import { Button } from '@mantine/core'
//import { UserIcon } from "../assets/icons/user.svg"
import { IconPhoto, IconUser } from '@tabler/icons-react'
import MenuIcon from "../assets/icons/menu.svg"
export const MobileNavBar = () => {

    const [isExpanded, setExpanded] = useState(false)

    const handleMenuClick = () => { 
        setExpanded(!isExpanded)
    }

    return (
        <div className='md:hidden sticky top-0 z-50 bg-white w-[95%] mx-auto rounded-lg pb-3'>
            <div className="flex justify-between items-center px-4 h-16 ">
                <img src={Logo} alt="logo" width={72} />
                <div onClick={handleMenuClick}>
                    <img src={MenuIcon} alt="menu" width={32} />
                </div>
            </div>


            {
                isExpanded && (<div className="flex flex-col gap-3 h-full items-center justify-center">
                    <a href="#services" className="nav-link">Servicios</a>
                    <a href="#testimonials" className="nav-link">Testimonios</a>
                    <a href="#about-us" className="nav-link">Sobre nosotros</a>
    
                    <a href="#contact">
                        <Button
                            radius={100}
                            rightSection={<IconUser color='black' size={22} />}
                            color='#FDCBF1'
                        >
                            <span className='text-black'>Contacto</span>
                        </Button>
                    </a>
                </div>)
            }

            
        </div>
    )
}
