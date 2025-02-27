import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-full max-w-md pb-6 flex flex-col space-y-4 h-full bg-white shadow-lg rounded-lg">
          <header className="px-4 py-4 flex items-center justify-between border-b">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="text-xl font-semibold text-black flex items-center"
              >
                <Image
                  src="/assets/logo_ganga_arti.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
                <span className="ml-2">Shree Narayan Ganga Arti event</span>
              </Link>
            </div>

            <XMarkIcon
              className="block h-6 w-6 text-black cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="px-4"
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
