'use client';
import { useEffect, useState } from 'react';

type QA = {
    id: number;
    question: string;
    answer: string;
};

const qas: QA[] = [
    {
        id: 1,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
    {
        id: 2,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
    {
        id: 3,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
    {
        id: 4,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
    {
        id: 5,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
    {
        id: 6,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
    {
        id: 7,
        question: '天樹祭とはなんですか?',
        answer: '天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。'
    },
];



export default function Qa() {
    const [qaId, setQaId] = useState<number>(0);

    const handleClick = (id: number) => {
        if (qaId === id) {
            setQaId(0);
        } else {
            setQaId(id);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-screen bg-tenjusaiHero"></div>
            {/* <section className="bg-white mt-16">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">Have any Questions?</h1>

                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12">
                            <h1 className="text-xl font-semibold text-gray-800">Table of Content</h1>

                            <div className="mt-4 space-y-4 lg:mt-8">
                                <a href="#" className="block text-blue-500 dark:text-blue-400 hover:underline">General</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Trust & Safety</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Services</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Billing</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Office Cleaning</a>
                            </div>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>

                                    <h1 className="mx-4 text-xl text-gray-700">How i can play for my appoinment ?</h1>
                                </button>

                                <div className="flex mt-8 md:mx-10">
                                    <span className="border border-blue-500"></span>

                                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                    </p>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <h1 className="mx-4 text-xl text-gray-700">What can i expect at my first consultation ?</h1>
                                </button>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <h1 className="mx-4 text-xl text-gray-700">What are your opening house ?</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}