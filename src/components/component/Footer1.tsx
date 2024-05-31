import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer1 = () => (
  <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
          <hr className="z-50 border-t-1 border-blue-500" />{" "}

    <div className="flex max-md:flex-col max-md:py-3 flex-wrap justify-between gap-1 sm:px-16 px-6 py-2">
      <div className="flex flex-col justify-start items-start mr-10 gap-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
        <p className="text-base text-gray-700">
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>
      <div className="flex-1 lg:justify-between items-center w-full flex md:justify-end flex-wrap max-md:mt-6 gap-4">
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 text-base min-w-[170px]"
          >
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-1">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-4 border-t border-gray-100 sm:px-16 px-6 py-4">
      <p>@2023 CarHub. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-6">
        <Link href="/" className="text-black-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-black-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer1;
