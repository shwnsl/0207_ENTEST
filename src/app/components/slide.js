"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import photoData from '../public/data.json'

export default function Slide() {
    
    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                className="relative w-full h-[40rem]"
            >
                {
                    photoData.map((photo) => (
                        <SwiperSlide 
                            key={photo.id}
                            className='relative w-full h-full text-white'
                        >
                                <Image
                                    alt='photo'
                                    src={photo.url}
                                    fill
                                    className='object-cover'
                                />
                                <div className='h-[100%] absolute px-36 flex items-center'>
                                    <div>
                                        <p className="text-5xl font-bold">
                                            {photo.title?.split("<br/>").map((line, idx) => (
                                                <span key={idx}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                        <p className="text-xl mt-14">
                                            {photo.description?.split("<br/>").map((line, idx) => (
                                                <span key={idx}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}