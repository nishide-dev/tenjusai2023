'use client';
import { useState } from "react";
import Map from "./Map";
import { FadeIn } from "../animations/FadeInAnimation";

const Access: React.FC = () => {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-tenjusaiHero px-4 py-6 sm:py-12 lg:overflow-visible lg:px-0">
                <div className="mx-auto max-w-2xl lg:max-w-none flex flex-col lg:items-center">
                    <div className="lg:w-full lg:max-w-7xl lg:px-8">
                        <p className="text-base font-semibold leading-7 text-tenjusaiGreen">Access</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">アクセス</h1>
                        {/* <p className="mt-6 text-xl leading-8 text-gray-600">
                            天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。
                        </p> */}
                    </div>
                </div>
            </div>
            <div className="w-full bg-tenjusaiGreen">
                <FadeIn className="flex flex-col mx-auto max-w-2xl lg:max-w-none lg:items-center py-5">
                    <div className="lg:w-full lg:max-w-7xl flex flex-col md:flex-row items-center">
                        <div className="p-5 md:p-8 text-lg text-white font-medium">
                            <div className="font-semibold text-xl mb-2 sm:text-2xl">
                                豊田工業大学
                            </div>
                            <div className="text-gray-200 mb-4">〒468-8511 愛知県名古屋市天白区久方２丁目１２−１</div>
                            名古屋市営地下鉄桜通線「相生山駅」下車、徒歩約10分です。公共交通機関をご利用してお越しください。
                        </div>
                        <div className="md:px-4 w-full h-full">
                            <Map />
                        </div>
                    </div>
                </FadeIn>
            </div>
            <div className="bg-gradient-to-b from-tenjusaiHero to-white h-40"></div>
        </>
    );
};

export default Access;