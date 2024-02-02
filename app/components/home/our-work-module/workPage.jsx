import React from "react";
import Container from "../../ecyce/container";
import Image from "next/image";
import underline from "@/public/underline.svg";
import arrow from "@/public/arrow.svg";
import TalkButton from "../../ecyce/talkButton";

const WorkPage = () => {
  return (
    <div className="w-full bg-sf-black text-sf-cream flex flex-col">
      <Container className={"w-full py-16 grid grid-cols-12 gap-5 px-20"}>
        <div className="relative col-span-6">
          <h1 className="bold-neue text-heading">Here&apos;s what we do</h1>
          <h2 className="text-2xl my-4">Your automation department is here to help!</h2>
          <Image src={underline} className="absolute right-24 bottom-2"/>
          <Image src={arrow} className="absolute -right-24 top-12 rotate-[230deg]"/>
          <Image/>
        </div>

        <div className="col-span-12 flex flex-col gap-10 py-16 justify-center items-center">
            <div className="w-full flex gap-5">
                <div className="w-[427px] h-[464px] border border-[#5e5e5e] rounded-3.5xl flex justify-center items-center">Ben Collins</div>
                <div className="w-[427px] h-[464px] border border-[#5e5e5e] rounded-3.5xl flex justify-center items-center">Ted Kaczynski</div>
                <div className="w-[427px] h-[464px] border border-[#5e5e5e] rounded-3.5xl flex justify-center items-center">Marvin Heemeyer</div>
            </div>
            <TalkButton type={'see'}/>
        </div>

        <div className="c col-span-5">

        </div>
      </Container>
    </div>
  );
};

export default WorkPage;
