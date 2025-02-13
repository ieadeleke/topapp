import Layout from "@/components/layout";
import MapImg from "@/assets/images/map.png";
import Image from "next/image";
import HeroImg from "@/assets/images/hr/hero.png";
import Hero1Img from "@/assets/images/hr/hero1.svg";
import Hero2Img from "@/assets/images/hr/hero2.svg";
import BottomImg from "@/assets/images/hr/bottom.svg";


const HRSolutionPage = () => {
    return (
        <div className="bg-white">
            <Layout>
                <div className="pb-28">
                    <div className="pt-10 px-20 max-w-[1814px] mx-auto">
                        <div className="flex items-center text-center">
                            <div className="w-[90%] mx-auto">
                                <div className="flex items-start justify-center gap-3">
                                    <Image src={Hero1Img} alt="hero image" className="w-[5%] mt-5" />
                                    <h2 className="text-7xl mb-5 leading-tight md:leading-tight">
                                        Say Goodbye to Manual <br /> Tax Remittance.
                                    </h2>
                                    <Image src={Hero2Img} alt="hero image" className="w-[5%] mt-5" />
                                </div>
                                <div className="w-[55%] mb-7 mx-auto">
                                    <p className="text-xl leading-relaxed md:leading-relaxed">
                                        Our solution ensures PAYE is submitted directly to the Lagos Inland Revenue Service (LIRS), eliminating delays and errors.
                                    </p>
                                </div>
                                <Image src={HeroImg} alt="hero image" className="mb-7" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FCFCFC]">
                        <div className="py-20">
                            <h3 className="text-[#1B1B1B] text-5xl w-[70%] text-center max-w-[1293px] leading-tight md:leading-tight mx-auto">
                                We are changing how businesses and individuals handle tax and bill payments.
                            </h3>
                            <div className="mt-4">
                                <p className="text-center max-w-[1389px] text-[#666666] w-[65%] mx-auto leading-relaxed md:leading-relaxed">
                                    With seamless integration capabilities, our API empowers businesses and third-party software providers to automate payment processes while ensuring compliance with government regulations.
                                </p>
                            </div>
                            <div className="pt-16 max-w-[1374px] w-[80%] mx-auto">
                                <div className="grid grid-cols-3 gap-7">
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Effortless Payroll Processing:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm mb-5">
                                            Automate employee salary calculations, ensuring accuracy and efficiency.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm">
                                            Save time with an intuitive system designed for businesses of all sizes.
                                        </p>
                                    </div>
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Effortless Payroll Processing:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm mb-5">
                                            Automate employee salary calculations, ensuring accuracy and efficiency.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm">
                                            Save time with an intuitive system designed for businesses of all sizes.
                                        </p>
                                    </div>
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Effortless Payroll Processing:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm mb-5">
                                            Automate employee salary calculations, ensuring accuracy and efficiency.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm">
                                            Save time with an intuitive system designed for businesses of all sizes.
                                        </p>
                                    </div>
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Effortless Payroll Processing:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm mb-5">
                                            Automate employee salary calculations, ensuring accuracy and efficiency.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm">
                                            Save time with an intuitive system designed for businesses of all sizes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9]">
                        <div className="py-20 px-28">
                            <div className="grid grid-cols-2 gap-32">
                                <div>
                                    <Image src={BottomImg} alt="hero image" className="" />
                                </div>
                                <div>
                                    <div className="px-14 mb-7 py-3 bg-primary w-max rounded-xl text-sm">
                                        Features
                                    </div>
                                    <h3 className="text-4xl leading-tight md:leading-tight w-[90%] max-w-[718px] mb-4">
                                        Powerful Features to Simplify Payroll Management
                                    </h3>
                                    <p className="text-[#666666] font-satoshiregular leading-loose md:leading-loose mb-4">
                                        Join thousands of businesses and professionals who trust Pay4it for their payroll processing. Get started today and experience seamless, efficient, and accurate payroll management.
                                    </p>
                                    <ul className="flex flex-col gap-5 mb-5">
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B]">
                                                Employee database with detailed records.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B]">
                                                Employee database with detailed records.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B]">
                                                Employee database with detailed records.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B]">
                                                Employee database with detailed records.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B]">
                                                Employee database with detailed records.
                                            </span>
                                        </li>
                                    </ul>
                                    <button className="text-white rounded-xl mt-5 bg-dark py-5 px-16">
                                        Start Journey
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default HRSolutionPage;