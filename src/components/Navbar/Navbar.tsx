
import Link from "next/link";
import React from "react";
import Logo from '@/assets/logo.jpg'
import { cookies } from 'next/headers'
import NavbarButtons from "../NavbarButtons";

const Navbar = () => {
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get('userData')?.value ?? "{}")

  return (
    <header className="m-2 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link aria-current="page" className="flex items-center" href="/">
              <img
                className="h-7 w-auto"
                src={Logo.src}
                alt=""
              />
              <p className="sr-only">Website Title</p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Iphone
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Macbook
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Headphones
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Accesories
            </a>
          </div>
         
          <NavbarButtons userData={userData} />

        </div>
      </div>
    </header>
  );
};

export default Navbar;
