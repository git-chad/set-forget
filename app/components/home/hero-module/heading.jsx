import { useAnimate, cubicBezier } from "framer-motion";
import Image from "next/image";
import highlight from "@/public/highlight.svg";
import { useEffect } from "react";

const Heading = () => {
  const [scope, animate] = useAnimate();
  const [scopeVert, animateVert] = useAnimate();

  const wordsHorizontal = ["Automate", "Enhance", "Streamline", "Automate"];
  const wordsVertical = [
    "Efficiency",
    "Productivity",
    "Performance",
    "Efficiency",
  ];

useEffect(() => {
  const handleVerticalAnim = async () => {
    await animateVert(scopeVert.current, {y: -105}, { duration: 0.5, ease: cubicBezier(0.86,0,0.07,1), delay: 1.3})
    await animateVert(scopeVert.current, {y: -210}, { duration: 0.5, ease: cubicBezier(0.86,0,0.07,1), delay: 1.3})
    await animateVert(scopeVert.current, {y: -315}, { duration: 0.5, ease: cubicBezier(0.86,0,0.07,1), delay: 1.3})
    await animateVert(scopeVert.current, {y: 0}, {duration: 0});
    handleVerticalAnim()
  }
  handleVerticalAnim()
}, [])

useEffect(() => {
  const handleHorizontalAnim = async () => {
    await animate(scope.current, { x: -525 }, { duration: 0.6, ease: cubicBezier(0.77,0,0.18,1), delay: 1});
    await animate(scope.current, { x: -1050 }, { duration: 0.6, ease: cubicBezier(0.77,0,0.18,1), delay: 1});
    await animate(scope.current, { x: -1575 }, { duration: 0.6, ease: cubicBezier(0.77,0,0.18,1), delay: 1});
    await animate(scope.current, { x: 0 }, { duration: 0 });
    handleHorizontalAnim();
}
handleHorizontalAnim();
}, []);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex space-x-6 items-start">
        <div className="relative text-display font-bold w-[525px] h-[120px]">
          <div className="absolute inset-0 bg-g-red rounded-3.5xl flex items-center overflow-hidden">
            <div ref={scope} className="w-[2100px] flex">
              {wordsHorizontal.map((word, index) => (
                <span
                  key={index}
                  className="min-w-[525px] text-center bold-neue pb-5"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          <Image src={highlight} className="absolute -top-8 -left-8" />
        </div>
        <span className="text-display self-center reg-neue">your work</span>
      </div>
  
      <div className="flex space-x-6">
        <span className="text-display font-bold text-sf-lime">&</span> 
        <span className="text-display reg-neue">elevate your</span> 
        <div className="relative text-display font-bold rounded-3.5xl w-[525px] h-[105px]">
          <div className="absolute inset-0 bg-g-blue rounded-3.5xl flex items-start justify-center overflow-hidden">
            <div ref={scopeVert} className="h-[420px] flex flex-col">
                {wordsVertical.map((word, index) => (
                  <span key={index} className="min-h-[105px] justify-center items-center flex bold-neue pb-3">
                    {word}
                  </span>
                ))}
            </div>
          </div>
          <Image
            src={highlight}
            className="absolute -top-8 -right-8 rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
