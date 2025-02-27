"use client";


import { Input, Modal, Spin } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
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
import { PiArrowArcLeftBold } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi2";
import { LoadingOutlined } from '@ant-design/icons';
import Image from "next/image";
import { useFetchAvailableBills } from "@/utils/apiHooks/profile/useFetchAvailableBills";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import BillPayment from "./billpayment";

interface UtilityBillProps {
    // open: boolean;
    // toggleActivateWallet: () => void
    toggleDisplayHomeOption?: () => void
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
    const { showSnackBar } = useContext(GlobalActionContext);

    const { fetchAvailableBillOptions, data, isLoading, error } = useFetchAvailableBills();

    const [currentTitle, setCurrentTitle] = useState("");
    const [openMerchantModal, setOpenMerchantModal] = useState<boolean>(false);
    const [availableBills, setAvailableBills] = useState<string[]>([]);
    const [billOptions, setBillOptions] = useState<any[]>([]);
    const [activeSelection, setActiveSelection] = useState<string>("single");
    const [openBillModal, setopenBillModal] = useState<boolean>(false);
    const toggleMerchantModal = (): void => setOpenMerchantModal(!openMerchantModal);

    useEffect(() => {
        const fetchAvailableBillPaymentOptions = () => {
            fetchAvailableBillOptions();
        }
        fetchAvailableBillPaymentOptions();
    }, []);

    const selectCurrentBillType = (e: string) => {
        let data = billOptions.find(bill => {
            if (bill.code === e) {
                return bill
            }
        })
        setActiveSelection(data);
    }

    useEffect(() => {
        if (data) {
            let availableData = data.map((bill: any) => {
                return bill.code;
            })
            setBillOptions(data);
            setAvailableBills(availableData);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            showSnackBar({ severity: 'error', message: error });
            // window.location.reload();
        }
    }, [error]);

    const toggleBillModalDisplay = () => setopenBillModal(!openBillModal);

