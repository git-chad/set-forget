import React from "react";
import Heading from "./heading";
import Image from "next/image";
import arrow from "../../../../public/arrow.svg";
import Button from "../../ecyce/buttons";
import Container from "../../ecyce/container";

const Hero = () => {
  return (
    <div className="w-full min-h-[100dvh] bg-sf-black text-sf-cream flex flex-col justify-center">
      {/* remove w-full to cancel out mx-auto */}
      <Container className={"w-full lg:px-20 px-5 lg:py-36 flex flex-col lg:block justify-center items-center"}>
        <Heading />
        <p className="lg:text-2xl text-lg text-center text-balance lg:text-start lg:w-[865px] self-start lg:mt-8 mt-16">
          We dedicate to elevate your
          performance through innovative solutions that redefine efficiency.
        </p>
        <span className="lg:relative lg:text-2xl hidden lg:block text-lg font-bold text-center text-balance mt-4 lg:mt-0">
          Ready to transform your way of working?
          <Image src={arrow} className="absolute lg:top-8 lg:right-16 lg:rotate-12 -rotate-90 right-0 hidden lg:block" />
        </span>
        <Button type={"solid"} text="Let's talk" className="self-center lg:self-start lg:w-64" />
      </Container>
    </div>
  );
};

export default Hero;
