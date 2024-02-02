import React from "react";

const Button = ({ type, text }) => {
  if (type === "solid") {
    return (
      <button className="bg-sf-lime text-sf-dblue flex justify-center items-center space-x-8 rounded-3xl w-64 h-[74px] mt-12">
        <p className="text-2xl font-bold">{text}</p>
        <div className="bg-sf-dblue w-3 h-3 rounded-full"></div>
      </button>
    );
  } else if (type === "outline") {
    return (
      <button className="min-w-56 px-6 h-14 rounded-2xl text-sf-lime border-2 border-sf-lime text-xl font-semibold">{text}</button>
    )
  }
};

export default Button;
