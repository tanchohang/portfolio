import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';

import profile from '../public/profile1.jpg';

import useSWR from 'swr';
import Image from 'next/image';
import Intro from '../components/intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tanchohang A. Limbu</title>
        <meta
          name="description"
          content="Tanchohang Angdembe Limbu web developer, software engineer Portfolio"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className="min-h-screen font-mono md:grid md:grid-cols-2
      "
      >
        <section className="h-[100vh] w-[50vw] bg-mylightblue fixed hidden md:block">
          <Intro />
        </section>

        <section className="h-[100vh] md:w-[50vw] overflow-y-auto md:absolute md:right-0">
          <section className="h-[100vh] bg-mylightblue sticky top-0 md:hidden ">
            <Intro />
          </section>

          <section className="h-[100vh] sticky top-0 ">
            <Image
              src={profile}
              alt="profile"
              fill
              className=" object-cover object-top hue-rotate-180"
            />
          </section>
          <section className="h-[100vh] sticky top-0 bg-myblack text-mylight ">
            <h1>My Skills</h1>
            <Image
              src={profile}
              alt="profile"
              width={400}
              height={700}
              className=" object-contain  hue-rotate-180"
            />
          </section>
          <section className="h-[100vh] sticky top-0 bg-myblack text-mylight ">
            <h1>My Portfolio</h1>
          </section>
        </section>
      </main>
    </div>
  );
}
