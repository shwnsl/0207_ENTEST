"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import photoData from '../public/data.json'
import Img1 from '../public/img1.jpg'
import Img2 from '../public/img2.jpg'
import Img3 from '../public/img3.jpg'
import Img4 from '../public/img4.jpg'

export default function Slide() {
    const imgs = [Img1, Img2, Img3, Img4];

    return (
        <section>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                    delay: 200000000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                className="relative w-full h-[40rem]"
            >
                {
                    photoData.map((photo, idx) => (
                        <SwiperSlide 
                            key={photo.id}
                            className='relative w-full h-full text-white'
                        >
                                <Image
                                    alt='photo'
                                    src={imgs[idx]}
                                    fill
                                    className='object-cover'
                                />
                                <div className='w-full h-full absolute px-[10%] flex items-center'>
                                    <div>
                                        <p className="text-xl font-['PEB'] sm:text-3xl md:text-4xl lg:text-5xl">
                                            {photo.title?.split("<br/>").map((line, idx) => (
                                                <span key={idx}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                        <p className="text-xs font-['PL'] sm:text-2xl md:text-xl lg:text-2xl mt-14">
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
        </section>
    )
}