"use client"

import { MouseEvent, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";


interface LeftRightButtonProps {
  onClickLeftButton: MouseEventHandler<HTMLButtonElement>
  onClickRightButton: MouseEventHandler<HTMLButtonElement>
  slideConfig: {
    isBegining: boolean;
    isEnd: boolean;
}
}
const LeftRightButton = (props: LeftRightButtonProps) => {
  const { onClickLeftButton, onClickRightButton, slideConfig } = props ;
  return (
    <div className="border-2 bg-background-color border-border-primary rounded-full mx-auto flex  max-w-32 items-center justify-between p-1.5 gap-1.5">
      <button
        onClick={onClickLeftButton}
        aria-label="left-button"
        className={cn("border border-accent/50 bg-accent rounded-full aspect-square p-2.5",{ 
          "bg-background": slideConfig?.isBegining
        })}
      >
        <ChevronLeft className="size-8 aspect-square" />
      </button>
      <button
        onClick={onClickRightButton}
        aria-label="right-button"
        className={cn("border border-accent/50 bg-accent rounded-full aspect-square p-2.5", {
          "bg-background": slideConfig?.isEnd
        })}
      >
        <ChevronRight className="size-8" />
      </button>
    </div>
  );
};

export default LeftRightButton;
