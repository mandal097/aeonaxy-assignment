import React, { useState } from "react";
import { TbCategoryFilled } from "react-icons/tb";
import CategoryCard from "../CategoryCard";

const Categories = () => {
  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(false);
  const categories = [
    "all",
    "popular",
    "extensions & apps",
    "calenders",
    "sales & CRM",
    "video conferencing",
    "marketing",
    "recruiting & ATS",
    "payments",
    "analytics",
    "API & connectors",
    "email messaging",
    "embed calendly",
    "other integrations",
  ];

  const catContent = [
    {
      id: 1,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/23iy41NdhiEpf1LEIEj8N6/c1f66cb1ca7a9bc48dfed5335bce594e/Zoom.svg",
      title: "zoom",
      para: "Connect from anywhere and eliminate",
      para_: "",
    },
    {
      id: 2,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/tFi5S5uhxfOROMr1DF6Eq/71cabfedf0f8781c4d98cf403556006d/Typeform.svg",
      title: "typeform",
      para: "Gather, qualify, and schedule",
      para_: "",
    },
    {
      id: 3,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/4DaLXMiJ2kwAv3qpPblkwG/3e2dcf1bf1a4b80858cd321ad67691b8/webex-logomark-01.svg",
      title: "webex",
      para: "Connect from anywhere and eliminate adminstative work.",
      para_: "",
    },
    {
      id: 4,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/tyMQf8oDIXPzJCjtDrQuL/1a61afdbf054adc5e684e8c3625f6621/Full_logo.svg",
      title: "slack",
      para: "automate smarter workflows and incorporate Calendly right ito your organization's Slack channels.",
      para_: "",
    },
    {
      id: 5,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/10mFB6Lw4elL2kPZqwfl7f/2ac0b1a1f9dfaf9e4a8caa3a7944065b/Salesforce.svg",
      title: "Salesforce",
      para: "Calendly takes the work out of updatig Salesforce so you can sell more.",
      para_: "",
    },
    {
      id: 6,
      img: "",
      title: "Looking to build an integration with us?",
      para: "Visit our Developer Portal to exlore aour API docs and ohter integration resources.",
      para_: "BUILDING WITH US",
    },
    {
      id: 7,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/g0x5VKS8AvnjqKWOKASv6/58af893490320b866de7826dac58c3fd/Teams.svg",
      title: "Microsoft Teams",
      para: "Connect from aywhere and elimainate administrative work.",
      para_: "",
    },
    {
      id: 8,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/2APzJ2NNOwzzKC0mZam9mB/3158e0780a9db488ff243f5f08a48cef/hubspot.svg",
      title: "Hubspot",
      para: "Calendly updates HubSpot for you so syou can focus on building relationships.",
      para_: "",
    },
    {
      id: 9,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/7IU0UscUOSuao8Il3Hpr1c/ab75dff98ea249357720528ebf141b3b/zapier-logo_black.svg",
      title: "Zapier",
      para: "Connect Caendky to your other tools ad automate your workflows.",
      para_: "",
    },
    {
      id: 10,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/b4ff427c85ce29d44a2af026691e985e/Logomark.svg",
      title: "paypal",
      para: "Simplify billing and reduce no-shows with an integrated PayPal account.",
      para_: "",
    },
    {
      id: 11,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/5iPdwT125pfQPNafr27mny/e866d175ee0169c23f90a3e438b65b21/intercom.svg",
      title: "intercom",
      para: "Schedule meetings with leads and customers right from intercom Messenger.",
      para_: "",
    },
    {
      id: 12,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/3WKUhfweGCPQqkgx9wLCY5/c54406a32963407e61d777a127806cc3/stripe.svg",
      title: "stripe",
      para: "Simplify billing and reduce no-shows with an integrated Stripe account",
      para_: "",
    },
    {
      id: 13,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/3uKV0ZxZzq4YBJWqMuHohR/7eed354a026a429d08559bc5d421617d/Goto.svg",
      title: "GoTo Meeting",
      para: "Connect from anywhere and elimanate admininstrative work.",
      para_: "",
    },
    {
      id: 14,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/48vpHQswyLuVAX03A00yAQ/bb1298c9141c98a0d7760cb317b118db/googleanlaytics.svg",
      title: "Google Analytics",
      para: "Improve campaign tracjujbg ysub Cakebdkt with your Google Analytics Account",
      para_: "",
    },
    {
      id: 15,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/2Gawt22zMm75SSOiK0FcrR/5c9a1cad852c0b3e6c16f101f7701d20/Calendly_API.svg",
      title: "Calendly APIs",
      para: "Laverages Calendly's APIs for custom Calendly integrations within your product.",
      para_: "",
    },
    {
      id: 16,
      img: "https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg",
      title: "Chrome",
      para: "Use Calendly while you're on the web, without switching tabs",
      para_: "",
    },
  ];

  return (
    <div className="flex justify-between items-center py-10 h-auto my-12 relative overflow-hidden ">
      <div className=" w-[var(--width)] mx-auto px-4 flex z-10 h-auto gap-16">
        <div className="w-[18%] hidden md:block">
          <div className="md:flex items-center justify-between mb-6 hidden">
            <span className="text-xl text-black font-bold">Categories</span>
          </div>
          <div className="flex flex-col gap-3">
            {categories?.map((ele: any, idx: any) => (
              <span
                key={idx}
                onClick={() => setSelected(idx)}
                className={`${
                  selected === idx && "text-white bg-blue"
                } text-sm text-dark-gray font-bold capitalize  p-2 cursor-pointer rounded-sm hover:bg-blue hover:text-white`}>
                {ele}
              </span>
            ))}
          </div>
        </div>
        {show && (
          <div className="w-auto p-2 h-[90vh] overflow-y-scroll fixed top-16 pt-4 left-0 bg-white">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl text-black font-bold">Categories</span>
              <button className="block" onClick={() => setShow(!show)}>
                <TbCategoryFilled size={20} color="var(--black)" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {categories?.map((ele: any, idx: any) => (
                <span
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={`${
                    selected === idx && "text-white bg-blue"
                  } text-sm text-dark-gray font-bold capitalize  p-2 cursor-pointer rounded-sm hover:bg-blue hover:text-white`}>
                  {ele}
                </span>
              ))}
            </div>
          </div>
        )}
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="flex-1">
          <div className="flex items-center mb-10 gap-10">
            <div className="flex items-center justify-between gap-10 md:hidden">
              <span className="text-xl text-black font-bold">Categories</span>
              <button className="block" onClick={() => setShow(!show)}>
                <TbCategoryFilled size={20} color="var(--black)" />
              </button>
            </div>
            <p className="text-sm text-dark-gray font-bold">
              Viewing : {Math.floor(Math.random() * (20 - 10 + 1)) + 10}{" "}
              {categories[selected]}
            </p>
          </div>
          <div className="flex-1 justify-between grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {catContent?.map((ele: any, idx: any) => (
              <CategoryCard key={ele.id} data={ele} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
