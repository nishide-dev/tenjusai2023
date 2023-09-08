'use client';
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const NotionIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    );
}

interface TyphoonInfoProps {
    className?: string;
}

const TyphoonInfo: React.FC<TyphoonInfoProps> = ({ className }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    };

    return (
        <div className={`${className}`}>
            <div className="flex flex-col items-center">
                <Button className="sm:absolute mx-auto z-10 sm:mt-12 md:mt-16 xl:mt-20 mb-6" color="success" variant="bordered" startContent={<NotionIcon />} onPress={() => handleOpen()}>開催決定！！🎉✨【クリック】</Button>
            </div>
            <Modal
                    size="md"
                    isOpen={isOpen} 
                    onClose={onClose} 
                >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">開催決定！！🎉✨</ModalHeader>
                        <ModalBody>
                            <p>
                                皆様のご来場をお待ちしております！
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            閉じる
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
        </div>
    );
};

export default TyphoonInfo;