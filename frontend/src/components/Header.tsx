import Image from "next/image";

export default function Header() {
    return (
        <header className="dark:bg-gray-900 border-b border-b-gray-800 body-font">
            <div className="max-w-screen-xl flex justify-between mx-auto py-3">
                <h1>JSON.WEB.ID</h1>


                <div>
                    <a href="" className="inline-flex items-center text-white">
                        <Image src="/github-logo-white.svg" alt="github logo" width={20} height={20}></Image>
                    </a>
                </div>
            </div>
        </header>
    );
}