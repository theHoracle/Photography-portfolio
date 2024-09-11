"use client";

import { FlashlightIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Ticker = () => {
  const elements = ["Event Coverage", "Birthday Shoot", "Convocation Shoot"];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-screen">
      <div className="w-full overflow-hidden">
        <div className="bg-border-primary border-y-2 border-border-secondary py-3.5 flex items-center">
          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.33%);
              }
            }
            .animate-slide {
              animation: slide 10s linear infinite;
            }
          `}</style>
          <div className="flex animate-slide">
            {[...elements, ...elements, ...elements].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mx-8 whitespace-nowrap"
              >
                <FlashlightIcon />
                <span className="uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;