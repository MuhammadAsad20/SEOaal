import React from 'react';
import L1 from '../assets/Images/L1.png';
import L2 from '../assets/Images/L2.png';
import L3 from '../assets/Images/L3.png';
import L4 from '../assets/Images/L4.png';
import L5 from '../assets/Images/L5.png';
function LogoBar() {
  return (
    <div className="py-6 bg-white mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Replace the `src` values with your actual logo image URLs */}
          <img src={L1} alt="Logo 1" className="h-22 w-auto object-contain" />
          <img src={L2} alt="Logo 2" className="h-22 w-auto object-contain" />
          <img src={L3} alt="Logo 3" className="h-22 w-auto object-contain" />
          <img src={L4} alt="Logo 4" className="h-22 w-auto object-contain" />
          <img src={L5} alt="Logo 5" className="h-22 w-auto object-contain" />
        </div>
      </div>
    </div>
  );
}

export default LogoBar;
