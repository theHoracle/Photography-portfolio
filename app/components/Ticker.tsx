"use client";
import { useEffect, useState } from "react";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const Ticker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Event Covreage", "Birthday Shoot", "Convocation Shoot"];

  return (
    <div className="w-dvw -translate-x-7">
      <div className="w-full overflow-hidden">
        <div className="bg-border-primary border-y-2 border-border-secondary py-3.5 -ml-6 flex items-center justify-center">
          <div className=" uppercase flex flex-row items-center justify-between text-slide-animation">
            {texts.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-w-max mr-8 flex items-center gap-4"
                >
                  <FlashOnIcon />
                  <span className="">{item}</span>
                </div>
              );
            })}
            <FlashOnIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
