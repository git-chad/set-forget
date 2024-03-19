"use client";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div className="relative col-span-12">
      <div
        className={cn(
          "overflow-hidden h-full w-full relative flex items-center justify-center",
          className
        )}
        style={{
          perspective: "1000px",
        }}
      >
        {areImagesLoaded && children}
        {areImagesLoaded && overlay && (
          <div
            className={cn(
              "absolute inset-0 bg-black/60 z-40",
              overlayClassName
            )}
          />
        )}

        {areImagesLoaded && (
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image h-full w-full absolute inset-0 object-cover object-center"
            />
          </AnimatePresence>
        )}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex space-x-2">
        {loadedImages.map((_, index) => (
          <div
            key={index}
            className={cn(
              "rounded-full transition-all",
              { "bg-sf-lime w-6 h-3": currentIndex === index },
              { "bg-[#454545] w-3 h-3": currentIndex !== index }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;
