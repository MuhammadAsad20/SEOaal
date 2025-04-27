import React from 'react';

const PricingSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Choose Your Best Plan
          </h1>

          {/* Colored Line - Centered */}
          <div className="flex justify-center">
            <div className="flex h-1 w-40 overflow-hidden rounded bg-gray-200 mb-6">
              <div className="h-full w-[8%] bg-indigo-500"></div>
              <div className="h-full w-[5%] bg-white"></div>
              <div className="h-full w-[35%] bg-pink-500"></div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Basic Plan */}
          <div className="w-full h-140 sm:w-[85%] md:w-[40%] xl:w-[23%] relative">
            <div className="relative h-full p-6 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#292391] to-[#e53e8e] z-0"></div>
              <div className="relative z-10 text-white flex flex-col items-center h-full">
              <div className="text-2xl px-25 py-2 tracking-widest title-font mb-5 mt-5 font-medium border-2 border-pink-500 text-center">BASIC</div>
                <h1 className="text-5xl leading-none flex items-center pb-10 mb-4 border-b border-white/40">
                  <span>$50</span>
                  <span className="text-lg ml-1 mt-5 font-normal text-white/70">/PER MONTH</span>
                </h1>
                <p className="mb-3">25 Analytics Campaign</p>
                <p className="mb-3">1,300Change Keywords</p>
                <p className="mb-3">25 Social Media Reviews</p>
                <p className="mb-3">1 Free Optimization</p>
                <p className="mb-10">24/7 Support</p>
                <button className=" bg-pink-600 text-xl border-0 py-5 px-4 w-50 mx-auto focus:outline-none hover:bg-gray-100 rounded">
  Buy Now
</button>
                 </div>
              {/* Circle at top-right */}
              <div className="absolute top-[-270px] right-[-190px] w-[400px] h-[400px] bg-[radial-gradient(circle,white,transparent)] rounded-full"></div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="w-full text-black sm:w-[85%] md:w-[40%] xl:w-[23%] relative">
            <div className="relative h-full p-6 rounded-xl overflow-hidden shadow-lg">
              
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="text-2xl px-25 py-2 tracking-widest title-font mb-5 mt-5 font-medium border-2 border-pink-500 text-center">ULTRA</div>
                <h1 className="text-5xl leading-none flex items-center pb-10 mb-4 border-b border-white/40">
                  <span>$79</span>
                  <span className="text-lg ml-1 mt-5 font-normal">/PER MONTH</span>
                </h1>
                <p className="mb-3">25 Analytics Campaign</p>
                <p className="mb-3">1,300Change Keywords</p>
                <p className="mb-3">25 Social Media Reviews</p>
                <p className="mb-3">1 Free Optimization</p>
                <p className="mb-10">24/7 Support</p>
                <button className=" bg-pink-600 text-white text-xl border-0 py-5 px-4 w-50 mx-auto focus:outline-none hover:bg-pink-500 rounded">
  Buy Now
</button>

                </div>
              {/* Circle at top-right */}
              <div className="absolute top-[-270px] right-[-190px] w-[400px] h-[400px] bg-[radial-gradient(circle,white,transparent)] rounded-full"></div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="w-full sm:w-[85%] md:w-[40%] xl:w-[23%] relative">
            <div className="relative h-full p-6 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#292391] to-[#e53e8e] z-0"></div>
              <div className="relative z-10 text-white flex flex-col items-center h-full">
              <div className="text-2xl px-25 py-2 tracking-widest title-font mb-5 mt-5 font-medium border-2 border-pink-500 text-center">PRO</div>
                <h1 className="text-5xl leading-none flex items-center pb-10 mb-4 border-b border-white/40">
                  <span>$99</span>
                  <span className="text-lg ml-1 mt-5 font-normal text-white/70">/PER MONTH</span>
                </h1>
                <p className="mb-3">25 Analytics Campaign</p>
                <p className="mb-3">1,300Change Keywords</p>
                <p className="mb-3">25 Social Media Reviews</p>
                <p className="mb-3">1 Free Optimization</p>
                <p className="mb-10">24/7 Support</p>
                <button className="bg-pink-600 text-xl border-0 py-5 px-4 w-50 mx-auto focus:outline-none hover:bg-gray-100 rounded">
  Buy Now
</button>
              </div>
              {/* Circle at top-right */}
              <div className="absolute top-[-270px] right-[-190px] w-[400px] h-[400px] bg-[radial-gradient(circle,white,transparent)] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
