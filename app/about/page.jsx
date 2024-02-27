import React from "react";
import ImagesSlider from "../components/about-us-page/imagesSlider";
import Container from "../components/ecyce/container";
import Button from "../components/ecyce/buttons";
import ApproachSlider from "../components/about-us-page/approachSlider";
import Image from "next/image";
import redSparkle from '../../public/red-sparkle.svg'
import blueSparkle from '../../public/blue-sparkle.svg'

const Page = () => {
  const teamImages = [
    "https://i.postimg.cc/mrbTS9SX/team01.png",
    "https://i.postimg.cc/mrbTS9SX/team01.png",
    "https://i.postimg.cc/mrbTS9SX/team01.png",
    "https://i.postimg.cc/mrbTS9SX/team01.png",
    "https://i.postimg.cc/mrbTS9SX/team01.png",
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
    <div className="min-h-[100dvh] w-full bg-sf-black text-sf-cream flex flex-col justify-center">
      <Container className={"w-full px-20 py-32 2xl:py-64 grid grid-cols-12"}>
        <h1 className="col-span-12 text-center text-heading bold-neue mb-10 2xl:mb-5">
          We live for great projects
        </h1>
        <ImagesSlider
          images={teamImages}
          overlay={false}
          className="h-96 2xl:h-[468px] col-span-12 rounded-[68px]"
        />
        <div className="relative col-span-12 mx-24 text-center text-xl 2xl:text-2xl mt-20">
          <p>
            We become better every day by taking on bigger challenges,
            accumulating knowledge and further improving our services
            offer.There&apos;s no wizardry. What makes Set & Forget great is
            it&apos;s interdisciplinary team with a framework that fosters
            candid collaboration.
          </p>
          <Image src={redSparkle} className="absolute -top-10 -left-10"/>
          <Image src={blueSparkle} className="absolute -bottom-10 -right-10"/>
        </div>
        <Button
          type="outline"
          text="Meet out crew"
          className="col-span-12 mx-auto mt-8"
        />
        <ApproachSlider/>
        <h3 className="col-span-12 mt-28 text-4xl 2xl:text-5xl tracking-tighter">This is what we can do for you</h3>

        <div className="col-span-12 max-h-72 grid grid-cols-2 grid-rows-4 gap-x-5 gap-y-2 mt-4">
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
      </Container>
    </div>
  );
};

export default Page;
