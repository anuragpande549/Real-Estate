import React from "react";
import { CardImage } from "./container";
const Cards = ({listings,width}) =>{

    const [ArrowsOut, Car, Bathtub] = CardImage
    

    return (
        <>

        {listings.map((item, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-sm border border-slate-200 p-4 h-[466px] place-self-center md:place-self-auto ${width?`w-340px`:`2xl:w-[400px] max-w-[400px] min-w-[340px]`}  flex flex-col`}>
            <img src={item.image} alt="Property" className="rounded-md w-full h-[200px] object-cover mb-4" />

            <p className="text-sm text-[#0C1B33] font-medium mb-2 gap-[10px] p-[10px]">{item.address}</p>
            <p className="text-[#0056D2] font-semibold text-base gap-[10px] p-[10px] mb-4">{item.price}</p>

            {/* Features */}
            <div className="flex items-center gap-[17px] px-[10px] py-[10px] text-[#6C757D] text-sm mb-4">
              <div className="flex items-center gap-1">
                <img src={Car} alt="beds" className="w-4 h-4" />
                {item.beds}
              </div>
              <div className="flex items-center gap-1">
                <img src={Bathtub} alt="baths" className="w-4 h-4" />
                {item.baths}
              </div>
              <div className="flex items-center gap-1">
                <img src={ArrowsOut} alt="area" className="w-4 h-4" />
                {item.area}
              </div>
            </div>

            {/* Agent and Icons */}
            <div className="flex items-center justify-between  ">
              <div className="flex items-center gap-2">
                <img src={item.agent.avatar} alt="Agent" className="w-6 h-6 rounded-full" />
                <span className="text-sm text-[#0C1B33]">{item.agent.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.actions.map((icon, idx) => (
                  <img key={idx} src={icon} alt="icon" className="w-4 h-4 cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        ))}

        </>
    )
}

export default Cards