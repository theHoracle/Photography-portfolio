import { ArrowUpRight } from "lucide-react";

import Heading from "./Heading";
import { Button } from "./button";

const Form = () => {
  const inputClass =
    "bg-transparent border-b-2 border-border-primary py-2 placeholder:uppercase placeholder:text-accent-color font-medium mb-1";

  return (
    <form className="flex flex-col gap-2 w-full">
      <label htmlFor="firstName">First Name</label>
      <input
        required
        type="text"
        id="firstName"
        placeholder="First name"
        className={`${inputClass}`}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        required
        type="text"
        id="lastName"
        placeholder="Last Name"
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
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        required
        type="tel"
        id="phoneNumber"
        placeholder="Phone Number"
        className={`${inputClass}`}
      />
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        placeholder="Message"
        className={`${inputClass}`}
      ></textarea>
      <div className="flex items-center gap-1">
        <Heading size="sm">Send Message</Heading>
        <Button size="lg" className="rounded-full px-8">
          <ArrowUpRight />
        </Button>
      </div>
    </form>
  );
};
export default Form;
