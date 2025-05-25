import React from "react";
import Cards from "../components/Cards";
import { motion } from "framer-motion";
import ColoredLine from "../components/ColoredLine";

const cardData = [
  {
    number: "01",
    title: "Social Media Marketing",
    description: "Improve website’s performance with social channels.",
    imgSrc:
      "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/service-1-1-80x80.png",
    link: "/services/social-media-marketing",
  },
  {
    number: "02",
    title: "SEO Optimization",
    description: "Boost search engine rankings and visibility.",
    imgSrc:
      "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/service-2-1-80x80.png",
    link: "/services/seo",
  },
  {
    number: "03",
    title: "Content Creation",
    description: "Engaging content tailored for your audience.",
    imgSrc:
      "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/service-3-1-80x80.png",
    link: "/services/content",
  },
  {
    number: "04",
    title: "Email Marketing",
    description: "Reach customers directly through email campaigns.",
    imgSrc:
      "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/service-4-1-80x80.png",
    link: "/services/email-marketing",
  },
  {
    number: "05",
    title: "Web Development",
    description: "Build fast and responsive and gain actionable websites.",
    imgSrc:
      "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/service-5-1-80x80.png",
    link: "/services/web-dev",
  },
  {
    number: "06",
    title: "Analytics & Reporting",
    description: "Track performance and gain actionable insights.",
    imgSrc:
      "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/service-6-1-80x80.png",
    link: "/services/analytics",
  },
];

const CardsSection = () => {
  return (
    <section className="py-16 px-4 mb-10">
      {/* Heading Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          We Provide You the Best
        </h2>
        <div className="flex justify-center">
  <ColoredLine/>
</div>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center w-full xl:w-[50%] mx-auto">

        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex justify-center w-full max-w-[350px] mx-auto"
          >
            <Cards {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
