import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">Master the art of Music</h1>
        <p className="mt-20 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          accusamus eos ad pariatur aliquid officia fuga, doloribus praesentium,
          totam laudantium sapiente est enim aspernatur consectetur consequuntur
          esse cupiditate quo blanditiis.
        </p>
        <div className="mt-4">
          <Link href={"/cources"}>
          <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >Exolore courses</Button>
        
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
