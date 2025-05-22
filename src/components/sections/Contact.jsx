import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className="bg-[#EDEFF6] pt-[86px] pb-[86px] px-4 flex flex-col items-center"
      >
        {/* Heading */}
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-4xl md:text-4xl  text-[#1E2640] font-[600] mb-4">
            Contact us
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white  xl:w-[880px] xl::h-[438px] p-8 pt-4 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-1 text-[#434343]">Enquiry Form</h3>
          <p className="text-sm text-gray-600 mb-6">
            Are you looking for details about a certain property? Ask us a question using the form below.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email id"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Comments or questions"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#3B4EB1] text-white px-10 py-3 rounded-md hover:bg-[#163074] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
