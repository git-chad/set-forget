import React from "react";
import { useAnimate, cubicBezier } from "framer-motion";
import Image from "next/image";
import highlight from "../../../../public/highlight.svg";
import { useEffect } from "react";

const MobileHeading = () => {
  const [scope, animate] = useAnimate();
  const [scopeVert, animateVert] = useAnimate();

  const wordsHorizontal = ["Automate", "Enhance", "Streamline", "Automate"];
  const wordsVertical = [
    "Efficiency",
    "Productivity",
    "Performance",
    "Efficiency",
  ];

  // changed from intervals of 105px to 120px
  useEffect(() => {
    let isMounted = true;

    const handleVerticalAnim = async () => {
      while (isMounted) {
        await animateVert(
          scopeVert.current,
          { y: -73 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 1.3 }
        );
        if (!isMounted) break;
        await animateVert(
          scopeVert.current,
          { y: -146 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 1.3 }
        );
        if (!isMounted) break;
        await animateVert(
          scopeVert.current,
          { y: -219 },
          { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 1.3 }
        );
        if (!isMounted) break;
        await animateVert(scopeVert.current, { y: 0 }, { duration: 0 });
      }
    };
    handleVerticalAnim();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const handleHorizontalAnim = async () => {
      while (isMounted) {
        await animate(
          scope.current,
          { x: -320 },
          { duration: 0.6, ease: cubicBezier(0.77, 0, 0.18, 1), delay: 1.2 }
        );
        if (!isMounted) break;
        await animate(
          scope.current,
          { x: -640 },
          { duration: 0.6, ease: cubicBezier(0.77, 0, 0.18, 1), delay: 1.2 }
        );
        if (!isMounted) break;
        await animate(
          scope.current,
          { x: -960 },
          { duration: 0.6, ease: cubicBezier(0.77, 0, 0.18, 1), delay: 1.2 }
        );
        if (!isMounted) break;
        await animate(scope.current, { x: 0 }, { duration: 0 });
      }
    };
    handleHorizontalAnim();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col items-center">
        <div className="relative text-5xl font-bold w-[320px] h-[73px]">
          <div className="absolute inset-0 bg-g-red rounded-2xl flex items-center overflow-hidden">
            <div ref={scope} className="w-[1280px] flex">
              {wordsHorizontal.map((word, index) => (
                <span
                  key={index}
                  className="min-w-[320px] text-center bold-neue leading-none mb-2"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          <Image src={highlight} className="absolute -top-8 -left-8" />
        </div>
        <span className="text-5xl self-center reg-neue leading-none">
          your work
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl leading-none w-full">
          <span className="font-bold text-sf-lime">& </span>
          <span className="reg-neue">elevate your</span>
        </div>

        <div className="relative text-5xl font-bold rounded-2xl w-[350px] h-[73px]">
          <div className="absolute inset-0 bg-g-blue rounded-2xl flex items-start justify-center overflow-hidden">
            <div ref={scopeVert} className="h-[292px] flex flex-col">
              {wordsVertical.map((word, index) => (
                <span
                  key={index}
                  className="min-h-[73px] justify-center items-center flex bold-neue leading-none"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          <Image
            src={highlight}
            className="absolute -bottom-8 -right-8 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeading;
