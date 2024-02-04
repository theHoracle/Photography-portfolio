import { useEffect, useState } from "react";

const Ticker = () => {
  const continuousAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts: string[] = [
      "Event Covreage",
      "Birthday Shoot",
      "Convocation Shoot",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length), 3000;
      });
      return () => clearInterval(interval);
    });
  };
  return <div></div>;
};

export default Ticker;
