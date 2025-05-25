import React from "react";

const ProductCard = ({ title, image, originalPrice, salePrice, onSale }) => {
  return (
    <div className="w-[26.4%] bg-white shadow-md overflow-hidden relative flex flex-col">
      {/* Image with cart button */}
      <div className="relative w-full overflow-hidden">
        {/* Optional Sale badge */}
        {onSale && (
          <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
            Sale!
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Add to cart button in bottom-right */}
        <button
          className="absolute bottom-2 right-2 bg-blue-900 hover:bg-pink-700 text-white p-4 rounded-xl shadow-lg transition"
          onClick={() => alert(`“${title}” has been added to your cart`)}
        >
          <i className="fas fa-shopping-cart text-white"></i>
        </button>
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col justify-between ">
        <h2 className="text-xl font-semibold text-blue-800 hover:text-pink-600 cursor-pointer line-clamp-2">
          {title}
        </h2>

        {/* Price Section */}
        <div className="text-gray-700 mt-2">
          {onSale ? (
            <>
              <span className="line-through text-sm mr-2">£{originalPrice}</span>
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
