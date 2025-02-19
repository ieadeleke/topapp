"use client";

import Layout from "@/components/layout";
import Image from "next/image";
import LogoImg from "@/assets/images/logo.svg";
import HeroImg from "@/assets/images/hero.png";
import ShoppersImg from "@/assets/images/shoppers.svg";
import MaleposeImg from "@/assets/images/home/malepose.svg";
import WomanImg from "@/assets/images/home/woman.png";
import MoneyImg from "@/assets/images/home/money.svg";
import Svg1Img from "@/assets/images/home/svg1.svg";
import Svg2Img from "@/assets/images/home/svg2.svg";
import Svg3Img from "@/assets/images/home/svg3.svg";
import { FaCreditCard } from "react-icons/fa6";


import HandImg from "@/assets/images/home/hand.png";
import SallyImg from "@/assets/images/home/saly.png";
import CardImg from "@/assets/images/home/card.png";
import ArrowHomeImg from "@/assets/images/icons/arrow-home.svg";
import { FaArrowRightLong } from "react-icons/fa6";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
// import { Swiper as SwiperType } from 'swiper';

export default function Home() {

  // const swiperRef = useRef<SwiperType | null>(null);

  const breakpoints = {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 3.4
    },
    1800: {
      slidesPerView: 4.4
    },
  }

  return (
    <div className="bg-background">
      <Layout>
        <>
          <div className="hero-sect px-5 md:px-20 py-20">
            <div className="flex flex-col md:grid grid-cols-2 max-w-[1626px] mx-auto gap-10">
              <div>
                <div className="bg-primary rounded-lg py-3 px-5 mb-4 flex items-center gap-3 w-max">
                  A Better Way to Do It.
                </div>
                <h3 className="text-3xl md:text-5xl leading-tight md:leading-tight">
                  Simpler, Faster & Reliable Payment for Businesses and Governments.
                </h3>
              </div>
              <div>
                <p className="mb-1">Transforming Financial Services in Nigeria</p>
                <p className="text-base leading-loose md:leading-loose">
                  Pay4IT empowers businesses, individuals, and governments with innovative financial technology solutions. From streamlining tax collection to enabling seamless digital payments, we drive transparency, efficiency, and economic growth across diverse sectors.
                </p>
                <div className="mt-5 flex gap-5">
                  <Link href="/auth/login" className="bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                    <div className="size-12 bg-dark rounded-full flex items-center justify-center">
                      <Image src={LogoImg} alt="logo" className="w-[50%]" />
                    </div>
                    <span className="pr-4">
                      Get Started
                    </span>
                  </Link>
                  <button className="bg-primary rounded-full py-2 px-12 flex items-center gap-3">
                    Our Solutions
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <Image src={HeroImg} alt="HeroImg" />
            </div>
          </div>
          <div className="mt-2 py-14 bg-primary w-full"></div>
          <div className="mt-20 px-5 md:px-20">
            <div className="flex flex-col md:flex-row justify-between mb-24 md:items-end max-w-[1657px]">
              <h3 className="text-3xl md:text-5xl md:leading-snug leading-snug max-w-[1190px]">
                Join us in simplifying payments <br /> and creating opportunities for all
              </h3>
              <Image src={ShoppersImg} alt="ShoppersImg" />
            </div>
          </div>
          <Swiper
            spaceBetween={20} breakpoints={breakpoints} centeredSlides={false} slidesOffsetBefore={50}
          // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          // onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide key={1}>
              <div className="w-full bg-[#003437] max-h-[400px] h-[400px] rounded-[64px] pt-20">
                <div className="flex items-end gap-0 pl-10">
                  <div>
                    <div>
                      <Image src={HandImg} alt="money icon" className="w-[200px] mb-5 font-camptonthin" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-4xl pb-14 font-campton">
                      Payment Gateway
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <div className="w-full bg-[#D3FFB4] max-h-[400px] rounded-[64px] pt-20">
                <div className="flex flex-col items-center gap-0 pl-10">
                  <div>
                    <div className="mb-5 -ml-20">
                      <Image src={SallyImg} alt="money icon" className="w-[180px] -mt-10" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl pb-14 font-campton">
                      Informal Sector Revenue Collection Tools
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={3}>
              <div className="w-full bg-[#02DB94] max-h-[400px] h-[400px] rounded-[64px] pt-10">
                <div className="gap-0">
                  <div>
                    <h2 className="text-4xl pb-5 text-center font-camptonsemi">
                      Data Analytics
                    </h2>
                  </div>
                  <div>
                    <div>
                      <Image src={CardImg} alt="money icon" className="w-[200px] mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={4}>
              <div className="w-full bg-[#D3FFB4] max-h-[400px] rounded-[64px] pt-20">
                <div className="flex flex-col items-center gap-0 pl-10">
                  <div>
                    <div className="mb-5 -ml-20">
                      <Image src={SallyImg} alt="money icon" className="w-[180px] -mt-10" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl pb-14 font-campton">
                      Informal Sector Revenue Collection Tools
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={5}>
              <div className="w-full bg-[#02DB94] max-h-[400px] h-[400px] rounded-[64px] pt-10">
                <div className="gap-0">
                  <div>
                    <h2 className="text-4xl pb-5 text-center font-campton">
                      Data Analytics
                    </h2>
                  </div>
                  <div>
                    <div>
                      <Image src={CardImg} alt="money icon" className="w-[200px] mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="manual px-5 md:px-24 mt-24">
            <div className="flex flex-col md:grid grid-cols-3 gap-10 pt-20 pb-24 items-center">
              <div>
                <h3 className="text-3xl md:text-7xl text-white font-campton md:leading-tight leading-tight mb-5">Use Pay4it to pay for it</h3>
                <p className="text-white text-2xl mb-5 font-camptonthin 4xl:w-[90%]">
                  Transactions and payments made seamlessly.
                </p>
                <div className="flex gap-5">
                  <button className="bg-white rounded-full py-2 px-3 flex items-center gap-3">
                    <div className="size-10 bg-dark rounded-full flex items-center justify-center">
                      <Image src={LogoImg} alt="logo" className="w-[50%]" />
                    </div>
                    <span className="pr-4 text-dark text-sm">
                      More Info
                    </span>
                  </button>
                  <button className="border text-white border-white border-solid rounded-full py-2 px-10 flex items-center gap-3 text-sm">
                    Contact Us
                  </button>
                </div>
              </div>
              <div>
                <Image src={WomanImg} alt="woman holding a cup" className="" />
              </div>
              <div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy Power</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy Airtime</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy Data</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Pay Taxes</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Cable TV</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Netflix</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">E-commerce</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Payroll</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Betting</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Invoice & Receipt</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Debit & Credit Card</p>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-white py-7 pb-5 px-2 rounded-[16px]">
                    <Link href="">
                      <div className="flex flex-col text-center">
                        <div className="mx-auto flex items-center mb-5 justify-center size-10 bg-[#D3FFB4] rounded-[8px]">
                          <FaCreditCard />
                        </div>
                        <p className="font-satoshiregular text-sm text-[#1B1B1B] block w-full">Buy JAMB</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3F3] py-20 pb-60">
            <h3 className="text-center text-5xl w-[70%] 3xl:w-[50%] 4xl:w-[40%] mx-auto leading-snug md:leading-snug text-[#003235] font-campton">
              API Integration for PAYE, WHT, and Government Bill Processing
            </h3>
          </div>
          <div className="md:px-24 bg-[#F3F3F3] md:bg-transparent">
            <div className="md:bg-[#5D8BFF] py-20 px-32 4xl:w-[75%] mx-auto rounded-b-[100px]">
              <div className="max-w-[1320px] 3xl:w-[95%] 4xl:w-[100%] mx-auto grid grid-cols-3 gap-10 -mt-[270px]">
                <div className="min-h-[350px] border text-center border-solid border-black bg-[#5D8BFF] rounded-t-[200px] pt-16 pb-16 rounded-b-[200px]">
                  <div className="min-h-[50px] mb-5">
                    <Image src={Svg1Img} alt="paye" className="w-[15%] mb-7 mx-auto" />
                  </div>
                  <h6 className="text-[#1B1B1B] text-sm mb-7 uppercase font-campton">PAYE API</h6>
                  <h4 className="text-[#3A3A3A] text-lg w-[85%] leading-loose md:leading-loose font-campton mx-auto">Automate Pay-As-You-Earn (PAYE) tax deductions and employee remittances</h4>
                  <div className="block w-[50px] mx-auto bg-black mt-12 h-[1.5px]"></div>
                </div>
                <div className="min-h-[350px] border text-center border-solid bg-[#fff] rounded-t-[200px] pt-16 pb-16 rounded-b-[200px]">
                  <div className="min-h-[50px] mb-5">
                    <Image src={Svg3Img} alt="paye" className="w-[10%] mb-7 mx-auto" />
                  </div>
                  <h6 className="text-[#1B1B1B] text-sm mb-7 uppercase font-campton">Withholding Tax API</h6>
                  <h4 className="text-[#3A3A3A] text-lg w-[85%] leading-loose md:leading-loose font-campton mx-auto">Simplify withholding tax deductions for businesses and service providers.</h4>
                  <div className="block w-[50px] mx-auto bg-black mt-12 h-[1.5px]"></div>
                </div>
                <div className="min-h-[350px] border text-center border-solid bg-[#fff] rounded-t-[200px] pt-16 pb-16 rounded-b-[200px]">
                  <div className="min-h-[50px] mb-5">
                    <Image src={Svg2Img} alt="paye" className="w-[15%] mb-7 mx-auto" />
                  </div>
                  <h6 className="text-[#1B1B1B] text-sm mb-7 uppercase font-campton">Government Bills API</h6>
                  <h4 className="text-[#3A3A3A] text-lg w-[90%] 4xl:w-[90%] leading-loose md:leading-loose font-campton mx-auto">Enable businesses and individuals to pay government levies, licenses, and bills effortlessly.</h4>
                  <div className="block w-[50px] mx-auto bg-black mt-12 h-[1.5px]"></div>
                </div>
              </div>
              <div className="px-0">
                <h3 className="text-white mb-16 text-6xl leading-normal md:leading-normal font-camptonthin mt-10 3xl:w-[95%] mx-auto 4xl:w-[95%]">
                  <div className="w-max">
                    Simplify <span className="text-black font-camptonsemi border-b-2 border-white border-solid">Tax and Bill
                      Payments</span> with <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-camptonsemi border-b-2 border-white border-solid"> Pay4IT</span> <span className="text-black font-camptonsemi"> API </span> <span className="text-black font-camptonsemi border-b-2 border-white border-solid">Integration
                        </span>

                      </div>
                      <span className="size-24 rounded-full bg-white block flex items-center">
                        <Image src={ArrowHomeImg} alt="paye" className="" />
                      </span>
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <div className="my-24 px-24 3xl:px-32 3xl:px-32 4xl:w-[80%] mb-32 mx-auto">
            <div className="bg-[#DFFF5E] relative rounded-[100px] py-20 px-20 border-2 border-solid border-black min-h-[700px]">
              <h4 className="text-6xl font-campton w-[90%] leading-tight md:leading-tight">
                &quot;Automate salary processing, PAYE deductions, and employee benefits for streamlined HR operations.&quot;
              </h4>
              <button className="bg-dark mt-10 rounded-[16px] py-2 px-6 flex items-center gap-1">
                <span className="pr-4 text-white">
                  View More
                </span>
                <div className="size-12 bg-white rounded-full flex items-center justify-center">
                  <FaArrowRightLong className="text-xl" />
                </div>
              </button>
              <Image src={MaleposeImg} alt="man sitting on a chair" className="absolute right-5 -bottom-24 w-[650px]" />
            </div>
          </div>
        </>
      </Layout >
    </div >
  );
}
