import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

const Carousels = ({ type }) => {
  const work = [
    "Our Work",
    "Our Work",
    "Our Work",
    "Our Work",
    "Our Work",
    "Our Work",
    "Our Work",
  ];
  const talk = [
    "Let's talk",
    "Let's talk",
    "Let's talk",
    "Let's talk",
    "Let's talk",
    "Let's talk",
    "Let's talk",
  ];
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;
    const spanTag = scope.current.querySelector("span");
    const spanWidth = spanTag.clientWidth * 7;
    console.log(spanWidth, 'carousel span width');

    const handleAnim = async () => {
      while (isMounted) {
        await animate(
          scope.current,
          { x: (spanWidth * -1) / 2 },
          { duration: 8, ease: "linear" }
        );
        if (!isMounted) break;
        await animate(scope.current, { x: -4 }, { duration: 0 });
      }
    };
    handleAnim();
    return () => {
      isMounted = false;
    };
  }, []);

  if (type === "work") {
    return (
      <div className="flex items-center lg:h-52 bg-sf-lime text-sf-dblue hover:text-sf-white transition-colors duration-700 text-heading lg:text-[5rem] bold-neue overflow-hidden cursor-default">
        <div ref={scope} className="flex items-center w-[2716px] gap-[60px]">
          {work.map((word, index) => (
            <span key={index} className="inline-block flex-shrink-0">
              {word}
            </span>
          ))}
          {work.map((word, index) => (
            <div key={index} className="inline-block flex-shrink-0">
              {word}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center lg:h-52 bg-sf-beige text-sf-dblue hover:bg-sf-green hover:text-sf-beige transition-colors duration-700 text-heading lg:text-[5rem] bold-neue overflow-hidden cursor-default">
      <div ref={scope} className="flex items-center w-[2716px] gap-[60px]">
        {talk.map((word, index) => (
          <span key={index} className="inline-block flex-shrink-0">
            {word}
          </span>
        ))}
        {talk.map((word, index) => (
          <div key={index} className="inline-block flex-shrink-0">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
