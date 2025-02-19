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

export default function VerifyAccount() {

    const validator = yup.object().shape({
        email: yup.string().email('Email is not valid').required('Email field can not be empty'),
        otp: yup.string().required('Please enter otp'),
    });

    const { control, handleSubmit, formState: {
        errors
    } } = useForm({
        resolver: yupResolver(validator)
    });

    const { data, activateAccount, error } = useActivateAccount();
    const [loadLoginAction, setLoadLoginAction] = useState(false);
    const { showSnackBar } = useContext(GlobalActionContext);
    const router = useRouter();

    function verifyUserSignUp(e: any) {
        setLoadLoginAction(true);
        activateAccount({
            receivedChannel: e.email,
            activationCode: e.otp,
        });
    }

    useEffect(() => {
        if (error) {
            setLoadLoginAction(false);
            showSnackBar({ severity: 'error', message: error })
        }
    }, [error])

    useEffect(() => {
        if (data) {
            setTimeout(() => {
                setLoadLoginAction(false);
                router.push('/account/login')
                showSnackBar({ severity: 'success', message: "Login successful" })
            }, 1000)
        }
    }, [data])

    return <AuthLayout>
        <>
            <div className="flex flex-col gap-4 min-h-[85vh] md:min-h-[85vh] items-center justify-center">
                <div className="max-w-[1152px] w-[70%] py-20 mx-auto grid grid-cols-2 gap-20 items-center">
                    <Image src={AuthImage} alt="auth" />
                    <div className="md:px-0">
                        <div className="mx-auto block">
                            <div className="">
                                <h1 className="font-bold text-2xl md:text-3xl text-center">Activate Account</h1>
                            </div>
                            <form action="" onSubmit={handleSubmit(verifyUserSignUp)}>
                                <div className="flex flex-col gap-6 mt-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">Email</label>
                                        <Controller name="email" control={control}
                                            render={({ field }) => (
                                                <TextField.Input type="email"
                                                    inputMode="email" placeholder="Enter your email" {...field}
                                                    style={{ height: "4rem" }}
                                                    className="rounded-lg px-2 text-sm w-full" />
                                            )} />
                                        {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm">OTP</label>
                                        <Controller name="otp" control={control}
                                            render={({ field }) => (
                                                <TextField.Input type="otp" placeholder="Enter OTP" {...field}
                                                    style={{ height: "4rem" }}
                                                    className="rounded-lg px-2 text-sm" />
                                            )} />
                                        {errors.otp && <p className="text-sm text-danger">{errors.otp.message}</p>}
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <Button isLoading={loadLoginAction} disabled={loadLoginAction}
                                            // onClick={handleLogin}
                                            className="py-3 rounded-[12px] w-full bg-buttonBg text-sm">Activate Account</Button>
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