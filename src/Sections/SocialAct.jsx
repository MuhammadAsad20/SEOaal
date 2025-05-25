import React from "react";
import Stats from "../components/Stats";
import serviceAct from "../assets/Images/serviceAct.png";

const SocialAct = () => {
  return (
    <>
      <Stats
        title="Social Media Allows Big Companies To Act Small."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        stats={[
          { value: "1165", suffix: "+", label: "Projects Completed" },
          { value: "256", suffix: "K", label: "Satisfied Clients" },
        ]}
        image={serviceAct}
        imageAlt="About Company"
      />
    </>
  );
};

export default SocialAct;
