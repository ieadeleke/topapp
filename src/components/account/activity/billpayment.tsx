"use client";

import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useFetchAvailableBills } from "@/utils/apiHooks/profile/useFetchAvailableBills";
import { useFetchAvailableBillerInfo } from "@/utils/apiHooks/profile/useFetchBillerInfo";
import { Input, Modal, Select, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFetchBillCustomerInfo } from "@/utils/apiHooks/profile/useFetchBillPaymentCustomer";
import { useInitiateBillPayment } from "@/utils/apiHooks/profile/useInitiateBillPayment";
import { generateUUID } from "@/utils/data/generateUUID";

interface BillPaymentInterface {
    title: string
    openBillModal: boolean
    closeBillModal: () => void
    currentBill: any
}

const BillPayment = (props: BillPaymentInterface) => {

    const { showSnackBar } = useContext(GlobalActionContext);
    const { fetchAvailableBillerInfo, data, isLoading, error } = useFetchAvailableBillerInfo();
    const { fetchBillCustomerInfo, data: customerData, isLoading: customerLoading, error: customerError } = useFetchBillCustomerInfo();

    const {
        isLoading: isPaymentLoading,
        data: paymentData,
        error: paymentError,
        initiateBillPayment,
    } = useInitiateBillPayment();

    const [billerCode, setBillerCode] = useState<string>("");
    const [transactionKey] = useState<string>(generateUUID());
    const [currentBillData, setCurrentBillData] = useState<any>({});
    const [customerDataValidated, setCustomerDataValidated] = useState<boolean>(false);
    const [extraSelectionOption, setExtraSelectionOption] = useState<any>([]);
    const [currentPaymentStage, setCurrentPaymentStage] = useState("initiated");
    const [paymentDetail, setPaymentDetail] = useState<any>({
        item_code: "",
        customer: "",
        name: "",
        amount: ""
    });

    useEffect(() => {
        if (data) {
            setExtraSelectionOption(data);
        }
    }, [data]);

    useEffect(() => {
        setCurrentBillData(props.currentBill);
    }, [props.currentBill]);

    const completeBillPaymentStages = (e: any) => {
        e.preventDefault();
        if (currentPaymentStage === "payment") {
            initiateUserBillPayment();
        } else {
            handleFetchAvailbleBillerInfo();
        }
    }

    const handleFetchAvailbleBillerInfo = () => {
        if (billerCode.length) {
            fetchAvailableBillerInfo({
                biller_code: billerCode
            });
        } else {
            showSnackBar({ severity: 'error', message: "Please select option" });
        }
    }

    useEffect(() => {
        if (error) {
            showSnackBar({ severity: 'error', message: error });
        }
    }, [error]);

    const closePaymentModal = () => {
        setBillerCode("");
        props.closeBillModal();
        // setCurrentBillData({});
        setPaymentDetail({
            item_code: "",
            customer: "",
            name: "",
            amount: ""
        });
        setExtraSelectionOption([]);
        setCustomerDataValidated(false);
        setCurrentPaymentStage("initiated");
    }

    const changeValueOfBillerCode = (e: any) => {
        setBillerCode(e);
    }

    const updatePaymentDetailItemCode = (e: any) => {
        setPaymentDetail({
            ...paymentDetail,
            item_code: e?.split("----")[0],
            amount: e?.split("----")[1],
            name: e?.split("----")[2]
        });
    }

    const updatePaymentDetail = (e: any) => {
        setPaymentDetail({
            ...paymentDetail,
            customer: e.target.value
        });
    }

    useEffect(() => {
        if (customerError) {
            showSnackBar({ severity: 'error', message: customerError });
        }
    }, [customerError]);

    useEffect(() => {
        if (paymentError) {
            showSnackBar({ severity: 'error', message: paymentError });
        }
    }, [paymentError]);

    useEffect(() => {
        if (customerError) {
            showSnackBar({ severity: 'error', message: customerError });
        }
    }, [customerError]);

    useEffect(() => {
        if (customerData?.status === "success") {
            // setCustomerDataValidated(customerData?.data?.response_message)
            setCustomerDataValidated(true);
            setCurrentPaymentStage("payment");
        }
    }, [customerData]);

    useEffect(() => {
        if (paymentData) {
            // charge from user wallet
        }
    }, [paymentData]);

    useEffect(() => {
        if (billerCode && paymentDetail.customer.length > 4 && paymentDetail.item_code) {
            const handler = setTimeout(() => {
                fetchBillCustomerInfo({
                    biller_code: billerCode,
                    customer: paymentDetail.customer,
                    item_code: paymentDetail.item_code
                })
            }, 1000); // Adjust debounce delay here

            return () => clearTimeout(handler);
        }
    }, [paymentDetail.customer, paymentDetail.item_code])


    const initiateUserBillPayment = () => {
        let setup = {
            description: props?.currentBill?.description,
            biller_code: billerCode,
            billName: paymentDetail?.name,
            item_code: paymentDetail.item_code,
            transactionData: {
                key: transactionKey
            },
            amount: paymentDetail.amount,
            customer: paymentDetail.customer
        }
        initiateBillPayment(setup);
    }

    return (
        <div>
            <Modal open={props.openBillModal} onCancel={closePaymentModal} footer={null}>
                {/* {
                    isLoading ?
                        <Spin indicator={<LoadingOutlined spin />} />
                        : */}
                <div>
                    <h4 className="text-center mx-auto text-2xl">{props.title}</h4>
                    <div className="mt-10">
                        <form action="" onSubmit={completeBillPaymentStages}>
                            <div className="form-group mb-4">
                                <label htmlFor="">Select Option</label>
                                <Select disabled={extraSelectionOption.length ? true : false} className="w-full block h-[4rem]" value={billerCode} onChange={changeValueOfBillerCode}>
                                    {currentBillData?.billerInfo?.map((bill: any, index: number) => (
                                        <Select.Option value={bill.biller_code} key={index}>{bill.name}</Select.Option>
                                    ))}
                                </Select>
                            </div>
                            {
                                extraSelectionOption.length ?
                                    <>
                                        <div className="form-group mb-4">
                                            <label htmlFor="">Select Option</label>
                                            <Select className="w-full block h-[4rem]" value={`${paymentDetail?.item_code}----${paymentDetail?.amount}----${paymentDetail?.name}`} onChange={updatePaymentDetailItemCode}>
                                                {extraSelectionOption?.map((bill: any, index: number) => (
                                                    <Select.Option value={`${bill.item_code}----${bill.amount}----${bill.name}`} key={index}>{bill.biller_name}</Select.Option>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="form-group mb-4">
                                            <div className="flex justify-between items-center">
                                                <label htmlFor="customer">Customer Information</label>
                                                <div>
                                                    <Spin indicator={<LoadingOutlined spin />} spinning={customerLoading} />
                                                </div>
                                            </div>
                                            <Input className="w-full block h-[4rem]" name="customer" value={paymentDetail.customer} onChange={updatePaymentDetail} />
                                        </div>
                                    </>
                                    : ""}
                            < div className="mt-6">
                                {
                                    !extraSelectionOption.length ?
                                        <Button isLoading={isLoading}
                                            className="cursor-pointer py-3 rounded-[12px] w-full bg-buttonBg text-sm">Continue</Button>
                                        :
                                        <Button isLoading={isPaymentLoading} disabled={currentPaymentStage === "payment" ? false : true}
                                            className="cursor-pointer py-3 rounded-[12px] w-full bg-buttonBg text-sm">Complete Payment</Button>
                                }
                            </div>
                        </form>
                    </div>
                </div >
                {/* } */}
            </Modal >
        </div >
    )
}

export default BillPayment;