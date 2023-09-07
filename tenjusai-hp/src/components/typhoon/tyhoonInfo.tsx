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
                <Button className="sm:absolute mx-auto z-10 sm:mt-12 md:mt-16 xl:mt-20 mb-6" color="danger" variant="bordered" startContent={<NotionIcon />} onPress={() => handleOpen()}>台風13号に伴う対応について【クリック】</Button>
            </div>
            <Modal
                    size="md"
                    isOpen={isOpen} 
                    onClose={onClose} 
                >
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">台風13号に伴う対応について</ModalHeader>
                        <ModalBody>
                            <p>台風13号接近にともない，9月8日（金）から9月9日（土）頃，荒天となる可能性があります．
                                来場者や出演者の皆さまの安全を考慮し，9月9日（土）の日程について，内容の中止または一部中止の判断をする場合があります．
                            </p>
                            <p>
                                9月9日（土）朝時点の警報・注意報などの状況により開催の可否を決定し，同日午前9時までにHP（tenjusai.jp），および公式X（旧Twitter），公式Instagramにてお知らせします．
                                皆さまにはご迷惑をおかけいたしますが，どうかご了承くださいますようお願い申し上げます．
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