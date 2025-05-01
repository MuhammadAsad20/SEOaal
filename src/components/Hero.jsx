import React from 'react';
import { motion } from 'framer-motion';
import Slidebg from '../assets/Images/slidebg.jpg';
import Slideart from '../assets/Images/sliderart.png';

const Hero = () => {
    return (
        <section
            className="text-white body-font bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${Slidebg})`,
            }}
        >
            <div className="container mx-auto h-full flex flex-col-reverse lg:flex-row justify-center items-center px-5">
                {/* Text Content */}
                <div className="w-full lg:max-w-[450px] bg-opacity-80 p-6 rounded-xl text-center lg:text-left mt-10 lg:mt-0">
                    <h1 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-semibold">
                        We Serve Best
                        <br className="hidden lg:inline-block" />
                        SEO Services
                    </h1>
                    <p className="mb-8 leading-relaxed text-base md:text-lg font-semibold">
                        Build Your Website. Let's Check Our Services. More Traffic For Your Website? We Know The Solution
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="inline-flex text-pink-600 bg-white font-semibold border-0 py-3 px-8 focus:outline-none hover:text-indigo-600 rounded text-lg">
                            Click Here
                        </button>
                    </div>
                </div>

                {/* Animated Image - Hidden on md and smaller */}
                <div className="hidden lg:flex lg:max-w-lg lg:w-full w-5/6 justify-center">
                    <motion.img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={Slideart}
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
