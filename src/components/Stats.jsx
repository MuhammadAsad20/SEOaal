import React from 'react';
import about from '../assets/Images/about.png'; // change filename if needed

const Stats = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-4 py-16 mx-auto flex flex-wrap items-center">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 w-full content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="title-font font-bold text-3xl sm:text-4xl mb-4 text-gray-900">
                            The #1 SEO Services Company
                        </h1>

                        {/* Colored Line */}
                        <div className="flex h-1 w-full overflow-hidden rounded bg-gray-200 mb-6">
                            <div className="h-full w-[10%] bg-indigo-500"></div>
                            <div className="h-full w-[3%] bg-white"></div>
                            <div className="h-full w-[20%] bg-pink-500"></div>
                        </div>

                        <p className="leading-relaxed text-base sm:text-lg font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap w-full">
                        <div className="p-4 w-1/2 sm:w-1/3">
                            <h2 className="title-font font-medium text-4xl sm:text-5xl text-gray-900 mb-2">
                                1165<sup className="text-pink-500 text-xl sm:text-2xl font-semibold align-super">+</sup>
                            </h2>
                            <p className="leading-relaxed text-sm sm:text-xl font-bold">Projects Completed</p>
                        </div>

                        <div className="p-4 w-1/2 sm:w-1/3">
                            <h2 className="title-font font-medium text-4xl sm:text-5xl text-gray-900 mb-2">
                                256<sup className="text-pink-500 text-xl sm:text-2xl font-semibold align-super">K</sup>
                            </h2>
                            <p className="leading-relaxed text-sm sm:text-xl font-bold">Satisfied Clients</p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 sm:w-1/3 w-full flex justify-center mt-10 sm:mt-0">
                    <img
                        className="object-contain h-72 sm:h-96 w-[90%] rounded-lg"
                        src={about}
                        alt="stats"
                    />
                </div>
            </div>
        </section>
    );
};

export default Stats;
