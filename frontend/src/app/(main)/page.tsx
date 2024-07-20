import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>

      <section className="bg-white dark:bg-dark-800 max-w-screen-xl mx-auto">

        <h2 className="text-4xl font-extrabold text-start text-gray-900 dark:text-white">
          Demo App
        </h2>
      </section>
    </>
  );
}
