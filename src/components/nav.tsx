"use client"

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import LogoImg from "@/assets/images/logo-full.svg";
import Image from "next/image";
import { Dropdown, MenuProps, Drawer, Modal } from "antd";

import { FaCreditCard } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import AboutIcon1 from "@/assets/images/nav/about.svg";
import AboutIcon2 from "@/assets/images/nav/about-2.svg";
import AboutIcon3 from "@/assets/images/nav/about-3.svg";
import AboutIcon4 from "@/assets/images/nav/about-4.svg";

import { ImCancelCircle } from "react-icons/im";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import WhiteNavLogo from "@/assets/images/white-logo.svg";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";


interface NavInterface {
    navPosition?: string
    whiteNav?: boolean
}
const Navigation = (props: NavInterface) => {

    const [openMenu, setOpenMenu] = useState(false);
    const [openBillModal, setOpenBillModal] = useState(false);

    const AboutUsItems: MenuProps["items"] = [
        {
            key: "about-1",
            label: (
                <div className="grid grid-cols-2 gap-10 shadow z-10 py-10 px-8 w-[600px] mx-auto">
                    <Link href="/about" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon1} alt="about us" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">About Us</p>
                            <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Get to know about us</p>
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>

                    <Link href="/job" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon4} alt="about us" className="w-full h-full" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">Careers</p>
                            <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Join our wonderful team</p>
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>
                </div>
            ),
        },
    ];

    const SolutionItems: MenuProps["items"] = [
        {
            key: "about-2",
            label: (
                <div className="grid grid-cols-2 gap-10 shadow z-10 py-10 px-8 w-[600px] mx-auto">
                    <Link href="/hr-solution" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon1} alt="about us" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">HR Solution</p>
                            {/* <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Get to know about us</p> */}
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>

                    <Link href="/payment-gateway" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon2} alt="about us" className="w-full h-full" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">Payment Gateway</p>
                            {/* <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Artistic visual expression</p> */}
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>

                    <Link href="/tax-and-government" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon3} alt="about us" className="w-full h-full" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">Tax & Government API</p>
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>

                    <Link href="/wallet" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon4} alt="about us" className="w-full h-full" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">Wallet Services</p>
                            {/* <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Join our wonderful team</p> */}
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>
                </div>
            ),
        },
    ];

    const DeveloperItems: MenuProps["items"] = [
        {
            key: "about-3",
            label: (
                <div className="grid grid-cols-2 gap-10 shadow z-10 py-10 px-8 w-[600px] mx-auto">
                    <Link href="/" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon2} alt="about us" className="w-full h-full" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">PAYE API</p>
                            {/* <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Artistic visual expression</p> */}
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>
                    <Link href="/" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon1} alt="about us" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">Withholding Tax Api</p>
                            {/* <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Get to know about us</p> */}
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>

                    <Link href="/" className="flex items-start gap-4">
                        <span className="text-xl">
                            <Image src={AboutIcon3} alt="about us" className="w-full h-full" />
                        </span>
                        <div>
                            <p className="font-camptonsemi text-base mb-1">Government Bills</p>
                            {/* <p className="text-sm text-gray-500 font-camptonthin text-[#353535]">Stunning Web Design</p> */}
                        </div>
                        <span>
                            <FaArrowRight className="text-[#00555A] text-xl" />
                        </span>
                    </Link>
                </div>
            ),
        },
    ];

    const toggleDrawer = () => setOpenMenu(!openMenu);
    const toggleBillModalDisplay = () => setOpenBillModal(!openBillModal);

    const { user } = useContext(UserContext)

    useEffect(() => {
        console.log("hi there")
        console.log(user);
    }, [])

    return (
        <div>
            <div className={`flex justify-between items-center z-40 px-5 md:px-20 py-7 w-full max-w-[2000px] top-0 ${props.navPosition ? props.navPosition : "relative"}`}>
                <div>
                    <Link href="/">
                        {
                            props.whiteNav ?
                                <Image src={WhiteNavLogo} alt="logo" />
                                :
                                <Image src={LogoImg} alt="logo" />
                        }
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-3 border-2 border-solid border-[#BBE998] py-1 px-2 rounded-full">
                        <li>
                            <Dropdown menu={{ items: AboutUsItems }} trigger={["click"]} overlayClassName="custom-dropdown">
                                <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="#">Company <IoIosArrowDown className="text-lg" /></Link>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown menu={{ items: SolutionItems }} trigger={["click"]} overlayClassName="custom-dropdown">
                                <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="#">Solutions <IoIosArrowDown className="text-lg" /></Link>
                            </Dropdown>
                        </li>
                        <li>
                            <Link onClick={toggleBillModalDisplay} className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="#">Pay Bills</Link>
                        </li>
                        <li>
                            <Dropdown menu={{ items: DeveloperItems }} trigger={["click"]} overlayClassName="custom-dropdown">
                                <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="#">Developers <IoIosArrowDown className="text-lg" /></Link>
                            </Dropdown>
                        </li>
                        <li>
                            <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="/contact">Contact Us</Link>
                        </li>
                        <li>
                            {
                                user?.firstName.length ?
                                    <Link className="bg-dark text-sm text-primary rounded-full py-3 px-5 flex gap-2 items-center" href="/account/overview">Dashboard</Link>
                                    :
                                    <Link className="bg-dark text-sm text-primary rounded-full py-3 px-5 flex gap-2 items-center" href="/auth/options">Get Started</Link>
                            }
                        </li>
                    </ul>
                </div>
                <div className="block md:hidden">
                    <HiOutlineMenuAlt3 className={`${props.whiteNav ? "text-white" : "text-black"} text-3xl`} onClick={toggleDrawer} />
                </div>
            </div>
            <Modal open={openBillModal} onCancel={toggleBillModalDisplay} onClose={toggleBillModalDisplay} footer={null}>
                <div className="pt-4 pb-8">
                    <h4 className="text-2xl text-[#1B1B1B] text-center">Pay Bills</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy Power</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy Airtime</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy Data</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Pay Taxes</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Cable TV</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Netflix</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">E-commerce</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Payroll</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Betting</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Invoice & Receipt</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Debit & Credit Card</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#F2F2F2] py-7 pb-5 px-2 rounded-[16px]">
                        <Link href="">
                            <div className="flex flex-col text-center">
                                <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#C6C6C6] rounded-[8px]">
                                    <FaCreditCard />
                                </div>
                                <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy JAMB</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Drawer open={openMenu} onClose={toggleDrawer} footer={null}>
                <div>
                    <div className="px-5 py-5 pb-10 flex items-center justify-between">
                        <div className="">
                            <Image src={LogoImg} alt="logo" className="w-[50%]" />
                        </div>
                        <div onClick={toggleDrawer}>
                            <ImCancelCircle className="text-3xl text-danger" />
                        </div>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/" className="font-campton text-base p-4">
                                Home</Link>
                        </li>
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/about" className="font-campton text-base p-4">
                                About Us</Link>
                        </li>
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/payment-gateway" className="font-campton text-base p-4">
                                Payment Gateway</Link>
                        </li>
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/hr-solution" className="font-campton text-base p-4">
                                HR Solution</Link>
                        </li>
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/wallet" className="font-campton text-base p-4">
                                Wallet Services</Link>
                        </li>
                        {/* <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/tax-and-government-api" className="font-campton text-base p-4">
                                Tax and Government API</Link>
                        </li> */}
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/contact" className="font-campton text-base p-4">
                                Contact Us</Link>
                        </li>
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/auth/login" className="font-campton text-base p-4">
                                Sign In
                            </Link>
                        </li>
                        <li className="border-b border-solid border-black pb-4 text-black">
                            <Link href="/auth/signup" className="font-campton text-base p-4">
                                Create a Free Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation;