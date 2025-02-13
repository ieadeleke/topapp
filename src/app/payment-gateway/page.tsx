import Layout from "@/components/layout";
import Image from "next/image";
import Vector from "@/assets/images/vector.svg";
import TaxIcon from "@/assets/images/icons/tax.svg";
import WomanSmiling from "@/assets/images/woman.svg";
import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { FaCheck } from "react-icons/fa6";



const PaymentGatewayPage = () => {
    return (
        <div className="bg-dark relative">
            <Layout navPosition="fixed">
                <>
                    <div className="py-44 text-center relative overflow-hidden">
                        <div className="z-50 relative ">
                            <h3 className="text-white text-7xl">
                                Use Pay4it To Pay For It
                            </h3>
                            <div className="mt-7">
                                <p className="text-white">
                                    Pay, Receive, and Manage Funds Effortlessly with Pay4It Wallet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="z-40 relative bg-white py-20 pb-28 rounded-t-[200px]">
                        <div className="w-[60%] mx-auto">
                            <h3 className="font-campton text-5xl mb-4 mx-auto text-center leading-tight max-w-[1140px]">
                                Powering Seamless Payments for Businesses & Government
                            </h3>
                            <p className="text-xl text-black opacity-70 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto text-center">
                                Enable smooth and secure transactions with Pay4It&apos;s robust payment gateway. Whether you&apos;re a business or a government agency, our solution ensures effortless payments with real-time processing, multi-channel support, and seamless API integration. Accept payments via cards, bank transfers, USSD, and mobile wallets—all with top-tier security and compliance.
                            </p>
                        </div>
                        <div className="w-[75%] mt-14 w-max-[1320px] mx-auto">
                            <div className="grid grid-cols-3 gap-7">
                                <div className="border border-solid border-[#EBF3EE] bg-[#DFFF5E] px-10 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-lg text-[#0A4020] mb-5">Tax Preparation</h4>
                                    <p className="text-lg text-black opacity-70 mb-7 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowIcon} alt="vector" className="" />
                                </div>
                                <div className="border border-solid border-[#EBF3EE] px-10 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-lg text-[#0A4020] mb-5">Tax Preparation</h4>
                                    <p className="text-lg text-black opacity-70 mb-7 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowIcon} alt="vector" className="" />
                                </div>
                                <div className="border border-solid border-[#EBF3EE] px-10 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-lg text-[#0A4020] mb-5">Tax Preparation</h4>
                                    <p className="text-lg text-black opacity-70 mb-7 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowIcon} alt="vector" className="" />
                                </div>
                                <div className="border border-solid border-[#EBF3EE] px-10 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-lg text-[#0A4020] mb-5">Tax Preparation</h4>
                                    <p className="text-lg text-black opacity-70 mb-7 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowIcon} alt="vector" className="" />
                                </div>
                                <div className="border border-solid border-[#EBF3EE] px-10 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-lg text-[#0A4020] mb-5">Tax Preparation</h4>
                                    <p className="text-lg text-black opacity-70 mb-7 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowIcon} alt="vector" className="" />
                                </div>
                                <div className="border border-solid border-[#EBF3EE] px-10 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-lg text-[#0A4020] mb-5">Tax Preparation</h4>
                                    <p className="text-lg text-black opacity-70 mb-7 md:leading-relaxed leading-relaxed font-satoshiregular w-max-[1104px] mx-auto">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowIcon} alt="vector" className="" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 items-center mt-28 w-[75%] w-max-[1320px] mx-auto">
                            <div>
                                <Image src={WomanSmiling} alt="woman smiling" className="" />
                            </div>
                            <div>
                                <h4 className="text-5xl w-[85%] mb-5 leading-tight md:leading-tight">15k+ Client using Our Services.</h4>
                                <p className="text-xl font-satoshiregular text-black w-[85%] leading-relaxed md:leading-relaxed opacity-70">
                                    Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential
                                </p>
                                <div className="mt-10">
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex gap-2 items-center"><FaCheck /> Mobile app easy management & access.</li>
                                        <li className="flex gap-2 items-center"><FaCheck /> Ton&apos;s of features for handle the card easily & safely</li>
                                        <li className="flex gap-2 items-center"><FaCheck /> strong security system.</li>
                                    </ul>
                                </div>
                                <div className="mt-10 pt-10 border-t border-solid border-[#DDDDDD] w-max">
                                    <div className="grid grid-cols-2 gap-40">
                                        <div>
                                            <h3 className="text-5xl text-dark mb-5">$1.2x</h3>
                                            <p className="text-black opacity-70 text-sm font-satoshiregular">Rapid wealth grow</p>
                                        </div>
                                        <div>
                                            <h3 className="text-5xl text-dark mb-5">$1.3b+</h3>
                                            <p className="text-black opacity-70 text-sm font-satoshiregular">Rapid wealth grow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
            <div className="z-10 absolute h-full w-full inset-0 bg-black opacity-30"></div>
            <Image src={Vector} alt="vector" className="absolute top-0 left-0 opacity-60" />
        </div>
    )
}

export default PaymentGatewayPage;