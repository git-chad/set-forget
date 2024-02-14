import React from 'react'
import Container from "../../ecyce/container";
import Image from "next/image";
import underline from "@/public/underline.svg";
import arrow from "@/public/arrow.svg";
import Button from "../../ecyce/buttons";

const FirstSec = () => {
  return (
    <div className="w-full bg-sf-black text-sf-cream flex flex-col py-8">
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
              <div className="flip-card w-full">
                <div className="flip-card-inner">
                  <div className="flip-card-front w-[427px] h-[464px] border text-g-red border-g-red rounded-3.5xl flex justify-center items-center text-xl text-center">
                    Google Workspace Automation
                  </div>
                  <div className="flip-card-back w-[427px] h-[464px] border bg-g-red text-g-red border-g-red rounded-3.5xl flex justify-center items-center p-2">
                    <p className='text-white '>We create solutions in your Workspace leveraging Apps Script, Google&apos;s programming language made to interact with its&apos; tools.</p>
                  </div>
                </div>
              </div>

              <div className="flip-card w-full">
                <div className="flip-card-inner">
                  <div className="flip-card-front w-[427px] h-[464px] border text-g-green border-g-green rounded-3.5xl flex justify-center items-center text-xl text-center">
                    Google Add-Ons
                  </div>
                  <div className="flip-card-back w-[427px] h-[464px] bg-g-green border text-g-green border-g-green rounded-3.5xl flex justify-center items-center p-2">
                    <p className='text-white font-normal'>Deploy your SaaS product in the Google Marketplace to broaden your market and also treat your users with new ways of using your software.</p>
                  </div>
                </div>
              </div>

              <div className="flip-card w-full">
                <div className="flip-card-inner">
                  <div className="flip-card-front w-[427px] h-[464px] border text-g-blue border-g-blue rounded-3.5xl flex justify-center items-center text-xl text-center">
                    Data Analytics tools
                  </div>
                  <div className="flip-card-back w-[427px] h-[464px] bg-g-blue border text-g-blue border-g-blue rounded-3.5xl flex justify-center items-center p-2">
                    <p className='text-white font-normal'>We'll Take care of all your data&apos;s lifecycle, from retrieving to visualization for decision making.</p>
                  </div>
                </div>
              </div>

              <div className="flip-card w-full">
                <div className="flip-card-inner">
                  <div className="flip-card-front w-[427px] h-[464px] border text-g-yellow border-g-yellow rounded-3.5xl flex justify-center items-center text-xl text-center">
                    Education tools
                  </div>
                  <div className="flip-card-back w-[427px] h-[464px] bg-g-yellow border text-g-yellow border-g-yellow rounded-3.5xl flex justify-center items-center p-2">
                    <p className='text-sf-black font-normal'>Unlock the power of data to improve student outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
            <Button type={'outline'} text={'See more!'}/>
        </div>

        <div className="c col-span-5">

        </div>
      </Container>
    </div>
  )
}

export default FirstSec