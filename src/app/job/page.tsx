import Layout from "@/components/layout";
import Image from "next/image";
// import HeroImg from "@/assets/images/job/hero.svg";
import HeroImg from "@/assets/images/job/hero.png";
import BottomImg from "@/assets/images/job/bottom.svg";
import PeopleImg from "@/assets/images/job/people.svg";
import LogoImg from "@/assets/images/logo.png";
import { VscBriefcase } from "react-icons/vsc";
import { GrLocation } from "react-icons/gr";
import { MdOutlineBookmarkBorder } from "react-icons/md";


const JobPage = () => {
    return (
        <div>
            <Layout>
                <>
                    <div className="w-full px-20 mt-10">
                        <div className="bg-[#003235] rounded-3xl py-10 px-24 max-w-[1671px]">
                            <div className="grid grid-cols-2 gap-28 items-center mx-auto max-w-[1212px]">
                                <div>
                                    <h3 className="text-6xl pt-10 text-white leading-tight md:leading-tight mb-5">
                                        Find The Right Jobs And Work Without Borders
                                    </h3>
                                    <p className="text-white text lg font-camptonthin leading-loose md:leading-loose opacity-80 mb-5">
                                        Come be part of innovation. We are always looking for cool people that are passionate about financial technology and eager to make a difference.
                                    </p>
                                    {/* <button className="font-camptonsemi rounded-full bg-white py-5 px-16 mb-5 text-sm uppercase">
                                        Make Payment
                                    </button> */}
                                    <Image src={PeopleImg} alt="people smiling" className="w-[30%]" />
                                </div>
                                <div>
                                    <Image src={HeroImg} alt="people smiling" className="w-ma" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F3F3F3] py-20 w-full mb-20 mt-20">
                        <h3 className="text-5xl text-[#003235] text-center">
                            Latest Job Opportunities
                        </h3>
                        <div className="mt-14 w-[50%] mx-auto">
                            <div className="bg-white flex rounded-xl py-1 px-2">
                                <input type="text" className="flex-1 py-5 bg-white h-full w-full" />
                                <button className="py-4 px-10 bg-[#003235] text-white text-base rounded-xl">Search</button>
                            </div>
                            {/* <div className="grid grid-cols-3 gap-14 mt-8">
                                <div className="bg-white py-6 rounded-lg"></div>
                                <div className="bg-white py-6 rounded-lg"></div>
                                <div className="bg-white py-6 rounded-lg"></div>
                            </div> */}
                        </div>
                        <div className="w-[75%] mt-14 gap-8 grid grid-cols-2 mx-auto">
                            <div className="bg-white flex justify-between p-10 py-8 pb-6 rounded-xl">
                                <div>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image src={LogoImg} alt="logo" className="w-[60px]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl mb-4">Software Developer</h4>
                                            <ul className="flex gap-8 mb-4">
                                                <li className="flex text-sm items-center gap-2 text-[#696969]"><VscBriefcase className="text-xl" /> Hybrid</li>
                                                <li className="flex text-sm items-center gap-1 text-[#696969]"><GrLocation className="text-xl" /> Lagos, Nigeria</li>
                                            </ul>
                                            <div className="mt-5">
                                                <div className="py-1 px-4 rounded-full w-max text-sm text-[#1967D2] font-inter"
                                                    style={{ background: "rgba(25, 103,210, .15)" }}>
                                                    Full Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <MdOutlineBookmarkBorder className="text-2xl" />
                                </div> */}
                            </div>
                            <div className="bg-white flex justify-between p-10 py-8 pb-6 rounded-xl">
                                <div>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image src={LogoImg} alt="logo" className="w-[60px]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl mb-4">Agents</h4>
                                            <ul className="flex gap-8 mb-4">
                                                <li className="flex text-sm items-center gap-2 text-[#696969]"><VscBriefcase className="text-xl" /> Hybrid</li>
                                                <li className="flex text-sm items-center gap-1 text-[#696969]"><GrLocation className="text-xl" /> Lagos, Nigeria</li>
                                            </ul>
                                            <div className="mt-5">
                                                <div className="py-1 px-4 rounded-full w-max text-sm text-[#1967D2] font-inter"
                                                    style={{ background: "rgba(25, 103,210, .15)" }}>
                                                    Full Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <MdOutlineBookmarkBorder className="text-2xl" />
                                </div> */}
                            </div>
                            <div className="bg-white flex justify-between p-10 py-8 pb-6 rounded-xl">
                                <div>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image src={LogoImg} alt="logo" className="w-[60px]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl mb-4">Senior Full Stack Engineer</h4>
                                            <ul className="flex gap-8 mb-4">
                                                <li className="flex text-sm items-center gap-2 text-[#696969]"><VscBriefcase className="text-xl" /> Hybrid</li>
                                                <li className="flex text-sm items-center gap-1 text-[#696969]"><GrLocation className="text-xl" /> Lagos, Nigeria</li>
                                            </ul>
                                            <div className="mt-5">
                                                <div className="py-1 px-4 rounded-full w-max text-sm text-[#1967D2] font-inter"
                                                    style={{ background: "rgba(25, 103,210, .15)" }}>
                                                    Full Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <MdOutlineBookmarkBorder className="text-2xl" />
                                </div> */}
                            </div>
                            <div className="bg-white flex justify-between p-10 py-8 pb-6 rounded-xl">
                                <div>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image src={LogoImg} alt="logo" className="w-[60px]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl mb-4">Recruiting Coordinator</h4>
                                            <ul className="flex gap-8 mb-4">
                                                <li className="flex text-sm items-center gap-2 text-[#696969]"><VscBriefcase className="text-xl" /> Hybrid</li>
                                                <li className="flex text-sm items-center gap-1 text-[#696969]"><GrLocation className="text-xl" /> Lagos, Nigeria</li>
                                            </ul>
                                            <div className="mt-5">
                                                <div className="py-1 px-4 rounded-full w-max text-sm text-[#1967D2] font-inter"
                                                    style={{ background: "rgba(25, 103,210, .15)" }}>
                                                    Full Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <MdOutlineBookmarkBorder className="text-2xl" />
                                </div> */}
                            </div>
                            <div className="bg-white flex justify-between p-10 py-8 pb-6 rounded-xl">
                                <div>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image src={LogoImg} alt="logo" className="w-[60px]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl mb-4">Sales and Marketing Executive</h4>
                                            <ul className="flex gap-8 mb-4">
                                                <li className="flex text-sm items-center gap-2 text-[#696969]"><VscBriefcase className="text-xl" /> Hybrid</li>
                                                <li className="flex text-sm items-center gap-1 text-[#696969]"><GrLocation className="text-xl" /> Lagos, Nigeria</li>
                                            </ul>
                                            <div className="mt-5">
                                                <div className="py-1 px-4 rounded-full w-max text-sm text-[#34A853] font-inter"
                                                    style={{ background: "rgba(25, 103,210, .15)" }}>
                                                    Full Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <MdOutlineBookmarkBorder className="text-2xl" />
                                </div> */}
                            </div>
                            <div className="bg-white flex justify-between p-10 py-8 pb-6 rounded-xl">
                                <div>
                                    <div className="flex gap-6">
                                        <div>
                                            <Image src={LogoImg} alt="logo" className="w-[60px]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl mb-4">Finance and Operations Analyst</h4>
                                            <ul className="flex gap-8 mb-4">
                                                <li className="flex text-sm items-center gap-2 text-[#696969]"><VscBriefcase className="text-xl" /> Hybrid</li>
                                                <li className="flex text-sm items-center gap-1 text-[#696969]"><GrLocation className="text-xl" /> Lagos, Nigeria</li>
                                            </ul>
                                            <div className="mt-5">
                                                <div className="py-1 px-4 rounded-full w-max text-sm text-[#D2AD19] font-inter"
                                                    style={{ background: "rgba(25, 103,210, .15)" }}>
                                                    Full Time
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <MdOutlineBookmarkBorder className="text-2xl" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full px-20 mt-20 mb-24">
                        <div className="bg-[#003235] rounded-3xl py-20 px-32 max-w-[1671px]">
                            <div className="grid grid-cols-2 gap-16 items-center mx-auto max-w-[1212px]">
                                <div>
                                    <h3 className="text-6xl pt-10 text-white leading-tight md:leading-tight mb-5">
                                        So Many People Are <span className="text-[#D3FFB4]">Engaged</span> All Over The world
                                    </h3>
                                    <p className="text-white text lg font-camptonthin leading-loose md:leading-loose opacity-80 mb-5">
                                        Come be part of innovation. We are always looking for cool people that are passionate about financial technology and eager to make a difference.
                                    </p>
                                    <button className="font-camptonsemi rounded-lg bg-white py-5 px-16 mb-5 text-sm uppercase">
                                        Make Payment
                                    </button>
                                </div>
                                <div>
                                    <Image src={BottomImg} alt="job board" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </>
            </Layout>
        </div>
    )
}

export default JobPage;