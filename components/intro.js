import Image from 'next/image';
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
        <h1 className=" text-2xl md:text-4xl">
          Hi, I am <span className=" font-semibold">Tanchohang Angdembe Limbu</span>, a software engineer working in web technologies.
        </h1>
        <p>I am really good at what i do and enjoy doing it.</p>

        <div className="flex text-xs md:text-base">
          <a className=" outline rounded-sm py-3 px-10 mr-5 hover:bg-mydarkgreen hover:text-mylight" href="mailto:tanchohang@gmail.com">
            Contact me!
          </a>
          <a className=" outline rounded-sm py-3 px-10 hover:bg-mydarkgreen hover:text-mylight" href="/resume.pdf" download>
            Resume
          </a>
        </div>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/tanchohang/">
            <Image width={40} height={40} src="/linkedin-logo.svg" alt="https://www.linkedin.com/in/tanchohang/" />
          </a>
          <a href="https://github.com/tanchohang">
            <Image width={40} height={40} src="/github-logo.svg" alt="https://github.com/tanchohang" />
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
