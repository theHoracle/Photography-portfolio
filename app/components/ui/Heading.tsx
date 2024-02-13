import { cn } from "@/app/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("leading-tight uppercase", {
  variants: {
    size: {
      sm: "text-3xl",
      default: "text-5xl",
      lg: "text-6xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);
Heading.displayName = "heading";
export default Heading;
