'use client';
import { useState } from "react";

type StageModalProps = {
    title: string,
    description: string,
    hidden: boolean,
    setHidden: React.Dispatch<React.SetStateAction<boolean>>
}

const StageModal: React.FC<StageModalProps> = ({ title, description, hidden, setHidden }: StageModalProps) => {

    console.log(hidden);
    return (
        <>
            <div tabIndex={-1} className={`${hidden ? "hidden" : ""} fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative w-full max-w-3xl max-h-full mx-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {title}
                            </h3>
                            <button type="button" onClick={() => {setHidden(!hidden)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StageModal;