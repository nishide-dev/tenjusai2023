'use client';
import { useState, useEffect, useCallback } from 'react';
import Foods from '@/components/animations/Foods';
import React from "react";
import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import FoodModal from '@/components/modals/FoodModal';
import useInfo from '@/utils/useInfo';
import { Food } from '@/utils/types';
import { FadeInToUp } from '@/components/animations/FadeInAnimation';

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
          <div onClick={handleScrollToTop} className="w-12 h-12 bg-pink-400 rounded-full cursor-pointer animate-bounce flex items-center justify-center mb-3 rotate-180">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </>
    );
  };

const FoodsList: React.FC = () => {
    const { info } = useInfo();
    const foods: Food[] = info?.foods || [];
    return (
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {foods.map((food, index) => (
            <FoodModal food={food} key={food.name} >
                <FadeInToUp className="">
                    <button className="">
                        <Card shadow="sm" key={index} className=" sm:w-60 lg:h-64 lg:w-60 xl:w-72" >
                            <CardBody className="overflow-visible p-0">
                            <Image
                                isZoomed
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={food.name}
                                className="w-full h-[160px] object-cover"
                                src={food.thumbnail_link}
                            />
                            </CardBody>
                            <CardFooter className="flex flex-col text-start gap-2 min-h-[7rem]">
                                <div className="text-small flex-col lg:flex-row w-full justify-between">
                                    <b className="text-gray-600">{food.name}</b>
                                    <p className="text-default-500">{food.price}</p>
                                </div>
                                {/* <div className="text-small flex w-full justify-between">
                                    <b>{food.name}</b>
                                    <p className="text-default-500">{food.price}</p>
                                </div> */}

                            </CardFooter>
                        </Card>
                    </button>
                </FadeInToUp>

            </FoodModal>
        ))}
        </div>
    )
}

const Yatai: React.FC = () => {
    return (
        <div className="">
            <ScrollButton />
            <div className="h-[35vh] absolute z-10 w-full">
                <div className="flex flex-col text-gray-100 mx-auto max-w-2xl lg:max-w-7xl px-8 lg:px-16 justify-center h-full gap-4">
                    <div className="text-6xl xl:text-7xl font-semibold">やたい</div>
                    <div className="max-w-sm ml-1 italic">今年は飲食OK！！🍧🍴</div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="h-[35vh] -z-10 bg-none">
                    <Foods />
                </div>
                <div className="bg-white w-full">
                    <div className=" max-w-7xl mx-auto p-3 bg-white">
                        <div className="">
                            <h2 className="text-3xl xl:text-4xl font-light text-gray-600 mt-12 mb-10">LIST OF <span className="text-pink-400">YATAI</span> 😋🍴</h2>
                            {/* <p className="text-md font-normal text-gray-500 lg:text-lg mb-6">屋台情報を掲載しています。当日の出店内容について予告なく変更になる場合がございます。予めご了承ください。</p> */}
                            <FoodsList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Yatai;