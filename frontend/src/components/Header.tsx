import Image from "next/image";

export default function Header() {
    return (
        <header className="dark:bg-dark-800 border-b border-b-dark-500 body-font">
            <div className="max-w-screen-xl flex justify-between mx-auto py-3">
                <div className="flex justify-start items-center">
                    <div className="w-[100px]">
                        <Image src="/logo.svg" alt="logo" width={80} height={80}></Image>
                    </div>
                    <h1 className="text-2xl font-bold">JSON.WEB.ID</h1>
                </div>
                <div>
                    <a href="https://github.com/daniwebdev/json.web.id" target="_blank" className="inline-flex items-center text-white">
                        <Image src="/github-logo-white.svg" alt="github logo" width={20} height={20}></Image>
                    </a>
                </div>
            </div>
        </header>
    );
}