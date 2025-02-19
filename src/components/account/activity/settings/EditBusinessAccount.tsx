import Button from "@/components/buttons";
import { TextField } from "@/components/input/InputText";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import UserContext from "@/context/UserContext";
import { useUpdateProfile } from "@/utils/apiHooks/profile/useUpdateProfile";
import { useContext, useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "antd";

export const EditBusinessProfile = () => {

    const { isLoading, data, error, updateProfile } = useUpdateProfile();
    const { showSnackBar } = useContext(GlobalActionContext)
    const { user } = useContext(UserContext)
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);

    const validator = yup.object().shape({
        businessName: yup.string().required('Please enter business name'),
        businessEmail: yup.string().email('Email is not valid').required('Business email field can not be empty'),
        email: yup.string().required('Email field can not be empty'),
        phoneNumber: yup.string().required('Phone number field can not be empty'),
        directorNIN: yup.string().required('Please enter director NIN'),
        directorBVN: yup.string().required('Please enter director BVN'),
        directorDOB: yup.string().required('Please enter director date of birth'),
        CACReg: yup.string().required('Please enter your CAC registration number'),
        address: yup.string().required('Please enter your business address'),
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validator)
    });

    useEffect(() => {
        if (data) {
            showSnackBar({
                message: "Successfully updated",
                severity: 'success'
            })
        }
    }, [data])

    useEffect(() => {
        if (error) {
            showSnackBar({
                message: error,
                severity: 'error'
            })
        }
    }, [error])

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        }
    }, [user])

    const updateUserDetail = () => {
        if ((firstName && firstName.trim().length > 0) && (lastName && lastName.trim().length > 0)) {
            updateProfile({
                firstName,
                lastName
            })
        }
    }

    return <div className="flex flex-col gap-8">
        <div className="pb-3 border-b border-solid border-[#E0E0E0]">
            <h4 className="text-xl text-[#1B1B1B]">Edit Profile</h4>
        </div>
        <form action="" onSubmit={handleSubmit(updateUserDetail)}>
            <div className="flex flex-col md:grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="form-group">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Business Name</label>
                        <Controller name="businessName" control={control}
                            render={({ field }) => (
                                <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="businessName" />
                            )} />
                        {errors.businessName && <p className="text-sm text-danger">{errors.businessName.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Business Email</label>
                        <Controller name="businessEmail" control={control}
                            render={({ field }) => (
                                <Input {...field} type="email" className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="email" />
                            )} />
                        {errors.businessEmail && <p className="text-sm text-danger">{errors.businessEmail.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="form-group">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Email address</label>
                        <Controller name="email" control={control}
                            render={({ field }) => (
                                <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="email" />
                            )} />
                        {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Phone number</label>
                        <Controller name="phoneNumber" control={control}
                            render={({ field }) => (
                                <Input {...field} type="number" className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="phoneNumber" />
                            )} />
                        {errors.phoneNumber && <p className="text-sm text-danger">{errors.phoneNumber.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="form-group mb-4">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Director NIN</label>
                        <Controller name="directorNIN" control={control}
                            render={({ field }) => (
                                <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="directorNIN" />
                            )} />
                        {errors.directorNIN && <p className="text-sm text-danger">{errors.directorNIN.message}</p>}
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Director BVN</label>
                        <Controller name="directorBVN" control={control}
                            render={({ field }) => (
                                <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="directorBVN" />
                            )} />
                        {errors.directorBVN && <p className="text-sm text-danger">{errors.directorBVN.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="form-group mb-4">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Director DOB</label>
                        <Controller name="directorDOB" control={control}
                            render={({ field }) => (
                                <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="directorDOB" />
                            )} />
                        {errors.directorDOB && <p className="text-sm text-danger">{errors.directorDOB.message}</p>}
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">CAC Registration Number</label>
                        <Controller name="CACReg" control={control}
                            render={({ field }) => (
                                <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="CACReg" />
                            )} />
                        {errors.CACReg && <p className="text-sm text-danger">{errors.CACReg.message}</p>}
                    </div>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-2">Business Address</label>
                    <Controller name="address" control={control}
                        render={({ field }) => (
                            <Input {...field} className="h-[3.5rem] rounded-[13px] border-2 border-solid border-[#7575754D]" name="address" />
                        )} />
                    {errors.address && <p className="text-sm text-danger">{errors.address.message}</p>}
                </div>
            </div>
        </form>

        <div className="flex justify-end">
            <Button onClick={updateUserDetail} isLoading={isLoading} disabled={isLoading} variant="contained" className="bg-dark px-12 py-3">Save Changes</Button>
        </div>
    </div>
}