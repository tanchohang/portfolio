import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';

import profile from '../public/profile1.jpg';

import useSWR from 'swr';
import Image from 'next/image';
import Intro from '../components/intro';
import Loading from '../components/loading/Loading';
import Card from '../components/card/Card1';
import Scroll from '../components/scroll/Scroll';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Home() {
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

                <div className={isVisible1 ? 'visible animate-slideRight' : 'visible'}>
                  <div className="group bg-[url('/rgr.png')] bg-cover bg-mynavy bg-blend-overlay text-mylight w-[70vw] h-[30%] md:h-[30vh] md:w-[40vw] lg:w-[35vw]  opacity-90 shadow-rb flex flex-col justify-center cursor-pointer rounded-sm overflow-hidden">
                    <div className=" p-5 ">
                      <h6 className=" text-xs font-light text-teal-500">Featured Project</h6>
                      <h5 className=" font-sans font-medium text-mylight group-hover:text-teal-500">Keepup: A Chat App</h5>
                      <div className="text-sm font-sans text-gray-300 mt-1">
                        <p className="text-justify">
                          The chat application is built on React on the client side, NestJS and MongoDB on the backend side. It has features like
                          authentication, group chat, video and audio call. It uses WebRTC and socket.io to facilitates the communication. It is a pet
                          project that I use with friends and currently hosted on{' '}
                          <a href="https://keepup.tanchohang.dev" style={{ color: 'aqua', textDecoration: 'underline' }}>
                            https://keepup.tanchohang.dev
                          </a>
                        </p>
                        <p className="mt-2 text-[.55rem] text-gray-500">
                          <code>Javascript TailwindCSS React WebRTC Socket.io NestJS MongoDB</code>
                        </p>
                        <div className="flex">
                          <div className=" w-5 h-5">
                            <a href="https://github.com/tanchohang/keepup-api">
                              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                  <circle cx="24" cy="24" r="20" fill="#181717"></circle>
                                  <path
                                    d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
                                    fill="white"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                          </div>
                          <div className=" w-5 h-5">
                            <a href="https://github.com/tanchohang/keepup-client">
                              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                  <circle cx="24" cy="24" r="20" fill="#181717"></circle>
                                  <path
                                    d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
                                    fill="white"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End of Card1 */}

                {/* Card2 */}

                <div className={isVisible1 ? 'visible animate-slideRight' : 'visible'}>
                  <div className="group bg-[url('/rgr.png')] bg-cover bg-mynavy bg-blend-overlay text-mylight w-[70vw] h-[30%] md:h-[30vh] md:w-[40vw] lg:w-[35vw]  opacity-90 shadow-rb flex flex-col justify-center cursor-pointer rounded-sm overflow-hidden">
                    <div className=" p-5 ">
                      <h6 className=" text-xs font-light text-teal-500">Featured Project</h6>
                      <h5 className=" font-sans font-medium text-mylight group-hover:text-teal-500">Skyvault: A Photos Storage and Sharing App</h5>
                      <div className="text-sm font-sans text-gray-300 mt-1">
                        <p className="text-justify">
                          Skyvault lets users upload their photos and share it. Specifically built as a mini mock of cloud storage for use in personal
                          projects. The backend is built on NodeJS and NextJS is used for the frontend.
                          <a href="https://skyvault.tanchohang.dev" style={{ color: 'aqua', textDecoration: 'underline' }}>
                            https://skyvault.tanchohang.dev
                          </a>
                        </p>
                        <p className="mt-2 text-[.55rem] text-gray-500">
                          <code>Javascript React WebRTC Socket.io NestJS MongoDB</code>
                        </p>
                        <div className="flex">
                          <div className=" w-5 h-5">
                            <a href="https://github.com/tanchohang/keepup-api">
                              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                  <circle cx="24" cy="24" r="20" fill="#181717"></circle>
                                  <path
                                    d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
                                    fill="white"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                          </div>
                          <div className=" w-5 h-5">
                            <a href="https://github.com/tanchohang/keepup-client">
                              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                  <circle cx="24" cy="24" r="20" fill="#181717"></circle>
                                  <path
                                    d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
                                    fill="white"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End of Card2 */}
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
            <section className="h-[70vh] sticky shadow-white shadow-2xl bg-mypallate1 text-mylight "></section>
          </section>
        </main>
      )}
    </div>
  );
}
