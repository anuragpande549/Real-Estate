import React from "react";
import logo from "../../assets/Logo.png";

const Logo = () =>{

    return (
        <>
        <div className="flex items-center  gap-2">
                    <img src={logo} alt="Logo" className="h-10" />
                    <div className="">
                      <h1 className="text-xl/6 font-semibold p-0 m-0 text-[#4d61a1]">REIS</h1>
                      <p className="text-sm/5 font-semibold  text-[#4d61a1] line- p-0 m-0">Real State</p>
                    </div>
                  </div>
        </>
    )
}

export default Logo