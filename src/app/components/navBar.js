export default function NavBar({isMenu}) {
    return (
        <ul className={isMenu ? 
            'hidden' : 
            'block absolute right-0 top-[53px] bg-slate-50/80 rounded-xl p-2 md:hidden sm:hidden'
        }>
            <li className="py-1 text-center border-b-2 border-b-black">
                <a href='/'>HOME</a>
            </li>
            <li className="py-1 text-center border-b-2 border-b-black">
                <a href='https://en-media.kr/company'>ABOUT</a>
            </li>
            <li className="py-1 text-center">
                <a href='https://en-media.kr/contact'>CONTACT</a>
            </li>
        </ul>
    )
}