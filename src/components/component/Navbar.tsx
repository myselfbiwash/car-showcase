import Link from "next/link";
import Image from "next/image";

import Button from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className="flex flex-row justify-between items-center">
      {/* className='max-w-[1440px] mx-auto flex flex-row justify-between items-center sm:px-16 px-6 py-4 bg-transparent' */}
      <Link href='/'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
      <span>
      <Button
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      </span>
    
    </nav>
  </header>
);

export default NavBar;