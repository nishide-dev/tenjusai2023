'use client';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { useState, useEffect } from 'react';

type Route = {
    href: string;
    title: string;
};

const routes: Route[] = [
    { href: '/stage', title: 'ステージ' },
    { href: '/event', title: 'イベント' },
    { href: '/lab', title: '研究室' },
    { href: '/yatai', title: '屋台' },
    // { href: '/qa', title: 'お問い合わせ' },
];

export default function Header() {

    const [showMenu, setShowMsnu] = useState(false);

    function handleToggle() {
        if (!showMenu) {
            setShowMsnu(true);
        } else {
            setShowMsnu(false);
        }
    }
    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        setShowMsnu(false);
    };

    function BlackScreen() {
        return (
            <div className={`fixed ${showMenu ? "z-10" : "h-0"} inset-0 bg-black opacity-50`} onClick={handleToggle}></div>
        );
    }

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
            <BlackScreen />
            <nav className={`${showMenu ? 'bg-white' : ''} ${opacity == 0 && !showMenu ? 'bg-none' : 'bg-tenjusaiHero'} border-gray-200 px-2 sm:px-4 py-2.5 fixed w-full z-20 opacity-100`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/#" className="flex items-center" onClick={handleClick}>
                        <img src="tenjusai.png" className="fixed h-12 mr-3 sm:h-16" alt="Flowbite Logo" />
                        <span className="self-center text-lg font-bold whitespace-nowrap text-gray-800 ml-16 sm:ml-24">天樹祭 2023</span>
                    </Link>
                    <button data-collapse-toggle="#navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={handleToggle}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${showMenu ? 'animate-fade-in' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-none">
                            {
                                routes.map((route) => (
                                    <li key={route.href}>
                                        <Link href={route.href} className="block my-2 md:my-0 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-semibold" onClick={handleClick}>{route.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}