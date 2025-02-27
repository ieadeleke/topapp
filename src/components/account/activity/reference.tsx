"use client";

import { Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Button from "../../elements/button";
import { useRouter } from "next/navigation";

interface BillReferenceProps {
    open: boolean;
    toggleActivateWallet: () => void
}

const BillReferencePage = (props: BillReferenceProps) => {

    const validator = yup.object().shape({
        bill: yup.string().required('Please enter bill reference'),
    })

    const router = useRouter();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validator)
    });

    const [openMerchantModal, setOpenMerchantModal] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toggleMerchantModal = (): void => props.toggleActivateWallet();

    const handleBillReference = (e: any) => {
        setIsLoading(true);
        router.push(`/payment/harmonize?REF=${e.bill}`)
    }

    return (
        <div>
            <Modal open={props.open} onClose={toggleMerchantModal} onCancel={toggleMerchantModal} footer={null}>
                <div>
                    <h4 className="text-center text-[#1B1B1B] text-2xl capitalize mb-1 font-campton">Bill Reference Number</h4>
                    <p className="mb-10 text-[#1B1B1B] font-camptonthin w-[80%] mx-auto text-center">
                        Please input your bill reference number
                    </p>
                    <form onSubmit={handleSubmit(handleBillReference)}>
                        <div className="form-group mb-4">
                            <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Bill reference number</label>
                            <Controller name="bill" control={control}
                                render={({ field }) => (
                                    <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="bill" />
                                )} />
                            {errors.bill && <p className="text-sm text-danger">{errors.bill.message}</p>}
                        </div>
                        <Button styling="bg-[#003235] py-5 mt-10 mx-auto w-max rounded-[8px] px-16 block text-sm text-white" isLoading={isLoading}
                            type="submit" text="Continue" />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default BillReferencePage;