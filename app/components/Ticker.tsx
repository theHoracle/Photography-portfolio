"use client";
import { useEffect, useState } from "react";

const Ticker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Event Covreage", "Birthday Shoot", "Convocation Shoot"];

  return (
    <div className="w-screen bg-border-primary border-y-2 border-border-secondary py-3.5 -ml-6 flex items-center justify-center">
      <div className=" uppercase flex flex-row items-center justify-between text-animation -translate-x-full">
        {/* {ContinuousAnimation()} */}
        {texts.map((item, index) => {
          return (
            <span key={index} className="min-w-max mr-8">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
