import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
// import { github } from '../public/github-logo.svg';
// import { linkedin } from '../public/linkedin-logo.svg';

import profile from '../public/profile1.jpg';

import useSWR from 'swr';
import Image from 'next/image';
import Intro from '../components/intro';
import Loading from '../components/loading/Loading';
import Card from '../components/card/Card1';
import Scroll from '../components/scroll/Scroll';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Home() {
  const featured = [
    {
      title: 'Keepup: A Chat App',
      description: `The chat application is built on React on the client side, NestJS and MongoDB on the backend side. It has features like
      authentication, group chat, video and audio call. It uses WebRTC and socket.io to facilitates the communication.`,
      tags: ['Javascript', 'React', 'WebRTC', 'Socket.io', 'NestJS', 'MongoDB', 'TailwindCSS'],
    },
    {
      title: 'Skyvault: A Photos Storage and Sharing App',
      description: `Skyvault lets users upload their photos and share it. Specifically built as a mini mock of cloud storage for use in personal
      projects. The backend is built on NodeJS and NextJS is used for the frontend.`,
      tags: ['Javascript', 'Next.js', 'NestJS', 'MongoDB', 'TailwindCSS'],
    },
    // {
    //   title: '',
    //   description: '',
    //   tags: [],
    // },
  ];
  const projects = [
    {
      title: 'SmartHomeTech',
      description: 'Smart Home Website is a website that I worked on in my placement year.',
      tags: ['Python', 'Django', 'React'],
    },

    {
      title: 'Automatic-Impression-Generation-From-Medical-Imaging-Report',
      description: 'Project was for my desertation',
      tags: ['Python', 'Django', 'React', 'MAchine Learning'],
    },

    {
      title: 'Portfolio',
      description: 'This is the portfolio your are currently seeing',
      tags: ['Javascript', 'NextJs'],
    },
    {
      title: 'Langtang',
      description: 'A Tailwind based React Component Library',
      tags: ['Javascript', 'Tailwind', 'Reactjs', 'Storybook'],
    },
    {
      title: 'Restaurant Management system',
      description: 'This system was built as my final year project for my undergraduate project. Built on Firebase and Angular',
      tags: ['Javascript', 'Angular', 'Bootstrap', 'Firebase'],
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);

  const rootObserver = useRef(null);

  const [containerRef1, isVisible1] = useIntersectionObserver({
    root: rootObserver.current,
    rootMargin: '0px',
    threshold: 0.7,
  });

  // const [containerRef2, isVisible2] = useIntersectionObserver({
  //   root: rootObserver.current,
  //   rootMargin: '900px',
  //   threshold: 0.1,
  // });

  // const [containerRef3, isVisible3] = useIntersectionObserver({
  //   root: rootObserver.current,
  //   rootMargin: '0px',
  //   threshold: 1,
  // });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    clearTimeout();
  }, []);
  return (
    <div>
      <Head>
        <title>Tanchohang A. Limbu</title>
        <meta name="description" content="Tanchohang Angdembe Limbu web developer, software engineer Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-mydarkblue shadow-sm">
          <Loading />
        </div>
      ) : (
        <main className="min-h-screen font-mono md:grid md:grid-cols-2">
          <section className="h-[100vh] w-[50vw] bg-mylightblue fixed hidden md:block">
            <Intro />
          </section>
          <section className="md:w-[50vw]  md:absolute md:right-0">
            <section className="h-[100vh] bg-mylightblue sticky top-0 md:hidden ">
              <Intro />
              <div className="">
                <Scroll />
              </div>
            </section>

            <section className="h-[100vh] sticky top-0 bg-[url('/profile1.jpg')] bg-cover bg-top bg-blend-multiply bg-mypurple ">
              <div className="hidden md:block">
                <Scroll />
              </div>
            </section>

            <section className="h-[100vh] sticky top-0 bg-mypallate1 text-mylight font-sans" ref={rootObserver}>
              <h2 className=" text-2xl text-center p-10">Projects I&apos;ve Built</h2>
              <div className="flex flex-col items-center gap-5 h-[80vh]">
                {/* Card1 */}
                {featured.map((project, i) => {
                  return (
                    <div className={isVisible1 ? 'visible animate-slideRight' : 'visible'} key={i}>
                      <div className="group bg-cover bg-mynavy bg-blend-overlay text-mylight w-[90vw] md:h-[30vh] md:w-[40vw] lg:w-[35vw]  opacity-90 shadow-rb flex flex-col justify-center cursor-pointer rounded-sm overflow-hidden">
                        <div className=" p-5 ">
                          <h6 className=" text-xs font-light text-teal-500">Featured Project</h6>
                          <h5 className=" font-sans font-normal text-mylight group-hover:text-teal-500">{project.title}</h5>
                          <div className="text-sm font-sans text-gray-300 mt-1">
                            <p className="text-justify">{project.description}</p>
                            <p className="mt-2 text-[.55rem] text-gray-500 flex gap-1">
                              {project.tags.map((tag) => (
                                <code key={tag}>{tag}</code>
                              ))}
                            </p>
                            <div className="flex">
                              <div className=" w-5 h-5">
                                <a href="https://github.com/tanchohang/keepup-api">
                                  <Image width={20} height={20} src="/github-logo.svg" alt="https://github.com/tanchohang/keepup-api" />
                                </a>
                              </div>
                              <div className=" w-5 h-5">
                                <a href="https://github.com/tanchohang/keepup-client"></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* End of Card1 */}
              </div>
            </section>

            <section className="h-[100vh] md:w-[100%] sticky top-0 bg-mypallate4 text-mylight font-sans overflow-y-auto">
              <h2 className="text-2xl text-center p-10">Other Projects I&apos;ve worked on</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {projects.map((p, i) => {
                  return (
                    <div
                      className="group bg-mynavy w-[70%] lg:w-[45%] flex flex-col gap-5 px-5 rounded-sm shadow-black shadow-xl hover:-translate-y-3 transition-transform ease-in-out duration-500 delay-75 cursor-pointer p-10"
                      key={i}
                    >
                      <h2 className=" text-base group-hover:text-teal-500 font-semibold">{p.title}</h2>
                      <p className="  text-sm">{p.description}</p>
                      <footer className=" mt-2 text-xs text-gray-500 group-hover:animate-bounce">
                        <code className="flex gap-1">
                          {p.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </code>
                      </footer>
                    </div>
                  );
                })}
              </div>
              {isShowMore && (
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                  {Array.from(Array(2)).map((_, i) => {
                    return (
                      <div
                        className="group bg-mynavy w-[70%] lg:w-[45%] flex flex-col gap-5 px-5 rounded-sm shadow-black shadow-xl hover:-translate-y-3 transition-transform ease-in-out duration-500 delay-75 cursor-pointer p-10"
                        key={i}
                      >
                        <h2 className=" text-base group-hover:text-teal-500 font-semibold">Apple Music Embeddable Web Player Widget</h2>
                        <p className="  text-sm">
                          Building a custom multisite compatible WordPress plugin to build global search with Algolia. Embeddable web player widget
                          for Apple Music that lets users log in and listen to full song playback in the browser leveraging
                        </p>
                        <footer className=" mt-2 text-xs text-gray-500 group-hover:animate-bounce">
                          <code> PHP Laravel Angular</code>
                        </footer>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="my-10 text-center">
                {isShowMore ? (
                  <button className="outline rounded-sm py-3 px-10 hover:bg-mydarkgreen hover:text-mylight" onClick={() => setIsShowMore(false)}>
                    Show less
                  </button>
                ) : (
                  <button className="outline rounded-sm py-3 px-10 hover:bg-mydarkgreen hover:text-mylight" onClick={() => setIsShowMore(true)}>
                    Show more
                  </button>
                )}
              </div>
            </section>
            <section className="h-[70vh] sticky shadow-white shadow-2xl bg-mypallate1 text-mylight">
              <div className="flex gap-2 justify-center items-center h-full">
                <h4 className=" text-lg bg-red-400">Thank You For Visiting!</h4>
                <Image src="/consulting.png" alt="emoji" width={40} height={40} />
              </div>
            </section>
          </section>
        </main>
      )}
    </div>
  );
}
