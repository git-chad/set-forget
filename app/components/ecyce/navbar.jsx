"use client";
import "./util.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sfSmall from "../../images/logos/SfSmall.png";
import Link from "next/link";
import Dropdown from "./dropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const closeDropdown = () => {
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`z-50 w-screen py-10 px-20 fixed bg-gradient-to-b from-sf-black to-transparent ${
        visible ? "top-0" : "-top-[100%]"
      } transition-top duration-500`}
    >
      <div className="mx-auto max-w-[1440px] h-8 flex justify-between items-center">
        <Link className="flex items-center space-x-2" href="/">
          <Image src={sfSmall} className="w-8 h-8" alt="Set & Forget Logo" />
          <h1 className="text-xl font-semibold text-sf-white">Set & Forget</h1>
        </Link>

        <button onClick={() => setOpen(!open)}>
          {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.75" y1="8.16666" x2="26.25" y2="8.16666" stroke="#FFFAF0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="1.75" y1="16.3333" x2="26.25" y2="16.3333" stroke="#FFFAF0" stroke-width="3.5" stroke-linecap="round"/>
          </svg> */}

          <a
            className={`mobile-menu w-8 h-8 flex items-center cursor-pointer ${
              open ? "color-swap" : ""
            }`}
          >
            <div className={`${open ? "menu-active" : ""} icon`}></div>
          </a>
        </button>
      </div>

      <Dropdown isOpen={open} closeDropdown={closeDropdown}/>
    </nav>
  );
};

export default Navbar;
