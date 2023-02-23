import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';

import profile from '../public/profile1.jpg';

import useSWR from 'swr';
import Image from 'next/image';
import Intro from '../components/intro';
import Loading from '../components/loading/Loading';
import Card from '../components/card/Card';
import Scroll from '../components/scroll/Scroll';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Home() {
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
        <meta
          name="description"
          content="Tanchohang Angdembe Limbu web developer, software engineer Portfolio"
        />
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

            <section
              className="h-[100vh] sticky top-0 bg-mypallate1 text-mylight font-sans"
              ref={rootObserver}
            >
              <h2 className=" text-2xl text-center p-10">
                Projects I&apos;ve Built
              </h2>
              <div className="flex flex-col items-center gap-5 h-[80vh]">
                <div
                  className={
                    isVisible1 ? 'visible animate-slideRight' : 'visible'
                  }
                >
                  <Card />
                </div>
                <div
                // ref={containerRef2}
                // className={
                //   isVisible2 ? 'visible animate-slideRight' : 'invisible'
                // }
                >
                  <Card />
                </div>
                {/* <div
                  ref={containerRef3}
                  className={
                    isVisible3 ? 'visible animate-slideRight' : 'invisible'
                  }
                > */}
                <Card />
                {/* </div> */}
              </div>
            </section>

            <section className="h-[100vh] md:w-[100%] sticky top-0 bg-mypallate4 text-mylight font-sans overflow-y-auto">
              <h2 className="text-2xl text-center p-10">
                Other Projects I&apos;ve worked on
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {Array.from(Array(4)).map((_, i) => {
                  return (
                    <div
                      className="group bg-mynavy w-[70%] lg:w-[45%] flex flex-col gap-5 px-5 rounded-sm shadow-black shadow-xl hover:-translate-y-3 transition-transform ease-in-out duration-500 delay-75 cursor-pointer p-10"
                      key={i}
                    >
                      <h2 className=" text-base group-hover:text-teal-500 font-semibold">
                        Apple Music Embeddable Web Player Widget
                      </h2>
                      <p className="  text-sm">
                        Building a custom multisite compatible WordPress plugin
                        to build global search with Algolia. Embeddable web
                        player widget for Apple Music that lets users log in and
                        listen to full song playback in the browser leveraging
                      </p>
                      <footer className=" mt-2 text-xs text-gray-500 group-hover:animate-bounce">
                        <code> PHP Laravel Angular</code>
                      </footer>
                    </div>
                  );
                })}
              </div>
              {isShowMore && (
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                  {Array.from(Array(4)).map((_, i) => {
                    return (
                      <div
                        className="group bg-mynavy w-[70%] lg:w-[45%] flex flex-col gap-5 px-5 rounded-sm shadow-black shadow-xl hover:-translate-y-3 transition-transform ease-in-out duration-500 delay-75 cursor-pointer p-10"
                        key={i}
                      >
                        <h2 className=" text-base group-hover:text-teal-500 font-semibold">
                          Apple Music Embeddable Web Player Widget
                        </h2>
                        <p className="  text-sm">
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia. Embeddable
                          web player widget for Apple Music that lets users log
                          in and listen to full song playback in the browser
                          leveraging
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
                  <button
                    className="outline rounded-sm py-3 px-10 hover:bg-mydarkgreen hover:text-mylight"
                    onClick={() => setIsShowMore(false)}
                  >
                    Show less
                  </button>
                ) : (
                  <button
                    className="outline rounded-sm py-3 px-10 hover:bg-mydarkgreen hover:text-mylight"
                    onClick={() => setIsShowMore(true)}
                  >
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
