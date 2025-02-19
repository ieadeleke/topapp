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
                                <p className="text-white font-satoshilight leading-normal md:leading-normal text-2xl opacity-90 mb-8">
                                    Our platform provides seamless payment gateway solutions, wallet services, tax APIs, and HR solutions, all designed to make financial transactions effortless and secure.
                                </p>
                                <div className="py-3 px-10 font-satoshiregular flex gap-6 w-max items-center border-2 border-white border-solid text-white text-lg rounded-full">
                                    Let&apos;s Talk <FaArrowRightLong />
                                </div>
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
                                    <div className="md: size-[50px] size-[70px] rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                        <Image src={QuoteImg} alt="quote icons" className="w-max h-max" />
                                    </div>
                                </div>
                                <p className="text-white leading-loose md:leading-loose text-lg md:text-3xl">
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
                        <div className="flex items-center justify-between px-16">
                            <div>
                                <Image src={UsePayImg} alt="pay for it" className="w-auto md:w-max max-w-[818px]" />
                            </div>
                            <div></div>
                            <div>
                                <div className="flex gap-8">
                                    <button className="bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                                        <div className="size-12 bg-dark rounded-full flex items-center justify-center">
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
                    <div className="px-20 py-20">
                        <div className="mb-20 flex justify-between items-center">
                            <h3 className="font-campton text-4xl leading-tight">
                                Why Choose Pay4it for your <br /> ___________ Needs?
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
                        <div className="pt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
                            <div className="grid grid-cols-1/1.5/1.5">
                                <div>
                                    <h3 className="text-lg font-camptonsemi">01</h3>
                                </div>
                                <div>
                                    <div className="w-[60%] pb-20">
                                        <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                                        <p className="text-sm leading-loose md:leading-loose">
                                            Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full bg-primary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
                            <div className="grid grid-cols-1/1.5/1.5">
                                <div>
                                    <h3 className="text-lg font-camptonsemi">02</h3>
                                </div>
                                <div>
                                    <div className="w-[60%] pb-1">
                                        <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                                        {/* <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full bg-primary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
                            <div className="grid grid-cols-1/1.5/1.5">
                                <div>
                                    <h3 className="text-lg font-camptonsemi">03</h3>
                                </div>
                                <div>
                                    <div className="w-[60%] pb-1">
                                        <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                                        {/* <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full bg-primary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
                            <div className="grid grid-cols-1/1.5/1.5">
                                <div>
                                    <h3 className="text-lg font-camptonsemi">04</h3>
                                </div>
                                <div>
                                    <div className="w-[60%] pb-1">
                                        <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                                        {/* <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="h-full w-full bg-primary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        </div>
    )
}

export default AboutPage;