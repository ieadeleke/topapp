import Layout from "@/components/layout";
import Image from "next/image";
import Vector from "@/assets/images/vector.svg";
import TaxIcon from "@/assets/images/icons/tax.svg";
import WomanSmiling from "@/assets/images/woman.png";
import Link from "next/link";



const PaymentGatewayPage = () => {
    return (
        <div className="bg-dark relative">
            <Layout navPosition="fixed" whiteNav={true}>
                <>
                    <div className="px-5 md:px-0 pt-44 pb-20 text-center relative overflow-hidden">
                        <div className="z-30 relative ">
                            <h3 className="text-white text-4xl md:text-7xl">
                                Use Pay4it To Pay For It
                            </h3>
                            <div className="mt-4 md:mt-7 mb-10">
                                <p className="text-white text-xl mt-7 font-camptonthin">
                                    Pay, Receive, and Manage Funds Effortlessly with Pay4It Wallet
                                </p>
                            </div>
                            <Link href="/auth/signup" className="bg-white text-[#1B1B1B] font-satoshibold w-max mx-auto rounded-full py-4 px-8 text-base">Get Started</Link>
                        </div>
                    </div>
                    <div className="z-30 relative bg-white py-20 pb-28 rounded-t-[100px] md:rounded-t-[200px]">
                        <div className="px-5 md:px-0 md:w-[60%] 3xl:w-[57%] 4xl:w-[46%] mx-auto">
                            <h3 className="font-campton text-3xl md:text-5xl mb-3 md:mb-7 mx-auto text-center leading-tight max-w-[1140px]">
                                Powering Seamless Payments for Businesses & Government
                            </h3>
                            <p className="text-base md:text-xl text-black opacity-70 md:leading-relaxed leading-loose font-satoshiregular w-max-[1104px] mx-auto text-center">
                                Enable smooth and secure transactions with Pay4It&apos;s robust payment gateway. Whether you&apos;re a business or a government agency, our solution ensures effortless payments with real-time processing, multi-channel support, and seamless API integration. Accept payments via cards, bank transfers, USSD, and mobile wallets—all with top-tier security and compliance.
                            </p>
                        </div>
                        <div className="px-5 md:px-0 md:w-[80%] 3xl:w-[75%] 4xl:w-[60%] mt-14 w-max-[1150px] mx-auto">
                            <div className="flex flex-col md:grid grid-cols-3 gap-4">
                                <div className="border border-solid border-[#EBF3EE] hr-benefits px-5 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="w-[90%] text-2xl text-[#0A4020] mb-5 min-h-[80px] leading-relaxed md:leading-relaxed">Simplify Your Payments with Pay4It</h4>
                                    <p className="text-sm text-black opacity-70 md:leading-loose leading-loose font-campton w-max-[1104px]">
                                        No more stress with bill payments! Use Pay4It to pay for electricity, internet, government taxes, and more quickly and securely. Whether you&apos;re a business or an individual, we&apos;ve got you covered.
                                    </p>
                                </div>
                                <div className="border border-solid border-[#EBF3EE] hr-benefits px-5 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-xl text-[#0A4020] mb-5 min-h-[80px] leading-relaxed md:leading-relaxed">Government & Utility Bills</h4>
                                    <p className="text-sm text-black opacity-70 md:leading-loose leading-loose font-satoshiregular w-max-[1104px]">
                                        Pay in Seconds! <br />
                                        With Pay4It, you can instantly pay for electricity, water, internet, TV subscriptions, and government levies from one easy-to-use platform. Fast, secure, and hassle-free!
                                    </p>
                                </div>
                                <div className="border border-solid border-[#EBF3EE] hr-benefits px-5 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-xl text-[#0A4020] mb-5 min-h-[80px] leading-relaxed md:leading-relaxed">Automate Your Payments with <br /> Pay4It APIs</h4>
                                    <p className="text-sm text-black opacity-70 md:leading-loose leading-loose font-satoshiregular w-max-[1104px]">
                                        Integrate Pay4It&apos;s powerful APIs into your existing software to automate payroll, tax remittance, utility payments, and more. No more manual processing, just seamless transactions!
                                    </p>
                                </div>
                                <div className="border border-solid border-[#EBF3EE] hr-benefits px-5 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-xl text-[#0A4020] mb-5 min-h-[80px] leading-relaxed md:leading-relaxed">Business & Government <br /> Transactions Made Easy</h4>
                                    <p className="text-sm text-black opacity-70 md:leading-loose leading-loose font-satoshiregular w-max-[1104px]">
                                        From PAYE and withholding tax to business licenses and custom duties, Pay4It ensures secure, real-time transactions. Focus on your business while we handle the payments.
                                    </p>
                                </div>
                                <div className="border border-solid border-[#EBF3EE] hr-benefits px-5 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-xl text-[#0A4020] mb-5 min-h-[80px] leading-relaxed md:leading-relaxed">One Platform, Endless <br /> Payment Possibilities</h4>
                                    <p className="text-sm text-black opacity-70 md:leading-loose leading-loose font-satoshiregular w-max-[1104px]">
                                        Electricity, internet, taxes, fees—whatever you need to pay, Pay4It makes it seamless. Enjoy fast transactions, secure processing, and instant confirmations. Pay with ease today!
                                    </p>
                                </div>
                                <div className="border border-solid border-[#EBF3EE] hr-benefits px-5 py-10 rounded-3xl">
                                    <Image src={TaxIcon} alt="vector" className="mb-5" />
                                    <h4 className="text-xl text-[#0A4020] mb-5 min-h-[80px] leading-relaxed md:leading-relaxed">Integrate Pay4It into Your <br /> Software for Seamless Transactions</h4>
                                    <p className="text-sm text-black opacity-70 md:leading-loose leading-loose font-satoshiregular w-max-[1104px]">
                                        Enhance your business operations with Pay4It&apos;s API! <br /> Easily integrate payments, tax deductions, and bill processing into your software for a truly automated experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:grid grid-cols-2 gap-16 3xl:gap-20 4xl:gap-24 items-center mt-20 md:mt-28 px-5 md:px-0 md:w-[75%] 3xl:w-[75%] 4xl:w-[60%] w-max-[1320px] mx-auto">
                            <div>
                                <Image src={WomanSmiling} alt="woman smiling" className="max-w-[590px] w-full" />
                            </div>
                            <div>
                                <h4 className="text-3xl md:text-5xl md:w-[85%] mb-5 leading-tight md:leading-tight font-satoshibold">The Future of Payments is Here</h4>
                                <p className="text-xl font-satoshiregular text-black md:w-[95%] leading-relaxed md:leading-relaxed opacity-70">
                                    Ditch the stress of late payments and manual processes. From utility bills to government bill, Pay4It ensures fast, secure, and seamless payments, so you can focus on what matters most.
                                </p>
                                <div className="mt-8">
                                    <ul className="flex flex-col gap-4 border-y border-solid border-[#E3E3E3] py-6">
                                        <li className="flex gap-2 items-center text-xl">Get started today and experience the ease of Pay4It!</li>
                                    </ul>
                                </div>
                                <Link href="/auth/signup" className="bg-dark block text-[#1B1B1B] font-satoshibold mt-10 w-max text-white rounded-full py-4 px-14 text-base">Get Started</Link>
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