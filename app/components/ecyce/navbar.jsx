import Image from "next/image";
import React from "react";
import sfSmall from "@/app/images/logos/SfSmall.png";
import Link from "next/link";
import borgor from "@/public/Borgor.svg"

const Navbar = () => {
  return (
    <nav className="z-50 w-screen py-10 px-20 fixed">
      <div className="mx-auto max-w-[1440px] h-8 flex justify-between items-center">
        <Link className="flex items-center space-x-2" href="/">
          <Image src={sfSmall} className="w-8 h-8" alt="Set & Forget Logo" />
          <h1 className="text-xl font-bold text-sf-white">Set & Forget</h1>
        </Link>

        <button>
            <Image src={borgor} className="w-8 h-8" alt="Borgor Logo" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
