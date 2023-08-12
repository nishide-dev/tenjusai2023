'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useInfo from "@/utils/useInfo";
import { Info, Stage, Lab } from "@/utils/types";
import Fireworks from "@/components/animations/Fireworks";
import { FadeInToUp } from "@/components/animations/FadeInAnimation";
import LabModal from "@/components/modals/LabModal";
import { Tabs, Tab, Card, CardBody, Divider, CardHeader } from "@nextui-org/react";
import { usePathname } from "next/navigation";


interface LabListProps {
  labs: Lab[];
  className?: string;
}

const DayIcon: React.FC<{ day: string }> = ({ day }) => {
  return (
    <div className="flex items-center justify-center bg-blue-800 rounded-full px-3 py-1">
      <div className="text-white text-sm font-bold">{day}</div>
    </div>
  )
}

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
        <div onClick={handleScrollToTop} className="w-12 h-12 bg-blue-800 rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3 rotate-180">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </>
  );
};

const LabList: React.FC<LabListProps> = ({ labs, className }: LabListProps) => {
  return (
    <div className={`bg-gray-900 w-full ${className}`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-3">
          <div className="relative flex mb-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-100 bg-blue-800 p-2 px-6 rounded-full backdrop-blur-lg drop-shadow-xl shadow-2xl">LAB EVENTS</h2>
          </div>
        </div>

        <div className="text-md md:text-xl text-gray-200">研究室紹介イベントを掲載しています。詳細をタップしてご確認ください！</div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {labs.map((lab) => {
            return (
              <LabModal lab={lab} key={lab.name}>
                <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 sm:h-80 group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800 lg:aspect-none group-hover:opacity-75 sm:h-44">
                      <Image
                        src={lab.thumbnail_link}
                        alt={lab.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-none"
                        width={600}
                        height={600}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between mb-3">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-white">{lab.name}</h5>
                        <div className="flex gap-1">
                        {
                          lab.first ? (
                            <div className="">
                              <DayIcon day="9/9" />
                            </div>
                          ) : (
                            <></>
                          )
                        }
                        {
                          lab.second ? (
                            <div className="">
                              <DayIcon day="9/10" />
                            </div>
                          ) : (
                            <></>
                          )
                        }
                        </div>
                      </div>
                      <p className="mb-3 font-normal text-sm text-gray-300">{lab.content}</p>
                    </div>
                </div>
              </LabModal>
          )})}
        </div>
      </div>
    </div>
  )
}

export default function Stage() {
    const { info } = useInfo();
    const labs: Lab[] = info?.labs || [];

    return (
      <div className="">
        <ScrollButton />
        <div className="h-[35vh] absolute z-10 w-full">
          <div className="flex flex-col text-gray-900 mx-auto max-w-2xl lg:max-w-7xl px-8 lg:px-16 justify-center h-full gap-4">
            <div className="text-7xl xl:text-8xl font-bold">LAB</div>
            <div className="max-w-sm ml-1 italic">研究室紹介で科学の面白さを体験しよう！!🔬💕</div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="h-[35vh] -z-10 bg-white">
          </div>
          <LabList labs={labs} className="" />
        </div>
      </div>
    )
}