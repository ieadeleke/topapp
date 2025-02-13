import Layout from "@/components/layout";
import Image from "next/image";
import LogoImg from "@/assets/images/logo.svg";
import HeroImg from "@/assets/images/hero.png";
import ShoppersImg from "@/assets/images/shoppers.svg";
import WithholdingImg from "@/assets/images/icons/withholding.svg";


export default function Home() {
  return (
    <div>
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
                    <div className="size-16 bg-dark rounded-full flex items-center justify-center">
                      <Image src={LogoImg} alt="logo" className="w-[50%]" />
                    </div>
                    <span className="pr-4">
                      Request a Demo
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
          <div className="mt-20">
            <div className="flex px-20 justify-between items-end max-w-[1657px]">
              <h3 className="text-5xl md:leading-snug leading-snug max-w-[1190px]">
                Join us in simplifying payments <br /> and creating opportunities for all
              </h3>
              <Image src={ShoppersImg} alt="ShoppersImg" />
            </div>
          </div>
          <div className="mt-20 bg-[#F3F3F3] py-20 pb-60">
            <h3 className="text-center text-5xl w-[70%] mx-auto leading-snug md:leading-snug text-[#003235]">
              API Integration for PAYE, WHT, and Government Bill Processing
            </h3>
          </div>
          <div className="px-24">
            <div className="bg-[#5D8BFF] py-20 px-24">
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
              <h3 className="text-white">
                Simplify <span>Tax and Bill Payments</span> with Pay4IT <span>API Integration</span>
              </h3>
            </div>
          </div>
        </>
      </Layout>
    </div>
  );
}
