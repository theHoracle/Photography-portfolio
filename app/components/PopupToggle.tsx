"use client";

import { useState } from "react";
import Paragraph from "./ui/Paragraph";
import Popup from "./Popup";

const PopupToggle = () => {
  const [popupState, setPopupState] = useState(false);
  const togglePopup = () => {
    setPopupState(!popupState);
  };
  return (
    <div className="cursor-pointer">
      <Paragraph
        onClick={(e) => togglePopup()}
        variants="topic"
        className="border-b border-border-secondary hover:text-white/75"
      >
        leave a review
      </Paragraph>
      {popupState && <Popup closePopup={togglePopup} />}
    </div>
  );
};

export default PopupToggle;
