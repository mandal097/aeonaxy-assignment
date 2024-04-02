import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-sky-500 py-10 h-auto my-12 relative overflow-hidden ">
      <div className="absolute top-0 right-0 bottom-0 w-full">
        <img
          src="https://img.freepik.com/free-vector/blue-neon-synthewave-patterned-background-vector_53876-140477.jpg?t=st=1712033222~exp=1712036822~hmac=10c52dea29f4829dc4cea5b80c92f5ebcb9d29eb68986eb7b9854bbac587e5af&w=826"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className=" w-[var(--width)] mx-auto px-4 flex flex-col items-center justify-between z-10 h-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Easy access for easy bookings
        </h1>
        <p className="text-lg mb-6 text-center text-gray-300">
          Share your Calendly link right from your browser, so you can schedule
          meetings without the back-and-forth
        </p>
        <div className="mt-auto  lg:space-x-4">
          <button className="btn-primary border-2 w-full md:w-fit bg-blue hover:bg-primary">
            Sign for free
          </button>
          <button className="btn-primary mt-3 border-2 w-full md:w-fit hover:bg-primary">
            Talk with sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
