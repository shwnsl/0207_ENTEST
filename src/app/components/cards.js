import Image from 'next/image'
import photoData from '../public/data.json'

export default function Cards() {
    return (
        <ul className='w-[80%] grid gap-3 auto-rows-fr
               grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                photoData.map((photo) => (
                    <li 
                        key={photo.id}
                        className='border-gray-100 shadow-md rounded-md overflow-hidden hover:scale-105 transition-all'
                    >
                            <Image
                                alt='photo'
                                src={photo.url}
                                className='w-full aspect-[4/3] object-cover'
                                width={100}
                                height={100}
                            />
                            <div className='p-5'>
                                <p className="text-2xl font-bold">
                                    {photo.title?.split("<br/>").map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                                <p className="text-xs mt-3">
                                    {photo.description2?.split("<br/>").map((line, idx) => (
                                        <span key={idx}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                                <p className="text-[8px] mt-12 text-gray-300">
                                    {photo.description3}
                                </p>
                            </div>
                    </li>
                ))
            }
        </ul>
    )
}