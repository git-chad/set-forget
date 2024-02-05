'use client'
import React, { useState } from "react";

const Button = ({ type, text, className }) => {
  const [hover, setHover] = useState(false);

  if (type === "solid") {
    return (
      <button 
      className={`relative bg-sf-lime text-sf-dblue flex justify-center items-center space-x-8 rounded-3xl w-64 h-[74px] mt-12 ${className || ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
        <p className="text-2xl font-bold">{text}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none" className={`${hover ? 'scale-150' : 'scale-125'}`}>
          <circle 
            cx="12.5" 
            cy="12.5" 
            r={hover ? "10" : "3"} 
            stroke="#062841" 
            strokeWidth={hover ? "5" : "6"} 
            style={{ transition: 'all 0.2s ease-in-out' }} 
          />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none" className={`absolute top-[2.28rem] right-[2.4rem] ${hover ? 'scale-[200%]' : 'scale-0'} transition-all delay-150 origin-center duration-100`}>
        <path d="M5.46967 0.46967C5.76256 0.176777 6.23744 0.176777 6.53033 0.46967L9.53033 3.46967C9.82322 3.76256 9.82322 4.23744 9.53033 4.53033L6.53033 7.53033C6.23744 7.82322 5.76256 7.82322 5.46967 7.53033C5.17678 7.23744 5.17678 6.76256 5.46967 6.46967L7.18934 4.75H1C0.585786 4.75 0.25 4.41421 0.25 4C0.25 3.58579 0.585786 3.25 1 3.25H7.18934L5.46967 1.53033C5.17678 1.23744 5.17678 0.762563 5.46967 0.46967Z" fill="#062841"/>
      </svg>
      </button>
    );
  } else if (type === "outline") { 
    return (
      <button className={`min-w-56 px-6 h-14 rounded-[20px] text-sf-lime border-2 border-sf-lime text-xl font-semibold ${className || ""}`}>{text}</button>
    )
  }
};

export default Button;
