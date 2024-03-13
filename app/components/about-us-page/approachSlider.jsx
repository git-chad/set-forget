"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import drawnArrow from "../../../public/drawn-arrow.svg";
import team02 from "../../images/team/team02.png";
import { useAnimate, cubicBezier } from "framer-motion";

const ApproachSlider = () => {
  const [scopeVert, animateVert] = useAnimate();
  const slides = [
    {
      num: "01",
      p: "When you hire Set & Forget, we feel honored for becoming a part of your organization!",
    },
    {
      num: "02",
      p: "We will listen to what you have to say and understand your points.",
    },
    {
      num: "03",
      p: "Agnostically propose the best possible solutions to them.",
    },
    {
      num: "04",
      p: "Work to the very best of our abilities to ensure a flawless delivery.",
    },
    {
      num: "01",
      p: "When you hire Set & Forget, we feel honored for becoming a part of your organization!",
    },
  ];

  useEffect(() => {
    let isMounted = true;
    const handleVerticalAnim = async () => {
      while (isMounted) {
        await animateVert(
          scopeVert.current,
          { y: -527 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
        );
        if (!isMounted) break;
        await animateVert(
          scopeVert.current,
          { y: -1054 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
        );
        if (!isMounted) break;
        await animateVert(
          scopeVert.current,
          { y: -1581 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
        );
        if (!isMounted) break;
        await animateVert(
          scopeVert.current,
          { y: -2108 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
        );
        if (!isMounted) break;
        await animateVert(scopeVert.current, { y: 0 }, { duration: 0 });
        if (!isMounted) break;
        handleVerticalAnim();
      }
    };
    handleVerticalAnim();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mt-28 col-span-12 grid grid-cols-12 gap-5">
      <div className="mb-8 flex items-center col-span-12 space-x-8">
        <Image src={drawnArrow} />
        <h2 className="text-heading bold-neue leading-none mb-3">
          Our approach
        </h2>
        {/* <Link href="#" className="text-2xl text-sf-lime">
          Learn more
        </Link> */}
      </div>
      <Image src={team02} className="rounded-[68px] col-span-6 h-[527px]" />

      <div className="relative col-span-6 bg-red-400/20 h-[527px] w-full rounded-[68px]">
        <div className="absolute inset-0 bg-[#272727] rounded-[68px] flex flex-col justify-start items-center overflow-hidden">
          <div ref={scopeVert} className="h-[2108px] flex flex-col">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-h-[527px] flex justify-center items-center"
              >
                <span className="font-bold text-[4rem]">{slide.num}</span>
                <p className="w-96 text-xl ml-3">{slide.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSlider;
