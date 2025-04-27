import React from 'react';
import quotation from '../assets/Images/quotation.png';

function Feature() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex gap-30 items-start flex-wrap md:flex-nowrap justify-center">
        {/* Heading + Paragraph + Button */}
        <div className="w-full max-w-[350px] text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say About Us
          </h1>

          <div className="flex h-1 w-28 md:w-40 overflow-hidden rounded bg-gray-200 mb-6">
            <div className="h-full w-[8%] bg-indigo-500"></div>
            <div className="h-full w-[5%] bg-white"></div>
            <div className="h-full w-[35%] bg-pink-500"></div>
          </div>

          <p className="text-sm md:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dummy text of the printing.
          </p>
          <button className="w-32 md:w-40 py-3 md:py-4 text-sm md:text-base text-white font-semibold rounded-md bg-gradient-to-br from-[#292391] to-[#e53e8e] hover:from-pink-600 hover:to-indigo-600 transition-all">
            Get in touch
          </button>
        </div>

        {/* Card 1 */}
        <div className="flex flex-col w-full max-w-[260px]">
          <div className="mb-2 py-3">
            <div>
              <div className="w-full flex justify-end">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#292391] to-[#e53e8e] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    alt="quotation"
                    src={quotation}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div>

              <h2 className="text-gray-900 title-font font-medium text-base md:text-lg">Hattie Bradley</h2>
              <p className="text-gray-500 text-sm md:text-base">Happy Client</p>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed">
            It goes without saying that customer data security and compliance is top of mind in most retail boardrooms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full max-w-[260px]">
          <div className="mb-2 py-3">
            <div>
              <div className="w-full flex justify-end">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#292391] to-[#e53e8e] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    alt="quotation"
                    src={quotation}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div>

              <h2 className="text-gray-900 title-font font-medium text-base md:text-lg">Natasha</h2>
              <p className="text-gray-500 text-sm md:text-base">Happy Client</p>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed">
            It goes without saying that customer data security and compliance is top of mind in most retail boardrooms.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
