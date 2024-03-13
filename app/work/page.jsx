import React from "react";
import Carousel from "../components/our-work-page/carousel";
import Container from "../components/ecyce/container";
import Image from "next/image";
import arrow from "../../public/arrow.svg";
import underline from "../../public/underline.svg";
import drawnArrow from "../../public/drawn-arrow.svg";
import Navbar from "../components/ecyce/navbar";

const Page = () => {
  const items = [
    { quote: "", name: "", title: "" },
    { quote: "", name: "", title: "" },
    { quote: "", name: "", title: "" },
  ];

  const skills = [
    { num: "01", name: "Workspace Development" },
    { num: "02", name: "Add - Ons" },
    { num: "03", name: "Data Analysis" },
    { num: "04", name: "Software Development" },
    { num: "05", name: "Webapps" },
    { num: "06", name: "Google Sheets" },
    { num: "07", name: "Integrations" },
    { num: "08", name: "UX/UI Design" },
  ];

  return (
    <div className="w-full min-h-screen bg-sf-black text-sf-cream flex flex-col justify-center text-balance">
      <Container className={"w-full px-20 py-32 2xl:py-64 grid grid-cols-12"}>
        <div className="relative col-span-12">
          <h1 className="bold-neue text-heading">Here&apos;s what we do</h1>
          <p className="text-2xl">
            Your automation department is here to help!
          </p>
          <Image src={underline} className="absolute left-96" />
          <Image
            src={arrow}
            className="absolute top-8 left-1/2 -rotate-[130deg]"
          />
        </div>
        <div className="col-span-12 my-16">
          <Carousel items={items} speed="normal" />
          <Carousel items={items} direction="right" speed="normal" />
        </div>
        <div className="mt-16 col-span-12">
          <div className="flex flex-col">
            <div className="flex space-x-8 mb-16">
              <h1 className="bold-neue text-[3rem] leading-[28px]">
                Wasn&apos;t enough?
              </h1>
              <Image src={drawnArrow} />
              <p className=" text-[2.5rem] leading-none">
                This is everything we can do
              </p>
            </div>
            <div className="max-h-72 grid grid-cols-2 grid-rows-4 gap-x-5 gap-y-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="col-span-1 row-span-1 text-2xl border-t-2 border-sf-cream h-16 flex items-center cursor-pointer hover:text-sf-lime transition-colors duration-500"
                >
                  <p className="flex items-center">
                    {skill.num} &nbsp;
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
