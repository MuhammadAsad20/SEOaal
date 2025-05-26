import React from "react";

const ProductCard = ({ title, image, originalPrice, salePrice, onSale }) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] min-h-[220px] bg-white shadow-lg rounded-xl overflow-hidden relative flex flex-col transition-all duration-300 hover:shadow-2xl">
      {/* Image with Sale badge & Cart button */}
      <div className="relative w-full aspect-[4/3] min-h-[220px] overflow-hidden">
        {onSale && (
          <span className="absolute top-3 left-3 bg-indigo-800 text-white text-sm font-bold px-3 py-1 rounded-md">
            Sale!
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        <button
          className="absolute bottom-3 right-3 bg-indigo-800 hover:bg-pink-700 text-white p-4 rounded-xl shadow-xl transition"
          onClick={() => alert(`“${title}” has been added to your cart`)}
        >
          <i className="fas fa-shopping-cart text-white text-base"></i>
        </button>
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h2 className="text-lg md:text-xl font-semibold text-blue-800 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer line-clamp-2">
          {title}
        </h2>

        <div className="text-gray-700 dark:text-gray-300 mt-4 text-base md:text-lg">
          {onSale ? (
            <>
              <span className="line-through mr-2">£{originalPrice}</span>
              <span className="text-pink-600 font-bold">£{salePrice}</span>
            </>
          ) : (
            <span className="text-pink-600 font-bold">£{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
