'use client';
import Image from "next/image";
import Link from "next/link";
import useInfo from "@/utils/useInfo";
import { Info, Supporter, Banner } from "@/utils/types";
import { FadeInToUp } from "./animations/FadeInAnimation";

const Supporters: React.FC = () => {
    const { info } = useInfo();
    const supporters: Supporter[] = info?.supporters || [];
    const banners: Banner[] = info?.banners || [];

    return (
        <>
            <section className="px-10 py-20 bg-white">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-600">Supporters</h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto my-5">
                    {
                        supporters.map((supporter, index) => (
                            <Link href={supporter.link || ""} key={index} className="flex items-center justify-center w-full p-3 md:p-3 align-middle md:w-1/2 xl:w-1/3 2xl:w-1/4">
                                <FadeInToUp className="">
                                    <Image src={supporter.thumbnail_link} alt={supporter.name} height={600} width={600} className="object-contain max-h-8 md:max-h-10 lg:max-h-12 xl:max-h-14" />
                                </FadeInToUp>
                            </Link>
                        ))
                    }
                </div>
                <div className="mt-20 flex gap-5">
                    <div className="container flex flex-wrap justify-center mx-auto my-5">
                        {
                            banners.map((banner, index) => (
                                <Link href={banner.link || ""} key={banner.name} className=" shadow-xl" >
                                    <Image src={banner.thumbnail_link} alt={banner.alt} height={600} width={600} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Supporters;