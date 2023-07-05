import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-tenjusaiHero px-6 py-18 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-tenjusaiGreen">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:overflow-hidden">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 animate-fade-in-left">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-tenjusaiGreen">About</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">天樹祭とは</h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                天樹祭とは名古屋市にキャンパスを構える豊田工業大学の学園祭です。ステージ企画や屋台の出店、オープンキャンパスなど多数の企画を開催します。
              </p>
              <h2 className="mt-10 text-xl font-bold tracking-tight text-gray-700 sm:text-2xl">テーマ「<span className="text-tenjusaiGreen text-3xl">繋ぐ</span>」</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                今年の天樹祭のテーマは「繋ぐ」です。説明文を書く。
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden animate-fade-in-right">
            <Image
                className="w-[32rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem]"
                src="/designs/tenju_blue.jpg"
                alt="Description for image"
                width={1280}
                height={720}
            />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
