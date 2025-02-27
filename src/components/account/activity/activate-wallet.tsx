"use client";


import { Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/buttons";
import { useActivateUserWallet } from "@/utils/apiHooks/profile/useActivateWallet";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { GlobalActionContext } from "@/context/GlobalActionContext";
import UserContext from "@/context/UserContext";

interface ActivateWalletProps {
    open: boolean;
    toggleActivateWallet: () => void
}

const ActivateWallet = (props: ActivateWalletProps) => {

    const { user } = useContext(UserContext);
    const validator = yup.object().shape({
        bvn: yup.string().required('Please enter bvn'),
        email: yup.string().email().required('Please enter your email'),
        phoneNumber: yup.string().required('Please enter your mobile number'),
        // dob: yup.string().required('Please enter your date of birth'),
        address: yup.string().required('Please enter your address'),
    })

    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validator)
    });

    const dateFormat = 'YYYY/MM/DD';
    
    const { showSnackBar } = useContext(GlobalActionContext);
    const { activateUserWallet, data, isLoading, error } = useActivateUserWallet();

    const [userSelectedDate, setUserSelectedDate] = useState<string>("");
    const toggleMerchantModal = (): void => props.toggleActivateWallet();

    const handleUserWalletActivation = (e: any) => {
        if (userSelectedDate.length) {
            activateUserWallet({
                ...e,
                dateOfBirth: userSelectedDate
            });
        } else {
            showSnackBar({ severity: "error", message: "Please select your date of birth" });
        }
    }

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setUserSelectedDate(String(dateString));
    };

    useEffect(() => {
        if (data.Wallet) {
            showSnackBar({ severity: "success", message: "Account activation successful" });
            setValue("address", "");
            setValue("bvn", "");
            setValue("email", "");
            setValue("phoneNumber", "");
            setUserSelectedDate("");
            props.toggleActivateWallet();
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            showSnackBar({ severity: "error", message: error });
        }
    }, [error]);


    return (
        <div>
            <Modal open={props.open} onClose={toggleMerchantModal} onCancel={toggleMerchantModal} footer={null}>
                <div className="activate-wallet">
                    <h4 className="text-center text-[#1B1B1B] text-2xl capitalize mb-1 font-campton">Activate Your Wallet</h4>
                    <p className="mb-10 text-[#1B1B1B] font-camptonthin w-[80%] mx-auto text-center">
                        Please kindly activate your wallet in order to perform this transaction
                    </p>
                    <form onSubmit={handleSubmit(handleUserWalletActivation)}>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="form-group">
                                <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Email</label>
                                <Controller name="email" control={control} defaultValue={user?.email}
                                    render={({ field }) => (
                                        <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="email" />
                                    )} />
                                {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Phone Number</label>
                                <Controller name="phoneNumber" control={control} defaultValue={user?.phoneNumber}
                                    render={({ field }) => (
                                        <Input {...field} type="number" className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="email" />
                                    )} />
                                {errors.phoneNumber && <p className="text-sm text-danger">{errors.phoneNumber.message}</p>}
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">BVN</label>
                            <Controller name="bvn" control={control}
                                render={({ field }) => (
                                    <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="bvn" />
                                )} />
                            {errors.bvn && <p className="text-sm text-danger">{errors.bvn.message}</p>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Address</label>
                            <Controller name="address" control={control}
                                render={({ field }) => (
                                    <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="address" />
                                )} />
                            {errors.address && <p className="text-sm text-danger">{errors.address.message}</p>}
                        </div>
                        <div className="">
                            <div className="form-group mb-4">
                                <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Date Of Birth</label>
                                {/* <Controller name="dob" control={control}
                                    render={({ field }) => ( */}
                                <DatePicker onChange={onChange} format={dateFormat} />
                                {/* <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="dob" />
                                    )} />
                                {errors.dob && <p className="text-sm text-danger">{errors.dob.message}</p>} */}
                            </div>
                        </div>
                        <Button className="bg-[#003235] py-5 mt-10 mx-auto w-max rounded-[8px] px-16 block text-sm text-white" isLoading={isLoading}
                            type="submit">Activate</Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ActivateWallet;