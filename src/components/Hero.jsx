import React from 'react';
import Slidebg from '../assets/Images/slidebg.jpg'; // background image
import Slideart from '../assets/Images/sliderart.png'; // main image inside hero section

const Hero = () => {
    return (
        <section
            className="text-white body-font bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${Slidebg})`,
            }}
        >
            <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center px-5">
                {/* Text Content */}
                <div className="w-full md:max-w-[450px] bg-opacity-80 p-6 rounded-xl text-center md:text-left mb-10 md:mb-0">
                    <h1 className="title-font sm:text-6xl text-3xl mb-4 font-semibold ">
                        We Serve Best
                        <br className="hidden lg:inline-block" />
                        SEO Services
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg font-semibold">
                        Build Your Website. Let's Check Our Services. More Traffic For Your Website? We Know The Solution
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="inline-flex text-pink-600 bg-white font-semibold border-0 py-3 px-8 focus:outline-none hover:text-indigo-600 rounded text-lg">
                            Click Here
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
                    <img
                        className="object-cover object-center rounded shadow-xl"
                        alt="hero"
                        src={Slideart}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
