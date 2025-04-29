import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/Images/data.png';
import startup from '../assets/Images/startup.png';
import think from '../assets/Images/think.png';

const ServiceCard = () => {
  const cards = [
    {
      title: 'Shooting Stars',
      image: think,
      desc: 'There are many variations of lorem spassages of Lorem Ipsum available internet.',
    },
    {
      title: 'The Catalyzer',
      image: data,
      desc: 'There are many variations of lorem spassages of Lorem Ipsum available internet.',
    },
    {
      title: 'The 400 Blows',
      image: startup,
      desc: 'There are many variations of lorem spassages of Lorem Ipsum available internet.',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-4 w-full sm:w-[280px] cursor-pointer bg-white shadow-lg rounded-xl p-6 text-center"
              whileHover="hover" // This triggers the animation on the image
            >
              {/* Animated Image Div */}
              <motion.div
                className="relative w-[130px] h-[130px] mx-auto mb-6 flex items-center justify-center"
                variants={{
                  hover: { rotateY: 360, transition: { duration: 1.5, ease: 'easeInOut' } },
                }}
              >
                {/* Blob Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#292391] to-[#e53e8e] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0"></div>
                {/* Centered Image */}
                <img
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-[70px] h-[70px] object-contain"
                  src={card.image}
                  alt={card.title}
                />
              </motion.div>

              {/* Text Content */}
              <h2 className="text-xl font-medium title-font text-gray-900 mt-2">{card.title}</h2>
              <p className="text-base leading-relaxed mt-2">{card.desc}</p>

              {/* Link */}
              <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-3" href="#">
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
