import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import {
  FaApple,
  FaGooglePlay,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks: any = {
    about: [
      "about calendly",
      "contact sales",
      "newsroom",
      "careers",
      "security",
    ],
    solutions: [
      "customer success",
      "sales",
      "recruiting",
      "information technology",
      "marketing",
    ],
    popular_features: [
      "emebed calendly",
      "availability",
      "sending notifications",
      "using calendly mobile",
    ],
    support: ["help center", "video tutorials", "cookie settings"],
    add_ons: ["download for chrome", "download for FireFox"],
    developers: ["developers tools"],
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-20 p-10">
        <div className="flex flex-col gap-6 w-full md:w-[30%]">
          <p className="text-4xl font-bold">
            Easy
            <br />
            <span className="text-primary ">Ahead</span>
          </p>
          <p className="text-lg text-gray-700">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <LanguageDropdown />
          <div className="flex gap-4">
            <button className="flex items-center gap-3 bg-black p-1 px-2 rounded-md">
              <FaApple size={25} color="white" />
              <p className="text-white text-[10px] text-left leading-[12px]">
                Download on the <br />{" "}
                <span className="text-[12px] ">App Store</span>
              </p>
            </button>
            <button className="flex items-center gap-3 bg-black p-1 px-2 rounded-md">
              <FaGooglePlay size={20} color="white" />
              <p className="text-white text-[10px] text-left leading-[12px]">
                GET IN ON <br />{" "}
                <span className="text-[12px] ">Google Play</span>
              </p>
            </button>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button className="p-1 text-black hover:text-primary">
              <FaTwitter size={20} />
            </button>
            <button className="p-1 text-black hover:text-primary">
              <FaFacebook size={20} />
            </button>
            <button className="p-1 text-black hover:text-primary">
              <FaInstagram size={20} />
            </button>
            <button className="p-1 text-black hover:text-primary">
              <FaLinkedinIn size={20} />
            </button>
            <button className="p-1 text-black hover:text-primary">
              <FaYoutube size={20} />
            </button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="flex-1 flex flex-col sm:flex-row sm:flex-wrap gap-5">
          {Object.keys(footerLinks)?.map((items: any, idx: any) => (
            <div key={idx} className="flex flex-col gap-3 w-full sm:w-[30%]">
              <span className="text-lg text-center sm:text-left text-black font-semibold capitalize">
                {items.replace("_", " ")}
              </span>

              {footerLinks[items]?.map((links: any, idx: any) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm text-center sm:text-left text-dark-gray font-semibold hover:text-primary capitalize">
                  {links}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between flex-col lg:w-[var(--width)] mx-auto py-10">
        <p className="text-sm text-gray-500">Copyright Calendly 2022</p>
        <p className="text-sm text-gray-500">Privacy / Terms and Conditions</p>
      </div>
    </>
  );
};

export default Footer;
