'use client';
import { NextPage } from "next";
import Image from "next/image";

const ComingSoon: NextPage = () => {
    return (
        <div className="">
            <div className="h-screen bg-tenjusaiHero">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="text-white text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl animate-fade-in-up">
                    <span className="text-tenjusaiGreen">C</span>OMING <span className="text-tenjusaiGreen">S</span>OON
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-tenjusaiHero to-white h-40"></div>
        </div>
    );
}

export default ComingSoon;