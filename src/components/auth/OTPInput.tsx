import { EyeIcon, EyeOffIcon } from "lucide-react"
import { IconButton } from "../buttons/IconButton"
import { TextField } from "../input/InputText"
import Link from "next/link"
import Button from "../buttons"
import { useLogin } from "@/utils/apiHooks/auth/useLogin"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "@/context/GlobalContext"
import { isEmail } from "@/utils/validation"
import { useRouter } from "next/navigation"

import OtpInput from 'react-otp-input';

interface updateOTPValue {
    updateOTP: any
}

export const OTPInputBoxes = (props: updateOTPValue) => {

    const [otp, setOtp] = useState('');

    const changeOTPValue = (e: any) => {
        setOtp(e);
        props.updateOTP(e);
    }

    return <div className="otp-box">
        <OtpInput
            value={otp}
            onChange={changeOTPValue}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
        />
    </div>
}