"use client";

import SideBar from "./sidebar";
import Footer from "../footer";
import Navbar from "../nav";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from "react";

interface LayoutPropsInterface {
    children: React.ReactElement
}

const AccountLayout = (props: LayoutPropsInterface) => {
    const [pageSpinner, setPageSpinner] = useState<boolean>(false);

    const togglePageSpinner = () => setPageSpinner(!pageSpinner);
    
    return (
        <div>
            <Spin spinning={pageSpinner} indicator={<LoadingOutlined spin />}>
                <div className="block md:hidden">
                    <Navbar />
                </div>
                <div className="min-h-[70vh] md:h-screen md:overflow-hidden overflow-x-hidden p-5 flex flex-col md:flex-row gap-6">
                    <div className="hidden md:block">
                        <SideBar togglePageSpinner={togglePageSpinner} />
                    </div>
                    <div className="flex-1 md:overflow-scroll overflow-x-hidden">
                        {props.children}
                    </div>
                </div>
                <div className="block md:hidden">
                    <Footer />
                </div>
            </Spin>
        </div>
    )
}

export default AccountLayout;