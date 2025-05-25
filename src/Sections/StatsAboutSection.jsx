import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      label: "Happy Customers",
      value: "12",
      suffix: "k",
    },
    {
      label: "Completed Works",
      value: "850",
      suffix: "+",
    },
    {
      label: "SEO Winners",
      value: "23",
      suffix: "+",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {/* First Stat Block: Glowing Sun */}
          <div className="relative p-6 rounded shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center space-y-4">
            {/* Glowing Animation */}
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
              {/* Glow Ring */}
              <motion.div
                className="absolute w-[110px] h-[110px] rounded-full z-0"
                style={{
                  background:
                    "linear-gradient(to right,rgba(74, 4, 252, 0.47),rgba(202, 19, 243, 0.47))",
                }}
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Static Inner Circles */}
              <div
                className="w-[100px] h-[100px] rounded-full flex justify-center items-center z-10"
                style={{
                  background:
                    "linear-gradient(to right,rgba(74, 4, 252, 0.3),rgba(202, 19, 243, 0.31))",
                }}
              >
                <div
                  className="w-[80px] h-[80px] flex justify-center items-center text-5xl font-bold text-white rounded-full z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom,rgb(58, 4, 252),rgb(243, 19, 168))",
                  }}
                >
                  12
                </div>
              </div>
            </div>

            {/* Text Label Below */}
            <h4 className="text-xl font-semibold text-blue-900">Year in the field</h4>
          </div>

          {/* Remaining Stat Blocks */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center space-y-2"
            >
              {stat.showOverlayNumber && (
                <h6 className="absolute top-2 left-2 text-5xl font-bold text-gray-200 opacity-20 pointer-events-none select-none">
                  {stat.value}
                </h6>
              )}
              <h4 className="text-xl font-semibold text-blue-900">{stat.label}</h4>
              <h3 className="text-5xl font-bold text-blue-800">
                {stat.value}
                <span className="text-2xl align-bottom">{stat.suffix}</span>
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
