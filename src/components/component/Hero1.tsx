"use client";

import Image from "next/image";
import Button from "./CustomButton";

export default function HeroSection() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex md:flex-row  items-center justify-center bg-slate-300 w-screen py-8">
      <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-20 bg-red ">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Introducing you to infinite solution of web.{" "}
            <a href="#" className="font-semibold text-[#0718C4]">
              <span className="absolute inset-0 " aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      <div className="text-center overflow-auto whitespace-normal">
  <h1
    className="text-7xl font-bold tracking-tight text-gray-900 sm:text-3xl"
  >
    Find, book, rent a car—quick and super easy!
  </h1>
  <p className="mt-6 text-lg leading-8 text-gray-600">
    Streamline your car rental experience with our effortless booking
    process.{" "}
  </p>
  <div className="mt-10 flex items-center justify-center gap-x-6">
    <a
      href="#"
      className=" px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <Button
        title="Explore Now"
        btnType="button"
        containerStyles="hidden lg:flex text-primary-blue rounded-full bg-[#3B3C98] text-white p-2 min-w-[130px] mx-4"
      />{" "}
    </a>
    <a
      href="#"
      className="text-sm font-semibold leading-6 text-gray-900 "
    >
      Learn more <span aria-hidden="true">→</span>
    </a>
  </div>
</div>
      </div>

      <Image
        src="/file.png"
        width={700}
        height={700}
        alt="Hero Image"
        className="float-right"
      />
    </div>
  );
}
