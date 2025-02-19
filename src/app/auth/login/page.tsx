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
import { useLogin } from "@/utils/apiHooks/auth/useLogin";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {

    const validator = yup.object().shape({
        email: yup.string().email('Email is not valid').required('Email field can not be empty'),
        password: yup.string().required('Please enter your password'),
    });

    const { control, handleSubmit, formState: {
        errors
    } } = useForm({
        resolver: yupResolver(validator)
    });

    const { data, login, error } = useLogin();
    const [loadLoginAction, setLoadLoginAction] = useState(false);
    const { showSnackBar } = useContext(GlobalActionContext);
    const router = useRouter();

    function handleLogin(e: any) {
        setLoadLoginAction(true);
        login({
            identifier: e.email,
            password: e.password,
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
                router.push('/account/overview')
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
                                <h1 className="font-bold text-2xl md:text-3xl text-center">Login</h1>
                            </div>
                            <form action="" onSubmit={handleSubmit(handleLogin)}>
                                <div className="flex flex-col gap-6 mt-8">
                                    <div className="flex flex-col gap-2">
                                        {/* <label className="text-sm">Email</label> */}
                                        <Controller name="email" control={control}
                                            render={({ field }) => (
                                                <TextField.Input type="email"
                                                    inputMode="email" placeholder="Enter your email" {...field}
                                                    style={{ height: "4rem" }}
                                                    // value={email} onChange={onEmailEntered}
                                                    className="rounded-lg px-2 text-sm w-full" />
                                            )} />
                                        {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        {/* <label className="text-sm">Password</label> */}
                                        <Controller name="password" control={control}
                                            render={({ field }) => (
                                                <TextField.Input type="password" placeholder="Enter your password" {...field}
                                                    style={{ height: "4rem" }}
                                                    // value={password} onChange={onPasswordEntered}
                                                    className="rounded-lg px-2 text-sm" />
                                            )} />
                                        {errors.password && <p className="text-sm text-danger">{errors.password.message}</p>}
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <Button isLoading={loadLoginAction} disabled={loadLoginAction}
                                            // onClick={handleLogin}
                                            className="py-3 rounded-[12px] w-full bg-buttonBg text-sm">Login</Button>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link href={"/reset-password"} className="text-offWhite text-sm">Forgot Password?</Link>
                                        <Link href={"/auth/signup"} className="text-offWhite text-sm">I don&apos;t have an account</Link>
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