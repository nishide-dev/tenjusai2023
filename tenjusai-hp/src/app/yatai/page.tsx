'use client';
import { useState, useEffect, useCallback } from 'react';
import Foods from '@/components/animations/Foods';
import React from "react";
import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import FoodModal from '@/components/modals/FoodModal';
import useInfo from '@/utils/useInfo';
import { Food } from '@/utils/types';

const FoodsList: React.FC = () => {
    const { info } = useInfo();
    const foods: Food[] = info?.foods || [];
    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {foods.map((food, index) => (
            <FoodModal food={food} key={food.name} >
                <button className="">
                    <Card shadow="md" key={index} >
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
            </FoodModal>
        ))}
        </div>
    )
}

const Yatai: React.FC = () => {
    return (
        <>
            <div className="">
                <div className="min-h-screen -z-10 bg-none fixed">
                    <Foods />
                </div>
                <div className="min-h-screen max-w-5xl mx-auto p-3">
                    <div className="pt-20">
                        <h2 className="text-4xl xl:text-5xl font-light text-gray-600 my-6">LIST OF <span className="text-pink-400">YATAI</span> 😋🍴</h2>
                        {/* <p className="text-md font-normal text-gray-500 lg:text-lg mb-6">屋台情報を掲載しています。当日の出店内容について予告なく変更になる場合がございます。予めご了承ください。</p> */}
                        <FoodsList />
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Yatai;