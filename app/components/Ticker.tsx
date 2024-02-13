"use client";
import { useEffect, useState } from "react";

const Ticker = () => {
  const continuousAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["Event Covreage", "Birthday Shoot", "Convocation Shoot"];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []); // Empty dependency array to run only once

    return texts[currentIndex];
  };

  return (
    <div className="w-screen bg-border-primary border-y-2 border-border-secondary py-3.5 -ml-6 flex items-center justify-center">
      <div className="animate-[slideIn] ease-in-out uppercase">
        {continuousAnimation()}
      </div>
    </div>
  );
};

export default Ticker;
