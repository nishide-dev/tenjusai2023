'use client';
import { useState } from "react";
import { Stage } from "@/utils/types";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

type StageModalProps = {
    stage: Stage,
    children?: React.ReactNode
}

const StageModal: React.FC<StageModalProps> = ({ stage, children}: StageModalProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
        <>
            <div onClick={onOpen} className="">{children}</div>
            <Modal className="" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
                <ModalContent className="">
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                    <ModalBody className="">
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-semibold text-gray-700">{stage.name}</h2>
                            <div className="bg-teal-600 rounded-full text-center p-1 px-5 text-sm m-1">
                                <p className="text-sm font-medium text-gray-100">{stage.genre}</p>
                            </div>
                        </div>
                        
                        <hr className="h-2 text-black" />
                        <div className="mx-auto">
                            <Image as={NextImage} className="rounded-sm" src={stage.thumbnail_link} alt={stage.name} width={600} height={600} />
                        </div>
                        <div className="flex justify-start gap-6">
                            <div className="text-teal-600 font-semibold text-sm lg:text-md xl:text-lg">開催日時</div>
                            <div className="text-gray-600 text-sm lg:text-md xl:text-lg">{startMonth}月{startDay}日 {startHour}:{startMinutes} ~ {endHour}:{endMinutes}</div>
                        </div>
                        <div className="flex justify-start gap-6">
                            <div className="text-teal-600 font-semibold text-sm lg:text-md xl:text-lg">内容</div>
                            <div className="text-gray-600 text-sm lg:text-md xl:text-lg">{stage.category}</div>
                        </div>
                        <div className="mb-6">
                            <div className="text-teal-600 font-semibold text-sm lg:text-md xl:text-lg">詳細</div>
                            <div className="text-gray-600 text-md lg:text-md xl:text-lg mt-2">{stage.description}</div>
                        </div>
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default StageModal;