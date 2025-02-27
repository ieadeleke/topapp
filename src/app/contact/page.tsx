"use client";

import Layout from "@/components/layout";
import MapImg from "@/assets/images/map.png";
import Image from "next/image";
import LogoImg from "@/assets/images/logo-bold.svg";
import { GoArrowUpRight } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { useContext, useState } from "react";
import axios from "axios";
import { notification, Spin } from "antd";
import { BASE_URL } from "@/utils/constants/strings";
import { LoadingOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { GlobalActionContext } from "@/context/GlobalActionContext";


const ContactUsPage = () => {

    const [sendingMail, setSendingMail] = useState(false);
    const { showSnackBar } = useContext(GlobalActionContext);
    const [contactFormData, setContactFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });


    const openNotification = (title: string, message: string) => {
        showSnackBar({ severity: 'error', message: message });
    };
    const sendMail = async (e: any) => {
        e.preventDefault();
        const { email, phone, firstName, lastName, message } = contactFormData;
        if (firstName.length && lastName.length && phone.length && message.length && email.length) {
            setSendingMail(true);
            const mailReq = {
                firstName: contactFormData.firstName,
                lastName: contactFormData.lastName,
                phoneNumber: contactFormData.phone,
                email: contactFormData.email,
                message: contactFormData.message,
            }
            try {
                const handleMail = await axios.post(`${BASE_URL}/v1/support/contactus`, JSON.stringify(mailReq), {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (handleMail) {
                    setContactFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                    })
                    showSnackBar({ severity: 'success', message: handleMail?.data?.message });
                } else {
                    showSnackBar({ severity: 'error', message: "An error occurred while sending mail. Please try again." });
                }
                setSendingMail(false);
            } catch (err) {
                setSendingMail(false);
                showSnackBar({ severity: 'error', message: "An error occurred while sending mail. Please try again." });
            }
        } else {
            showSnackBar({ severity: 'error', message: "Please fill all fields." });
        }
    }
    const handleFormChange = (e: any) => {
        setContactFormData({
            ...contactFormData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bg-white">
            <Layout>
                <div className="pt-10 px-5 md:px-20 pb-28 max-w-[1814px] mx-auto">
                    <div className=" grid-cols-2 md:grid grid-cols-3 gap-3 md:gap-10 border-b-2 border-solid border-[#DDDDDD] md:px-5">
                        <div className="md:border-r-2 border-solid border-[#DDDDDD] pt-6 md:pt-14 pb-8 md:pb-24">
                            <h4 className="text-[#202020] text-lg mb-4 md:mb-8 font-campton">General Enquiries</h4>
                            <a href="mailTo:info@usepay4it.com"
                                className="bg-[#DDDDDD] py-4 mb-3 underline px-6 block w-max rounded-lg text-[#202020] flex gap-2 font-camptonthin items-center">info@usepay4it.com <GoArrowUpRight className="text-2xl" /></a>
                            <a href="tel:+2348054306710"
                                className="bg-[#DDDDDD] py-4 px-6 block w-max rounded-lg text-[#202020] flex gap-2 font-camptonthin items-center">+234 805 430 6710 <GoArrowUpRight className="text-2xl" /></a>
                        </div>
                        <div className="md:border-r-2 border-solid border-[#DDDDDD] pt-6 md:pt-14 pb-8 md:pb-24">
                            <h4 className="text-[#202020] text-lg mb-4 md:mb-8 font-campton">Our Office</h4>
                            <p className="text-[#333333] text-sm mb-4">Shop 19, Trocadero Square, The Rock Dr, Lekki Phase I, Lagos 106104</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Shop 19, Trocadero Square, The Rock Dr, Lekki Phase I, Lagos 106104" target="_blank"
                                className="bg-[#DDDDDD] py-4 mb-3 px-6 block w-max rounded-lg text-[#202020] flex gap-2 font-camptonthin items-center">Get Directions <GoArrowUpRight className="text-2xl" /></a>
                        </div>
                        <div className="pt-6 md:pt-14 pb-8 md:pb-24">
                            <h4 className="text-[#202020] text-lg mb-4 md:mb-8 font-campton">Connect With Us</h4>
                            <ul className="grid grid-cols-3 gap-3">
                                <li><a href="https://x.com/pay4it_ng"
                                    className="bg-[#DDDDDD] py-4 mb-3 px-6 block w-full text-center rounded-lg text-[#202020] flex items-center justify-center gap-2 font-camptonthin items-center"><BsTwitterX className="text-xl" /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/pay4it_ng?igsh=cnV2bTgzODB0Zmx0"
                                        className="bg-[#DDDDDD] py-4 px-6 block w-full text-center rounded-lg text-[#202020] flex items-center justify-center gap-2 font-camptonthin items-center"><FaInstagram className="text-xl" /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/pay4it-ng"
                                        className="bg-[#DDDDDD] py-4 px-6 block w-full text-center rounded-lg text-[#202020] flex items-center justify-center gap-2 font-camptonthin items-center"><SiLinkedin className="text-xl" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:grid grid-cols-1/2 gap-10 md:items-center py-10 md:py-0">
                        <div>
                            <Image src={LogoImg} alt="logo" className="mb-4 md:mb-7" />
                            <h3 className="text-2xl md:text-5xl text-dark font-campton md:leading-snug leading-snug">Get in Touch With Pay4it</h3>
                        </div>
                        <div className="md:border-l-2 border-[#DDDDDD] px-0 md:px-16 md:py-14">
                            <form action="">
                                <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4">
                                    <div className="form-group mb-4">
                                        <label htmlFor="" className="text-[#1B1B1B] mb-1 block">First Name</label>
                                        <input value={contactFormData.firstName} name="firstName" type="text" className="w-full block py-5 border-2 border-solid border-[#E0E0E0] px-3 rounded-lg text-sm font-campton"
                                            placeholder="Enter Name" onChange={handleFormChange} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="" className="text-[#1B1B1B] mb-1 block">Last Name</label>
                                        <input value={contactFormData.lastName} name="lastName" type="text" className="w-full block py-5 border-2 border-solid border-[#E0E0E0] px-3 rounded-lg text-sm font-campton"
                                            placeholder="Enter Name" onChange={handleFormChange} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4">
                                    <div className="form-group">
                                        <label htmlFor="" className="text-[#1B1B1B] mb-1 block">Email</label>
                                        <input value={contactFormData.email} name="email" type="text" className="w-full block py-5 border-2 border-solid border-[#E0E0E0] px-3 rounded-lg text-sm font-campton"
                                            placeholder="Enter Email" onChange={handleFormChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="text-[#1B1B1B] mb-1 block">Phone Number</label>
                                        <input value={contactFormData.phone} name="phone" type="text" className="w-full block py-5 border-2 border-solid border-[#E0E0E0] px-3 rounded-lg text-sm font-campton"
                                            placeholder="Enter Phone Number" onChange={handleFormChange} />
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="" className="text-[#1B1B1B] mb-1 block">Message</label>
                                    <textarea value={contactFormData.message} name="message" rows={5} className="w-full block py-5 border-2 border-solid border-[#E0E0E0] px-3 rounded-lg text-sm font-campton"
                                        placeholder="Enter your Message" onChange={handleFormChange} />
                                </div>
                                <div className="mt-10">
                                    {
                                        sendingMail ?
                                            <button disabled className="bg-black text-white py-4 px-10 rounded-lg">Sending<Spin indicator={<LoadingOutlined spin style={{ color: "#fff" }} />} /></button>
                                            :
                                            <button onClick={sendMail} className="bg-black text-white py-4 px-10 rounded-lg">Send</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <Image src={MapImg} alt="map of our office" className="" />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ContactUsPage;