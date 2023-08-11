'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useInfo from "@/utils/useInfo";
import { Info, Stage } from "@/utils/types";
import Fireworks from "@/components/animations/Fireworks";
import { FadeInToUp } from "@/components/animations/FadeInAnimation";
import StageModal from "@/components/modals/StageModal";
import { Tabs, Tab, Card, CardBody, Divider, CardHeader } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface StageListProps {
  stages: Stage[];
  firstStages: Stage[];
  secondStages: Stage[];
  className?: string;
}

interface SpecialGuestsProps {
  mainStages: Stage[];
  className?: string;
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
      <div className={`fixed ${opacity == 0 ? "-z-20" : "z-20"} right-4 bottom-40`}>
        <div onClick={handleScrollToTop} className="w-12 h-12 bg-teal-600 rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3 rotate-180">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </>
  );
};

const FirstButton: React.FC = () => {

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
      <Link href="#first" className={`fixed ${opacity == 0 ? "-z-20" : "z-20"} right-4 bottom-24`}>
        <div className="w-12 h-12 bg-teal-600 text-white text-lg font-semibold rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3">
          9/9
        </div>
      </Link>
    </>
  );
};

const SecondButton: React.FC = () => {

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
      <Link href="#second" className={`fixed ${opacity == 0 ? "-z-20" : "z-20"} right-4 bottom-10`}>
        <div className="w-12 h-12 bg-teal-600 text-white text-lg font-semibold rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3">
          9/10
        </div>
      </Link>
    </>
  );
};

