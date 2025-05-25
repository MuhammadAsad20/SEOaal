import React from "react";
import Stats from "../components/Stats";
import aboutImage from "../assets/Images/about.png";

const SeoService = () => {
  return (
    <>
      <Stats
        title="The #1 SEO Services Company"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ut enim ad minim veniam, quis nostrud."
        stats={[
          { value: "1165", suffix: "+", label: "Projects Completed" },
          { value: "256", suffix: "K", label: "Satisfied Clients" },
        ]}
        image={aboutImage}
        imageAlt="About Company"
      />
    </>
  );
};

export default SeoService;
