'use client';
import { useState } from "react";
import { Food } from "@/utils/types";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

type FoodModalProps = {
    food: Food,
    children?: React.ReactNode
}

const FoodModal: React.FC<FoodModalProps> = ({ food, children }: FoodModalProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div onClick={onOpen} className="">{children}</div>
            <Modal className=" max-w-xs" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" placement="center" size="sm" >
                <ModalContent className="">
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-md text-gray-600">{food.name}</ModalHeader>
                    <ModalBody className="px-0 py-0">
                        <div className="">
                            <Image as={NextImage} className="rounded-sm" src={food.thumbnail_link} alt={food.name} width={600} height={600} />
                        </div>
                        <div className="p-2 px-4 pb-6">
                            <h2 className="font-semibold text-gray-600 text-lg">{food.content}</h2>
                            <div className="py-2 text-gray-500">{food.description}</div>
                            <Divider />
                            <div className="flex flex-col mt-4">
                                <div className="text-pink-400 font-semibold">{food.price}</div>
                            </div>
                        </div>
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default FoodModal;