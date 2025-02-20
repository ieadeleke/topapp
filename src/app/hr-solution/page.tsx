import Layout from "@/components/layout";
import Image from "next/image";
import HeroImg from "@/assets/images/hr/hero.png";
import Hero1Img from "@/assets/images/hr/hero1.svg";
import Hero2Img from "@/assets/images/hr/hero2.svg";
import BottomImg from "@/assets/images/hr/bottom.svg";

import GirlImg from "@/assets/images/hr/girl-base.png";


const HRSolutionPage = () => {
    return (
        <div className="bg-white">
            <Layout>
                <div className="pb-28">
                    <div className="pt-10 px-5 md:px-20 max-w-[1814px] mx-auto">
                        <div className="flex items-center text-center">
                            <div className="w-[90%] mx-auto">
                                <div className="flex items-start justify-center gap-3">
                                    {/* <Image src={Hero1Img} alt="hero image" className="w-[5%] mt-5" /> */}
                                    <h2 className="text-7xl mb-5 leading-tight md:leading-tight">
                                        Say Goodbye to Manual <br /> Tax Remittance.
                                    </h2>
                                    <Image src={Hero2Img} alt="hero image" className="w-[5%] mt-5" />
                                </div>
                                <div className="w-[50%] mb-7 mx-auto">
                                    <p className="text-xl leading-relaxed md:leading-relaxed font-satoshiregular text-[#1B1B1B]">
                                        Our solution ensures PAYE is submitted directly to the Lagos Inland Revenue Service (LIRS), eliminating delays and errors.
                                    </p>
                                </div>
                                <Image src={HeroImg} alt="hero image" className="mb-7" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-20 relative">
                            <div className="max-w-[1293px] mx-auto">
                                <h3 className="text-[#1B1B1B] text-5xl w-[80%] text-center max-w-[1293px] leading-tight md:leading-tight mx-auto">
                                    We are changing how businesses and individuals handle tax and bill payments.
                                </h3>
                                <div className="mt-4">
                                    <p className="text-center max-w-[1293px] text-[#666666] w-[90%] mx-auto leading-loose md:leading-loose">
                                        With seamless integration capabilities, our API empowers businesses and third-party software providers to automate payment processes while ensuring compliance with government regulations.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-28 max-w-[1374px] w-[80%] mx-auto">
                                <div className="grid grid-cols-3 gap-7 z-40 relative">
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Effortless Payroll Processing:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular mb-5">
                                            Automate employee salary calculations, ensuring accuracy and efficiency.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular">
                                            Save time with an intuitive system designed for businesses of all sizes.
                                        </p>
                                    </div>
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Direct PAYE API Integration with LIRS:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular mb-5">
                                            Say goodbye to manual tax remittance.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular">
                                            Our solution ensures PAYE is submitted directly to the Lagos Inland Revenue Service (LIRS), eliminating delays and errors.
                                        </p>
                                    </div>
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Tax Calculation Made Simple:</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular mb-5">
                                            Automatically calculate PAYE, pension deductions, and other statutory taxes.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular">
                                            Stay compliant with Nigeria&apos;s tax laws, ensuring your business avoids penalties.
                                        </p>
                                    </div>
                                    <div className="bg-white px-7 py-10 border border-solid border-[#EFEFEF] rounded-3xl">
                                        <h4 className="text-xl mb-3">Transparent Reporting</h4>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular mb-5">
                                            Access detailed reports on employee salaries, tax deductions, and remittance statuses.
                                        </p>
                                        <p className="text-[#666666] leading-loose md:leading-loose text-sm font-satoshiregular">
                                            Monitor compliance with ease through our centralized dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <Image src={GirlImg} alt="girl image" className="max-h-[800px] min-h-[800px] w-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9]">
                        <div className="py-20 px-24">
                            <div className="grid grid-cols-2 items-center gap-32">
                                <div>
                                    <Image src={BottomImg} alt="hero image" className="w-max mx-auto" />
                                </div>
                                <div className="max-w-[718px]">
                                    <div className="px-14 mb-7 py-3 bg-primary w-max rounded-xl text-sm">
                                        Features
                                    </div>
                                    <h3 className="text-4xl leading-normal md:leading-normal w-[90%] max-w-[718px] mb-4">
                                        Powerful Features to Simplify Payroll Management
                                    </h3>
                                    <p className="text-[#666666] font-satoshiregular leading-loose md:leading-loose mb-4">
                                        Join thousands of businesses and professionals who trust Pay4it for their payroll processing. Get started today and experience seamless, efficient, and accurate payroll management.
                                    </p>
                                    <ul className="flex flex-col gap-5 mb-5 w-[666px]">
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
                                            <span className="text-base text-[#1B1B1B] font-satoshiregular">
                                                Automated salary calculation, including hours worked, overtime, bonuses, and deductions.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B] font-satoshiregular">
                                                Automatic tax calculation and deductions.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B] font-satoshiregular">
                                                Payroll scheduling and direct deposit features.
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="size-8 rounded-full bg-[#D3FFB4] flex items-center justify-center">
                                                <div className="size-3 rounded-full bg-[#003235]"></div>
                                            </span>
                                            <span className="text-base text-[#1B1B1B] font-satoshiregular">
                                                Electronic payslip generation and compliance with regulations.
                                            </span>
                                        </li>
                                    </ul>
                                    <a href="https://businex-waitlist.netlify.app/" target="_blank" className="block w-max mt-5 text-white rounded-xl bg-dark py-5 px-16">
                                        Start Journey
                                    </a>
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