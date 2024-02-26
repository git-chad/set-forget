import React from "react";
import Container from "../../ecyce/container";
import Image from "next/image";
import marker from "../../../../public/marker.svg";
import arrowStats from "../../../../public/arrow-stats.svg";
import sparkle from "../../../../public/sparkle.svg";
import blobCard from "../../../../public/blob-card.svg";

const StatsPage = () => {
  return (
    <div className=" bg-sf-black text-black">
      <div className="bg-sf-white rounded-t-[80px]">
        <Container className={"py-16 grid grid-cols-12 gap-5 px-20"}>
          <div className="text-sf-dblue col-span-12 flex justify-between">
            <div className="relative">
            <Image src={sparkle} alt="" className="absolute -top-10 -left-10"/>
              <h1 className="text-heading leading-none reg-neue">Why</h1>
              <h1 className="text-heading leading-none bold-neue">
                Set <b className="text-sf-lime poppins-bold">&</b> Forget?
              </h1>
            </div>
            <div className="relative">
              <h2 className="text-sf-dblue text-2xl w-[20ch] reg-neue">
                Trusted by dozens of companies like yours.
              </h2>
              <Image src={marker} className="absolute -top-10 -left-10" />
            </div>
          </div>
          <p className="text-xl col-span-9 text-balance my-12">
            We deliver our clients with dedicated teams, offering innovative
            solutions that will save your company hours of work. Embracing
            transparent communication, we keep you informed and engaged at every
            stage of the process. Spare yourself the hassle - we&apos;ve got it
            covered.
          </p>
          <div className="col-span-12  grid grid-cols-12 gap-5">
            <div className="relative col-span-4 h-[405px] flex flex-col p-8 rounded-3.5xl">
              <span className="z-10 text-display font-bold text-g-blue bold-neue">+50</span>
              <span className="z-10 font-bold text-2xl">Companies</span>
              <div className="z-10 border border-black w-52 my-4" />
              <p className="z-10 text-xl text-balance">
                More than just a service provider! We are a partner in growth
                for over <b>50 amazing companies</b>. Each one has a unique story, and
                we&apos;re thrilled to be part of it!
              </p>
              <Image src={arrowStats} className="z-10 absolute top-2 right-4"/>
              <Image src={blobCard} className="absolute top-0 right-0"/>
            </div>
            <div className="relative col-span-4 h-[405px] flex flex-col p-8 rounded-3.5xl">
              <span className="z-10 text-display font-bold text-g-yellow  bold-neue">+200</span>
              <span className="z-10 font-bold text-2xl">Projects</span>
              <div className="z-10 border border-black w-52 my-4" />
              <p className="z-10 text-xl text-balance">
                Our journey includes more than <b>200 projects!</b> Each one is a new
                adventure in creativity and problem-solving. We love what we do,
                and it shows in our work!
              </p>
              <Image src={arrowStats} className="z-10 absolute top-2 right-4"/>
              <Image src={blobCard} className="absolute top-0 right-0"/>
            </div>
            <div className="relative col-span-4 h-[405px] flex flex-col p-8 rounded-3.5xl">
              <span className="z-10 text-display font-bold text-g-red  bold-neue">+7</span>
              <span className="z-10 font-bold text-2xl">Avg hours saved/week</span>
              <div className="z-10 border border-black w-52 my-4" />
              <p className="z-10 text-xl text-balance">
                Our solutions save our clients over <b>7 hours</b> per week, freeing
                them up to focus on what they do best... innovating and leading
                their industries.
              </p>
              <Image src={arrowStats} className="z-10 absolute top-2 right-4"/>
              <Image src={blobCard} className="absolute top-0 right-0"/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default StatsPage;
