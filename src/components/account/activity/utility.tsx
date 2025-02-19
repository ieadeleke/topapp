"use client";


import { Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Button from "../../elements/button";
import { useActivateUserWallet } from "@/utils/apiHooks/profile/useActivateWallet";
import SquareImg from "@/assets/images/account/icons/square.svg";

import BettingImg from "@/assets/images/account/utility/betting.svg";
import DataImg from "@/assets/images/account/utility/data.svg";
import JAMBImg from "@/assets/images/account/utility/jamb.svg";
import NetflixImg from "@/assets/images/account/utility/netflix.svg";
import LightImg from "@/assets/images/account/utility/light.svg";
import PhoneImg from "@/assets/images/account/utility/phone.svg";
import TvImg from "@/assets/images/account/utility/tv.svg";
import PowerImg from "@/assets/images/account/utility/power.svg";
import InvoiceImg from "@/assets/images/account/utility/invoice.svg";
import ReceiptImg from "@/assets/images/account/utility/receipt.svg";


import Image from "next/image";
import { useFetchAvailableBills } from "@/utils/apiHooks/profile/useFetchAvailableBills";

interface UtilityBillProps {
    // open: boolean;
    // toggleActivateWallet: () => void
}

const UtilityBillPayment = (props: UtilityBillProps) => {

    const validator = yup.object().shape({
        bvn: yup.string().required('Please enter bvn'),
        email: yup.string().email().required('Please enter your email'),
        phoneNumber: yup.string().required('Please enter your mobile number'),
        dob: yup.string().required('Please enter your date of birth'),
        address: yup.string().required('Please enter your address'),
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validator)
    });

    const { fetchAvailableBillOptions, data, isLoading, error } = useFetchAvailableBills();

    const [openMerchantModal, setOpenMerchantModal] = useState<boolean>(false);
    const [activeSelection, setActiveSelection] = useState<string>("single");
    const toggleMerchantModal = (): void => setOpenMerchantModal(!openMerchantModal);

    useEffect(() => {
        console.log("hee")
        const fetchAvailableBillPaymentOptions = () => {
            fetchAvailableBillOptions();
        }
        fetchAvailableBillPaymentOptions();
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
            // window.location.reload();
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            // window.location.reload();
        }
    }, [error]);


    return (
        <div>
            <div className="mb-20">
                <h4 className="text-[#1B1B1B] text-2xl capitalize mb-1 font-campton mb-5 mt-10">Utility Bills</h4>
                <div className="flex flex-wrap gap-7">
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                <Image src={PowerImg} alt="power" className="w-[50%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Buy Power</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#EDF1FC] flex items-center justify-center">
                                <Image src={PhoneImg} alt="phone" className="w-[35%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Buy Airtime</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#FFF6E4] flex items-center justify-center">
                                <Image src={DataImg} alt="phone" className="w-[60%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Buy Data</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#F4E2FF] flex items-center justify-center">
                                <Image src={ReceiptImg} alt="phone" className="w-[50%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Pay Taxes</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                <Image src={TvImg} alt="phone" className="w-[50%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Cable Tv</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <Image src={NetflixImg} alt="phone" className="size-16 mx-auto" />
                            <h4 className="text-[#1B1B1B] font-campton">Netflix</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                <Image src={BettingImg} alt="phone" className="w-[25%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Betting</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EBEBEB]">
                        <div className="flex flex-col gap-5">
                            <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                <Image src={InvoiceImg} alt="phone" className="w-[50%]" />
                            </div>
                            <h4 className="text-[#1B1B1B] font-campton">Invoice & Receipt</h4>
                        </div>
                    </div>
                    <div className="border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        <div className="flex flex-col gap-5">
                            <Image src={JAMBImg} alt="phone" className="size-16 mx-auto" />
                            <h4 className="text-[#1B1B1B] font-campton">Buy JAMB</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UtilityBillPayment;