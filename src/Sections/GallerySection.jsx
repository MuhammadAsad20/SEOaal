import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const images = [
    { id: 1, src: "	https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_6_ml.jpg", category: "ideas" },
    { id: 2, src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_4_ml.jpg", category: "marketing" },
    { id: 3, src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_3_ml.jpg", category: "creative" },
    { id: 4, src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_1_ml.jpg", category: "support" },
    { id: 5, src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_2_ml.jpg", category: "seo" },
    { id: 6, src: "	https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_5_ml.jpg", category: "media" },
  ];

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-300 px-5 py-24 mx-auto">
        <div className="flex w-full mb-20 flex-wrap justify-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 w-full mb-4">
            Our Awesome Portfolio
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["all", "ideas", "marketing", "creative", "support", "seo", "media"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn px-4 py-2 rounded ${
                  filter === category
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            {filteredImages.slice(0, 2).map((img, idx) => (
              <div
                key={img.id}
                className={idx === 0 ? "h-[60vh]" : "h-[30vh]"}
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src={img.src}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {filteredImages.slice(2, 4).map((img, idx) => (
              <div
                key={img.id}
                className={idx === 0 ? "h-[30vh]" : "h-[60vh]"}
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src={img.src}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {filteredImages.slice(4, 6).map((img, idx) => (
              <div
                key={img.id}
                className={idx === 0 ? "h-[60vh]" : "h-[30vh]"}
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
