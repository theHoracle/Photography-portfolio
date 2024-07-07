import React, { useRef, useEffect } from "react";

import Heading from "./ui/Heading";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  closePopup: () => void;
};

const Popup = ({ closePopup }: Props) => {
  const inputClass =
    "bg-transparent border-b-2 border-border-primary py-2 placeholder:uppercase placeholder:text-accent-color font-medium mb-1 focus:outline-none";

  return (
    <div className="fixed z-[90] top-0 left-0 w-screen h-screen bg-background-color/85 grid place-items-center ">
      <div className="bg-background-color  w-4/5 border-2 border-border-primary px-4 md:px-8 py-8 flex flex-col gap-4 items-center md:flex-row rounded-xl">
        <Heading size="sm" className="md:w-2/5">
          Leave a review
        </Heading>
        <form className="flex flex-col gap-2 w-full">
          <label htmlFor="fullName">Full Name</label>
          <input
            required
            type="text"
            id="fullName"
            placeholder="First name"
            className={`${inputClass}`}
          />
          <label htmlFor="email">E-Mail</label>
          <input
            required
            type="email"
            id="email"
            placeholder="Email Address"
            className={`${inputClass}`}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Message"
            className={`${inputClass}`}
          ></textarea>
          <div className="flex items-center gap-1.5">
            <Heading size="sm" className="">
              Send Review
            </Heading>
            <Button  size="lg" className="rounded-full px-8 ">
              <ArrowUpRight />
            </Button>
          </div>
        </form>
      </div>
      {/*  */}
      <div className="">
        <X
          onClick={closePopup}
          height={35}
          width={35}
          className="hover:text-red-700 text-accent-color"
        />
      </div>
    </div>
  );
};
export default Popup;
