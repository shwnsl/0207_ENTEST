import Image from "next/image";
import Slide from "./components/slide";
import Cards from "./components/cards";

export default function Home() {
  return (
    <main className="pt-[53px] pb-80">
      <Slide />
      <div className='flex justify-center items-center mt-40 w-full'>
        <Cards />
      </div>
    </main>
  );
}
