import React from "react";
import FaqItem from "../FaqItem";

const FAQs = () => {
  const faqs = [
    {
      question: "What are calendly apps?",
      answer:
        "Calendly apps let you leverage scheduling automation wherever you are on the web via browser extensions, or while you’re on-the-go via mobile apps.",
    },
    {
      question: "What are calendly integrations?",
      answer:
        "Integrations let you use Calendly alongside other tools and services. By leveraging an integration, your meeting information and scheduling data can sync directly with other tools in your tech stack to eliminate additional work.",
    },
    {
      question: "How do install and use integration?",
      answer:
        "To install an app or connect an integration, find the tool you need in the integrations directory. Click “Add integration” and follow the prompts to install. Some integrations will be installed directly within Calendly, while others prompt you to open their tools first. You can also find apps and integrations directly in your Calendly account under “Integrations.”",
    },
    {
        question:'How can i request a new integration?',
        answer:"Don’t see the integration you’re looking for? Let us know! New ones are being added all the time."
    },
    {
        question:'Want to build a Calendly integrations? Learn about our API.',
        answer:'You can use our APIs to build integrations that connect Calendly to your tools. Visit our Developer Portal to find more information about building to our APIs. '
    }
  ];
  return (
    <div className="flex justify-between items-center bg-sky-50 py-10 h-auto my-12">
      <div className=" w-[var(--width)] mx-auto px-4 flex flex-col items-center justify-between">
        <h1 className="text-4xl text-black font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-dark-gray font-semibold mt-5 text-center">
          Not seeing what you are lookin for?
          <br />
          Go to our <a className="text-primary cursor-pointer">Help center</a>
        </p>
        <div className="space-y-4 mt-10 w-full lg:w-[50%]">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
