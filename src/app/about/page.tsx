"use client";
import Layout from "@/components/layout";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

import LogoImg from "@/assets/images/logo.svg";
import UsePayImg from "@/assets/images/about/usepay.svg";
import QuoteImg from "@/assets/images/quote.svg";

import Company1Img from "@/assets/images/companies/_6.svg";
import Company2Img from "@/assets/images/companies/_7.svg";
import Company3Img from "@/assets/images/companies/_8.svg";
import Company4Img from "@/assets/images/companies/_9.svg";
import Company5Img from "@/assets/images/companies/_10.svg";

import Rect1Img from "@/assets/images/about/rect1.png";
import Rect2Img from "@/assets/images/about/rect2.png";
import Rect3Img from "@/assets/images/about/rect3.png";
import Rect4Img from "@/assets/images/about/rect4.png";

import { useState } from "react";
import Link from "next/link";

const AboutPage = () => {

    const [currentView, setCurrentView] = useState(0);

    return (
        <div>
            <Layout navPosition="fixed" whiteNav={true}>
                <>
                    <div className="about-hero flex items-center">
                        <div className="px-5 md:px-40 w-full">
                            <div className="max-w-[763px] w-full md:w-[55%]">
                                <h3 className="leading-tight md:leading-tight mb-1 text-4xl md:text-7xl text-white">
                                    Your business Consultant &
                                    Solution.
                                </h3>
                                <p className="text-white font-satoshilight leading-normal md:leading-normal text-base md:text-2xl opacity-90 mb-8">
                                    Our platform provides seamless payment gateway solutions, wallet services, tax APIs, and HR solutions, all designed to make financial transactions effortless and secure.
                                </p>
                                <Link href="/contact" className="py-3 px-10 font-satoshiregular flex gap-6 w-max items-center border-2 border-white border-solid text-white text-lg rounded-full">
                                    Let&apos;s Talk <FaArrowRightLong />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 bg-primary w-full">
                        <div className="slider">
                            <div className="slider-track">
                                <div className="flex gap-2 items-center">
                                    <Image src={Company1Img} alt="paye" className="" />
                                    <h5>Lagos State</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company2Img} alt="paye" className="" />
                                    <h5>Ministry of Justice</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company3Img} alt="paye" className="" />
                                    <h5>Seerbit</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company4Img} alt="paye" className="" />
                                    <h5>Flutterwave</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company5Img} alt="paye" className="" />
                                    <h5>Providus Bank</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company1Img} alt="paye" className="" />
                                    <h5>Lagos State</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company2Img} alt="paye" className="" />
                                    <h5>Ministry of Justice</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company3Img} alt="paye" className="" />
                                    <h5>Seerbit</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company4Img} alt="paye" className="" />
                                    <h5>Flutterwave</h5>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={Company5Img} alt="paye" className="" />
                                    <h5>Providus Bank</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 px-5 md:px-24">
                        <div className="about-testimonial px-5 md:px-20 py-5 md:py-20">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div>
                                    <div className="size-[50px] md:size-[70px] rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                        <Image src={QuoteImg} alt="quote icons" className="w-[30%] md:w-max h-max" />
                                    </div>
                                </div>
                                <p className="text-white leading-loose md:leading-loose text-base md:text-3xl">
                                    Pay4IT, a subsidiary of DamDam Global Services, is a leading fintech innovator committed to solving Nigeria&apos;s financial challenges. Our mission is to simplify payments, promote financial inclusion, and foster economic growth through cutting-edge technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 md:px-24 mt-20">
                        <div className="flex flex-col md:grid grid-cols-1/2 gap-8">
                            <div className="border rounded-[24px] border-solid border-[#D8D8D8] px-5 md:px-10 py-5 md:py-10">
                                <h4 className="text-2xl text-[#1B1B1B]">
                                    Our Values
                                </h4>
                                <ul className="mt-6 flex flex-col gap-5">
                                    <li className="flex items-center gap-4 font-campton text-lg text-[#1B1B1B]"><span>&bull;</span>
                                        Transparency
                                    </li>
                                    <li className="flex items-center gap-4 font-campton text-lg text-[#1B1B1B]"><span>&bull;</span> Efficiency</li>
                                    <li className="flex items-center gap-4 font-campton text-lg text-[#1B1B1B]"><span>&bull;</span> Innovation</li>
                                    <li className="flex items-center gap-4 font-campton text-lg text-[#1B1B1B]"><span>&bull;</span> Scalability</li>
                                </ul>
                            </div>
                            <div className="border rounded-[24px] border-solid border-[#D8D8D8] px-5 md:px-10 py-5 md:py-10">
                                <h4 className="text-3xl text-[#1B1B1B] mb-7">Our Vision</h4>
                                <p className="text-black opacity-60 text-base md:text-xl leading-loose md:leading-loose font-campton">
                                    To be the trusted partner for businesses, governments, and individuals in delivering seamless financial solutions across Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark py-12 w-full mt-20">
                        <div className="md:flex items-center justify-between px-5 md:px-16">
                            <div>
                                <Image src={UsePayImg} alt="pay for it" className="hidden md:block md:w-max max-w-[818px]" />
                            </div>
                            <div></div>
                            <div>
                                <div className="flex gap-8">
                                    <Link href="/auth/signup" className="mx-auto md:mx-0 md:w-max bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                                        <div className="size-12 bg-dark rounded-full flex items-center justify-center">
                                            <Image src={LogoImg} alt="logo" className="w-[50%]" />
                                        </div>
                                        <span className="pr-4">
                                            Get Started
                                        </span>
                                    </Link>
                                    <Link href="/contact" className="hidden bg-transparent border-white border-2 rounded-full text-white py-2 px-12 md:flex items-center gap-3">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 md:px-20 py-20">
                        <div className="mb-5 md:mb-20 flex justify-between items-center">
                            <h3 className="font-campton text-4xl leading-tight hidden md:block">
                                Why Choose Pay4it for your <br /> ___________ Needs?
                            </h3>
                            <h3 className="font-campton text-3xl md:text-4xl leading-relaxed block md:hidden">
                                Why Choose Pay4it for your _______ Needs?
                            </h3>
                            {/* <div className="flex gap-5">
                                <button className="bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                                    <div className="size-12 bg-dark rounded-full flex items-center justify-center">
                                        <Image src={LogoImg} alt="logo" className="w-[50%]" />
                                    </div>
                                    <span className="pr-4">
                                        Get Started
                                    </span>
                                </button>
                                <button className="bg-primary rounded-full py-2 px-12 flex items-center gap-3">
                                    Contact Us
                                </button>
                            </div> */}
                        </div>
                        <div className={`pt-7 md:pt-16 mt-0 md:border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto animate-bar ${currentView === 0 ? "animated-view" : "animated-hide"}`}>
                            <div className="flex flex-col md:grid grid-cols-1/1.5/1.5">
                                <div>
                                    {
                                        currentView === 0 ?
                                            < h3 onClick={() => setCurrentView(1)} className="text-2xl font-camptonsemi">-</h3>
                                            :
                                            <h3 onClick={() => setCurrentView(0)} className="cursor-pointer text-2xl font-camptonsemi">+</h3>
                                    }
                                </div>
                                <div>
                                    <div className="md:w-[60%] pb-10 md:pb-20">
                                        <h3 className="text-lg font-camptonsemi mb-5 md:mb-10">The All-in-One Financial Solution</h3>
                                        <p className="text-sm leading-loose md:leading-loose">
                                            Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full">
                                        <Image src={Rect1Img} alt="pay for it" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`pt-7 md:pt-16 mt-0 md:mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto animate-bar ${currentView === 1 ? "animated-view" : "animated-hide"}`}>
                            <div className="flex flex-col md:grid grid-cols-1/1.5/1.5">
                                <div>
                                    {
                                        currentView === 1 ?
                                            <h3 onClick={() => setCurrentView(0)} className="cursor-pointer text-2xl font-camptonsemi">-</h3>
                                            :
                                            <h3 onClick={() => setCurrentView(1)} className="cursor-pointer text-2xl font-camptonsemi">+</h3>
                                    }
                                </div>
                                <div>
                                    <div className="md:w-[60%] pb-10 md:pb-20">
                                        <h3 className="text-lg font-camptonsemi mb-5 md:mb-10">Compliance, Automation and Convenience</h3>
                                        <p className="text-sm leading-loose md:leading-loose">
                                            Managing payroll, taxes, and payments shouldn&apos;t be complicated. With built-in security, real-time processing, and effortless compliance, Pay4It is the smart choice for businesses and government agencies.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full">
                                        <Image src={Rect2Img} alt="pay for it" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`pt-7 md:pt-16 mt-0 md:mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto animate-bar ${currentView === 2 ? "animated-view" : "animated-hide"}`}>
                            <div className="flex flex-col md:grid grid-cols-1/1.5/1.5">
                                <div>
                                    {
                                        currentView === 2 ?
                                            <h3 onClick={() => setCurrentView(0)} className="cursor-pointer text-2xl font-camptonsemi">-</h3>
                                            :
                                            <h3 onClick={() => setCurrentView(2)} className="cursor-pointer text-2xl font-camptonsemi">+</h3>
                                    }
                                </div>
                                <div>
                                    <div className="md:w-[60%] pb-10 md:pb-20">
                                        <h3 className="text-lg font-camptonsemi mb-5 md:mb-10">Seamless payments and tax processing</h3>
                                        <p className="text-sm leading-loose md:leading-loose">
                                            Get rid of manual tax filings and fragmented payment systems. Pay4It provides a secure, API-driven ecosystem that streamlines salary payments, tax remittances, and business transactions. Our wallet services and payment gateway ensure your money moves efficiently, while our HR and tax APIs keep you compliant without the extra effort.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full">
                                        <Image src={Rect3Img} alt="pay for it" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`pt-7 md:pt-16 mt-0 md:mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto animate-bar ${currentView === 3 ? "animated-view" : "animated-hide"}`}>
                            <div className="flex flex-col md:grid grid-cols-1/1.5/1.5">
                                <div>
                                    {
                                        currentView === 3 ?
                                            <h3 onClick={() => setCurrentView(0)} className="cursor-pointer text-2xl font-camptonsemi">-</h3>
                                            :
                                            <h3 onClick={() => setCurrentView(3)} className="cursor-pointer text-2xl font-camptonsemi">+</h3>
                                    }
                                </div>
                                <div>
                                    <div className="md:w-[60%] pb-10 md:pb-20">
                                        <h3 className="text-lg font-camptonsemi mb-5 md:mb-10">Powering Businesses with Smarter Finance</h3>
                                        <p className="text-sm leading-loose md:leading-loose">
                                            Whether you're managing payroll, handling P.A.Y.E. and withholding tax, or processing payments, Pay4It makes it simple. Our API-powered platform connects businesses with the tools they need to automate salaries, remit taxes, and process transactions seamlessly. Say goodbye to complexity—choose Pay4It for a faster, smarter financial experience.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full">
                                        <Image src={Rect4Img} alt="pay for it" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        </div >
    )
}

export default AboutPage;