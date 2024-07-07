"use client";
import Image from "next/image";
import LeftRightButton from "./LeftRightButton";
import { useState } from "react";

type Props = {
  imgArray: string[];
};
const ScrollableImage = ({ imgArray }: Props) => {
  const [image, setImage] = useState(0);

  const max = imgArray.length - 1;
  function moveLeft() {
    if (image > 0) {
      setImage(image - 1);
    } else if (image === 0) {
      setImage(max);
    }
  }

  function moveRight() {
    if (image < max) {
      setImage(image + 1);
    } else if (image === max) {
      setImage(0);
    }
  }

  return (
    <div>
      <div className=" w-full h-72 md:h-96 overflow-hidden rounded-xl">
        <Image
          width={2000}
          height={2000}
          alt="e"
          src={imgArray[image]}
          className=" object-cover inset-0 w-full h-full rounded-xl"
        />
      </div>
      <div className="-translate-y-1/2 w-1/3 bg-background-color py-1.5 px-4 rounded-full mx-auto min-w-max">
        <LeftRightButton
          onClickLeftButton={moveLeft}
          onClickRightButton={moveRight}
        />
      </div>
    </div>
  );
};

export default ScrollableImage;
