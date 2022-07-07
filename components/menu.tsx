/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Les lieux", href: "/#carte" },
  //  { name: "Organiser", href: "#form" },
  { name: "La charte", href: "/charte" },
  { name: "Les affiches", href: "/affiches" },
  { name: "Dons", href: "/dons" },
];

const Menu: NextPage = ({ children }) => {
  return (
    <>
      <div className="relative overflow-visible bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8 lg:pr-0">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full cursor-pointer items-center justify-between md:w-auto">
                      <Link href="/" passHref>
                        <Image
                          src={"logo/logo-v1"}
                          height={64}
                          width={64}
                          alt="Logo de La France prie"
                          priority
                        />
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">
                            Ouvrir le menu principal
                          </span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:ml-6 md:block md:space-x-6 md:pr-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <span className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <Link href="/gerer-mon-chapelet" passHref>
                      <span className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                        Organiser ou gérer mon chapelet
                      </span>
                    </Link>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <Image
                          src={"logo/logo-v1"}
                          height={32}
                          width={32}
                          alt="Logo de La France prie"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href} passHref>
                          <span className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link href="/gerer-mon-chapelet" passHref>
                      <span className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">
                        Organiser ou gérer mon chapelet
                      </span>
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {children}
          </div>
        </div>
        {children ? (
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full bg-[#8fafe0] object-cover object-top sm:h-72 md:h-96 lg:h-full"
              src="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,q_auto/ndfrance.jpg"
              alt="Image de Notre Dame de France"
              loading="lazy"
              srcSet="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_640,q_auto/ndfrance 640w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_750,q_auto/ndfrance 750w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_828,q_auto/ndfrance 828w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1080,q_auto/ndfrance 1080w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1200,q_auto/ndfrance 1200w"
            />
          </div>
        ) : (
          <div>
            <img
              className="h-24 w-full bg-[#8fafe0] object-cover object-center sm:h-36 md:h-48 lg:h-56"
              src="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,q_auto/ndfrance-long.jpg"
              alt="Image de Notre Dame de France"
              loading="lazy"
              srcSet="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_480,q_auto/ndfrance-long 480w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_640,q_auto/ndfrance-long 640w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_750,q_auto/ndfrance-long 750w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_828,q_auto/ndfrance-long 828w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1080,q_auto/ndfrance-long 1080w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1200,q_auto/ndfrance-long 1200w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1920,q_auto/ndfrance-long 1920w"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
