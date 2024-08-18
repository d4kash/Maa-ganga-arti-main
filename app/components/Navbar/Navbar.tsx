import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signindialog from './Signindialog';
import Image from 'next/image';
import logo from '../../Assets/logo ganga arti.png';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About us', href: '/about', current: false },

    { name: 'Contact us', href: '/contact', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Services', href: '/service', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar bg-white shadow-md fixed w-full z-10">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl p-2 md:px-4 lg:px-8">
                        <div className="relative flex items-center justify-between h-16 sm:h-20">
                            <div className="flex items-center justify-between w-full">
                                {/* LOGO */}
                                <div className="flex items-center">
                                    <Image src={logo} alt="logo" width={48} height={48} />
                                    <Link href="/" className="text-xl sm:text-2xl font-semibold text-gray-800 ml-3">
                                        Shree Narayan Ganga Aarti
                                    </Link>
                                </div>
                                {/* LINKS */}
                                <div className="hidden lg:flex space-x-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900',
                                                'px-3 py-2 rounded-md text-base'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* PHONE AND SIGN IN BUTTON */}
                            <div className="lg:hidden flex items-center">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300" onClick={() => setIsOpen(!isOpen)}>
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
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
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
}

export default Navbar;
