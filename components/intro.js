import Image from 'next/image';
import computer from '../public/computer.svg';
import Logo from './logo';

export default function Intro() {
  return (
    <>
      <nav className="py-2 ">
        <div className=" h-[80px] ">
          <Logo />
        </div>
      </nav>
      {/* <div className="h-[90vh] w-[40vw]"> */}
      <div className="h-[80vh] w-[90vw] md:w-[45vw] mx-auto flex flex-col justify-center  gap-5 text-justify break-all">
        <h1 className=" text-2xl md:text-4xl">Hi, I am software engineer working in web technologies.</h1>
        <p>I am really good at what i do and enjoy doing it.</p>

        <div className="flex text-xs md:text-base">
          <a className=" outline rounded-sm py-3 px-10 mr-5 hover:bg-mydarkgreen hover:text-mylight" href="mailto:tanchohang@gmail.com">
            Contact me!
          </a>
          <a className=" outline rounded-sm py-3 px-10 hover:bg-mydarkgreen hover:text-mylight" href="/tanchohang-CV.pdf" download>
            Resume
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
