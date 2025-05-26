import React, { useState } from 'react';
import ProductCard from '../components/ProductCard'; // Ensure correct path

const allProducts = [
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/poster_2_up-1-600x600.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: true
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_7_front-1-600x600.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/hoodie_4_front-1-600x600.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_5_front-1-300x300.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/hoodie_5_front-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/hoodie_3_front-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_2_front-1-300x300.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/poster_3_up-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: true
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_4_front-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/hoodie_7_front-1-300x300.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: true
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/poster_1_up-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_1_angle-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_2_angle-1-600x600.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_3_angle-1-600x600.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_5_angle-1-600x600.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/hoodie_6_front-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/poster_5_up-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_1_front-1-300x300.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: true
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/poster_4_up-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/hoodie_2_front-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Flying Ninja",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_6_front-1-300x300.jpg",
      originalPrice: "15.00",
      salePrice: "12.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_4_angle-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: false
    },
    {
      title: "Another Poster",
      image: "https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_6_angle-1-300x300.jpg",
      originalPrice: "20.00",
      salePrice: "20.00",
      onSale: true
    }
  ];
  

function ShopCardSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortOption, setSortOption] = useState("default");

  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sort logic
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOption === "priceLowToHigh") {
      return parseFloat(a.salePrice) - parseFloat(b.salePrice);
    } else if (sortOption === "priceHighToLow") {
      return parseFloat(b.salePrice) - parseFloat(a.salePrice);
    } else if (sortOption === "onSale") {
      return b.onSale - a.onSale;
    } else {
      return 0;
    }
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const showingText = `Showing ${indexOfFirstItem + 1}–${Math.min(indexOfLastItem, totalProducts)} of ${totalProducts} results`;

  return (
    <div className="p-4">
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-sm font-medium">{showingText}</div>

        <div className="flex gap-4">
          <select
            onChange={handleItemsPerPageChange}
            value={itemsPerPage}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="12">Show: 12</option>
            <option value="16">Show: 16</option>
            <option value="20">Show: 20</option>
            <option value={totalProducts}>Show: All</option>
          </select>

          <select
            onChange={handleSortChange}
            value={sortOption}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="default">Sort by: Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="onSale">On Sale</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 border rounded font-semibold ${
              currentPage === idx + 1 ? 'bg-pink-500 text-white' : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ShopCardSection;