const StageList: React.FC<StageListProps> = ({ stages, firstStages, secondStages, className }: StageListProps) => {
  return (
    <div className={`bg-white w-full ${className}`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-3">
          <div className="relative inline-block mb-4">
            <h2 className="text-3xl md:text-4xl tracking-tight text-gray-900">STAGE EVENTS</h2>
            <div className="h-1"></div>
            <div className="absolute w-full h-0.5 bg-tenjusaiGreen bottom-0 animate-underline-reveal"></div>
          </div>
        </div>

        <div className="text-md md:text-xl text-gray-600">イベント一覧を掲載しています。各ステージの詳細をタップしてご確認ください！</div>
        <div id="first" className="my-6 text-teal-600 font-semibold text-2xl md:text-3xl">9/9 (土)</div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {firstStages.map((stage) => {
            const start = new Date(stage.start);
            const end = new Date(stage.end);
            // 日本時間に変換
            start.setHours(start.getHours() + 18);
            end.setHours(end.getHours() + 18);

            const startMonth = (start.getUTCMonth() + 1).toString();
            const startDay = start.getUTCDate().toString();
            const startHour = start.getUTCHours().toString();
            const startMinutes = start.getUTCMinutes().toString().padStart(2, '0');
            const endHour = end.getUTCHours().toString().padStart(2, '0');
            const endMinutes = end.getUTCMinutes().toString().padStart(2, '0');
            return (
              <StageModal stage={stage} key={stage.name}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={stage.thumbnail_link}
                      alt={stage.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-xl text-gray-700 m-1 font-semibold">
                        <div>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {stage.name}
                        </div>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500"></p>
                    </div>
                    <div className="bg-teal-600 rounded-full text-center p-1 px-5 text-sm m-1">
                      <p className="text-sm font-medium text-gray-100">{stage.genre}</p>
                    </div>
                  </div>
                  {/* <div className="text-gray-600 mt-2">{stage.description}</div> */}
                  <div className="flex justify-between mt-2">
                    <div className="m-1 text-sm text-gray-600">{stage.category}</div>
                    <div className="text-teal-600 font-semibold">{startMonth}/{startDay} {startHour} : {startMinutes} ~ {endHour} : {endMinutes}</div>
                  </div>
                  {/* <button type="button" onClick={() => setPopHidden(!popHidden)} className="bg-black" >ああああ</button> */}
                </div>
              </StageModal>
          )})}
        </div>
        <div id="second" className="my-6 text-teal-600 font-semibold text-2xl md:text-3xl mt-12">9/10 (日)</div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {secondStages.map((stage) => {
            const start = new Date(stage.start);
            const end = new Date(stage.end);
            // 日本時間に変換
            start.setHours(start.getHours() + 18);
            end.setHours(end.getHours() + 18);

            const startMonth = (start.getUTCMonth() + 1).toString();
            const startDay = start.getUTCDate().toString();
            const startHour = start.getUTCHours().toString();
            const startMinutes = start.getUTCMinutes().toString().padStart(2, '0');
            const endHour = end.getUTCHours().toString().padStart(2, '0');
            const endMinutes = end.getUTCMinutes().toString().padStart(2, '0');
            return (
              <StageModal stage={stage} key={stage.name}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={stage.thumbnail_link}
                      alt={stage.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-xl text-gray-700 m-1 font-semibold">
                        <div>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {stage.name}
                        </div>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500"></p>
                    </div>
                    <div className="bg-teal-600 rounded-full text-center p-1 px-5 text-sm m-1">
                      <p className="text-sm font-medium text-gray-100">{stage.genre}</p>
                    </div>
                  </div>
                  {/* <div className="text-gray-600 mt-2">{stage.description}</div> */}
                  <div className="flex justify-between mt-2">
                    <div className="m-1 text-sm text-gray-600">{stage.category}</div>
                    <div className="text-teal-600 font-semibold">{startMonth}/{startDay} {startHour} : {startMinutes} ~ {endHour} : {endMinutes}</div>
                  </div>
                  {/* <button type="button" onClick={() => setPopHidden(!popHidden)} className="bg-black" >ああああ</button> */}
                </div>
              </StageModal>
          )})}
        </div>
      </div>
    </div>
  )
}



const SpecialGuests: React.FC<SpecialGuestsProps> = ({ mainStages, className }: SpecialGuestsProps) => {
  
  return (
    <div className="">
        <div className="flex flex-col md:flex-row overflow-hidden max-w-7xl w-full">
        {mainStages.map((stage, index) => ( 
        <Card key={index} className="flex-none h-1/3 md:h-auto md:w-1/3 overflow-hidden rounded-none" isBlurred={true} >
          <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
            <h4 className="bg-white text-sm font-bold text-gray-600 bg-opacity-80 mix-blend-screen px-2 py-1 ">スペシャルゲスト</h4>
            <h4 className="bg-white text-xl md:text-xl font-bold text-teal-600 bg-opacity-80 mix-blend-screen px-2 py-1 ">{stage.name}</h4>
          </CardHeader>
          <img src={stage.thumbnail_link} alt={`Banner Image ${index + 1}`} className="w-full min-h-full max-h-[45vh] md:max-h-[30vh] md:min-w-full object-cover" />
        </Card>
      ))}
    </div>
    </div>
  )
}

export default function Stage() {
    const { info } = useInfo();
    const stages: Stage[] = info?.stages || [];
    // stage.firstがtrueのものだけを抽出
    const firstStages: Stage[] = stages.filter(stage => stage.first);
    const secondStages: Stage[] = stages.filter(stage => !stage.first);
    const pathname = usePathname();
    // stage.mainがtrueのものだけを抽出
    const mainStages: Stage[] = stages.filter(stage => stage.main);

    return (
      <div className="">
        <ScrollButton />
        <FirstButton />
        <SecondButton />
        <div className="h-[35vh] absolute z-10 w-full">
          <div className="flex flex-col text-white mx-auto max-w-2xl lg:max-w-7xl px-8 lg:px-16 justify-center h-full gap-4">
            <div className="text-7xl xl:text-8xl font-extralight">STAGE</div>
            <div className="max-w-sm ml-1 italic">We're looking forward to seeing you !! 👋</div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="h-[35vh] -z-10 bg-none">
            <Fireworks />
          </div>
          <div className="bg-white flex flex-col items-center w-full">
            <SpecialGuests mainStages={mainStages} className="w-full" />
          </div>
          <StageList stages={stages} firstStages={firstStages} secondStages={secondStages} className="" />
        </div>
      </div>
    )
}