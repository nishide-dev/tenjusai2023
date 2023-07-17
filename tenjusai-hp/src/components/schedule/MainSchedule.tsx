import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
type Event = {
    id: number;
    name: string;
    description: string;
    start: string;
    end: string;
    place: string;
    image: string;
    url: string;
    day: number;
    category: string;
    createdAt: string;
    updatedAt: string;
};

const _events: Event[] = [
    {
        id: 1,
        name: "天樹祭",
        description: "豊田工業大学 第40回大学祭",
        start: "2023-09-10T10:00:00.000Z",
        end: "2023-09-10T17:00:00.000Z",
        place: "豊田工業大学",
        image: "/next.svg",
        url: "https://tenjusai2023.vercel.app",
        day: 1,
        category: "main",
        createdAt: "2021-09-10T10:00:00.000Z",
        updatedAt: "2021-09-10T10:00:00.000Z",
    },
    {
        id: 2,
        name: "天樹祭",
        description: "豊田工業大学 第40回大学祭",
        start: "2023-09-10T10:00:00.000Z",
        end: "2023-09-10T17:00:00.000Z",
        place: "豊田工業大学",
        image: "/next.svg",
        url: "https://tenjusai2023.vercel.app",
        day: 1,
        category: "main",
        createdAt: "2021-09-10T10:00:00.000Z",
        updatedAt: "2021-09-10T10:00:00.000Z",
    },
    {
        id: 3,
        name: "天樹祭",
        description: "豊田工業大学 第40回大学祭",
        start: "2023-09-10T10:00:00.000Z",
        end: "2023-09-10T17:00:00.000Z",
        place: "豊田工業大学",
        image: "/next.svg",
        url: "https://tenjusai2023.vercel.app",
        day: 1,
        category: "main",
        createdAt: "2021-09-10T10:00:00.000Z",
        updatedAt: "2021-09-10T10:00:00.000Z",
    },
    {
        id: 4,
        name: "天樹祭",
        description: "豊田工業大学 第40回大学祭",
        start: "2023-09-10T10:00:00.000Z",
        end: "2023-09-10T17:00:00.000Z",
        place: "豊田工業大学",
        image: "/next.svg",
        url: "https://tenjusai2023.vercel.app",
        day: 1,
        category: "main",
        createdAt: "2021-09-10T10:00:00.000Z",
        updatedAt: "2021-09-10T10:00:00.000Z",
    },
    {
        id: 5,
        name: "天樹祭",
        description: "豊田工業大学 第40回大学祭",
        start: "2023-09-10T10:00:00.000Z",
        end: "2023-09-10T17:00:00.000Z",
        place: "豊田工業大学",
        image: "/next.svg",
        url: "https://tenjusai2023.vercel.app",
        day: 1,
        category: "main",
        createdAt: "2021-09-10T10:00:00.000Z",
        updatedAt: "2021-09-10T10:00:00.000Z",
    },
    {
        id: 6,
        name: "天樹祭",
        description: "豊田工業大学 第40回大学祭",
        start: "2023-09-10T10:00:00.000Z",
        end: "2023-09-10T17:00:00.000Z",
        place: "豊田工業大学",
        image: "/next.svg",
        url: "https://tenjusai2023.vercel.app",
        day: 1,
        category: "main",
        createdAt: "2021-09-10T10:00:00.000Z",
        updatedAt: "2021-09-10T10:00:00.000Z",
    }
];

const MainSchedule: React.FC = () => {
    const [day, setDay] = useState(1);
    const [events, setEvents] = useState<Event[]>(_events);


    return (
        <>
            <div className="relative isolate overflow-hidden bg-tenjusaiHero px-6 py-16 sm:py-24 lg:overflow-visible lg:px-0">
                <div className="mx-auto max-w-2xl lg:max-w-none flex flex-col items-center">
                    <div className="lg:w-full lg:max-w-7xl lg:px-8">
                        <p className="text-base font-semibold leading-7 text-tenjusaiGreen">Schedule</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">イベントスケジュール</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600 mb-8">
                            当日のスケジュールを掲載しています。出演時間等変更になる場合がありますので、ご了承ください。詳しくはこちらの<Link href="/stage"><span className="text-tenjusaiOrange font-semibold">ステージ</span></Link>、<Link href="/event"><span className="text-tenjusaiOrange font-semibold">イベント</span></Link>、<Link href="/yatai"><span className="text-tenjusaiOrange font-semibold">屋台</span></Link>のページをご覧ください。
                        </p>
                        <div className="flex mb-6">
                            <div className="flex flex-row">
                                <button type="button" onClick={() => setDay(1)} className={day === 1 ? "w-[10rem] text-white bg-tenjusaiGreen hover:bg-teal-700 focus:ring-4 focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" : "w-[10rem] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-200"}>9/10 Sat</button>
                                <button type="button" onClick={() => setDay(2)} className={day === 2 ? "w-[10rem] text-white bg-tenjusaiGreen hover:bg-teal-700 focus:ring-4 focus:ring-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" : "w-[10rem] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-200"}>9/11 Sun</button>
                            </div>
                        </div>
                        <div className="grid border border-gray-300 rounded-lg shadow-sm sm:grid-cols-2 lg:grid-cols-3">
                            {events.map((event, index) => (
                                <figure key={index} className={`${index == events.length -1 || index == events.length -2 ? "": "border-b"} flex flex-col p-8 border-gray-300 md:rounded-t-none md:border-r`}>
                                    <blockquote className="max-w-2xl mb-4 text-gray-500 lg:mb-8">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{event.start}</span>
                                        <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                                    </blockquote>
                                    <figcaption className="flex space-x-3">
                                        <Image className="rounded-full w-9 h-9" src={event.image} alt="profile picture" width={1200} height={1200} />
                                        <div className="space-y-0.5 font-medium text-left">
                                            <div>{event.name}</div>
                                            <div className="text-sm text-gray-500">{event.place}</div>
                                        </div>
                                    </figcaption>   
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSchedule;
