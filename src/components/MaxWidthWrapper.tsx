import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl overflow-x-hidden px-2.5 md:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
