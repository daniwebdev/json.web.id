import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Playground } from "@/components/Playground";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      {/* <Hero></Hero> */}
      <Playground></Playground>
    </>
  );
}
