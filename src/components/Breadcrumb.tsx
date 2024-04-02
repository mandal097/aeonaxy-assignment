import React from "react";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-primary font-medium text-lg ">Home</span>
      <span className="text-primary font-medium text-lg ">/</span>
      <span className="text-primary font-medium text-lg ">Product</span>
      <span className="text-primary font-medium text-lg ">/</span>
      <span className="text-dark-gray font-medium text-lg ">Integration</span>
    </div>
  );
};

export default Breadcrumb;
