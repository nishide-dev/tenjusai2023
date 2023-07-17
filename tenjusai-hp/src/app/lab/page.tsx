'use client';
import { useState } from "react";
import Image from "next/image";
import TypingAnimation from "@/components/animations/TypingAnimation";

export default function Lab() {
    return (
      <>
        <div className="absolute h-screen md:h-auto w-screen flex flex-col items-center justify-center pt-16 pb-16 md:pb-0 md:justify-center text-white font-extrabold text-5xl lg:text-7xl overflow-hidden text-center text-stroke-blue">
          <div className="w-[40rem] bg-tenjusaiBlue -rotate-45 md:rotate-0 md:w-[40rem]">
            <div className="m-2 border-blue-800 border-2">
              <div className="m-2 p-2 border-blue-800 border-2">
                <div className="flex flex-col">
                  <TypingAnimation
                    lines={[
                      'Lablatories.',
                    ]}
                    speed={100} 
                  />
                </div>
                <div className="text-lg lg:text-3xl text-gray-300">研究室紹介</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row min-h-screen bg-tenjusaiBlue">
          <div className="flex flex-col items-center justify-center bg-sub-pattern bg-cover w-full md:w-full">
          </div>
          <div className="w-0 md:w-full">
          </div>
        </div>
      </>

    )
}