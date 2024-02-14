import React from "react";
import Link from "next/link";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

const Dropdown = ({ isOpen }) => {
  const routes = [
    { name: "Our work", path: "/projects", hover: 'hover:text-g-red' },
    { name: "Success stories", path: "/reviews", hover: 'hover:text-g-green' },
    { name: "About", path: "/about", hover: 'hover:text-g-blue' },
    { name: "Contact", path: "/contact", hover: 'hover:text-g-yellow' },
  ];

  const dropdownVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.74,
        ease: cubicBezier(0.77, 0, 0.18, 1),
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.44,
        ease: cubicBezier(0.77, 0, 0.18, 1),
      },
    },
  };

  const linkVariants = {
    initial: {
      y: "101%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.34,
        ease: cubicBezier(0.77, 0, 0.18, 1),
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.9,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.34,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={dropdownVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-40 fixed top-[calc(100vh - 112px)] left-0 origin-top w-screen h-screen bg-sf-black text-[#5e5e5e] flex flex-col items-center justify-center space-y-16"
        >
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="pb-32"
          >
            {routes.map((route, index) => (
              <div className="overflow-hidden" key={index}>
                <motion.div variants={linkVariants}>
                  <Link href={route.path}>
                    <p className={`reg-neue text-8xl text-center font-bold text-[#5e5e5e] ${route.hover} transition-colors duration-500 leading-none`}>
                      {route.name}
                    </p>
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
