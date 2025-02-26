"use client";

import { GlobalActionContext } from "@/context/GlobalActionContext";
import { Profile } from "@/models/profile";
import { useFetchUser } from "@/utils/apiHooks/profile/useFetchUser";
import { capitalizeText } from "@/utils/formatters/capitalizeText"
import { Dropdown, message } from "antd";
import Link from "next/link";
import { useContext, useEffect, useState } from "react"

interface AccountHeroInterface {
    toggleActivateWallet: () => void
}

export const AccountHero = (props: AccountHeroInterface) => {

    const { error: userError, data: userFetchedData, fetchUser, isLoading } = useFetchUser();
    const { showSnackBar } = useContext(GlobalActionContext);

    const [userData, setUserData] = useState<Profile>({
        name: "",
        addedBy: "",
        email: "",
        firstName: "",
        isActive: false,
        lastName: "",
        loginCount: 0,
        loginDisabled: false,
        loginReTryTime: "",
        phoneNumber: "",
        userName: "",
        imgUrl: "",
        wallet: {
            _id: "",
            accountName: "",
            accountNumber: "",
            accountReference: "",
            availableBalance: 0,
            bankName: "",
            bookedBalance: 0,
            country: "",
            currency: "",
            dailyTransactionLimit: 0,
            email: "",
            maxBalance: 0,
            minBalance: 0,
            phoneNumber: "",
            previousBalance: 0,
            provider: "",
            providerCustomerId: "",
            status: "",
            tier: "",
            type: "",
            userId: "",
        }
    });

    useEffect(() => {
        if (userFetchedData) {
            setUserData(userFetchedData);
        }
    }, [userFetchedData]);

    useEffect(() => {
        if (userError) {
            showSnackBar({ severity: "error", message: userError });
        }
    }, [userError]);

    useEffect(() => {
        if (userFetchedData) {
            setUserData(userFetchedData);
        }
    }, [userFetchedData]);

    useEffect(() => {
        fetchUser();
    }, [])

    const items = [
        {
            key: '1',
            label: (
                <Link href="/payment/single" className="bg-transparent py-3">
                    Single Bill
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href="/payment/multiple" className="bg-transparent py-3">
                    Harmonized Bill
                </Link>
            ),
        }
    ]

    return <div className="account-hero h-64 justify-center rounded-3xl global-hero">
        <div className="flex h-full gap-5 px-6 py-6 justify-between">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <p className="text-sm text-white">Wallet Balance</p>
                    <h1 className="text-3xl mb-3 text-white font-bold leading-relaxed"><span className="text-sm">NGN</span>-</h1>
                </div>
                <div>
                    {/* <button className="text-sm text-black rounded-lg py-3 px-4 bg-primary flex items-center gap-2">Fund Wallet</button> */}
                </div>
            </div>
            <div>
                {
                    isLoading ? "" :
                        userFetchedData.isActive ? "" :
                            <button onClick={props.toggleActivateWallet} className="text-sm text-black rounded-lg py-3 px-4 bg-primary flex items-center gap-2">Activate Wallet</button>
                }
            </div>
            {/* <div>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                >
                    <button className="bg-white px-8 py-3 text-base rounded-xl">Make Payment</button>
                </Dropdown>
            </div> */}
        </div>
    </div>
}