import Layout from "@/components/layout";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

import LogoImg from "@/assets/images/logo.svg";
import LogoTextImg from "@/assets/images/about/logo-text.svg";
import UsePayImg from "@/assets/images/about/usepay.svg";
import TeamImg from "@/assets/images/about/team1.svg";

const AboutPage = () => {
    return (
        <div>
            <Layout navPosition="fixed">
                <>
                    <div className="about-hero flex items-center">
                        <div className="px-40 w-full">
                            <div className="max-w-[763px] w-[55%]">
                                <h3 className="leading-tight md:leading-tight mb-1 text-7xl text-white">
                                    Your¬ business Consultant &
                                    Solution.
                                </h3>
                                <p className="text-white font-satoshilight leading-tight md:leading-tight text-2xl opacity-90 mb-8">
                                    Our platform provides seamless payment gateway solutions, wallet services, tax APIs, and HR solutions, all designed to make financial transactions effortless and secure.
                                </p>
                                <div className="py-3 px-10 font-satoshiregular flex gap-6 w-max items-center border-2 border-white border-solid text-white text-lg rounded-full">
                                    Let&apos;s Talk <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-14 w-full bg-[#D3FFB4]"></div>
                    <div className="px-24 mt-20">
                        <div className="grid grid-cols-1/2 gap-8">
                            <div className="border rounded-[24px] border-solid border-[#D8D8D8] px-10 py-10">
                                <h4 className="text-2xl text-[#1B1B1B]">
                                    Our Values
                                </h4>
                                <ul className="mt-6 flex flex-col gap-5">
                                    <li className="flex items-center gap-4 font-camptonsemi text-lg"><span>&bull;</span>
                                        Transparency
                                    </li>
                                    <li className="flex items-center gap-4 font-camptonsemi text-lg"><span>&bull;</span> Efficiency</li>
                                    <li className="flex items-center gap-4 font-camptonsemi text-lg"><span>&bull;</span> Innovation</li>
                                    <li className="flex items-center gap-4 font-camptonsemi text-lg"><span>&bull;</span> Scalability</li>
                                </ul>
                            </div>
                            <div className="border rounded-[24px] border-solid border-[#D8D8D8] px-10 py-10">
                                <h4 className="text-3xl text-[#1B1B1B] mb-10">Our Vision</h4>
                                <p className="text-black opacity-60 text-xl leading-loose md:leading-loose">
                                    To be the trusted partner for businesses, governments, and individuals in delivering seamless financial solutions across Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark py-20 w-full mt-20">
                        <div className="flex items-center justify-between px-20">
                            <div>
                                <Image src={UsePayImg} alt="pay for it" className="w-max max-w-[818px]" />
                            </div>
                            <div></div>
                            <div>
                                <div className="flex gap-8">
                                    <button className="bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                                        <div className="size-16 bg-dark rounded-full flex items-center justify-center">
                                            <Image src={LogoImg} alt="logo" className="w-[50%]" />
                                        </div>
                                        <span className="pr-4">
                                            Get Started
                                        </span>
                                    </button>
                                    <button className="bg-transparent border-white border-2 rounded-full text-white py-2 px-12 flex items-center gap-3">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-28 bg-[#F3F3F3]">
                        <div className="max-w-[1172px] mx-auto">
                            <h4 className="text-2xl flex gap-2 text-[#080F10] items-center mb-10">
                                The amazing team behind
                                <Image src={LogoTextImg} alt="pay for it" className="w-auto h-[24px] max-w-[818px]" />
                            </h4>
                            <div className="grid grid-cols-3 gap-10">
                                <Image src={TeamImg} alt="team 1" className="w-full" />
                                <Image src={TeamImg} alt="team 1" className="w-full" />
                                <Image src={TeamImg} alt="team 1" className="w-full" />
                                <Image src={TeamImg} alt="team 1" className="w-full" />
                                <Image src={TeamImg} alt="team 1" className="w-full" />
                                <Image src={TeamImg} alt="team 1" className="w-full" />
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        </div>
    )
}

export default AboutPage;