import Image from 'next/image'
import photoData from '../public/data.json'
import Img1 from '../public/img1.jpg'
import Img2 from '../public/img2.jpg'
import Img3 from '../public/img3.jpg'
import Img4 from '../public/img4.jpg'

export default function Cards() {
    const imgs = [Img1, Img2, Img3, Img4];

    return (
        <ul className='w-[80%] grid gap-3 auto-rows-fr
               grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {
                photoData.map((photo, idx) => (
                    <li 
                        key={photo.id}
                        className='border-gray-100 shadow-md rounded-md overflow-hidden hover:scale-105 transition-all'
                    >
                            <Image
                                alt='photo'
                                src={imgs[idx]}
                                className='w-full'
                                layout='responsive'
                                objectFit='cover'
                                width={5000}
                                height={5000}
                            />
                            <div className='p-5'>
                                <p className="text-2xl font-['PEB']">
                                    {photo.title?.split("<br/>").map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                                <p className="text-xs mt-3 font-['PR']">
                                    {photo.description2?.split("<br/>").map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                                <p className="text-[8px] mt-12 text-gray-300 font-['PR']">
                                    {photo.description3}
                                </p>
                            </div>
                    </li>
                ))
            }
        </ul>
    )
}