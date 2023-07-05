import Image from "next/image";
import Link from "next/link";

interface Supporter {
    name: string;
    image: string;
    url: string;
}

const Supporters: React.FC = () => {

    const supporters: Supporter[] = [
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
        {
            name: "天樹祭",
            image: "/next.svg",
            url: "https://tenjusai2023.vercel.app"
        },
    ];

    return (
        <>
            <section className="px-10 py-20 bg-tenjusaiHero">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-600">Supporters</h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto my-5">
                    {
                        supporters.map((supporter, index) => (
                            <Link href={supporter.url} key={index} className="flex items-center justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                                <Image src={supporter.image} width={100} height={100} alt={supporter.name} />
                            </Link>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Supporters;