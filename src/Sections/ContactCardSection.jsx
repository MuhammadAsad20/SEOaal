import React from "react";
import ContactCard from "../components/ContactCard";

const ContactCardSection = () => {
    const cards = [
        {
            title: "Address",
            first:"7643 riverwood street",
            second:"luke wood",
            highlight: {
                type: "",
                label: ""
              },
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="deeppink" className="size-15 hover:stroke-blue-800">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            ),
        },
        {
            title: "Phone",
            first:" +(528) 456-7592",
            second:" +555-123-4567",
            highlight: {
                type: "Phone:",
                label: "Fax:",  
              },
            icon: (
                <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="white"
  strokeWidth={2}
  className="w-15 h-15 hover:stroke-blue-800"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 18v-6a9 9 0 0118 0v6M21 18a3 3 0 01-6 0v-3a3 3 0 016 0v3zM3 18a3 3 0 006 0v-3a3 3 0 00-6 0v3z"
  />
</svg>

            ),
        },
        {
            title: "Email",
            first:" support@seoaal.com",
            second:" support.seoaal",
            highlight: {
                type: "Email:",
                label: "Skype:",
              },
            icon: (
                <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="deeppink"
  strokeWidth={2}
  className="w-15 h-15 hover:stroke-blue-800"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  />
</svg>

            ),
        },
    ];

    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap justify-center gap-8">
      {cards.map((card, index) => (
        <ContactCard
          key={index}
          icon={card.icon}
          title={card.title}
          first={card.first}
          second={card.second}
          highlight={card.highlight}
          bgColor={index === 1 ? "bg-pink-500 text-white" : "bg-white"}
        />
      ))}
    </div>
  </div>
</section>

    );
};

export default ContactCardSection;
