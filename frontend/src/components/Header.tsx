import Image from "next/image";

export default function Header() {
    return (
        <header className="dark:bg-dark-800 border-b border-b-dark-500 body-font">
            <div className="max-w-screen-xl flex justify-between mx-auto py-3">
                <h1>JSON.WEB.ID</h1>
                <div>
                    <a href="https://github.com/daniwebdev/json.web.id" className="inline-flex items-center text-white">
                        <Image src="/github-logo-white.svg" alt="github logo" width={20} height={20}></Image>
                    </a>
                </div>
            </div>
        </header>
    );
}