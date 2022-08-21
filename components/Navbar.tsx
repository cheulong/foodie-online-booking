import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
const Navbar: NextPage = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  // return <h1 className="text-3xl font-bold underline">Navbar!</h1>;
  return (
    <nav className="px-2 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="font-bold">Foodie</a>
        </Link>

        <div
          className="hidden w-full md:block md:w-auto md:flex"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li className="relative">
              <Link href="/">
                <a className="font-bold">Home</a>
              </Link>
              {router.pathname == '/' && (
                <span
                  className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-2 rounded right-0 left-0 mx-auto"
                  aria-hidden="true"
                ></span>
              )}
            </li>
            <li>
              <Link href={''}>
                <a className="font-bold">Packages</a>
              </Link>
              {router.pathname == '/packages' && (
                <span
                  className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-2 rounded right-0 left-0 mx-auto"
                  aria-hidden="true"
                ></span>
              )}
            </li>
            <li>
              <Link href={''}>
                <a className="font-bold">About us</a>
              </Link>
              {router.pathname == '/about' && (
                <span
                  className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-2 rounded right-0 left-0 mx-auto"
                  aria-hidden="true"
                ></span>
              )}
            </li>
            <li>
              <Link href={''}>
                <a className="font-bold">Contact us</a>
              </Link>
              {router.pathname == '/contact' && (
                <span
                  className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-2 rounded right-0 left-0 mx-auto"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          </ul>
          <div className="items-center flex md:space-x-8 md:mt-0  md:text-lg md:font-medium">
            <div className="relative">
              <FiShoppingCart />
              <span className="absolute w-1.5 h-1.5 bg-#fff rounded top-0 -right-0.5"></span>
            </div>
            <button className="md:text-sm md:font-medium">Booking Now</button>
          </div>
        </div>
        <div>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            type="button"
            data-collapse-toggle="navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`absolute top-15 right-10 border border-gray-100 rounded-xl flex-col ${
              toggleMenu ? 'flex' : 'hidden'
            }`}
          >
            <ul className="flex flex-col p-4 bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li className="relative">
                <Link href="/">
                  <a className="font-bold">Home</a>
                </Link>
                {router.pathname == '/' && (
                  <span
                    className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-0.5 rounded right-0 left-0 mx-auto"
                    aria-hidden="true"
                  ></span>
                )}
              </li>
              <li>
                <Link href={''}>
                  <a className="font-bold">Packages</a>
                </Link>
                {router.pathname == '/packages' && (
                  <span
                    className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-2 rounded right-0 left-0 mx-auto"
                    aria-hidden="true"
                  ></span>
                )}
              </li>
              <li>
                <Link href={''}>
                  <a className="font-bold">About us</a>
                </Link>
                {router.pathname == '/about' && (
                  <span
                    className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-0 rounded right-0 left-0 mx-auto"
                    aria-hidden="true"
                  ></span>
                )}
              </li>
              <li>
                <Link href={''}>
                  <a className="font-bold">Contact us</a>
                </Link>
                {router.pathname == '/contact' && (
                  <span
                    className="block absolute  bg-mainColor w-1.5 h-1.5 -bottom-2 rounded right-0 left-0 mx-auto"
                    aria-hidden="true"
                  ></span>
                )}
              </li>
            </ul>
            <div className="items-center flex md:space-x-8 md:mt-0  md:text-lg md:font-medium flex-col-reverse pb-3">
              <div className="relative">
                <FiShoppingCart />
                <span className="absolute w-1.5 h-1.5 bg-#fff rounded top-0 -right-0.5"></span>
              </div>
              <button className="md:text-sm md:font-medium">Booking Now</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
