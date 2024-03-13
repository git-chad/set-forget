"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../components/ecyce/container";
import Image from "next/image";
import blueMarker from "../../../public/blue-marker.svg";

const TeamPage = () => {
  const buttons = [
    { id: 1, name: "Our team" },
    { id: 2, name: "Our partners" },
    { id: 3, name: "Our offices" },
  ];
  const [activeGrid, setActiveGrid] = useState(buttons[0].id);
  const handleButtonClick = (buttonId) => {
    setActiveGrid(buttonId);
  };

  const renderGrid = () => {
    switch (activeGrid) {
      case 1:
        return <TeamGrid />;
      case 2:
        return <PartnerGrid />;
      case 3:
        return <OfficeGrid />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-[100dvh] w-full bg-sf-black text-sf-cream flex flex-col">
      <Container
        className={
          "w-full h-full px-20 py-32 2xl:py-64 flex flex-col items-center"
        }
      >
        <div className="relative flex flex-col items-center">
          <h1 className="z-10 bold-neue text-heading">
            Great team... better people
          </h1>
          <h2 className="text-2xl mt-3">We are passionate about what we do</h2>
          <Image
            src={blueMarker}
            alt="aahhh I'm marking bro"
            className="absolute right-0"
          />
        </div>
        <div className="space-x-5 mt-10 mb-5">
          {buttons.map((button, idx) => (
            <button
              onClick={() => handleButtonClick(button.id)}
              key={button.id}
              className={`border border-sf-cream rounded-2xl text-xl px-4 py-3 ${
                activeGrid === button.id ? "bg-sf-cream text-sf-black" : ""
              } transition-colors`}
            >
              {button.name}
            </button>
          ))}
        </div>
        {renderGrid()}
      </Container>
    </main>
  );
};

export default TeamPage;

const TeamGrid = () => {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.86,0,0.07,1]}}
      className="grid grid-cols-5 grid-rows-3 w-full gap-5"
    >
      {items.map((item, idx) => (
        <div key={idx} className="col-span-1 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-700 h-64 p-3">
          {item.id}
        </div>
      ))}
    </motion.div>
  );
};

const PartnerGrid = () => {
  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.86,0,0.07,1]}}
      className="grid grid-cols-4 grid-rows-4 w-full gap-5"
    >
      {items.map((item, idx) => (
        <div key={idx} className="col-span-1 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-700 h-64 p-3">
          {item.id}
        </div>
      ))}
    </motion.div>
  );
};

const OfficeGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.86,0,0.07,1]}}
      className="grid grid-cols-10 grid-rows-6 gap-5 w-full"
    >
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-4 row-span-4 rounded-2xl min-h-56">
        1
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-3 row-span-2 rounded-2xl min-h-56">
        2
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-3 row-span-2 rounded-2xl min-h-56">
        3
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-2 row-span-2 rounded-2xl min-h-56">
        4
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-4 row-span-4 rounded-2xl min-h-56">
        5
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-4 row-span-2 rounded-2xl min-h-56">
        6
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 col-span-2 row-span-2 rounded-2xl min-h-56">
        7
      </div>
    </motion.div>
  );
};
