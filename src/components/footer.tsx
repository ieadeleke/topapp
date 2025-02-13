import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineMedium } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-[#141414] pt-20 pb-5">
            <h4 className="text-center pb-14 text-white font-satoshi">©2023 damdamglobal.com</h4>
            <div className="pt-14 pb-10 px-32 flex items-center justify-between border-t-2 border-solid border-[#1B1B1B]">
                <ul className="flex gap-10">
                    <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            FAQs
                        </Link>
                    </li>
                </ul>
                <ul className="flex gap-10">
                    <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            <BsTwitterX />
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-xl font-satoshi text-white">
                            <AiOutlineMedium />
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-lg font-satoshi text-white">
                            <SiLinkedin />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;