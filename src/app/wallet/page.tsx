import Link from "next/link";
import HeroImg from "@/assets/images/wallet/wallet.svg";
import BlockImg from "@/assets/images/wallet/hand.png";
import GlobalImg from "@/assets/images/icons/global.svg";
import MultipleImg from "@/assets/images/icons/multiple.svg";
import TaxImg from "@/assets/images/icons/online.svg";
import AbstractImg from "@/assets/images/wallet/abstract.png";
import Image from "next/image";
import Layout from "@/components/layout";
import Company1Img from "@/assets/images/companies/_6.svg";
import Company2Img from "@/assets/images/companies/_7.svg";
import Company3Img from "@/assets/images/companies/_8.svg";
import Company4Img from "@/assets/images/companies/_9.svg";
import Company5Img from "@/assets/images/companies/_10.svg";

const WalletPage = () => {
    return (
        <div>
            <Layout>
                <>
                    <div className="pt-10 px-5 md:px-32 flex flex-col md:grid grid-cols-2 gap-14 max-w-[1492px] mx-auto">
                        <div>
                            <h3 className="text-4xl md:text-6xl mb-3">
                                Pay, Receive, and Manage Funds with Us
                            </h3>
                            <p className="text-sm md:text-lg mb-4 md:mb-7 text-[#1B1B1B] leading-loose md:leading-loose">
                                Unlock a world of seamless transactions with the Pay4It Wallet. Designed for businesses, government agencies, and individuals, our digital wallet lets you make secure payments, receive funds, and manage your finances—all in one place.
                            </p>
                            <div className="flex gap-5">
                                <Link href="/auth/signup" className="bg-[#1F5E59] py-4 px-8 text-white rounded-[10px]">Get Started</Link>
                            </div>
                            <div className="flex items-center gap-2 mt-7">
                                <p className="text-black font-satoshiregular border-b-2 border-solid border-black text-lg">Join 500K+ Transactions </p>
                                <span className="text-black opacity-40 text-lg">Completed</span>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src={HeroImg} alt="people smiling" className="w-full h-full" />
                            <Image src={AbstractImg} alt="people smiling" className="absolute left-0 top-20" />
                        </div>
                    </div>
                    <div className="py-5 mt-10 bg-primary w-full">
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
                    <div className="flex flex-col md:grid grid-cols-2 md:items-center px-5 md:px-24 gap-5 md:gap-20 mt-20 md:mt-5 max-w-[1492px] mx-auto">
                        <div>
                            <div>
                                <div className="md:w-[80%]">
                                    <h3 className="text-3xl md:text-5xl mb-3 md:mb-6 font-satoshibold leading-tight md:leading-tight text-[#222222]">
                                        Digital Wallet for Secure Transactions
                                    </h3>
                                    <p className="w-[100%] text-sm md:text-xl mb-5 text-black opacity-80 font-camptonthin leading-loose md:leading-loose">
                                        Whether you&apos;re an individual or a business, our wallet solution makes financial transactions effortless.
                                    </p>
                                    <Link href="/auth/signup" className="bg-[#202020] text-base py-4 px-10 rounded-full font-camptonthin text-white">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={BlockImg} alt="a big block" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="wallet-bg">
                        <div className="px-5 md:px-24 py-28 mt-28 max-w-[1583px] mx-auto">
                            <div className="flex justify-between items-end max-w-[1492px] mx-auto">
                                <div>
                                    <h2 className="text-3xl md:text-6xl mb-3 md:mb-5 font-satoshibold text-[#222]">
                                        Wallet Features
                                    </h2>
                                    <p className="text-black text-xl opacity-70 font-satoshilight">
                                        Manage your money effortlessly with Pay4It&apos;s Wallet Services.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-20 flex flex-col md:grid grid-cols-3 gap-8">
                                <div className="bg-white py-10 rounded-xl px-5 md:px-12">
                                    <Image src={GlobalImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-xl md:text-2xl text-[#222222] mb-3">Virtual Wallets</h4>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose font-camptonthin">
                                        Load your wallet via bank transfer, card payment, or direct deposit and pay for bills, salaries, government levies, and business expenses effortlessly.
                                    </p>
                                </div>
                                <div className="bg-white py-10 rounded-xl px-5 md:px-12">
                                    <Image src={MultipleImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-xl md:text-2xl text-[#222222] mb-3">Multi-Currency Support</h4>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose font-camptonthin">
                                        Manage and transact in different currencies with ease. Send and receive money in other currencies without hassle.
                                    </p>
                                </div>
                                <div className="bg-white py-10 rounded-xl px-5 md:px-12">
                                    <Image src={TaxImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-xl md:text-2xl text-[#222222] mb-3">Bank Transfers</h4>
                                    <p className="text-black opacity-70 leading-loose md:leading-loose font-camptonthin">
                                        Transfer funds from your Pay4It wallet to any bank account instantly. Move your money from your wallet to your preferred bank account with ease
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        </div>
    )
}

export default WalletPage;