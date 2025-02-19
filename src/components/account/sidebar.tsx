"use client";
import BellImg from "@/assets/images/account/icons/bell.svg";
import HistoryImg from "@/assets/images/account/icons/history.svg";
import LogoutImg from "@/assets/images/account/icons/logout.svg";
import PeopleImg from "@/assets/images/account/icons/people.svg";
import SettingsImg from "@/assets/images/account/icons/settings.svg";
import WalletImg from "@/assets/images/account/icons/wallet.svg";
import HomeImg from "@/assets/images/account/icons/home.svg";

import BellWhiteImg from "@/assets/images/account/icons/bell-white.svg";
import HistoryWhiteImg from "@/assets/images/account/icons/history-white.svg";
import PeopleWhiteImg from "@/assets/images/account/icons/people-white.svg";
import SettingsWhiteImg from "@/assets/images/account/icons/settings-white.svg";
import WalletWhiteImg from "@/assets/images/account/icons/wallet-white.svg";
import HomeWhiteImg from "@/assets/images/account/icons/home-white.svg";

import Ecclipse from "@/assets/images/ellipse.svg";

import LogoColoured from "@/assets/images/logo-colored.svg";
import AvatarImg from "@/assets/images/account/avatar.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Input, Modal } from "antd";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAddNewMerchant from "@/utils/apiHooks/merchants/useAddNewMerchant";
import Button from "../elements/button";

const SideBar = () => {

    const pathName = usePathname();
    const router = useRouter();

    const validator = yup.object().shape({
        businessName: yup.string().required('Please enter business name'),
        businessEmail: yup.string().email('Email is not valid').required('Email field can not be empty'),
        directorNIN: yup.string().required('Please enter director NIN'),
        directorBVN: yup.string().required('Please enter director BVN'),
        directorDOB: yup.string().required('Please enter director date of birth'),
        CACReg: yup.string().required('Please enter your CAC registration number'),
        address: yup.string().required('Please enter your business address'),
    })
    const { addNewMerchant, data, isLoading, error } = useAddNewMerchant();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validator)
    });

    const [openMerchantModal, setOpenMerchantModal] = useState<boolean>(false);

    const toggleMerchantModal = (): void => setOpenMerchantModal(!openMerchantModal);

    useEffect(() => {
        if (data) {
            router.push("/");
        }
    }, [data])

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error])

    const handleNewBusinessAddition = (e: any) => {
        addNewMerchant(e);
    }

    return (
        <div className="h-full overflow-scroll overflow-x-hidden">
            <div className="border border-solid border-[#EFEFEF] px-4 py-5 float-left w-[250px] rounded-[16px] h-max">
                <div className="flex items-center mb-5 gap-2">
                    <Image src={AvatarImg} alt="avatar" />
                    <div>
                        <h4 className="text-xl">Laura Ajike</h4>
                        <p className="text-xs text-[#1F1F22]">laura@gmail.com.com</p>
                    </div>
                </div>
                <ul className="flex flex-col">
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/overview" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/overview" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/overview" ? "text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/overview" ? HomeWhiteImg : HomeImg} alt="bell icon" className="w-[18px]" />
                            </span>
                            <span>Overview</span>
                        </Link>
                    </li>
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/wallet" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/wallet" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/wallet" ? "text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/wallet" ? WalletWhiteImg : WalletImg} alt="bell icon" className="w-[18px]" />
                            </span>
                            <span>Wallet</span>
                        </Link>
                    </li>
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/transaction-history" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/transaction-history" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/transaction-history" ? "text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/transaction-history" ? HistoryWhiteImg : HistoryImg} alt="bell icon" className="w-[18px]" />
                            </span>
                            <span>Transaction History</span>
                        </Link>
                    </li >
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/users" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/users" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/users" ? "text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/users" ? PeopleWhiteImg : PeopleImg} alt="bell icon" className="w-[20px]" />
                            </span>
                            <span>Users</span>
                        </Link>
                    </li >
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/merchant" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/merchant" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/merchant" ? "text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/merchant" ? PeopleWhiteImg : PeopleImg} alt="bell icon" className="w-[20px]" />
                            </span>
                            <span>Merchant Admin</span>
                        </Link>
                    </li >
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/activity" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/activity" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/activity" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/activity" ? BellWhiteImg : BellImg} alt="bell icon" className="w-[18px]" />
                            </span>
                            <span>Activity Log</span>
                        </Link>
                    </li >
                    <li className={`flex items-center gap-4 text-sm px-5 py-5 ${pathName === "/account/settings" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <Link href="/account/settings" className={`flex items-center gap-4 text-sm font-camptonthin ${pathName === "/account/settings" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                            <span>
                                <Image src={pathName === "/account/settings" ? SettingsWhiteImg : HomeImg} alt="bell icon" className="w-[20px]" />
                            </span>
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
                <div className="px-5 mt-10">
                    <Link href="/account/logout" className={`flex items-center gap-4 text-sm font-medium text-danger ${pathName === "/account/logout" ? "bg-[#003235] rounded-[8px] text-white" : "text-[#1B1B1B]"}`}>
                        <span>
                            <Image src={LogoutImg} alt="bell icon" className="w-[18px]" />
                        </span>
                        <span className="font-openSans">Logout</span>
                    </Link>
                </div>
                <div className="merchant-bg relative overflow-hidden bg-[#D3FFB4] max-w-[206px] rounded-[12px] py-7 px-5 mt-10">
                    <Image src={LogoColoured} alt="logo" className="w-max mx-auto mb-3" />
                    <h4 className="text-base mb-8 text-center">Become a Merchant</h4>
                    <button onClick={toggleMerchantModal} className="bg-[#003235] z-30 block relative py-4 w-full text-[13px] rounded-[10px] text-white text-">Get Started</button>
                    <Image src={Ecclipse} alt="ecclipse" className="absolute -right-5 -bottom-3 w-full" />
                </div>
            </div>

            <Modal open={openMerchantModal} onClose={toggleMerchantModal} onCancel={toggleMerchantModal} footer={null}>
                <div>
                    <h4 className="text-center text-[#1B1B1B] text-2xl capitalize mb-10">Become a merchant</h4>
                    <form onSubmit={handleSubmit(handleNewBusinessAddition)}>
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
                        {/* <div className="form-group mb-4">
                            <div className="rounded-[13px] border-2 py-2 px-2 border-solid border-[#7575754D] flex justify-between items-center">
                                <p className="text-sm">Upload CAC</p>
                                <button className="bg-[#003235] py-3 rounded-[8px] px-10 text-sm text-white">Upload</button>
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <div className="rounded-[13px] border-2 py-2 px-2 border-solid border-[#7575754D] flex justify-between items-center">
                                <p className="text-sm">Upload Certificate of Business</p>
                                <button className="bg-[#003235] py-3 rounded-[8px] px-10 text-sm text-white">Upload</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="rounded-[13px] border-2 py-2 px-2 border-solid border-[#7575754D] flex justify-between items-center">
                                <p className="text-sm">Bank Account Statement</p>
                                <button className="bg-[#003235] py-3 rounded-[8px] px-10 text-sm text-white">Upload</button>
                            </div>
                        </div> */}
                        <Button styling="bg-[#003235] py-5 mt-10 mx-auto w-max rounded-[8px] px-16 block text-sm text-white" isLoading={isLoading}
                            type="submit" text="Become a Merchant" />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default SideBar;