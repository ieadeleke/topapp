"use client";


import { Input, Modal, Spin } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Button from "../../elements/button";
import { useActivateUserWallet } from "@/utils/apiHooks/profile/useActivateWallet";

import { PiArrowArcLeftBold } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi2";

import BillPayment from "./billpayment";

interface UtilityBillProps {
    // open: boolean;
    // toggleActivateWallet: () => void
    title: string
    toggleDisplayHomeOption?: () => void
}

const ValuePayment = (props: UtilityBillProps) => {

    const [openMerchantModal, setOpenMerchantModal] = useState<boolean>(false);
    const [availableBills, setAvailableBills] = useState<string[]>([]);
    const [billOptions, setBillOptions] = useState<any[]>([]);
    const [activeSelection, setActiveSelection] = useState<string>("single");
    const [openBillModal, setopenBillModal] = useState<boolean>(false);
    const toggleMerchantModal = (): void => setOpenMerchantModal(!openMerchantModal);

    const toggleBillModalDisplay = () => setopenBillModal(!openBillModal);

    return (
        <div>
            <div className="mb-20">
                <div className="flex items-center justify-between mt-10 mb-5">
                    <h4 className="text-[#1B1B1B] text-2xl capitalize font-campton">{props.title}</h4>
                    <button onClick={props.toggleDisplayHomeOption} className="flex items-center gap-2 px-4 text-lg">
                        <PiArrowArcLeftBold />
                        Back
                    </button>
                </div>
                <>
                    <div className="py-5">
                        <HiOutlineInbox className="w-max mx-auto text-6xl mb-2" />
                        <p className="text-base text-center">Not available  yet</p>
                    </div>
                </>
            </div>
        </div>
    )
}

export default ValuePayment;