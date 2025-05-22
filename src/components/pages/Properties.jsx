import React, { useState } from "react";
import PageHeading from "../PageHeading";
import Cards from "../Cards";
import { listings } from "../container";
import option from "../../assets/Options.png"

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 9;

  const totalPages = Math.ceil(listings.length / listingsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedListings = listings.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );

  return (
    <>
      <PageHeading />

      <section className="py-10 px-4 md:px-10 bg-white">

        <div className="flex justify-center items-center mb-6">
          <div className="flex gap-4 items-center text-sm text-gray-500">
            <img src={option} alt="" />
          </div>
          <div className="text-sm text-gray-700 ml-4">
            <span className="mr-2 text-gray-900">Sort by:</span>
            <select className="border rounded px-2 py-1">
              <option>Default Order</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-5 w-auto">
          <Cards listings={paginatedListings} width="350px" />
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
            disabled={currentPage === 1}
          >
            &larr;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(0, 5) // show first few pages only, for simplicity
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

          {totalPages > 5 && (
            <>
              <span className="px-2">...</span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
            disabled={currentPage === totalPages}
          >
            &rarr;
          </button>
        </div>
      </section>
    </>
  );
};

export default Properties;