    return (
        <div>
            <div className="mb-20">
                <div className="flex items-center justify-between mt-10 mb-5">
                    <h4 className="text-[#1B1B1B] text-2xl capitalize font-campton">Utility Bills</h4>
                    <button onClick={props.toggleDisplayHomeOption} className="flex items-center gap-2 px-4 text-lg">
                        <PiArrowArcLeftBold />
                        Back
                    </button>
                </div>
                <>
                    {
                        isLoading ? <div className="w-full h-[10rem] flex items-center justify-center">
                            <Spin indicator={<LoadingOutlined spin />} size="large" />
                        </div> :
                            availableBills.length ?
                                <div className="flex flex-wrap gap-7">
                                    {
                                        availableBills.includes("UTILITYBILLS") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("UTILITYBILLS")
                                            setCurrentTitle("Buy Power");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                                    <Image src={PowerImg} alt="power" className="w-[50%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Buy Power</h4>
                                            </div>
                                        </div>}
                                    {
                                        availableBills.includes("AIRTIME") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("AIRTIME")
                                            setCurrentTitle("Buy Airtime");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#EDF1FC] flex items-center justify-center">
                                                    <Image src={PhoneImg} alt="phone" className="w-[35%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Buy Airtime</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("MOBILEDATA") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("MOBILEDATA")
                                            setCurrentTitle("Buy Data");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#FFF6E4] flex items-center justify-center">
                                                    <Image src={DataImg} alt="phone" className="w-[60%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Buy Data</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("TAX") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("TAX")
                                            setCurrentTitle("Pay Taxes");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#F4E2FF] flex items-center justify-center">
                                                    <Image src={ReceiptImg} alt="phone" className="w-[50%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Pay Taxes</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("CABLEBILLS") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("CABLEBILLS")
                                            setCurrentTitle("Cable TV");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                                    <Image src={TvImg} alt="phone" className="w-[50%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Cable Tv</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("NETFLIX") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("NETFLIX")
                                            setCurrentTitle("Netflix");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <Image src={NetflixImg} alt="phone" className="size-16 mx-auto" />
                                                <h4 className="text-[#1B1B1B] font-campton">Netflix</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("BETTING") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("BETTING")
                                            setCurrentTitle("Betting");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                                    <Image src={BettingImg} alt="phone" className="w-[25%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Betting</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("RELINST") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("RELINST")
                                            setCurrentTitle("Religious Institutions");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EBEBEB]">
                                            <div className="flex flex-col gap-5">
                                                <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                                                    <Image src={InvoiceImg} alt="phone" className="w-[50%]" />
                                                </div>
                                                <h4 className="text-[#1B1B1B] font-campton">Religious Institutions</h4>
                                            </div>
                                        </div>
                                    }{
                                        availableBills.includes("JAMB") &&
                                        <div onClick={() => {
                                            selectCurrentBillType("JAMB")
                                            setCurrentTitle("Buy JAMB");
                                            toggleBillModalDisplay();
                                        }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                                            <div className="flex flex-col gap-5">
                                                <Image src={JAMBImg} alt="phone" className="size-16 mx-auto" />
                                                <h4 className="text-[#1B1B1B] font-campton">Buy JAMB</h4>
                                            </div>
                                        </div>
                                    }
                                </div>
                                :
                                <div className="py-5">
                                    <HiOutlineInbox className="w-max mx-auto text-6xl mb-2" />
                                    <p className="text-base text-center">No bill available at this time</p>
                                </div>
                        // availableBills.length ?
                        //     <div className="flex flex-wrap gap-7">
                        //         {
                        //             availableBills.includes("UTILITYBILLS") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("UTILITYBILLS")
                        //                 setCurrentTitle("Buy Power");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                        //                         <Image src={PowerImg} alt="power" className="w-[50%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Buy Power</h4>
                        //                 </div>
                        //             </div>}
                        //         {
                        //             availableBills.includes("AIRTIME") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("AIRTIME")
                        //                 setCurrentTitle("Buy Airtime");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#EDF1FC] flex items-center justify-center">
                        //                         <Image src={PhoneImg} alt="phone" className="w-[35%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Buy Airtime</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("MOBILEDATA") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("MOBILEDATA")
                        //                 setCurrentTitle("Buy Data");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#FFF6E4] flex items-center justify-center">
                        //                         <Image src={DataImg} alt="phone" className="w-[60%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Buy Data</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("TAX") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("TAX")
                        //                 setCurrentTitle("Pay Taxes");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#F4E2FF] flex items-center justify-center">
                        //                         <Image src={ReceiptImg} alt="phone" className="w-[50%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Pay Taxes</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("CABLEBILLS") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("CABLEBILLS")
                        //                 setCurrentTitle("Cable TV");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                        //                         <Image src={TvImg} alt="phone" className="w-[50%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Cable Tv</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("NETFLIX") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("NETFLIX")
                        //                 setCurrentTitle("Netflix");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <Image src={NetflixImg} alt="phone" className="size-16 mx-auto" />
                        //                     <h4 className="text-[#1B1B1B] font-campton">Netflix</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("BETTING") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("BETTING")
                        //                 setCurrentTitle("Betting");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                        //                         <Image src={BettingImg} alt="phone" className="w-[25%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Betting</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("RELINST") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("RELINST")
                        //                 setCurrentTitle("Religious Institutions");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EBEBEB]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <div className="size-16 rounded-[16px] mx-auto bg-[#E4F3EA] flex items-center justify-center">
                        //                         <Image src={InvoiceImg} alt="phone" className="w-[50%]" />
                        //                     </div>
                        //                     <h4 className="text-[#1B1B1B] font-campton">Religious Institutions</h4>
                        //                 </div>
                        //             </div>
                        //         }{
                        //             availableBills.includes("JAMB") &&
                        //             <div onClick={() => {
                        //                 selectCurrentBillType("JAMB")
                        //                 setCurrentTitle("Buy JAMB");
                        //                 toggleBillModalDisplay();
                        //             }} className="cursor-pointer border py-10 rounded-[14px] px-16 border-solid border-[#EFEFEF]">
                        //                 <div className="flex flex-col gap-5">
                        //                     <Image src={JAMBImg} alt="phone" className="size-16 mx-auto" />
                        //                     <h4 className="text-[#1B1B1B] font-campton">Buy JAMB</h4>
                        //                 </div>
                        //             </div>
                        //         }
                        //     </div>
                        //     :
                        //     <div className="py-5">
                        //         <HiOutlineInbox className="w-max mx-auto text-6xl mb-2" />
                        //         <p className="text-base text-center">No bill available at this time</p>
                        //     </div>
                    }
                </>
                <BillPayment openBillModal={openBillModal} title={currentTitle} closeBillModal={toggleBillModalDisplay} currentBill={activeSelection} />
            </div>
        </div>
    )
}

export default UtilityBillPayment;