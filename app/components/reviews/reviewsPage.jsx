import React from "react";
import Container from "../ecyce/container";
import Image from "next/image";
import drawnArrow from "@/public/drawn-arrow.svg";
import benCol from "@/app/images/logos/BenCollins.svg";
import slack from "@/app/images/logos/Slack.svg";
import oracle from "@/app/images/logos/Oracle.svg";
import sandbox from "@/app/images/logos/Sandbox.svg";
import kia from "@/app/images/logos/Kia.svg";
import woo from "@/app/images/logos/Frame245.svg";
import hub from "@/app/images/logos/Frame246.svg";
import sf from "@/app/images/logos/Frame247.svg";
import beko from "@/app/images/logos/Frame248.svg";
import loreal from "@/app/images/logos/Frame249.svg";
import quote from "@/public/blueQuotes.svg"

const ReviewsPage = () => {
  const logos = [
    benCol,
    slack,
    oracle,
    sandbox,
    kia,
    woo,
    hub,
    sf,
    beko,
    loreal,
  ];

  return (
    <div className="w-full bg-sf-black text-sf-cream flex flex-col justify-center text-balance">
      <Container className={"w-full px-20 py-72 grid grid-cols-12"}>
        <div className="col-span-12">
          <div className="flex justify-between items-center">
            <h1 className=" text-smallHeading 2xl:text-heading bold-neue">
              Expert allies
            </h1>
            <Image src={drawnArrow} alt="" />
            <h1 className=" text-smallHeading 2xl:text-heading bold-neue">
              Shaping future success
            </h1>
          </div>
          <div className="mt-8 flex justify-center items-center flex-wrap space-x-12">
            {logos.map((logo, index) => (
              <div className="min-w-40" key={index}>
                <Image src={logo} className="w-full mx-auto" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative col-span-12 mt-20">
        <Image src={quote} className="absolute top-0 -left-12 fill-blue-400"/>
        <Image src={quote} className="absolute -bottom-20 -right-12 rotate-180"/>
          <h2 className="mb-8 text-smallHeading bold-neue">Hear it from them!</h2>
          <div
            id="bento-grid"
            className="min-h-[549px] grid grid-cols-12 grid-rows-3 gap-5"
          >
            <div className="col-span-4 row-span-1 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 01</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-span-4 row-span-1 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 02</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-span-4 row-span-2 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 03</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-span-3 row-span-2 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 04</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="col-span-5 row-span-1 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 05</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col-span-3 row-span-1 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 06</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="col-span-3 row-span-1 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 07</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="col-span-3 row-span-1 bg-[#272727] rounded-2xl p-6 flex flex-col justify-center ">
              <p className="pb-2">Testimonial 08</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewsPage;
