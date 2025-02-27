"use client";

import Button from "@/components/buttons";
import { TextField } from "@/components/input/InputText";
import Image from "next/image";
import AuthImage from '@/assets/images/auth/cover.png';
import AuthLayout from "@/components/layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { Controller, useForm } from "react-hook-form";
import { Input, Spin } from "antd";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignup } from "@/utils/apiHooks/auth/useSignup";

export default function Options() {

    const validator = yup.object().shape({
        workEmail: yup.string().email('Email is not valid').required('Please enter your work email'),
        firstName: yup.string().required('Please enter your first name'),
        lastName: yup.string().required('Please enter your last name'),
        password: yup.string().required('Please enter your password'),
        mobileNumber: yup.string().required('Please enter your mobile number')
    });

    const { control, handleSubmit, formState: {
        errors
    } } = useForm({
        resolver: yupResolver(validator)
    });

    const { data, signup, error } = useSignup();
    const [loadingBar, setLoadingBar] = useState(false);
    const [loadLoginAction, setLoadLoginAction] = useState(false);
    const [currentSelection, setCurrentSelection] = useState("businex");
    const { showSnackBar } = useContext(GlobalActionContext);
    const router = useRouter();

    function handleLogin(e: any) {
        setLoadLoginAction(false);
        setLoadLoginAction(true);
        signup({
            firstName: e.firstName,
            lastName: e.lastName,
            phoneNumber: e.mobileNumber,
            email: e.workEmail,
            password: e.password
        });
        localStorage.setItem("user_email", e.workEmail);
    }

    useEffect(() => {
        if (error) {
            setLoadLoginAction(false);
            showSnackBar({ severity: 'error', message: error })
        }
    }, [error])

    useEffect(() => {
        if (data?.status === "OK") {
            // setLoadLoginAction(false);
            router.push('/auth/verify-account')
            showSnackBar({ severity: 'success', message: "Signup successful" });
        }
    }, [data])

    const handlePageRouting = () => {
        setLoadingBar(true);
        router.push("/auth/signup");
    }

    return <AuthLayout>
        <>
            <div className="flex flex-col gap-4 min-h-[65vh] md:min-h-[85vh] md:items-center justify-center">
                <div className="max-w-[1152px] md:w-[70%] md:py-20 pt-10 pb-0 md:pb-20 mx-auto flex flex-col-reverse md:grid grid-cols-2 gap-20 md:items-center">
                    <Image src={AuthImage} alt="auth" />
                    <div className="px-5 md:px-0">
                        <div className="mx-auto block">
                            <div className="">
                                <h1 className="font-bold text-2xl md:text-3xl text-center">What do you want to do?</h1>
                            </div>
                            <div className="flex flex-col md:grid grid-cols-3 gap-4 mt-10">
                                <Link onClick={() => { setCurrentSelection("businex") }}
                                    href="#" className={`block w-full h-[100px] flex auth-bar items-center justify-center px-4 text-center rounded-[8px]  ${currentSelection === "businex" ? "bg-[#003235] text-white" : "border-2 border-solid border-[#003235] text-[#003235]"}`}>
                                    BusiNex
                                </Link>
                                <Link onClick={() => { setCurrentSelection("merchant") }}
                                    href="#" className={`block w-full h-[100px] flex auth-bar items-center justify-center px-4 text-center rounded-[8px] ${currentSelection === "merchant" ? "bg-[#003235] text-white" : "border-2 border-solid border-[#003235] text-[#003235]"}`}>
                                    Merchant
                                </Link>
                                <Link onClick={() => { setCurrentSelection("payment") }}
                                    href="#" className={`block w-full h-[100px] flex auth-bar items-center justify-center px-4 text-center rounded-[8px] ${currentSelection === "payment" ? "bg-[#003235] text-white" : "border-2 border-solid border-[#003235] text-[#003235]"}`}>
                                    Payment Gateway
                                </Link>
                            </div>
                            <Button onClick={handlePageRouting}
                                className="py-3 rounded-[12px] mt-10 w-full bg-buttonBg text-sm block">{
                                    loadingBar ? <Spin /> : "Next"}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </AuthLayout>
}