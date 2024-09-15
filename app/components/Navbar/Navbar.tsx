"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Using the usePathname hook

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/service" },
  { name: "Book Now", href: "/#book-section" }, // Updated href to include the hash for the section
  { name: "Contact us", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="relative navbar bg-white shadow-md fixed w-full z-20"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl p-2 md:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16 sm:h-20">
              <div className="flex items-center justify-between w-full">
                {/* LOGO */}
                <div className="flex items-center">
                  <Link key="logoNav" href="/">
                    <Image
                      src="/assets/logo_ganga_arti.png"
                      alt="ganga aarti"
                      width={148}
                      height={148}
                    />
                  </Link>
                </div>
                {/* LINKS */}
                <div className="hidden lg:flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-gray-900 font-medium border-b-2 border-gray-900"
                          : "text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-900",
                        "px-3 py-2 rounded-md text-base transition-all duration-300"
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* PHONE AND SIGN IN BUTTON */}
              <div className="lg:hidden flex items-center">
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Bars3Icon className="h-6 w-6" />
                </Disclosure.Button>
              </div>
              {/* DRAWER CONTENT FOR MOBILE */}
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-gray-900 font-medium"
                          : "text-gray-800 hover:bg-gray-100",
                        "block px-4 py-2 rounded-md"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Drawer>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
