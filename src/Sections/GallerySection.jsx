import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const images = [
    {
      id: 1,
      src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_6_ml.jpg",
      categories: ["creative", "marketing"],
    },
    {
      id: 2,
      src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_4_ml.jpg",
      categories: ["marketing", "creative"],
    },
    {
      id: 3,
      src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_3_ml.jpg",
      categories: ["ideas", "marketing"],
    },
    {
      id: 4,
      src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_1_ml.jpg",
      categories: ["support", "marketing"],
    },
    {
      id: 5,
      src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_2_ml.jpg",
      categories: ["media", "marketing"],
    },
    {
      id: 6,
      src: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/09/pt_5_ml.jpg",
      categories: ["seo", "marketing"],
    },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.categories.includes(filter));

  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-6xl px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="flex w-full mb-20 flex-wrap justify-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 w-full mb-4">
            Our Awesome Portfolio
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["all", "ideas", "marketing", "creative", "support", "seo", "media"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 w-28 text-center font-medium rounded transition-all duration-300 ${
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

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {filteredImages[0] && (
              <div className="h-[55vh]">
                <img
                  src={filteredImages[0].src}
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            )}
            {filteredImages[1] && (
              <div className="h-[30vh]">
                <img
                  src={filteredImages[1].src}
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {filteredImages[2] && (
              <div className="h-[30vh]">
                <img
                  src={filteredImages[2].src}
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            )}
            {filteredImages[3] && (
              <div className="h-[55vh]">
                <img
                  src={filteredImages[3].src}
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {filteredImages[4] && (
              <div className="h-[55vh]">
                <img
                  src={filteredImages[4].src}
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            )}
            {filteredImages[5] && (
              <div className="h-[30vh]">
                <img
                  src={filteredImages[5].src}
                  alt="gallery"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
