"use client";

// components/Navbar.tsx

import React from "react";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
// Remove the import statement for the duplicate 'Button' component
import Button from "./CustomButton";

import NextLink from "next/link"; // Import Next.js's Link as NextLink
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll's Link as ScrollLinkimport { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

import { Button as ShadButton } from "@/components/ui/button";

const Navbar1 = () => {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <NextLink className="flex items-center justify-center" href="#">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain "
        />
      </NextLink>
      <nav className="hidden lg:flex gap-6">
        <ScrollLink
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="productsHere"
        >
          Products
        </ScrollLink>
        <NextLink
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
          href="/web-dev"
        >
          Web Development
        </NextLink>

        <ScrollLink
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="teamsHere"
        >
          Teams
        </ScrollLink>

        <ScrollLink
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
          to="/about"
        >
          About Us
        </ScrollLink>
        <ScrollLink
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
          to="contactHere"
        >
          Contact
        </ScrollLink>
      </nav>

      <Button
        title="Sign in"
        btnType="button"
        containerStyles="hidden lg:flex text-primary-blue rounded-full bg-[#3B3C98] text-white p-2 min-w-[130px]"
      />

      <div className="flex items-center gap-4 lg:hidden">
        {/* <Button
          title="Sign in"
          btnType="button"
          containerStyles=" text-primary-blue rounded-full bg-[#3B3C98] text-white p-2 min-w-[130px]"
        /> */}
        <Sheet>
          <SheetTrigger asChild>
            <ShadButton variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
            </ShadButton>
          </SheetTrigger>

          <SheetContent className="bg-white p-6 text-black" side="right">
            <div className="flex flex-col gap-4">
              <ScrollLink
                className="text-lg font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="productsHere"
              >
                Products
              </ScrollLink>
              <NextLink
                className="text-lg font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
                href="/web-dev"
              >
                Web Development
              </NextLink>
              <ScrollLink
                className="text-lg font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
                to="teamsHere"
              >
                Teams
              </ScrollLink>

              <ScrollLink
                className="text-lg font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
                to="/about"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                className="text-lg font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contactHere"
              >
                Contact
              </ScrollLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar1;
