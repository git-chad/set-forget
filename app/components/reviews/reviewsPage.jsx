import React from "react";
import Container from "../ecyce/container";
import Image from "next/image";
import drawnArrow from "../../../public/drawn-arrow.svg";
import benCol from "../../images/logos/BenCollins.svg";
import slack from "../../images/logos/Slack.svg";
import oracle from "../../images/logos/Oracle.svg";
import sandbox from "../../images/logos/Sandbox.svg";
import kia from "../../images/logos/Kia.svg";
import woo from "../../images/logos/Frame245.svg";
import hub from "../../images/logos/Frame246.svg";
import sf from "../../images/logos/Frame247.svg";
import beko from "../../images/logos/Frame248.svg";
import loreal from "../../images/logos/Frame249.svg";
import quote from "../../../public/blueQuotes.svg";

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
      <Container className={"w-full px-20 py-32 2xl:py-64 grid grid-cols-12"}>
        <div className="col-span-12">
          <div className="flex items-center space-x-8">
            <h1 className=" text-smallHeading 2xl:text-heading bold-neue">
              Expert allies
            </h1>
            <Image src={drawnArrow} alt="" />
            <h1 className=" text-smallHeading 2xl:text-heading bold-neue">
              Shaping future success
            </h1>
          </div>
          <div className="mt-16 grid grid-cols-5 grid-rows-2">
            {logos.map((logo, index) => (
              <Image key={index} src={logo} className="mx-auto" />
            ))}
          </div>
        </div>

        <div className="relative col-span-12 mt-20">
          <Image
            src={quote}
            className="absolute top-0 -left-12 fill-blue-400"
          />
          <Image
            src={quote}
            className="absolute -bottom-20 -right-12 rotate-180"
          />
          <h2 className="mb-8 text-smallHeading bold-neue">
            Hear it from them!
          </h2>
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
