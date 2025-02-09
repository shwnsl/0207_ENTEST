import Image from "next/image"
import Logo2 from '../public/logo2.png'

export default function Footer() {
    return (
        <footer className="bg-black w-full h-20 flex justify-center items-center lg:h-60 md:h-36 sm:h-20">
            <div className="w-[80%] flex justify-between items-center lg:block">
                <a>
                    <Image
                        className='md:w-auto'
                        style={{width: 'unset'}}
                        alt='logo'
                        src={Logo2} 
                    />
                </a>
                <p className="font-['PT'] text-white text-xs lg:mt-6 md:text-xl">Copyrights 2024. 테스트 All Rights Reserved</p>
            </div>
        </footer>
    )
}