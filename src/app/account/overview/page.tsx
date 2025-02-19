"use client";

import { AccountHero } from "@/components/account/hero";
import AccountLayout from "@/components/account/layout";

import Hero1Img from "@/assets/images/account/icons/hero1.svg";
import Hero2Img from "@/assets/images/account/icons/hero2.svg";
import Hero3Img from "@/assets/images/account/icons/hero3.svg";

import Image from "next/image";
import ActivateWallet from "@/components/account/activity/activate-wallet";
import { useState } from "react";

const Dashboard = () => {

    const [activateWalletModal, setActivateWalletModal] = useState<boolean>(false);

    const toggleActivateWallet = () => setActivateWalletModal(!activateWalletModal);

    return (
        <div>
            <AccountLayout>
                <>
                    <div>
                        <AccountHero toggleActivateWallet={toggleActivateWallet} />
                        {/* <div className="mt-6 grid grid-cols-4 gap-6">
                            <div className="border border-solid border-[#EFEFEF] rounded-[12px] py-7 px-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-14 bg-[#FFFBEB] rounded-[12px]"></div>
                                    <div>
                                        <h5 className="text-[#666666] text-[13px]">Total transaction</h5>
                                        <h3 className="text-lg text-[#1B1B1B]">₦1,234.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid border-[#EFEFEF] rounded-[12px] py-7 px-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-14 bg-[#FFFBEB] rounded-[12px]"></div>
                                    <div>
                                        <h5 className="text-[#666666] text-[13px]">Total transaction</h5>
                                        <h3 className="text-lg text-[#1B1B1B]">₦1,234.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid border-[#EFEFEF] rounded-[12px] py-7 px-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-14 bg-[#FFFBEB] rounded-[12px]"></div>
                                    <div>
                                        <h5 className="text-[#666666] text-[13px]">Total transaction</h5>
                                        <h3 className="text-lg text-[#1B1B1B]">₦1,234.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid border-[#EFEFEF] rounded-[12px] py-7 px-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-14 bg-[#FFFBEB] rounded-[12px]"></div>
                                    <div>
                                        <h5 className="text-[#666666] text-[13px]">Total transaction</h5>
                                        <h3 className="text-lg text-[#1B1B1B]">₦1,234.00</h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="mt-6 grid grid-cols-3 gap-6">
                            <div className="bg-[#F5F5F5] rounded-[12px] py-7 px-6">
                                <div className="grid grid-cols-2 justify-between items-center gap-10">
                                    <div className="flex items-center gap-3">
                                        <div className="h-16 w-16 bg-black rounded-[12px] min-w-[51px] flex items-center justify-center">
                                            <Image src={Hero2Img} alt="filter icon" className="" />
                                        </div>
                                        <div>
                                            <h5 className="text-[#1B1B1B] text-base">Utility Bills</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="w-full rounded-[12px] p-3 text-sm text-[#1B1B1B] border border-solid border-[#1B1B1B]">Pay Bills</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#F5F5F5] rounded-[12px] py-7 px-6">
                                <div className="grid grid-cols-2 justify-between items-center gap-10">
                                    <div className="flex items-center gap-3">
                                        <div className="h-16 w-16 bg-black rounded-[12px] min-w-[51px] flex items-center justify-center">
                                            <Image src={Hero2Img} alt="filter icon" className="" />
                                        </div>
                                        <div>
                                            <h5 className="text-[#1B1B1B] text-base">Government Bills</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="w-full rounded-[12px] p-3 text-sm text-[#1B1B1B] border border-solid border-[#1B1B1B]">Pay Bills</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#F5F5F5] rounded-[12px] py-7 px-6">
                                <div className="grid grid-cols-2 justify-between items-center gap-10">
                                    <div className="flex items-center gap-3">
                                        <div className="h-16 w-16 bg-black rounded-[12px] min-w-[51px] flex items-center justify-center">
                                            <Image src={Hero3Img} alt="filter icon" className="w-[30px]" />
                                        </div>
                                        <div>
                                            <h5 className="text-[#1B1B1B] text-base">Utility Bills</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="w-full rounded-[12px] p-3 text-sm text-[#1B1B1B] border border-solid border-[#1B1B1B]">Pay Bills</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActivateWallet toggleActivateWallet={toggleActivateWallet} open={activateWalletModal} />
                </>
            </AccountLayout>
        </div>
    )
}

export default Dashboard;