"use client";

import APIIcon from "@/assets/images/account/icons/api.svg";

import AccountLayout from "@/components/account/layout";
import useFetchWalletTransactions from "@/utils/apiHooks/wallets/useFetchWalletTransactions";

import { useContext, useEffect, useState } from "react";
import type { MenuProps } from 'antd';
import { HiOutlineUser } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { UpdatePassword } from "@/components/account/activity/settings/UpdatePassword";
import { EditProfile } from "@/components/account/activity/settings/EditProfile";
import { capitalizeText } from "@/utils/formatters/capitalizeText";
import UserContext from "@/context/UserContext";


const Dashboard = () => {

    const [currentView, setCurrentView] = useState("profile");

    const { user } = useContext(UserContext)

    return (
        <div>
            <AccountLayout>
                <>
                    <div>
                        <div className="pb-20">
                            <div className="border border-solid border-[#F0F0F0] pb-20 mb-20 rounded-b-[20px]">
                                <div className="h-[8rem] w-full bg-[#F0F0F0]"></div>
                                <div className="px-12 -mt-20">
                                    <div className="flex items-end gap-10">
                                        <div className="size-48 rounded-full bg-[#F5F5F5]"></div>
                                        <div className="pb-5">
                                            <h4 className="text-2xl mb-3 mt-10">
                                                {capitalizeText(user?.firstName ? user?.firstName : "")} {capitalizeText(user?.lastName ? user?.lastName : "")}
                                            </h4>
                                            <p className="text-[#003235] text-sm">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-12 mt-10">
                                    <div className="w-max mx-auto mb-10 flex items-center gap-4">
                                        <div onClick={() => setCurrentView("profile")} className={`cursor-pointer px-14 py-2 flex items-center gap-2 ${currentView === "profile" ? "border-b-2 border-[#003235] border-solid" : ""}`}>
                                            <HiOutlineUser className="text-2xl" />
                                            <span className="font-camptonthin text-sm">My Profile</span>
                                        </div>
                                        <div onClick={() => setCurrentView("password")} className={`cursor-pointer px-14 py-2 flex items-center gap-2 ${currentView === "password" ? "border-b-2 border-[#003235] border-solid" : ""}`}>
                                            <IoSettingsOutline className="text-2xl" />
                                            <span className="font-camptonthin text-sm">Password</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        {currentView === "profile" ?
                                            <EditProfile />
                                            :
                                            <UpdatePassword />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </AccountLayout>
        </div>
    )
}

export default Dashboard;