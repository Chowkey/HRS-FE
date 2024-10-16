import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import useMediaQuery from '../hooks/MediaQuery';
import Logo from "../public/Logo1.png"
type Props = {}

const Footer = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

    return (
        <footer className="bg-bgprimary dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl px-6 py-3 md:py-4">
                <div className="md:flex md:justify-between">
                    <div className="mb-3 md:mb-0 ">
                        <a href="" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white md:text-2xl ">Secton</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-1 text-sm font-semibold text-yellow-400 uppercase dark:text-white md:mb-3">Follow us</h2>
                            <ul className="text-white dark:text-gray-400 font-normal md:font-medium">
                                <li className="mb-1 md:mb-2">
                                    <a href="" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-1 text-sm font-semibold text-yellow-400 uppercase dark:text-white md:mb-3">Legal</h2>
                            <ul className="text-white dark:text-gray-400 font-normal md:font-medium">
                                <li className="mb-1 md:mb-2">
                                    <a href="" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="mt-4 mb-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-4 lg:mb-2" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-gray-400">©Copyright. All Rights Reserved.
                    </span>
                    <div className="flex mt-1 sm:justify-center sm:mt-0">
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                            <IoLogoInstagram />
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaGithub />
                        </a>
                        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white ms-5 ">
                            <SiGmail />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer