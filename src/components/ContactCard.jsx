import React from "react";
const ContactCard = ({ icon, title, first, second, highlight, bgColor }) => {
    return (
      <div
      className={`w-full  lg:w-1/4 px-4 mb-6 ${bgColor} rounded-2xl py-8 flex flex-col sm:flex-row items-start`}
    >
        <div className="w-20 h-20 inline-flex items-start justify-center rounded-full mb-4 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-xl title-font font-medium mb-2">
            {title}
          </h2>
          <p className="leading-relaxed text-base font-lg">
            <span className="font-bold">{highlight.type}</span> {first}
          </p>
          <p className="leading-relaxed text-base font-lg">
            <span className="font-bold">{highlight.label}</span> {second}
          </p>
        </div>
      </div>
    );
  };
  export default ContactCard;     