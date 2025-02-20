"use client";


import { Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/buttons";
import { useActivateUserWallet } from "@/utils/apiHooks/profile/useActivateWallet";
import SquareImg from "@/assets/images/account/icons/square.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GlobalActionContext } from "@/context/GlobalActionContext";

interface GovernmentBillProps {
    open: boolean;
    toggleActivateWallet: () => void
}

const GovernmentBillPayment = (props: GovernmentBillProps) => {


    const router = useRouter();
    const { showSnackBar } = useContext(GlobalActionContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activeSelection, setActiveSelection] = useState<string>("single");
    const toggleMerchantModal = (): void => props.toggleActivateWallet();

    const redirectPayment = () => {
        if (activeSelection.length) {
            setIsLoading(true)
            if (activeSelection === "single") {
                router.push("/payment/collection");
            } else {
                router.push("/payment/collection");
            }
        } else {
            showSnackBar({ severity: 'error', message: "Please select a bill type" })
        }
    }

    return (
        <div>
            <Modal open={props.open} onClose={toggleMerchantModal} onCancel={toggleMerchantModal} footer={null}>
                <div>
                    <h4 className="text-center text-[#1B1B1B] text-2xl capitalize mb-1 font-campton mb-10">Select Bill Type</h4>
                    <div className="grid grid-cols-2 gap-5 items-center">
                        <div
                            onClick={() => setActiveSelection("single")}
                            className="cursor-pointer border-2 border-solid border-[#EFEFEF] w-full py-7 rounded-[10px] flex items-center justify-center gap-3">
                            {/* <Image src={SquareImg} alt="square" className="w-[20px]" /> */}
                            <div className="border-solid border-black border-[3px] w-[1.5rem] h-[1.5rem] rounded-[4px] bg-transparent flex items-center justify-center">
                                {
                                    activeSelection === "single" ?
                                        <div className="bg-black w-[.8rem] h-[.8rem] rounded-[2px]"></div>
                                        : ""
                                }
                            </div>
                            <span className="text-[#1B1B1B] text-lg">Single Bill</span>
                        </div>
                        <div
                            onClick={() => setActiveSelection("harmonized")}
                            className="cursor-pointer border-2 border-solid border-[#EFEFEF] w-full py-7 rounded-[10px] flex items-center justify-center gap-3">
                            {/* <Image src={SquareImg} alt="square" className="w-[20px]" /> */}
                            <div className="border-solid border-black border-[3px] w-[1.5rem] h-[1.5rem] rounded-[4px] bg-transparent flex items-center justify-center">
                                {
                                    activeSelection === "harmonized" ?
                                        <div className="bg-black w-[.8rem] h-[.8rem] rounded-[2px]"></div>
                                        : ""
                                }
                            </div>
                            <span className="text-[#1B1B1B] text-lg">Harmonized Bill</span>
                        </div>
                    </div>
                    <Button className="bg-[#003235] py-5 mt-10 mx-auto w-max rounded-[8px] px-16 block text-sm text-white" isLoading={isLoading}
                        type="submit" onClick={redirectPayment}>Continue</Button>
                </div>
            </Modal>
        </div>
    )
}

export default GovernmentBillPayment;