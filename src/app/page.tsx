"use client";

import Layout from "@/components/layout";
import Image from "next/image";
import LogoImg from "@/assets/images/logo.svg";
import HeroImg from "@/assets/images/hero.png";
import ShoppersImg from "@/assets/images/shoppers.svg";
import WithholdingImg from "@/assets/images/icons/withholding.svg";
import MaleposeImg from "@/assets/images/home/malepose.svg";
import WomanImg from "@/assets/images/home/woman.png";
import MoneyImg from "@/assets/images/home/money.svg";

import HandImg from "@/assets/images/home/hand.png";
import SallyImg from "@/assets/images/home/saly.png";
import CardImg from "@/assets/images/home/card.png";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
      slidesPerView: 3.3
    }
  }

  return (
    <div className="bg-background">
      <Layout>
        <>
          <div className="hero-sect px-20 py-20">
            <div className="grid grid-cols-2 max-w-[1626px] mx-auto gap-10">
              <div>
                <div className="bg-primary rounded-lg py-3 px-5 mb-4 flex items-center gap-3 w-max">
                  A Better Way to Do It.
                </div>
                <h3 className="text-5xl leading-tight md:leading-tight">
                  Simpler, Faster & Reliable Payment for Businesses and Governments.
                </h3>
              </div>
              <div>
                <p className="mb-1">Transforming Financial Services in Nigeria</p>
                <p className="text-base leading-loose md:leading-loose">
                  Pay4IT empowers businesses, individuals, and governments with innovative financial technology solutions. From streamlining tax collection to enabling seamless digital payments, we drive transparency, efficiency, and economic growth across diverse sectors.
                </p>
                <div className="mt-5 flex gap-5">
                  <button className="bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                    <div className="size-12 bg-dark rounded-full flex items-center justify-center">
                      <Image src={LogoImg} alt="logo" className="w-[50%]" />
                    </div>
                    <span className="pr-4">
                      Get Started
                    </span>
                  </button>
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
          <div className="dotted-line"></div>
          <div className="mt-4 py-14 bg-primary w-full"></div>
          <div className="mt-20 px-20">
            <div className="flex justify-between mb-28 items-end max-w-[1657px]">
              <h3 className="text-5xl md:leading-snug leading-snug max-w-[1190px]">
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
          <div className="px-20 mt-32">
            <div className="mb-20 flex justify-between items-center">
              <h3 className="font-campton text-5xl leading-tight">
                Why Choose Pay4it for your <br /> ___________ Needs?
              </h3>
              <div className="flex gap-5">
                <button className="bg-primary rounded-full py-2 px-3 flex items-center gap-3">
                  <div className="size-12 bg-dark rounded-full flex items-center justify-center">
                    <Image src={LogoImg} alt="logo" className="w-[50%]" />
                  </div>
                  <span className="pr-4">
                    Get Started
                  </span>
                </button>
                <button className="bg-primary rounded-full py-2 px-12 flex items-center gap-3">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="pt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
              <div className="grid grid-cols-1/1.5/1.5">
                <div>
                  <h3 className="text-lg font-camptonsemi">01</h3>
                </div>
                <div>
                  <div className="w-[60%] pb-20">
                    <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                    <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="h-full w-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="pt-16 mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
              <div className="grid grid-cols-1/1.5/1.5">
                <div>
                  <h3 className="text-lg font-camptonsemi">02</h3>
                </div>
                <div>
                  <div className="w-[60%] pb-1">
                    <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                    {/* <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p> */}
                  </div>
                </div>
                <div>
                  <div className="h-full w-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="pt-16 mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
              <div className="grid grid-cols-1/1.5/1.5">
                <div>
                  <h3 className="text-lg font-camptonsemi">03</h3>
                </div>
                <div>
                  <div className="w-[60%] pb-1">
                    <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                    {/* <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p> */}
                  </div>
                </div>
                <div>
                  <div className="h-full w-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="pt-16 mt-16 border-t border-solid border-[#D6DDD1] max-w-[1724px] mx-auto">
              <div className="grid grid-cols-1/1.5/1.5">
                <div>
                  <h3 className="text-lg font-camptonsemi">04</h3>
                </div>
                <div>
                  <div className="w-[60%] pb-1">
                    <h3 className="text-lg font-camptonsemi mb-10">The All-in-One Financial Solution</h3>
                    {/* <p className="text-sm leading-loose md:leading-loose">
                      Simplify your business operations with Pay4It—your go-to platform for HR solutions, payroll processing, tax compliance, and seamless payments. From handling PAYE and withholding tax APIs to offering a secure payment gateway and wallet services, we ensure your transactions are fast, secure, and hassle-free.
                    </p> */}
                  </div>
                </div>
                <div>
                  <div className="h-full w-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="manual px-24 mt-24">
            <div className="grid grid-cols-3 gap-10 pt-20 pb-24 items-center">
              <div>
                <h3 className="text-7xl text-white font-camptonsemi mb-5">Use Pay4it to pay for it</h3>
                <p className="text-white text-2xl mb-5 font-camptonthin">
                  Schedule the interview with this candidate now
                </p>
                <div className="flex gap-8">
                  <button className="bg-white rounded-full py-2 px-3 flex items-center gap-3">
                    <div className="size-10 bg-dark rounded-full flex items-center justify-center">
                      <Image src={LogoImg} alt="logo" className="w-[50%]" />
                    </div>
                    <span className="pr-4 text-dark text-sm">
                      Get started
                    </span>
                  </button>
                  <button className="border text-white border-white border-solid rounded-full py-2 px-10 flex items-center gap-3 text-sm">
                    Our Solutions
                  </button>
                </div>
              </div>
              <div>
                <Image src={WomanImg} alt="woman holding a cup" className="" />
              </div>
              <div>
                <Image src={MoneyImg} alt="money icon" className="mb-10" />
                <h4 className="text-3xl text-white font-camptonthin text-center">
                  Schedule the interview with this candidate now
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3F3] py-20 pb-60">
            <h3 className="text-center text-5xl w-[70%] mx-auto leading-snug md:leading-snug text-[#003235]">
              API Integration for PAYE, WHT, and Government Bill Processing
            </h3>
          </div>
          <div className="px-24">
            <div className="bg-[#5D8BFF] py-20 px-32 rounded-b-[100px]">
              <div className="max-w 1320px grid grid-cols-3 gap-10 -mt-[270px]">
                <div className="min-h-[350px] border text-center border-solid border-black bg-[#5D8BFF] rounded-t-[200px] pt-28 pb-16 rounded-b-[200px]">
                  <Image src={WithholdingImg} alt="paye" className="w-[15%] mb-7 mx-auto" />
                  <h6 className="text-[#1B1B1B] text-sm mb-7">PAYE</h6>
                  <h4 className="text-black text-2xl w-[60%] mx-auto">Get all digital solution <br />
                    from our expert</h4>
                  <div className="block w-[70px] mx-auto bg-black mt-12 h-[3px]"></div>
                </div>
                <div className="min-h-[350px] border text-center border-solid bg-[#fff] rounded-t-[200px] pt-28 pb-16 rounded-b-[200px]">
                  <Image src={WithholdingImg} alt="paye" className="w-[15%] mb-7 mx-auto" />
                  <h6 className="text-[#1B1B1B] text-sm mb-7">PAYE</h6>
                  <h4 className="text-black text-2xl w-[60%] mx-auto">Get all digital solution <br />
                    from our expert</h4>
                  <div className="block w-[70px] mx-auto bg-black mt-12 h-[3px]"></div>
                </div>
                <div className="min-h-[350px] border text-center border-solid bg-[#fff] rounded-t-[200px] pt-28 pb-16 rounded-b-[200px]">
                  <Image src={WithholdingImg} alt="paye" className="w-[15%] mb-7 mx-auto" />
                  <h6 className="text-[#1B1B1B] text-sm mb-7">PAYE</h6>
                  <h4 className="text-black text-2xl w-[60%] mx-auto">Get all digital solution <br />
                    from our expert</h4>
                  <div className="block w-[70px] mx-auto bg-black mt-12 h-[3px]"></div>
                </div>
              </div>
              <div className="px-0">
                <h3 className="text-white mb-16 text-6xl leading-normal md:leading-normal font-camptonthin mt-10">
                  Simplify <span className="text-black font-camptonsemi border-b-2 border-white border-solid">Tax and Bill
                    Payments</span> with <span className="font-camptonsemi border-b-2 border-white border-solid">Pay4IT</span><span className="text-black font-camptonsemi"> API</span> <span className="text-black font-camptonsemi border-b-2 border-white border-solid">Integration</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="my-24 px-24">
            <div className="bg-[#DFFF5E] relative rounded-[100px] py-20 px-20 border-2 border-solid border-black min-h-[700px]">
              <h4 className="text-6xl font-campton w-[90%]">
                &apos;Automate salary processing, PAYE deductions, and employee benefits for streamlined HR operations.&apos;
              </h4>
              <Image src={MaleposeImg} alt="man sitting on a chair" className="absolute right-5 -bottom-14 w-[650px]" />
            </div>
          </div>
        </>
      </Layout>
    </div>
  );
}
