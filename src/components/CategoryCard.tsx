import React from "react";
import { RxCaretRight } from "react-icons/rx";

type CardType = {
  data: any;
};

const CategoryCard = ({ data }: CardType) => {
  return (
    <div
      className={`${
        data?.para_ && "bg-purple-950"
      } flex flex-col gap-4  mb-8 p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      {data?.img && (
        <img src={data?.img} alt="img" className="w-12 h-12 bg-cover" />
      )}
      <span className="text-base text-white font-light capitalize">
        {data?.para_}
      </span>
      <span
        className={`${
          data?.para_ && "text-white"
        } text-lg text-black font-bold capitalize`}>
        {data?.title}
      </span>
      <p
        className={`${
          data?.para_ && "text-white"
        } text-sm font-semibold text-dark-gray`}>
        {data?.para}
      </p>
      <button className="flex text-blue font-bold mt-auto items-center">
        <span className={`${data?.para_ && "text-white"}`}>Learn more</span>
        <RxCaretRight
          size={20}
          color={`${data?.para_ ? "white" : "var(--primary)"}`}
        />
      </button>
    </div>
  );
};

export default CategoryCard;
