import Image from 'next/image';
import computer from '../public/computer.svg';

export default function Intro() {
  return (
    <>
      <nav className="">
        <Image
          src={computer}
          height="100"
          width="100"
          alt="logo"
          className=" z-100 animate-wiggle"
        />
      </nav>
      <div className="h-[90vh] flex flex-wrap items-center px-20 text-justify break-all">
        <div className="mx-auto">
          <h1>Hi, I am software engineer working in web technologies.</h1>
          <p>I am really good at what i do and enjoy doing it.</p>

          <button className=" outline rounded-sm py-3 px-10">
            Contact me!
          </button>
        </div>
      </div>
    </>
  );
}
