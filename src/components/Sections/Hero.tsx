import React from "react";
import Breadcrumb from "../Breadcrumb";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-sky-50 py-10 h-auto">
      <div className=" w-[var(--width)] mx-auto px-4 flex lg:flex-row flex-col  justify-between">
        <div className="lg:w-[40%] flex flex-col gap-8 mb-10">
          <Breadcrumb />
          <span className=" font-semibold text-dark-gray uppercase">
            Apps & integrations
          </span>
          <h1 className="text-5xl text-gray-800 font-bold">
            Integrate calendly, <br />
            boost productivity
          </h1>
          <p className="text-lg text-gray-600">
            Smart scheduling automation will change the way - and your <br />
            tools - work.
          </p>
          <div className="flex gap-4 items-center bg-white rounded-full p-3 shadow-xl">
            <CiSearch color="blue" size={22} />
            <input type="text" placeholder="search for an integration" className="flex-1 outline-none text-sm" />
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="wo-full h-[50vh] md:h-[70vh] lg:w-[30%] flex items-center gap-8 relative justify-between lg:mr-10">
          <div className="w-20 h-20 shadow-lg rounded-2xl flex justify-center items-center p-2 bg-white absolute top-5 left-[22%]">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/23iy41NdhiEpf1LEIEj8N6/c1f66cb1ca7a9bc48dfed5335bce594e/Zoom.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="w-20 h-20 shadow-lg rounded-2xl flex justify-center items-center p-2 bg-white absolute top-5 right-[22%]">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/g0x5VKS8AvnjqKWOKASv6/58af893490320b866de7826dac58c3fd/Teams.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
        
          <div className="w-20 h-20 shadow-lg rounded-2xl flex justify-center items-center p-2 absolute bg-white bottom-5 left-[22%]">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/b4ff427c85ce29d44a2af026691e985e/Logomark.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="w-20 h-20 shadow-lg rounded-2xl flex justify-center items-center p-2 absolute bg-white bottom-5 right-[22%]">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/3WKUhfweGCPQqkgx9wLCY5/c54406a32963407e61d777a127806cc3/stripe.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>

          <div className="w-20 h-20 shadow-lg rounded-2xl flex justify-center items-center p-2 bg-white">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/10mFB6Lw4elL2kPZqwfl7f/2ac0b1a1f9dfaf9e4a8caa3a7944065b/Salesforce.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="w-20 h-20 shadow-lg rounded-2xl flex justify-center items-center p-2 bg-white">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/7IU0UscUOSuao8Il3Hpr1c/ab75dff98ea249357720528ebf141b3b/zapier-logo_black.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
