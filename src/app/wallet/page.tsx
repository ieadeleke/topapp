import Link from "next/link";
import HeroImg from "@/assets/images/wallet/hero.svg";
import BlockImg from "@/assets/images/wallet/block.svg";
import CardImg from "@/assets/images/wallet/card.svg";
import GlobalImg from "@/assets/images/icons/global.svg";
import MultipleImg from "@/assets/images/icons/multiple.svg";
import TaxImg from "@/assets/images/icons/online.svg";
import ArrowImg from "@/assets/images/icons/arrow.svg";
import Image from "next/image";
import Layout from "@/components/layout";

const WalletPage = () => {
    return (
        <div>
            <Layout>
                <>
                    <div className="pt-10 px-32 grid grid-cols-2 gap-14 max-w-[1492px] mx-auto">
                        <div>
                            <h3 className="text-6xl mb-5">
                                Pay, Receive, and Manage Funds with Us
                            </h3>
                            <p className="text-lg mb-7 text-[#1B1B1B] leading-loose md:leading-loose">
                                Unlock a world of seamless transactions with the Pay4It Wallet. Designed for businesses, government agencies, and individuals, our digital wallet lets you make secure payments, receive funds, and manage your finances—all in one place.
                            </p>
                            <div className="flex gap-5">
                                <Link href="" className="bg-[#1F5E59] py-4 px-8 text-white rounded-[10px]">Contact</Link>
                                <Link href="" className="bg-transparent border-2 border-solid border-[#1F5E59] py-4 px-8 text-[#1F5E59] rounded-[10px]">Let&apos;s Get Started</Link>
                            </div>
                        </div>
                        <div>
                            <Image src={HeroImg} alt="people smiling" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="py-14 mt-10 w-full bg-[#D3FFB4]"></div>
                    <div className="grid grid-cols-2/1 px-24 gap-20 mt-20 max-w-[1492px] mx-auto">
                        <div>
                            <div>
                                <div className="w-[60%]">
                                    <h4 className="text-[#003235] text-base font-satoshi">Visa & Mastercard</h4>
                                    <h3 className="text-5xl mb-4 font-satoshibold leading-tight md:leading-tight text-[#222222]">
                                        Digital Wallet for Secure Transactions
                                    </h3>
                                    <p className="w-[70%] text-xl mb-5 text-black opacity-80 font-satoshilight leading-relaxed md:leading-relaxed">
                                        Stay updated with market trends & make informed investment decisions.
                                    </p>
                                    <button className="bg-black text-base py-4 px-14 font-ClashDisplayRegular rounded-full uppercase text-white">Apply Now</button>
                                </div>
                                <div className="relative mt-20">
                                    <Image src={BlockImg} alt="a big block" className="w-full h-full" />
                                    <Image src={CardImg} alt="cards" className="absolute -right-[120px] -top-[400px] h-[700px]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="pb-14 border-b-2 border-solid border-[#DFDFDF]">
                                <h4 className="text-lg mb-3 mt-2">Visa</h4>
                                <p className="text-[#666] md:w-[70%] max-w-[475.88px] mb-14 text-satoshilight leading-loose md:leading-loose">
                                    Pay, Receive, and Manage Funds Effortlessly with Pay4It Wallet
                                </p>
                                <div>
                                    <div className="w-max mb-2">
                                        <h4 className="text-7xl font-satoshibold">1.75m</h4>
                                        <div className="py-2 bg-[#EEEEEE] -mt-5 w-full"></div>
                                    </div>
                                    <p className="text-[#666] text-satoshilight">
                                        Total Active User
                                    </p>
                                </div>
                            </div>
                            <div className="py-14">
                                <h4 className="text-lg mb-3">Mastercard</h4>
                                <p className="text-[#666] md:w-[70%] max-w-[475.88px] mb-14 text-satoshilight leading-loose md:leading-loose">
                                    Simplify payments and gain access to exclusive perks with Mastercard
                                </p>
                                <div>
                                    <div className="w-max mb-2">
                                        <h4 className="text-7xl font-satoshibold">718k</h4>
                                        <div className="py-2 bg-[#EEEEEE] -mt-5 w-full"></div>
                                    </div>
                                    <p className="text-[#666] text-satoshiregular">
                                        Total Active User
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet-bg">
                        <div className="px-24 py-28 mt-10 max-w-[1583px">
                            <div className="flex justify-between items-end max-w-[1492px] mx-auto">
                                <div>
                                    <h2 className="text-6xl mb-5 font-satoshibold text-[#222]">
                                        Card Features
                                    </h2>
                                    <p className="text-black text-xl opacity-70 font-satoshilight">
                                        Digital agency with top rated talented people provide quality
                                    </p>
                                </div>
                                <div>
                                    <button className="bg-black py-2 px-8 font-ClashDisplayRegular text-white uppercase text-sm rounded-full">Learn More</button>
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-3 gap-8">
                                <div className="bg-white py-10 rounded-xl px-14">
                                    <Image src={GlobalImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-2xl text-[#222222] mb-3">Global Payment</h4>
                                    <p className="text-black mb-5 opacity-70 leading-loose min-h-[120px] md:leading-loose font-satoshilight">
                                        Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.
                                    </p>
                                    <Image src={ArrowImg} alt="arrow" className="" />
                                </div>
                                <div className="bg-white py-10 rounded-xl px-14">
                                    <Image src={MultipleImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-2xl text-[#222222] mb-3">Global Payment</h4>
                                    <p className="text-black mb-5 opacity-70 leading-loose min-h-[120px] md:leading-loose font-satoshilight">
                                        Use receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                    <Image src={ArrowImg} alt="arrow" className="" />
                                </div>
                                <div className="bg-white py-10 rounded-xl px-14">
                                    <Image src={TaxImg} alt="global icon" className="w-[60px] h-[58px] mb-7" />
                                    <h4 className="text-2xl text-[#222222] mb-3">Global Payment</h4>
                                    <p className="text-black mb-5 opacity-70 leading-loose min-h-[120px] md:leading-loose font-satoshilight">
                                        Access your money through ATMs or make online and in-store purchases with a prepaid card.
                                    </p>
                                    <Image src={ArrowImg} alt="arrow" className="" />
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