'use client';
import { useState } from "react";
import { Lab } from "@/utils/types";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

type StageModalProps = {
    lab: Lab,
    children?: React.ReactNode
}

const LabModal: React.FC<StageModalProps> = ({ lab, children}: StageModalProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div onClick={onOpen} className="">{children}</div>
            <Modal className="bg-gray-900" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" size="sm" placement="center">
                <ModalContent className="">
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold text-gray-200 py-1">{lab.name}</h2>
                        </div>
                    </ModalHeader>
                    <ModalBody className="px-0 py-0">
                        <div className="mx-auto">
                            <Image as={NextImage} className="rounded-none" src={lab.thumbnail_link} alt={lab.name} width={600} height={600} />
                        </div>
                        <div className="p-4 mb-3">
                            <p className="text-gray-200 text-md">{lab.description}</p>
                            <Divider className="my-4 bg-gray-300" />
                            {
                                lab.first ? (
                                    <div className="flex gap-1">
                                        <p className="text-gray-200 font-semibold text-lg">9/9 (土)</p>
                                        <p className="text-gray-200 text-md text-lg">{lab.first_date}</p>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }
                            {
                                lab.second ? (
                                    <div className="flex gap-1">
                                        <p className="text-gray-200 font-semibold">9/10 (日)</p>
                                        <p className="text-gray-200 text-md text-lg">{lab.second_date}</p>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }
                        </div>

                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default LabModal;