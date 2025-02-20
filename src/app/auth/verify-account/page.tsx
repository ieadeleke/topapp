"use client";

import Button from "@/components/buttons";
import { TextField } from "@/components/input/InputText";
import Image from "next/image";
import AuthImage from '@/assets/images/auth/cover.png';
import AuthLayout from "@/components/layout";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivateAccount } from "@/utils/apiHooks/auth/useActivateAccount";
import OTPInput from "react-otp-input";

export default function VerifyAccount() {

    // const validator = yup.object().shape({
    //     email: yup.string().email('Email is not valid').required('Email field can not be empty'),
    //     otp: yup.string().required('Please enter otp'),
    // });

    const [otp, setOtp] = useState('');
    const { control, handleSubmit, formState: {
        errors
    } } = useForm({
        // resolver: yupResolver(validator)
    });

    const { data, activateAccount, error } = useActivateAccount();
    const [loadLoginAction, setLoadLoginAction] = useState(false);
    const { showSnackBar } = useContext(GlobalActionContext);
    const router = useRouter();

    function verifyUserSignUp(e: any) {
        if (otp.length === 6) {
            if (localStorage.getItem("user_email")) {
                setLoadLoginAction(true);
                activateAccount({
                    receivedChannel: localStorage.getItem("user_email"),
                    activationCode: otp,
                });
            } else {
                router.push('/auth/signup');
                showSnackBar({ severity: 'error', message: "Email not found. Please try to signup again" })
            }
        } else {
            showSnackBar({ severity: 'error', message: "Please enter OTP" })
        }
    }

    useEffect(() => {
        if (error) {
            setLoadLoginAction(false);
            showSnackBar({ severity: 'error', message: error })
        }
    }, [error])

    useEffect(() => {
        if (data) {
            router.push('/auth/login');
            showSnackBar({ severity: 'success', message: "Account verification successful" });
            setLoadLoginAction(false);
            localStorage.removeItem("user_email");
        }
    }, [data])

    return <AuthLayout>
        <>
            <div className="flex flex-col gap-4 min-h-[85vh] md:min-h-[85vh] items-center justify-center">
                <div className="max-w-[1152px] md:w-max py-10 mx-auto border-2 border-solid border-[#DADADA] rounded-[26px] px-10">
                    <div className="md:px-0">
                        <div className="mx-auto block">
                            <div className="">
                                <h1 className="font-bold text-2xl md:text-3xl text-center font-campton">Activate Account</h1>
                            </div>
                            <form action="" onSubmit={handleSubmit(verifyUserSignUp)}>
                                <div className="flex flex-col gap-6 mt-8">
                                    <div className="activate-otp-form mx-auto w-max">
                                        <OTPInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={6}
                                            renderSeparator={<span>-</span>}
                                            renderInput={(props) => <input {...props} />} />
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <Button isLoading={loadLoginAction} disabled={loadLoginAction}
                                            // onClick={handleLogin}
                                            className="py-3 rounded-[12px] w-full bg-buttonBg text-sm py-5">Activate Account</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </AuthLayout>
}