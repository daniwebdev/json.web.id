import Image from "next/image";
const Circle: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg viewBox="0 0 676 676" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="338" cy="338" r="338" fill="url(#paint0_radial_62_3)" />
            <defs>
                <radialGradient id="paint0_radial_62_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(338 338) rotate(90) scale(338)">
                    <stop stopColor="#475ED0" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#3300FF" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default function Hero() {
    return (
        <section className="bg-white dark:bg-dark-800">

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 z-20">
                <div className="mr-auto place-self-center lg:col-span-7 z-20">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        JSON.WEB.ID
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        You can store and retrieve JSON data in the format you want.
                    </p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center gap-10 z-20">
                    <Image width={800} height={120} alt="JSON.web.id" src={"/hero.png?t=1"} />
                </div>
            </div>

            <Circle className="z-10 absolute top-0 left-0 w-1/2 opacity-40"></Circle>
            <Circle className="z-10 absolute bottom-0 right-0 w-1/3 opacity-40"></Circle>
        </section>
    );
}

