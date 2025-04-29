import React from 'react';
import L1 from '../assets/Images/L1.png';
import L2 from '../assets/Images/L2.png';
import L3 from '../assets/Images/L3.png';
import L4 from '../assets/Images/L4.png';
import L5 from '../assets/Images/L5.png';

function LogoBar() {
  const logos = [L1, L2, L3, L4, L5];

  return (
    <div className="py-6 bg-white mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto object-contain opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoBar;
