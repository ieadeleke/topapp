import { useState } from "react"
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