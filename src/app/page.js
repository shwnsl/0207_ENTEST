import Image from "next/image";
import Slide from "./components/slide";
import Cards from "./components/cards";
import Banner from "./components/banner";

export default function Home() {
  return (
    <main className="pt-[53px] pb-60">
      <Slide />
      <section className='flex justify-center items-center mt-40 w-full'>
        <Cards />
      </section>
      <section className='flex justify-center items-center mt-40 w-full'>
        <Banner />
      </section>
    </main>
  );
}
