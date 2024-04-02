import React from "react";
import { RxHamburgerMenu, RxCross2, RxCaretDown } from "react-icons/rx";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  });

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div
      className={`w-full d-flex-center bg-white transition-all duration-500 fixed z-50  ${
        scrolled ? "py-3 shadow-navbar" : "py-6"
      }`}>
      <div className="w-full px-3 lg:w-[var(--width)] flex items-center justify-between sm:px-4 gap-36">
        <div className="h-full flex items-center justify-between  cursor-pointer">
          <img
            className="rounded-md h-12 w-auto"
            src="/calendly_logo.svg"
            alt=""
          />
        </div>
        <div
          className={`${
            show && "top-0 right-0 left-0"
          } bg-[rgba(0,0,0,0.9)] h-[100%] flex-1 fixed d-flex-center  lg:static lg:h-full lg:bg-transparent `}>
          <div
            className="lg:hidden absolute top-5 right-5"
            onClick={handleToggle}>
            <RxCross2 color="white" size={20} />
          </div>
          <div
            className={`flex-col ${
              show ? "flex animate-[fade_200ms_ease-in_1]" : "hidden"
            } items-start rounded-lg p-5 h-[80%] w-[90%] bg-white justify-between- lg:bg-transparent static lg:h-full lg:w-full lg:flex lg:flex-row lg:items-center lg:p-0 gap-8`}>
            {/* <div className="  flex items-center justify-between w-full"> */}
            <a onClick={handleToggle} href="#individuals" className="nav-links">
              Individuals
            </a>

            <a onClick={handleToggle} href="#teams" className="nav-links">
              Teams
            </a>
            <a onClick={handleToggle} href="#enterprise" className="nav-links">
              Enterprise
            </a>
            <a
              onClick={handleToggle}
              href="#product"
              className="nav-links flex  items-center gap-[1px]">
              <span>Product</span>
              <RxCaretDown color="black" size={20} />
            </a>
            <a onClick={handleToggle} href="#pricing" className="nav-links">
              Pricing
            </a>
            <a
              onClick={handleToggle}
              href="#resources"
              className="nav-links flex  items-center gap-[1px]">
              <span>Resources</span>
              <RxCaretDown color="black" size={20} />
            </a>
            <div className="lg:ml-auto flex gap-4 w-full">
              <button className="btn-primary w-full md:w-fit bg-transparent text-black font-semibold hover:border-2 hover:border-primary ">
                Log in
              </button>
              <button className="btn-primary border-2 w-full md:w-fit bg-blue hover:bg-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="flex lg:hidden cursor-pointer" onClick={handleToggle}>
          <RxHamburgerMenu color="black" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
