import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import LogoImg from "@/assets/images/logo-full.svg";
import Image from "next/image";

interface NavInterface {
    navPosition?: string
}
const Navigation = (props: NavInterface) => {
    return (
        <div>
            <div className={`flex justify-between items-center px-20 py-7 w-full top-0 ${props.navPosition ? props.navPosition : "relative"}`}>
                <div>
                    <Image src={LogoImg} alt="logo" />
                </div>
                <div>
                    <ul className="flex items-center gap-3 border-2 border-solid border-[#BBE998] py-1 px-2 rounded-full">
                        <li>
                            <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="">Company <IoIosArrowDown className="text-lg" /></Link>
                        </li>
                        <li>
                            <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="">Solutions <IoIosArrowDown className="text-lg" /></Link>
                        </li>
                        <li>
                            <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="">Pay Bills <IoIosArrowDown className="text-lg" /></Link>
                        </li>
                        <li>
                            <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="">Developers <IoIosArrowDown className="text-lg" /></Link>
                        </li>
                        <li>
                            <Link className="bg-primary text-sm text-dark rounded-full py-3 px-5 flex gap-2 items-center" href="">Contact Us <IoIosArrowDown className="text-lg" /></Link>
                        </li>
                        <li>
                            <Link className="bg-dark text-sm text-primary rounded-full py-3 px-5 flex gap-2 items-center" href="">Request a Demo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;