import React from 'react';
import quotation from '../assets/Images/quotation.png';

function Feature() {
  const testimonials = [
    {
      name: 'Natasha Williams',
      role: 'Marketing Lead',
      feedback:
        'It goes without saying that customer data security and compliance is top of mind in most retail boardrooms.',
    },
    {
      name: 'Hattie Bradley',
      role: 'Happy Client',
      feedback:
        'Working with them was a smooth and professional experience. I would highly recommend it to anyone.',
    },
    {
      name: 'James Peterson',
      role: 'Startup Founder',
      feedback:
        'They helped bring our vision to life with creativity and dedication. A pleasure to work with!',
    },
    {
      name: 'Sophia Turner',
      role: 'Creative Director',
      feedback:
        'Their attention to detail and commitment to quality is top-notch. Our team is impressed!',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 xl:mx-auto flex flex-col md:flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Heading + Paragraph + Button */}
        <div className="w-full max-w-[350px] text-left flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say About Us
          </h1>

          <div className="flex h-1 w-28 md:w-40 overflow-hidden rounded bg-gray-200 mb-6">
            <div className="h-full w-[8%] bg-indigo-500"></div>
            <div className="h-full w-[5%] bg-white"></div>
            <div className="h-full w-[35%] bg-pink-500"></div>
          </div>

          <p className="text-sm md:text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore dummy text of the
            printing.
          </p>
          <button className="w-32 md:w-40 py-3 md:py-4 text-sm md:text-base text-white font-semibold rounded-md bg-gradient-to-br from-[#292391] to-[#e53e8e] hover:from-pink-600 hover:to-indigo-600 transition-all">
            Get in touch
          </button>
        </div>

        {/* Scrollable Testimonial Cards with Snap */}
        <div className="w-full xl:w-170 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2">
          <div className="flex gap-6 md:gap-10 w-max">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center flex flex-col w-[85vw] md:w-[340px] lg:w-[270px] xl:w-[300px] flex-shrink-0"
              >
                <div className="mb-2 py-3">
                  <div className="w-full flex justify-end">
                    <div className="w-18 h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#292391] to-[#e53e8e] rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        alt="quotation"
                        src={quotation}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      />
                    </div>
                  </div>

                  <h2 className="text-gray-900 title-font font-bold text-base md:text-lg">
                    {t.name}
                  </h2>
                  <p className="text-gray-500 text-sm font-semibold md:text-base">
                    {t.role}
                  </p>
                </div>

                <p className="text-gray-400 text-sm font-semibold md:text-base leading-relaxed">
                  {t.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
