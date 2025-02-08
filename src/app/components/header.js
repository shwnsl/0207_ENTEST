"use client"

import Image from 'next/image'
import Logo from '../public/logo.svg'
import NavBar from './navBar'
import { useState } from 'react'

export default function Header() {
    const [isMenu, setIsMenu] = useState(true);
    const toggleMenu = () => {
        setIsMenu((prev) => !prev);
    }

    return (
        <header className="flex justify-between items-center px-[10%] h-[53px] fixed top-0 bg-white w-[100%] z-10 shadow-lg">
            <a href='/'>
                <Image
                    className=''
                    alt='logo'
                    src={Logo} 
                />
            </a>
            <nav>
                <div className='hidden lg:flex space-x-4 md:flex sm:flex'>
                    <a href='/'>HOME</a>
                    <a href='https://en-media.kr/company'>ABOUT</a>
                    <a href='https://en-media.kr/contact'>CONTACT</a>
                </div>
                <div 
                    className="block md:hidden sm:hidden"
                    onClick={toggleMenu}
                >
                    {isMenu ? (
                        <div className="hamburger z-40 block focus:outline-none">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </div>
                    ) : (
                        <div className="hamburger open z-40 block focus:outline-none">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </div>
                    )}
                </div>
            </nav>
            <NavBar isMenu={isMenu} />
        </header>
    )
}