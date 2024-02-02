'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import quotes from '@/public/quotes.svg';

// Define your testimonials
const testimonials = [
  {
    id: 1,
    name: 'Marvin',
    text: "I'm extremely grateful with Mealtone and his minions. They created the most incredible app for managing my inventions' electronics and I can't be more happy with the results.",
  },
  {
    id: 2,
    name: 'George Floyd',
    text: "Gonchi's team went above and beyond... Their dedication resulted in a killer, breathtaking application!",
  },
  {
    id: 3,
    name: 'Shaniqua 💅🏿',
    text: "Workin wit Chowlow wuz a game-changer for our biz yo. Da attanshon 2 detail and hood solutionz have significantly improved our ops. Respect blood.",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const nextIndex = (testimonials.findIndex(t => t.id === prev.id) + 1) % testimonials.length;
        return testimonials[nextIndex];
      });
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[713px] h-56 mb-16 flex flex-col justify-center items-center">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h3 className="text-2xl font-semibold mb-4">{currentTestimonial.name}</h3>
          <p className="text-2xl text-pretty">{currentTestimonial.text}</p>
          <Image src={quotes} className="absolute -top-8 -left-16" alt="quote" />
          <Image src={quotes} className="absolute -bottom-8 -right-16 rotate-180" alt="quote" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
