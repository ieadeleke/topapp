"use client";

import FilterImg from "@/assets/images/account/icons/filter.svg";
import DownloadImg from "@/assets/images/account/icons/cloud-upload.svg";

import AccountLayout from "@/components/account/layout";
import useFetchWalletTransactions from "@/utils/apiHooks/wallets/useFetchWalletTransactions";

import { Dropdown, Table } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";

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
                        <div className="mt-12 mb-7">
                            <div className="">
                                <div className="grid grid-cols-4 gap-5">
                                    <div className="bg-[#F8F8F8] h-full w-full border-2 border-dashed border-[#686868] rounded-[16px] flex items-center justify-center cursor-pointer">
                                        <h4 className="text-[#1B1B1B]">Add Users</h4>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="border border-solid border-[#EFEFEF] p-4 rounded-[16px] flex items-center gap-5">
                                        <div className="flex gap-3">
                                            <div className="size-12 rounded-full bg-[#EFEFEF]"></div>
                                            <div>
                                                <h5 className="text-base mb-2 text-[#1B1B1B]">Sharon Parker</h5>
                                                <p className="text-[13px] text-[#64748B]">Jeffery.Zulauf@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer">
                                            <Dropdown menu={{ items }}>
                                                <BsThreeDotsVertical className="text-xl" />
                                            </Dropdown>
                                        </div>
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