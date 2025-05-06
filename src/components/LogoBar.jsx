import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import L1 from '../assets/Images/L1.png';
import L2 from '../assets/Images/L2.png';
import L3 from '../assets/Images/L3.png';
import L4 from '../assets/Images/L4.png';
import L5 from '../assets/Images/L5.png';

const LogoBar = () => {
  const repeatArray = (array, times) =>
    Array.from({ length: times }).flatMap(() => array);
  const logos = repeatArray([L1, L2, L3, L4, L5], 50); // repeated fewer times

  const controls = useAnimation();
  const containerRef = useRef(null);
  const xOffset = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      xOffset.current -= 200;
      controls.start({ x: xOffset.current, transition: { duration: 0.5 } });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="bg-white w-full max-w-sm lg:max-w-4xl md:max-w-xl mx-auto mb-10 overflow-hidden px-2">
      <motion.div
        className="flex gap-4 md:gap-6 lg:gap-8 w-max cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -100000, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        animate={controls}
        ref={containerRef}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="
              object-contain opacity-50 hover:opacity-100 
              transition duration-300 ease-in-out
              h-16 md:h-20 lg:h-24
              w-[50vw] sm:w-[50vw] md:w-[33.33vw] lg:w-[20vw] 
              max-w-[160px] 
              flex-shrink-0
            "
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoBar;
