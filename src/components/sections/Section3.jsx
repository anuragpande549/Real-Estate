import React from "react";
import Cards from "../Cards";
import { imageSection3 } from "../container";
import { listings } from "../container";




const Section3 = () => {
  return (
    <div className="w-full bg-white py-20 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-[#1E2640] font-[600] mb-5">
          Latest Properties of Rent
        </h2>
        <p className="mt-2 text-[#6C757D] max-w-2xl mx-auto text-sm md:text-base">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center place-self-center gap-6 max-w-8xl ">
      <Cards listings={listings.slice(0,4)}/>
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="bg-[#4A60A1] text-white text-sm px-8 py-3 rounded-md hover:bg-[#163074] transition">
          Load more listing
        </button>
      </div>
    </div>
  );
};

export default Section3;
