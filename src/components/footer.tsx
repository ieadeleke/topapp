import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineMedium } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

interface FooterProps {
    footerMargin?: boolean
}

const Footer = (props: FooterProps) => {
    return (
        <div className="bg-[#141414] pt-10 md:pt-20 pb-5">
            <h4 className="text-center pb-14 text-white font-satoshi">©2023 damdamglobal.com</h4>
            <div className="pt-14 pb-10 px-5 md:px-32 flex gap-20 md:gap-0 flex-col md:flex-row items-center justify-between border-t-2 border-solid border-[#1B1B1B]">
                <ul className="grid grid-cols-2 md:flex flex-row text-center gap-10">
                    <li>
                        <Link href="/" className="text-lg font-satoshi text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-lg font-satoshi text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg font-satoshi text-white">
                            Contact Us
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            FAQs
                        </Link>
                    </li> */}
                </ul>
                <ul className="flex gap-10">
                    <li>
                        <Link href="https://x.com/pay4it_ng" target="_blank" className="text-lg font-satoshi text-white">
                            <BsTwitterX />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/pay4it_ng?igsh=cnV2bTgzODB0Zmx0" target="_blank" className="text-xl font-satoshi text-white">
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/company/pay4it-ng" target="_blank" className="text-lg font-satoshi text-white">
                            <SiLinkedin />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;