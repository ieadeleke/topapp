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
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {
    FLUTTERWAVE_LIVE_KEY,
    FLUTTERWAVE_TEST_KEY,
    config,
} from "@/utils/data/flutterwave.config";
import UserContext from "@/context/UserContext";
import { Payment } from "@/models/payment";
import BillPaymentAction from "./billpaymentaction";


interface BillPaymentInterface {
    title: string
    openBillModal: boolean
    closeBillModal: () => void
    currentBill: any
    toggleBillDisplay?: () => void
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

    const { user } = useContext(UserContext);
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
        if (paymentData?.Transaction?.length) {
            completePayment();
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

    function completePayment() {
        payNow({
            callback(data) {
                closePaymentModal();
                setTimeout(() => {
                    if (data.status == "successful" || data.status == "completed") {
                        // router.
                        showSnackBar({
                            severity: "success",
                            message: `Payment completed successfully`,
                        });
                        window.location.reload();
                    } else {
                        showSnackBar({
                            severity: "error",
                            message: `Could not complete transaction`,
                        });
                    }
                }, 1000);
            },
            onClose() {
                showSnackBar({
                    severity: "error",
                    message: `Transaction cancelled`,
                });
            },
        });
    }

    // const subAccounts = data?.subaccounts;

    // const publicKey = FLUTTERWAVE_LIVE_KEY;
    const publicKey = FLUTTERWAVE_TEST_KEY;

    const payNow = useFlutterwave({
        ...config,
        public_key: publicKey,
        amount: paymentDetail.amount,
        tx_ref: data?.paymentRef ?? new Date().toISOString(),
        customer: {
            ...config.customer,
            id: transactionKey,
            name: user?.firstName + " " + user?.lastName,
            email: user?.email,
            phone_number: user?.phoneNumber,
        },
        customizations: {
            title: paymentDetail.name,
            description: props?.currentBill?.description,
            // logo: Pay4ItLogo.src,
        }
    } as any);


    return (
        <div>
            <Modal open={props.openBillModal} footer={null}>
                <BillPaymentAction title={props.title}
                    openBillModal={props.openBillModal}
                    closeBillModal={props.closeBillModal}
                    currentBill={props.currentBill}
                    toggleBillDisplay={props.toggleBillDisplay} />
            </Modal >
        </div >
    )
}

export default BillPayment;