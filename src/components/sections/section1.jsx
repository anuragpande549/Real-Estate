import React from "react";
import { section1  } from "../container";




const Section1 = () => {
    const areaData = [
      { title: "Centerville", listings: "25 listings", bg: section1[0] },
      { title: "Centerville", listings: "25 listings", bg: section1[1] },
      { title: "Centerville", listings: "25 listings", bg: section1[2] },
      { title: "Arlington", listings: "25 listings", bg: section1[3] },
      { title: "Centerville", listings: "25 listings", bg: section1[4] },
    ];
  return (
    <div id="section1" className="w-full bg-white py-12 px-4 sm:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl text-[#1E2640] font-[600] mb-5">
          Properties by Area
        </h2>
        <p className="mt-2 text-[#6C757D]  mx-auto">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      {/* Custom Grid Layout */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areaData.slice(0, 3).map((area, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden relative h-[230px] bg-cover bg-center"
              style={{ backgroundImage: `url(${area.bg})` }}
            >
              <div className="absolute inset-0 bg-[#0C1B33]/40"></div>
              <div className="absolute top-4 left-4 text-white">
                <h3 className="text-lg font-bold">{area.title}</h3>
                <p className="text-sm">{area.listings}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areaData.slice(3).map((area, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden relative h-[230px] bg-cover bg-center"
              style={{ backgroundImage: `url(${area.bg})` }}
            >
              <div className="absolute inset-0 bg-[#0C1B33]/40"></div>
              <div className="absolute top-4 left-4 text-white">
                <h3 className="text-lg font-bold">{area.title}</h3>
                <p className="text-sm">{area.listings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
