'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useInfo from "@/utils/useInfo";
import { Info, Event, ImageLink } from "@/utils/types";
import { FadeInToUp } from "@/components/animations/FadeInAnimation";
import LabModal from "@/components/modals/LabModal";
import { Tabs, Tab, Card, CardBody, Divider, CardHeader } from "@nextui-org/react";
import Bubbles from "@/components/animations/Bubbles";

interface EventListProps {
    events: Event[];
    images: ImageLink[];
    className?: string;
}

const DayIcon: React.FC<{ day: string }> = ({ day }) => {
  return (
    <div className="flex items-center justify-cen50 bg-orange-500 rounded-full px-3 py-1">
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
          <div onClick={handleScrollToTop} className="w-12 h-12 bg-orange-500 rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3 rotate-180">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </>
    );
  };

const EventList: React.FC<EventListProps> = ({ events, images, className }: EventListProps) => {
  return (
    <div className={`bg-white w-full ${className}`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-3">
          <div className="relative flex mb-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-50 bg-orange-500 p-2 px-6 rounded-md backdrop-blur-lg drop-shadow-md shadow-md mx-3">EVENTS</h2>
          </div>
        </div>

        <div className="">
          {events.map((event, index) => {
            if (index % 2 == 0) {
                return (
                    <FadeInToUp key={event.name}>
                    <section className="bg-white rounded-md mb-3 px-1 md:px-3 border md:border-none" >
                        <div className="gap-8 items-center py-8 px-2 md:px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                            <div className=" overflow-hidden max-h-[32rem] rounded-md shadow-xl">
                                <Image className="w-full" src={event.thumbnail_link} alt={event.name} width={600} height={600} />
                            </div>
                            <div className="mt-6 md:mt-0 px-2">
                                <h2 className="mb-4 text-2xl sm:text-3xl tracking-tight font-extrabold text-gray-700">{event.name}</h2>
                                {
                                    event.needs_reservation ? (
                                        <>
                                            <div className="flex items-center mb-4">
                                                <div className="flex items-center justify-center text-white text-md font-bold bg-orange-500 rounded-md px-3 py-1">
                                                    <div>要整理券</div>
                                                </div>
                                            </div>
                                            <div className="text-orange-500 font-semibold text-lg mb-3">
                                                {event.reservation_notes}
                                            </div>
                                        </>

                                    ) : null
                                }
                                <p className="mb-6 font-light text-gray-500 md:text-lg">{event.description}</p>
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center justify-center text-white text-md font-bold bg-orange-500 rounded-md px-3 py-1">
                                        <div>開催日時</div>
                                    </div>
                                </div>
                                {
                                    event.first ? (
                                        <div className="flex gap-4">
                                            <div className="text-orange-500 font-semibold text-lg">9/9 (土)</div>
                                            <div className="text-orange-500 font-semibold text-lg">
                                                { // event.first_dateは空白で改行する
                                                    event.first_date.split(" ").map((date, index) => {
                                                        return (
                                                            <div key={date}>{date}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    ) : null
                                }
                                {
                                    event.second ? (
                                        <div className="flex gap-4">
                                            <div className="text-orange-500 font-semibold text-lg">9/10 (日)</div>
                                            <div className="text-orange-500 font-semibold text-lg">
                                                {event.second_date}
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="flex items-center mb-4 mt-4">
                                    <div className="flex items-center justify-center text-white text-md font-bold bg-orange-500 rounded-md px-3 py-1">
                                        <div>場所</div>
                                    </div>
                                </div>
                                <Link href="/#headquarters">
                                    <div className="flex">
                                        <div className="text-orange-500 font-semibold text-lg underline underline-offset-auto">
                                            {event.place}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                    </FadeInToUp>
                )
            } else {
                return (
                    <FadeInToUp key={event.name}>
                    <section className="bg-white rounded-md mb-3 px-1 md:px-3 border md:border-none" key={event.name} >
                        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                            <div className="my-4 md:mt-0 px-2">
                                <h2 className="mb-4 text-2xl sm:text-3xl tracking-tight font-extrabold text-gray-700">{event.name}</h2>
                                <p className="mb-6 font-light text-gray-500 md:text-lg">{event.description}</p>
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center justify-center text-white text-md font-bold bg-orange-500 rounded-md px-3 py-1">
                                        <div>開催日時</div>
                                    </div>
                                </div>
                                {
                                    event.first ? (
                                        <div className="flex gap-4">
                                            <div className="text-orange-500 font-semibold text-lg">9/9 (土)</div>
                                            <div className="text-orange-500 font-semibold text-lg">
                                                {event.first_date}
                                            </div>
                                        </div>
                                    ) : null
                                }
                                {
                                    event.second ? (
                                        <div className="flex gap-4">
                                            <div className="text-orange-500 font-semibold text-lg">9/10 (日)</div>
                                            <div className="text-orange-500 font-semibold text-lg">
                                                {event.second_date}
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className="flex items-center mb-4 mt-4">
                                    <div className="flex items-center justify-center text-white text-md font-bold bg-orange-500 rounded-md px-3 py-1">
                                        <div>場所</div>
                                    </div>
                                </div>
                                <Link href="/#headquarters">
                                    <div className="flex">
                                        <div className="text-orange-500 font-semibold text-lg underline underline-offset-auto">
                                            {event.place}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className=" overflow-hidden max-h-[32rem] rounded-md shadow-xl">
                                <Image className="w-full" src={event.thumbnail_link} alt={event.name} width={600} height={600} />
                            </div>
                        </div>
                    </section>
                    {
                        index === 1 ? (
                            <div className="">
                                {
                                    images.map((image, index) => {
                                        return (
                                            <FadeInToUp key={image.name} className="my-12 border rounded-md max-w-3xl mx-auto">
                                                <Image className="w-full" src={image.thumbnail_link} alt={image.name} width={600} height={600} />
                                            </FadeInToUp>
                                        )
                                    })
                                }
                            </div>
                        ) : null
                    }
                    </FadeInToUp>
                )
            }})
        }
        </div>
      </div>
    </div>
  )
}

export default function Event() {
    const { info } = useInfo();
    const events: Event[] = info?.events || [];
    // event.idでソート
    events.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0
    });
    const images: ImageLink[] = info?.image_links || [];

    return (
      <div className="">
        <ScrollButton />
        <div className="h-[35vh] absolute z-10 w-full">
          <div className="flex flex-col text-gray-50 mx-auto max-w-2xl lg:max-w-7xl px-8 lg:px-16 justify-center h-full gap-4">
            <div className="text-7xl xl:text-8xl font-bold">Event</div>
            <div className="max-w-sm ml-1 italic">楽しい催しが盛りだくさん！！🥰</div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="h-[35vh] -z-10">
            <Bubbles />
          </div>
          <EventList events={events} images={images} className="min-h-screen" />
        </div>
      </div>
    )
}