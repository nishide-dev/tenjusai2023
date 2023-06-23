'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Countdown from '@/components/countdown/CountDown'
import { useState, useEffect, useRef, useCallback } from 'react';
import React from 'react';
import FadeInText from '@/components/animations/fadein';

const inter = Inter({ subsets: ['latin'] })

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div className="flex items-center space-x-2 animate-marquee">
        <div className="pr-2">
          {text}
        </div>
        <div>
          {text}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const targetDate = new Date('Sep 9, 2023 09:00:00');
  const [showBigTitle, setShowBigTitle] = useState(false);

  useEffect(() => {
    setShowBigTitle(true);
  }, [])

  return (
    <>
      <div className="h-screen bg-tenjusaiHero scrollbar-hide">
        <div className="flex flex-col items-center justify-center h-[30rem] md:h-[50rem] lg:h-screen bg-hero-pattern bg-cover xl:bg-fixed bg-scroll animate-fade-in">
          {/* <Countdown targetDate={targetDate} />
          <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <Marquee text="Hello, World! This text will scroll from left to right." />
          </div> */}
          <div className="absolute right-32 overflow-hidden h-0 lg:h-auto">
            <div className="flex flex-col items-center animate-fade-in-right">
              {/* <div className="bg-black w-80 h-60 text-white">天樹祭のタイトル画像</div> */}
              <div className=""><h1 className="text-white text-9xl font-extrabold"><span className="text-tenjusaiGreen">T</span>ENJUSAI</h1></div>
              <p className="font-semibold text-gray-500 text-xl">40th 豊田工業大学 大学祭</p>
              <div className="m-2 font-bold text-tenjusaiGreen text-4xl">9/10 Sat 9/11 Sun</div>
              <button type="button" className="mt-7 text-white bg-tenjusaiGreen hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-2xl text-md px-5 py-3.5 text-center inline-flex items-center">
                  パンフレットはこちら
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center animate-fade-in-up lg:h-0 lg:hidden">
          {/* <div className="bg-black w-60 h-40 text-white md:h-0">天樹祭のタイトル画像</div> */}
          <div className=""><h1 className="text-white text-6xl font-extrabold"><span className="text-tenjusaiGreen">T</span>ENJUSAI</h1></div>
          <p className="font-semibold text-gray-500">40th 豊田工業大学 大学祭</p>
          <div className="m-2 font-bold text-tenjusaiGreen text-3xl">9/10 Sat 9/11 Sun</div>
          <button type="button" className="mt-7 text-white bg-tenjusaiGreen hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-2xl text-md px-5 py-3 text-center inline-flex items-center">
              パンフレットはこちら
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <div className="h-screen bg-tenjusaiHero"></div>
    </>
  )
}
