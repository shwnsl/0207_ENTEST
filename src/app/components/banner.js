"use client"

import Image from "next/image"
import Me from '../public/me.png'
import { useState } from "react"
import ExpandingMenu from "./expand";

export default function Banner() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSkill, setIsSkill] = useState(false);

    return (
        <div className="w-[80%] relative">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                <div className="w-full lg:w-1/2 md:w-full sm:w-full">
                    <h1 className="text-4xl font-bold mb-4">여행을 좋아하는 개발자<br/>노준희입니다!</h1>
                    <p className="text-gray-600 text-lg mb-6">회사와 함께 성장하고 싶은<br/> 개발자입니다.</p>
                    <div className="space-x-4 flex items-center">
                        <a href="https://github.com/shwnsl">
                            <button className="text-sky-500 border border-sky-500 font-semibold py-2 px-4 rounded hover:bg-sky-500 hover:text-white transition duration-300">
                                Go To Github
                            </button>
                        </a>
                        <button 
                            className="text-gray-500 border border-gray-500 font-semibold py-2 px-4 rounded hover:bg-gray-500 hover:text-white transition duration-300"
                            onClick={() => setIsSkill((prev) => !prev)}
                        >
                            My Skills
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 md:w-full sm:w-full">
                    <div className="bg-sky-200 rounded-lg shadow-lg p-6 relative">
                        <Image 
                            src={Me} 
                            alt="my picture" 
                            className="w-full h-full" 
                            width={1329}
                            height={997}
                            quality={100}
                        />
                        <button
                            className="absolute top-7 right-7 bg-slate-50/80 rounded-full p-2 hover:scale-110 transition-all"
                            onClick={() => setIsOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ExpandingMenu isSkill={isSkill} />
            {isOpen ? 
                <div className="w-screen h-screen fixed left-0 top-0 p-20 bg-slate-950/50 z-50">
                    <Image 
                        src={Me} 
                        alt="my picture" 
                        className="aspect-video" 
                        width={1329}
                        height={997}
                        quality={100}
                    />
                    <button 
                        className="absolute right-10 top-4 p-1 text-white bg-slate-50/50 rounded-md hover:scale-110 transition-all"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                        </svg>
                    </button>
                </div>
                :
                <></>
            }
        </div>  
    )
}