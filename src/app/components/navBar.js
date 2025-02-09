export default function NavBar({isMenu}) {
    return (
        <ul className={isMenu ? 
            'hidden' : 
            'block absolute right-0 top-full bg-slate-50/80 rounded-xl p-2 *:text-center *:py-1 md:hidden sm:hidden'
        }>
            <li className="border-b-2 border-b-black">
                <a href='/'>HOME</a>
            </li>
            <li className="border-b-2 border-b-black">
                <a href='https://en-media.kr/company'>ABOUT</a>
            </li>
            <li className="">
                <a href='https://en-media.kr/contact'>CONTACT</a>
            </li>
        </ul>
    )
}