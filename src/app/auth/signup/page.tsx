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
import { Input } from "antd";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignup } from "@/utils/apiHooks/auth/useSignup";

export default function Login() {

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
    const [loadLoginAction, setLoadLoginAction] = useState(false);
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
            console.log(error);
            setLoadLoginAction(false);
            showSnackBar({ severity: 'error', message: error })
        }
    }, [error])

    useEffect(() => {
        if (data) {
            // setLoadLoginAction(false);
            router.push('/auth/verify-account')
            showSnackBar({ severity: 'success', message: "Signup successful" });
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
                                <h1 className="font-bold text-2xl md:text-3xl text-center">Get Started</h1>
                            </div>
                            <form action="" onSubmit={handleSubmit(handleLogin)}>
                                <div className="flex flex-col gap-6 mt-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <Controller name="firstName" control={control}
                                                render={({ field }) => (
                                                    <TextField.Input {...field} type="text"
                                                        inputMode="text" placeholder="Enter your first name"
                                                        style={{ height: "4rem" }}
                                                        // value={email} onChange={onEmailEntered}
                                                        className="rounded-lg px-2 text-sm w-full" />
                                                )} />
                                            {errors.firstName && <p className="text-sm text-danger">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="form-group">
                                            <Controller name="lastName" control={control}
                                                render={({ field }) => (
                                                    <TextField.Input {...field} type="text"
                                                        inputMode="text" placeholder="Enter your last name"
                                                        style={{ height: "4rem" }}
                                                        // value={email} onChange={onEmailEntered}
                                                        className="rounded-lg px-2 text-sm w-full" />
                                                )} />
                                            {errors.lastName && <p className="text-sm text-danger">{errors.lastName.message}</p>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <Controller name="workEmail" control={control}
                                                render={({ field }) => (
                                                    <TextField.Input {...field} type="email"
                                                        inputMode="email" placeholder="Enter your work email"
                                                        style={{ height: "4rem" }}
                                                        // value={email} onChange={onEmailEntered}
                                                        className="rounded-lg px-2 text-sm w-full" />
                                                )} />
                                            {errors.workEmail && <p className="text-sm text-danger">{errors.workEmail.message}</p>}
                                        </div>
                                        <div className="form-group">
                                            <Controller name="mobileNumber" control={control}
                                                render={({ field }) => (
                                                    <TextField.Input {...field} type="tel"
                                                        inputMode="tel" placeholder="Mobile Number"
                                                        style={{ height: "4rem" }}
                                                        // value={email} onChange={onEmailEntered}
                                                        className="rounded-lg px-2 text-sm w-full" />
                                                )} />
                                            {errors.mobileNumber && <p className="text-sm text-danger">{errors.mobileNumber.message}</p>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Controller name="password" control={control}
                                            render={({ field }) => (
                                                <Input.Password type="text" {...field} placeholder="Enter your password" style={{ height: "4rem" }}
                                                    className="rounded-lg px-2 text-sm border-2 border-solid border-[#E5E7EB] outline-none" />
                                            )} />
                                        {errors.password && <p className="text-sm text-danger">{errors.password.message}</p>}
                                    </div>
                                    <div className="flex justify-between">
                                        <Link href={"/auth/login"} className="text-offWhite text-sm">I have an account</Link>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col">
                                            <Button isLoading={loadLoginAction} disabled={loadLoginAction}
                                                className="py-3 rounded-[12px] w-full bg-buttonBg text-sm">Create Account</Button>
                                        </div>
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