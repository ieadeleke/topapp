import Layout from "@/components/layout"
import CompaniesImg from "@/assets/images/government/companies.png";
import GovernmentHero from "@/assets/images/government/hero.png";
import APIIcon from "@/assets/images/government/api.svg";
import AutomatedIcon from "@/assets/images/government/automated.svg";
import TransparentIcon from "@/assets/images/government/transparent.svg";

import Block1Img from "@/assets/images/government/block1.png";
import Block2Img from "@/assets/images/government/block2.png";
import Block3Img from "@/assets/images/government/block3.png";
import Block4Img from "@/assets/images/government/block4.png";

import Icon1Img from "@/assets/images/government/icon1.png";
import Icon2Img from "@/assets/images/government/icon2.png";
import Icon3Img from "@/assets/images/government/icon3.png";

import { CiFilter } from "react-icons/ci";
import { TbUmbrella } from "react-icons/tb";
import { LuCreditCard } from "react-icons/lu";


import LogoImg from "@/assets/images/logo.svg";

import Image from "next/image";
import Link from "next/link";

const TaxAndGovernmentPage = () => {
    return (
        <div>
            <Layout>
                <>
                    <div className="px-20 mt-20">
                        <div className="bg-dark rounded-[60px] py-16 pb-10">
                            <div className="grid grid-cols-2 gap-24 max-w-[1410px] mx-auto px-24">
                                <div>
                                    <h3 className="text-3xl md:text-5xl leading-tight md:leading-tight text-white font-campton">
                                        Simplify Tax and Bill Payments with Pay4IT API Integration
                                    </h3>
                                    <Image src={CompaniesImg} alt="woman smiling" className="mt-5" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-2xl text-white leading-relaxed md:leading-relaxed font-satoshiregular">
                                        Seamlessly integrate with our robust API for effortless PAYE, WHT, and government bill payment processing.
                                    </p>
                                    <div className="mt-7">
                                        <Link href="/auth/signup" className="bg-primary rounded-full py-2 px-3 flex items-center gap-3 block w-max">
                                            <div className="size-12 bg-dark rounded-full flex items-center justify-center">
                                                <Image src={LogoImg} alt="logo" className="w-[50%]" />
                                            </div>
                                            <span className="pr-4">
                                                Explore Our API
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-10 mt-12">
                                <Image src={GovernmentHero} alt="woman smiling" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="px-20 mt-20">
                        <div className="w-[60%]">
                            <h3 className="text-4xl leading-relaxed text-black font-campton md:leading-relaxed mb-6">Automate tax remittance and bill payment processes, eliminating manual errors.</h3>
                            <p className="text-xl text-[#3F3F3F] mb-10">
                                Ensure timely compliance with PAYE, WHT, and government obligations.
                            </p>
                        </div>
                        <div className="grid grid-cols-1/1.5 gap-14">
                            <div className="max-h-[610px] overflow-hidden rounded-[22px] bg-[#F9F9F9] p-14 pb-0">
                                <div>
                                    <div className="flex justify-between items-center mb-7">
                                        <div>
                                            <h4 className="text-black text-2xl font-campton leading-normal">PAYE Tax Processing</h4>
                                        </div>
                                        <div>
                                            <div className="size-14 rounded-full flex justify-center items-center bg-[#24D164]">
                                                <CiFilter className="text-white text-3xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose text-base w-[90%] mb-7 max-w-[707px]">
                                        Direct API integration for accurate PAYE calculation and remittance to Lagos Inland Revenue Service (LIRS).
                                    </p>
                                    <Image src={Block1Img} alt="woman calculating" className="mx-auto" />
                                </div>
                            </div>
                            <div className="max-h-[610px] overflow-hidden rounded-[22px] bg-[#F9F9F9] p-14 pb-0">
                                <div>
                                    <div className="flex justify-between items-center mb-7">
                                        <div>
                                            <h4 className="text-black text-2xl font-campton leading-normal">Withholding Tax (WHT) Management</h4>
                                        </div>
                                        <div>
                                            <div className="size-14 rounded-full flex justify-center items-center bg-[#24D164]">
                                                <TbUmbrella className="text-white text-3xl" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose text-base w-[70%] mb-4 max-w-[707px]">
                                        Automate WHT deductions and transfers to relevant government bodies.
                                    </p>
                                    <div className="flex gap-6">
                                        <Image src={Block2Img} alt="woman calculating" className="mx-auto" />
                                        <Image src={Block3Img} alt="woman calculating" className="mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-h-[610px] overflow-hidden rounded-[22px] mt-14 bg-[#F9F9F9] p-14 pr-5 pb-2">
                            <div className="flex justify-between md:grid grid-cols-1.5/1 items-end gap-0">
                                <div className="pb-10">
                                    <div className="flex flex-col gap-7 mb-7">
                                        <div>
                                            <div className="size-14 rounded-full flex justify-center items-center bg-[#24D164]">
                                                <LuCreditCard className="text-white text-3xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-black text-4xl font-campton leading-normal">Government Bill Payments & <br />
                                                Real-Time Monitoring and Reporting</h4>
                                        </div>
                                    </div>
                                    <p className="text-black opacity-70 leading-loose md:leading-relaxed text-xl font-camptonthin mb-7 max-w-[707px]">
                                        Streamlined processing of utility bills, levies, and other government charges. Track payment status, generate detailed reports, and ensure transparency at every stage.
                                    </p>
                                </div>
                                <Image src={Block4Img} alt="woman calculating" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="w-max mx-auto mt-20">
                        <h3 className="text-6xl text-center max-w-[1029px] w-[65%] mb-20 leading-tight md:leading-tight mx-auto font-campton">We're here to help you build,
                            & protect your wealth.</h3>
                        <div className="rounded-[30px] border-2 w-[90%] border-[#EFEFEF] text-center max-w-[1320px] mx-auto">
                            <div className="grid grid-cols-3">
                                <div className="py-12 border-r-2 border-solid border-[#EFEFEF]">
                                    <Image src={APIIcon} alt="woman smiling" className="mx-auto mb-14" />
                                    <h4 className="text-xl mb-5">API Integration</h4>
                                    <p className="w-[80%] mx-auto text-lg leading-relaxed md:leading-relaxed text-[#19352DB2] font-camptonthin">
                                        Connect our API to your platform or software for instant tax and bill payment capabilities.
                                    </p>
                                </div>
                                <div className="py-12 border-r-2 border-solid border-[#EFEFEF]">
                                    <Image src={AutomatedIcon} alt="woman smiling" className="mx-auto mb-14" />
                                    <h4 className="text-xl mb-5">Automated Processing</h4>
                                    <p className="w-[80%] mx-auto text-lg leading-relaxed md:leading-relaxed text-[#19352DB2] font-camptonthin">
                                        Simplify PAYE, WHT, and bill payments with accurate calculations and real-time updates.
                                    </p>
                                </div>
                                <div className="py-12 px-5">
                                    <Image src={TransparentIcon} alt="woman smiling" className="mx-auto mb-14" />
                                    <h4 className="text-xl mb-5">Transparent Reporting</h4>
                                    <p className="w-[80%] mx-auto text-lg leading-relaxed md:leading-relaxed text-[#19352DB2] font-camptonthin">
                                        Access detailed transaction records and compliance reports at your fingertips.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-24 pb-36 w-full bg-dark mt-24 government">
                        <div className="w-[75%] mx-auto text-center">
                            <h3 className="text-6xl leading-tight md:leading-tight text-white mb-5">
                                Designed For Seamless Integration With Government System
                            </h3>
                            <p className="text-white text-2xl w-[70%] mx-auto font-camptonthin max-w-[744px] mb-5">
                                Simplify tax compliance with automated calculations, reporting, and submissions.
                            </p>
                            <Link href="/auth/signup" className="block w-max mx-auto text-sm px-10 py-4 bg-primary rounded-xl">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </>
            </Layout>
        </div>
    )
}

export default TaxAndGovernmentPage;