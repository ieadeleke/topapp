"use client";

import Button from "@/components/buttons";
import { TextField } from "@/components/input/InputText";
import Layout from "@/components/layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { isEmail } from "@/utils/validation/validation";
import { useResetPassword } from "@/utils/apiHooks/auth/useResetPassword";
import { useVerifyResetPassword } from "@/utils/apiHooks/auth/useVerifyResetPassword";
import { RegularTextInput } from "@/components/input/RegularTextInput";
import { IconButton } from "@/components/buttons/IconButton";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Footer from "@/components/footer";
import Navigation from "@/components/nav";

export default function ForgotPassword() {
    const { showSnackBar } = useContext(GlobalActionContext)
    const { error, isLoading, isComplete, resetPassword } = useResetPassword()
    const { error: verifyError, isLoading: isVerifyLoading, isComplete: isVerifyComplete, verifyResetPassword } = useVerifyResetPassword()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [activationCode, setActivationCode] = useState("")
    const router = useRouter()
    const [shouldVerify, setShouldVerify] = useState(false)
    const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);

    useEffect(() => {
        if (error) {
            showSnackBar({ severity: 'error', message: error })
        }
    }, [error])

    useEffect(() => {
        if (verifyError) {
            showSnackBar({ severity: 'error', message: verifyError })
        }
    }, [verifyError])

    useEffect(() => {
        if (isComplete) {
            setShouldVerify(true)
            showSnackBar({ severity: 'success', message: "A confirmation code has been sent to your email address" })
        }
    }, [isComplete])

    useEffect(() => {
        if (isVerifyComplete) {
            setShouldVerify(true)
            showSnackBar({ severity: 'success', message: "Password changed successfully" })
            setTimeout(() => router.push('/login'), 1000)
        }
    }, [isVerifyComplete])

    function submit() {
        if (!isEmail(email)) {
            return showSnackBar({ severity: 'error', message: "Invalid email" })
        }
        resetPassword({
            receivedChannel: email
        })
    }

    function submitConfirmationCode() {
        if (activationCode.length < 4) {
            return showSnackBar({ severity: 'error', message: "Invalid activation code" })
        } else if (password.trim().length < 4) {
            return showSnackBar({ severity: 'error', message: "Password should be at least 4 characters" })
        } else if (password.trim() != password1.trim()) {
            return showSnackBar({ severity: 'error', message: "Passwords do not match" })
        }
        verifyResetPassword({
            activationCode: activationCode.trim(),
            newPassword: password.trim(),
            receivedChannel: email
        })
    }
    function revealPassword() {
        setIsPasswordRevealed((value) => !value);
    }

    return <Layout>
        <>
            <div className="flex flex-col gap-4 min-h-[85vh] md:min-h-[85vh] items-center justify-center">
                <div className="flex flex-col px-3 gap-4 mt-16 md:[500px] w-[40%]">
                    {!shouldVerify ? <div className="w-full flex flex-col gap-4">
                        <div className="border-2 border-solid border-[#DADADA] p-10 pb-0 rounded-[26px]">
                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold text-2xl text-center">Forgot Password?</h1>
                                {/* <p className="text-gray-500">{`Don’t worry about it, happens to the best of us☺️`}</p> */}
                            </div>
                            <div className="flex flex-col gap-4 mt-16">
                                <label className="text-sm">Email:</label>
                                <TextField.Input type="email"
                                    inputMode="email"
                                    value={email} placeholder="example@email.com"
                                    onChange={(evt) => setEmail(evt.target.value)} className="rounded-lg px-2 text-sm" />
                                {/* <RegularTextInput type="email" autoComplete="email" value={email} onChange={(evt) => setEmail(evt.target.value)} 
                                inputMode="email" placeholder="example@email.com" className="text-sm" /> */}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Button disabled={isLoading} onClick={submit} className="bg-dark rounded-xl mt-5">Continue</Button>
                                <div className="flex items-center justify-center py-5">
                                    <Link href="/auth/login">
                                        <Button variant="text" className="text-dark">I have an account? Log in</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className="self-center min-w-[500px] flex flex-col gap-8 mb-20">
                            <div className="border-2 border-solid border-[#DADADA] p-10 rounded-[26px]">

                                <div className="">
                                    <h1 className="font-bold text-3xl text-center">Set New Password</h1>
                                    {/* <p className="text-gray-700 mt-4">Enter the code sent to your email</p> */}
                                </div>

                                <div className="mt-10 mb-4">
                                    <label className="text-sm mb-2">OTP code</label>
                                    <TextField.Container className="mt-1">
                                        <TextField.Input inputMode="numeric" value={activationCode} onChange={(evt) => setActivationCode(evt.target.value)} placeholder="e.g 123456" className="text-sm px-4 rounded-xl" />
                                    </TextField.Container>
                                </div>

                                <div className="mb-4">
                                    <label className="text-sm mb-2">Password</label>
                                    <TextField.Container className="mt-1">
                                        <TextField.Input value={password} onChange={(evt) => setPassword(evt.target.value)} type={isPasswordRevealed ? "text" : "password"} placeholder="e.g password" className="text-sm px-4 rounded-xl" />

                                        <IconButton onClick={revealPassword}>
                                            {isPasswordRevealed ? <EyeOffIcon className="text-gray-500 w-4 h-4" /> : <EyeIcon className="text-gray-500 w-4 h-4" />}
                                            {/* <EyeIcon className="text-gray-500 w-4 h-4" /> */}
                                        </IconButton>
                                    </TextField.Container>
                                </div>

                                <div className="mb-4">
                                    <label className="text-sm mb-2">Confirm Password</label>
                                    <TextField.Container className="mt-1">
                                        <TextField.Input value={password1} onChange={(evt) => setPassword1(evt.target.value)} type={isPasswordRevealed ? "text" : "password"} placeholder="e.g password" className="text-sm px-4 rounded-xl" />

                                        <IconButton onClick={revealPassword}>
                                            {isPasswordRevealed ? <EyeOffIcon className="text-gray-500 w-4 h-4" /> : <EyeIcon className="text-gray-500 w-4 h-4" />}
                                        </IconButton>
                                    </TextField.Container>
                                </div>

                                <Button disabled={isVerifyLoading} onClick={submitConfirmationCode} className="w-full bg-dark rounded-xl">Confirm</Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    </Layout>
}