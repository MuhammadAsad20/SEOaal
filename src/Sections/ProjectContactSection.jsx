import React from 'react';
import ColoredLine from '../components/ColoredLine';

function ProjectContactSection() {
    return (
        <div className="relative">
            {/* Parallax Background */}
            <div
                className="w-full min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover relative"
                style={{
                    backgroundImage:
                        'url("https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2019/07/bg-2-1.jpg?id=540")',
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Dot Pattern Overlay */}
                <div
                    className="absolute inset-0 z-20 opacity-20"
                    style={{
                        backgroundImage:
                            'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-30 flex flex-col items-center justify-center text-center text-white p-4 min-h-[500px]">
                    <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                        Have A New Project? Send Me A Message
                    </h1>
                    <div className="flex justify-center" >
                        <ColoredLine />
                        </div>
                        </div>

                    <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.
                    </p>

                    <button className="w-32 md:w-40 py-3 md:py-4 text-sm md:text-base text-white font-semibold rounded-md bg-gradient-to-br from-[#292391] to-[#e53e8e] hover:from-pink-600 hover:to-indigo-600 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectContactSection;
