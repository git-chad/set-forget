'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import quotes from '../../../../public/quotes.svg';

// Define your testimonials
const testimonials = [
  {
    id: 1,
    name: 'Ben Collins',
    text: "I'm delighted to partner with Set & Forget and recommend them as my preferred consulting partner. Their work and approach is top quality and they are always professional and courteous to deal with.",
  },
  {
    id: 2,
    name: 'Mike F',
    text: "I worked with the Set and Forget team, and I highly recommend them. We did a couple of financial modeling workflow automations, and at every step of the way the entire team were quick to respond to my emails, always happy to jump on a call to explain things or answer questions, and most importantly -- did great work! While I contracted them for just a one-time project, I was so happy with their work and their communication that I will continue to work with them going forward. Really happy with everything -- strongly recommend them for your next Google Sheets project.",
  },
  {
    id: 3,
    name: 'Claire Oliver',
    text: "Amazing! I had a problem I wanted to solve that was way beyond my skill set and in very little time the Set & Forget team had it all figured out. So appreciative of the help, and hours of work that was saved!",
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
    <div className="w-[713px] min-h-56 mb-16 flex flex-col justify-center items-center">
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
