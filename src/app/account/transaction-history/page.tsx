"use client";

import FilterImg from "@/assets/images/account/icons/filter.svg";
import DownloadImg from "@/assets/images/account/icons/cloud-upload.svg";

import AccountLayout from "@/components/account/layout";
// import useFetchWalletTransactions from "@/utils/apiHooks/wallets/useFetchWalletTransactions";

import { Table } from "antd";
// import { useEffect, useState } from "react";
import Image from "next/image";

const Dashboard = () => {

    // const { fetchWalletDetails, data: walletData } = useFetchWalletTransactions();

    // const [selectedHistory, setSelectedHistory] = useState();
    // const [history, setHistory] = useState();

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

    // useEffect(() => {
    //     if (walletData) {
    //         setHistory(walletData);
    //     };
    // }, [walletData])

    // useEffect(() => {
    //     fetchWalletDetails();
    // }, [])

    return (
        <div>
            <AccountLayout>
                <>
                    <div>
                        <div className="mt-12 mb-7">
                            <div className="flex items-center justify-between w-full">
                                <div>
                                    <h4 className="text-3xl">Transaction History</h4>
                                </div>
                                <div className="flex gap-3">
                                    <div className="border border-solid border rounded-[12px] py-3 px-5 gap-10 flex items-center gap-5">
                                        <span className="text-[13px]">Filter:</span>
                                        <span>
                                            <Image src={FilterImg} alt="filter icon" className="" />
                                        </span>
                                    </div>
                                    <div className="bg-[#003235] rounded-[12px] py-5 px-5 gap-10 flex items-center gap-5">
                                        <span className="text-[13px] text-white">Export CSV:</span>
                                        <span>
                                            <Image src={DownloadImg} alt="filter icon" className="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Table dataSource={dataSource} columns={columns} rowClassName={() => "custom-row"} className="custom-table" />
                    </div>
                </>
            </AccountLayout>
        </div>
    )
}

export default Dashboard;