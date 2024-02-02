import React from "react";

const TalkButton = ({ type }) => {
  if (type === "talk") {
    return (
      <button className="b bg-sf-lime text-sf-dblue flex justify-center items-center space-x-8 rounded-3xl w-64 h-[74px] mt-12">
        <p className="text-2xl font-bold">Let&apos;s talk</p>
        <div className="bg-sf-dblue w-3 h-3 rounded-full"></div>
      </button>
    );
  } else if (type === "see") {
    return (
      <button className="w-56 h-14 rounded-3xl text-sf-lime border-2 border-sf-lime text-xl font-semibold">See more!</button>
    )
  }
};

export default TalkButton;
