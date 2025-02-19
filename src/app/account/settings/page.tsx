"use client";

import FilterImg from "@/assets/images/account/icons/filter.svg";
import DownloadImg from "@/assets/images/account/icons/cloud-upload.svg";
import APIIcon from "@/assets/images/account/icons/api.svg";

import AccountLayout from "@/components/account/layout";
import useFetchWalletTransactions from "@/utils/apiHooks/wallets/useFetchWalletTransactions";

import { Dropdown, Input, Select, Table } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";


const Dashboard = () => {

    const { fetchWalletDetails, data: walletData } = useFetchWalletTransactions();

    const [selectedHistory, setSelectedHistory] = useState();
    const [history, setHistory] = useState();

    const dataSource = [
        {
            key: '1039237',
            date: '23/08/2021',
            paymentType: "Loradine 10mg",
            transactionId: 'UG1686288',
            amountPaid: "34,989.00",
            paymentStatus: <span className="bg-[#E8F6EE] uppercase text-[#11763D] text-xs p-2 px-10">Paid</span>,
            action: <button className="bg-transparent">View Details</button>
            // action: <button onClick={setSelectedHistory()} className="bg-transparent">View Details</button>
        },
        {
            key: '1039237',
            date: '23/08/2021',
            paymentType: "Loradine 10mg",
            transactionId: 'UG1686288',
            amountPaid: "34,989.00",
            paymentStatus: <span className="bg-[#E8F6EE] uppercase text-[#11763D] text-xs p-2 px-10">Paid</span>,
            action: <button className="bg-transparent">View Details</button>
        }, {
            key: '1039237',
            date: '23/08/2021',
            paymentType: "Loradine 10mg",
            transactionId: 'UG1686288',
            amountPaid: "34,989.00",
            paymentStatus: <span className="bg-[#E8F6EE] uppercase text-[#11763D] text-xs p-2 px-10">Paid</span>,
            action: <button className="bg-transparent">View Details</button>
        }
    ];

    const columns = [
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Transaction Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Payment Type',
            dataIndex: 'paymentType',
            key: 'paymentType',
        },
        {
            title: 'Transaction ID',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Amount Paid',
            dataIndex: 'amountPaid',
            key: 'amountPaid',
        },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ];

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button className="flex items-center" rel="noopener noreferrer">
                    1st menu item
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ];

    useEffect(() => {
        if (walletData) {
            setHistory(walletData);
        };
    }, [walletData])

    useEffect(() => {
        // fetchWalletDetails();
    }, [])

    return (
        <div>
            <AccountLayout>
                <>
                    <div>
                        <div className="pb-20">
                            <div className="border border-solid border-[#F0F0F0] pb-20 mb-20 rounded-b-[20px]">
                                <div className="h-[8rem] w-full bg-[#F0F0F0]"></div>
                                <div className="px-12 -mt-20">
                                    <div className="flex items-end gap-10">
                                        <div className="size-48 rounded-full bg-black"></div>
                                        <div className="pb-5">
                                            <h4 className="text-2xl mb-3 mt-10">
                                                Lagos State Internal Revenue Service
                                            </h4>
                                            <p className="text-[#003235] text-sm">
                                                mkabadoo@companymail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-12 mt-10">
                                    <div className="w-max mx-auto mb-14 flex items-center gap-4">
                                        <div className="px-14 py-2 flex items-center gap-2 border-b-2 border-[#003235] border-solid">
                                            <HiOutlineUser className="text-2xl" />
                                            <span className="font-camptonthin text-sm">My Profile</span>
                                        </div>
                                        <div className="px-14 py-2 flex items-center gap-2">
                                            <div>
                                                <Image src={APIIcon} alt="api icon" className="w-full" />
                                            </div>
                                            <div>
                                                <span className="font-camptonthin text-sm block">API keys</span>
                                            </div>
                                        </div>
                                        <div className="px-14 py-2 flex items-center gap-2">
                                            <IoSettingsOutline className="text-2xl" />
                                            <span className="font-camptonthin text-sm">Password</span>
                                        </div>
                                    </div>
                                    <div className="pb-7 border-b border-solid border-[#E0E0E0]">
                                        <h4 className="text-3xl text-[#1B1B1B]">Edit Profile</h4>
                                    </div>
                                    <div className="py-7">
                                        <form action="">
                                            <div className="grid grid-cols-2 gap-7">
                                                <div className="form-group">
                                                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-4">First Name</label>
                                                    <Input className="h-[4rem]" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-4">Last Name</label>
                                                    <Input className="h-[4rem]" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-4">Phone Number</label>
                                                    <Input className="h-[4rem]" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-4">Country</label>
                                                    <Select className="w-full h-[4rem]" placeholder="Select option">
                                                        <Select.Option>Nigeria</Select.Option>
                                                    </Select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-4">City</label>
                                                    <Select className="w-full h-[4rem]" placeholder="Select option">
                                                        <Select.Option>Nigeria</Select.Option>
                                                    </Select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="" className="text-[#1B1B1B] text-sm block mb-4">Discipline</label>
                                                    <Input className="h-[4rem]" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between mt-16">
                                                <div></div>
                                                <button className="bg-[#003235] py-4 rounded-[8px] px-20 text-white">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </AccountLayout>
        </div>
    )
}

export default Dashboard;