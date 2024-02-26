import React from "react";
import Heading from "./heading";
import Image from "next/image";
import arrow from "../../../../public/arrow.svg";
import Button from "../../ecyce/buttons";
import Container from "../../ecyce/container";

const Hero = () => {
  return (
    <div className="w-full bg-sf-black text-sf-cream flex flex-col justify-center">
      {/* remove w-full to cancel out mx-auto */}
      <Container className={"w-full px-20 py-72"}>
        <Heading />
        <p className="text-2xl w-[865px] self-start mt-8">
          Optimize your digital workspace. We dedicate to elevate your
          performance through innovative solutions that redefine efficiency.
        </p>
        <span className="relative text-2xl font-bold self-start">
          Ready to transform your way of working?
          <Image src={arrow} className="absolute top-8 right-16 rotate-12" />
        </span>
        <Button type={"solid"} text="Let's talk" />
      </Container>
    </div>
  );
};

export default Hero;
