import { mountain } from "../container";

const HeroSection = () => {
  return (
    <div id="hero-container" className="relative flex justify-center items-center w-full h-[619px]">
      {/* Background Image */}
      <div
        id="hero-image"
        style={{ backgroundImage: `url(${mountain})`, backgroundPosition: "center", backgroundSize: "cover" }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#063053]/60 z-10" />

      {/* Content */}
      <div id="hero-content" className="relative z-20 w-full text-white px-4">
        <h1 className="sm:text-[52px] xl:leading-[72px] text-4xl text-center font-semibold font-sans capitalize">
          Find Your Dream Home
        </h1>
        <p className="mt-2 font-Inter text-center sm:text-[20px]">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Proin sodales ultrices nulla blandit volutpat.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center mt-6 lg:mt-12 space-x-2">
          <button className="px-6 py-2 bg-[#3C5A99] text-white rounded-md font-[500] focus:outline-none">Rent</button>
          <button className="px-6 py-2 bg-white text-[#3C5A99] font-[500] rounded-md focus:outline-none">Sale</button>
        </div>

        {/* Search Box */}
        <div className="mt-6 mx-auto bg-white rounded-lg shadow-lg max-w-[1400px] md:h-[128px] md:px-[62px] md:py-[62px] p-4  flex flex-wrap md:flex-nowrap justify-between  items-center gap-4">
          <div className="flex flex-col w-full  sm:w-[30%]">
            <label className="text-[16px] font-semibold text-[#2c3A61] mb-1">Locations</label>
            <select className="border rounded p-2 sm:w-[180px] text-gray-700">
              <option className="text-[16px]"> Select your city</option>
            </select>
          </div>
          <div className="flex flex-col w-full sm:w-[30%]">
            <label className="text-[16px] font-semibold text-[#2c3A61] mb-1">Property Type</label>
            <select className="border rounded p-2 sm:w-[180px] text-gray-700">
              <option className="text-[16px]">Select property type</option>
            </select>
          </div>
          <div className="flex flex-col w-full sm:w-[30%]">
            <label className="text-[16px] font-semibold text-[#2c3A61] mb-1">Rent Range</label>
            <select className="border rounded p-2 sm:w-[180px] text-gray-700">
              <option className="text-[16px]">Select rent range</option>
            </select>
          </div>
          <button className="px-6 py-2  bg-[#3C5A99] text-white rounded-md font-[400] w-full text-[16px] sm:w-auto mt-2 sm:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
