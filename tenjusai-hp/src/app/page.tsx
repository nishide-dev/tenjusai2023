'use client';
import Image from 'next/image'
import Countdown from '@/components/countdown/CountDown'
import { useState, useEffect, useRef, useCallback } from 'react';
import React from 'react';
import AboutUs from '@/components/about/AboutUs';
import MainSchedule from '@/components/schedule/MainSchedule';
import Access from '@/components/map/Access';
import useInfo from '@/utils/useInfo';

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

const ScrollButton: React.FC = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          // スクロール位置が0なら opacity 0, それ以外は 100
          setOpacity(window.scrollY > 0 ? 100 : 0);
      };

      // スクロールイベントリスナーを追加
      window.addEventListener('scroll', handleScroll);

      // クリーンアップ関数でイベントリスナーを削除
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed ${opacity == 0 ? "-z-20" : "z-20"} right-4 bottom-10`}>
        <div onClick={handleScrollToTop} className="w-12 h-12 bg-tenjusaiOrange rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3 rotate-180">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        {/* <div onClick={handleScrollToBottom} className="w-12 h-12 bg-tenjusaiOrange rounded-full cursor-pointer animate-bounce flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> */}
      </div>
    </>
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
      <ScrollButton />
      <div className="h-screen portrait:sm:h-[40vh] bg-tenjusaiHero scrollbar-hide">
        <div className="flex flex-col items-center justify-center bg-hero-pattern bg-cover landscape:bg-fixed landscape:h-screen portrait:h-[50vh] portrait:sm:h-full bg-scroll animate-fade-in">
          <div className="absolute right-16 md:right-20 xl:right-40 2xl:right-48 overflow-hidden h-0 landscape:h-auto portrait:sm:h-auto portrait:right-20 mt-20">
            <div className="flex flex-col items-center animate-fade-in-right">
              <Image src="/title.PNG" className="w-[20rem] lg:w-[30rem] xl:w-[40rem]" alt="logo" width={450} height={450} />
              {/* <div className=""><h1 className="text-tenjusaiOrange text-9xl font-extrabold">TENJUSAI</h1></div> */}
              <p className="font-semibold text-gray-500 text-lg md:text-xl lg:text-2xl mt-2">40th 豊田工業大学 大学祭</p>
              <div className="m-2 mt-4 font-bold text-tenjusaiOrange text-2xl md:text-3xl lg:text-4xl">9/10 Sat 9/11 Sun</div>
              {/* <button type="button" className="mt-7 text-white bg-tenjusaiGreen hover:bg-teal-600 focus:ring-2 focus:outline-none focus:ring-teal-600 font-semibold rounded-2xl text-md px-5 py-3.5 text-center inline-flex items-center">
                  パンフレットはこちら
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center animate-fade-in-up landscape:h-0 landscape:hidden portrait:sm:h-0 portrait:sm:hidden">
          <Image src="/title.PNG" alt="logo" width={300} height={300} />
          {/* <div className=""><h1 className="text-tenjusaiOrange text-6xl font-extrabold sm:text-7xl md:text-8xl">TENJUSAI</h1></div> */}
          <p className="font-semibold text-gray-500">40th 豊田工業大学 大学祭</p>
          <div className="m-2 mt-4 font-bold text-tenjusaiOrange text-3xl">9/10 Sat 9/11 Sun</div>
          {/* <button type="button" className="mt-7 text-white bg-tenjusaiGreen hover:bg-teal-600 focus:ring-2 focus:outline-none focus:ring-teal-600 font-semibold rounded-2xl text-md px-5 py-3 text-center inline-flex items-center">
              パンフレットはこちら
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button> */}
        </div>
      </div>
      <AboutUs />
      {/* <MainSchedule /> */}
      <Access />
    </>
  )
}
