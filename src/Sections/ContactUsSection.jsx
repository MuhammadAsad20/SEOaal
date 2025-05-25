import React from "react";

const ContactUsSection = () => {
    return (
        <section className="py-16 px-4 md:px-12">


            {/* Form + Map Section */}
            <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
                {/* Map */}
                <div className="w-full lg:w-1/2">
                    <iframe
                        title="Location Map"
                        className="w-full h-[400px] rounded-xl shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198970836156!2d-122.41941538468158!3d37.774929779759886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3e8babc3%3A0x6b0e9f6e19bc6c0!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1632997596216!5m2!1sen!2sus"
                        loading="lazy"
                        allowFullScreen=""
                    ></iframe>
                </div>

               {/* Contact Form */}
<div className="w-full lg:w-1/2 h-[400px] bg-white dark:bg-white shadow-lg rounded-xl px-10 flex flex-col justify-between">
  {/* Section Title */}
  <div className="mb-4">
    <h3 className="text-3xl font-bold mb-2">Contact Us</h3>
    <p className="text-gray-400 font-semibold ">
    How workforce development programs turn talent puddles into talent pools , Hiring isn’t easy. Employers might get hundreds
    </p>
  </div>
  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-pink-500" required />
      <input type="email" placeholder="Email Address*" className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-pink-500" required />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Subject" className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-pink-500" required />
      <input type="tel" placeholder="Phone" className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-pink-500" />
    </div>
    <textarea rows="2" placeholder="Your Message*" className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-pink-500" required></textarea>
    <button type="submit" className="bg-gradient-to-br from-blue-800 to-pink-700 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition">Send Message</button>
  </form>
</div>

            </div>
        </section>
    );
};

export default ContactUsSection;
