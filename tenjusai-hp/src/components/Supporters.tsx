'use client';
import Image from "next/image";
import Link from "next/link";
import useInfo from "@/utils/useInfo";
import { Info, Supporter, Banner, Dispatcher } from "@/utils/types";
import { FadeInToUp, FadeIn } from "./animations/FadeInAnimation";

const Supporters: React.FC = () => {
    const { info } = useInfo();
    const supporters: Supporter[] = info?.supporters || [];
    const banners: Banner[] = info?.banners || [];
    const dispatchers: Dispatcher[] = info?.dispatchers || [];

    return (
        <>
            <section className="px-10 py-20 bg-white">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-600">Supporters</h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto my-5">
                    {
                        supporters.map((supporter, index) => (
                            <div key={index} className="flex items-center justify-center w-full p-3 md:p-3 align-middle md:w-1/2 xl:w-1/3 2xl:w-1/4">
                                <FadeInToUp className="">
                                    <Image src={supporter.thumbnail_link} alt={supporter.name} height={600} width={600} className="object-contain max-h-8 md:max-h-10 lg:max-h-12 xl:max-h-14" />
                                </FadeInToUp>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-20 flex gap-5">
                    <div className="container flex flex-wrap justify-center mx-auto my-5">
                        {
                            banners.map((banner, index) => (
                                <Link href={banner.link || ""} key={banner.name} className="" >
                                    <FadeInToUp>
                                        <Image src={banner.thumbnail_link} alt={banner.alt} height={600} width={600} />
                                    </FadeInToUp>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-20 flex flex-col items-center justify-center mx-auto lg:mx-32 xl:mx-64 2xl:mx-[24rem]">
                    <FadeIn>
                        <div className="text-2xl font-semibold text-slate-600 mb-6">派遣企業の会一覧</div>
                    </FadeIn>
                    <div className="flex items-center justify-center flex-wrap gap-5 text-center">
                        {
                            dispatchers.map((dispatcher, index) => (
                                <FadeInToUp key={dispatcher.name}>
                                    <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold text-slate-500">{dispatcher.name}</div>
                                </FadeInToUp>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Supporters;