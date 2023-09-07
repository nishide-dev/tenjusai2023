'use client';
import { useState } from "react";
import { FadeIn, FadeInToUp } from "../animations/FadeInAnimation";
import Image from "next/image";

const Headquarters: React.FC = () => {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-tenjusaiHero px-4 py-6 sm:py-12 lg:overflow-visible lg:px-0">
                <FadeIn className="mx-auto max-w-2xl lg:max-w-none flex flex-col lg:items-center">
                    <div className="lg:w-full lg:max-w-7xl lg:px-8">
                        <p className="text-base font-semibold leading-7 text-tenjusaiGreen">Campus Map</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">校内マップ</h1>
                        <div id="headquarters" className="mt-12">
                            {/* <div className="font-semibold text-3xl text-gray-700">本部</div> */}
                            <div className="my-6 hidden sm:block">
                                <Image src="/campus/campus_pc2.png" className="rounded-md" alt="本部" width={1200} height={1200} />
                            </div>
                            <div className="my-6 sm:hidden">
                                <Image src="/campus/campus_mobile3.png" className="rounded-md" alt="本部" width={1200} height={1200} />
                            </div>
                            {/* <div className="text-tenjusaiGreen font-bold text-2xl">準備中...</div> */}
                        </div>
                    </div>
                </FadeIn>
            </div>

        </>
    );
};

export default Headquarters;